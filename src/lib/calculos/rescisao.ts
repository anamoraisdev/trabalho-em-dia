import { round2 } from "@/lib/constants/tabelas";
import type { ResultadoCalculo } from "./types";

export type TipoRescisao = "sem_justa_causa" | "pedido_demissao" | "acordo" | "justa_causa";
export type TipoAvisoPrevio = "indenizado" | "trabalhado" | "nenhum";

export type RescisaoInput = {
  tipoRescisao: TipoRescisao;
  salarioBruto: number;
  dataAdmissao: string; // yyyy-mm-dd
  dataDemissao: string; // yyyy-mm-dd
  diasTrabalhadosNoMes: number;
  diasFeriasVencidas: number;
  avisoPrevio: TipoAvisoPrevio;
  saldoFgts: number; // opcional, 0 se não informado
};

function mesesCompletosDesde(inicio: Date, fim: Date): number {
  let meses = (fim.getFullYear() - inicio.getFullYear()) * 12 + (fim.getMonth() - inicio.getMonth());
  let dias = fim.getDate() - inicio.getDate();
  if (dias < 0) {
    meses -= 1;
    dias += 30;
  }
  if (dias >= 15) meses += 1;
  return Math.max(0, Math.min(12, meses));
}

function ultimoAniversarioAdmissao(admissao: Date, referencia: Date): Date {
  let aniversario = new Date(referencia.getFullYear(), admissao.getMonth(), admissao.getDate());
  if (aniversario > referencia) {
    aniversario = new Date(referencia.getFullYear() - 1, admissao.getMonth(), admissao.getDate());
  }
  return aniversario;
}

function anosCompletos(inicio: Date, fim: Date): number {
  let anos = fim.getFullYear() - inicio.getFullYear();
  const aniversarioNoAno = new Date(fim.getFullYear(), inicio.getMonth(), inicio.getDate());
  if (fim < aniversarioNoAno) anos -= 1;
  return Math.max(0, anos);
}

export function calcularRescisao(input: RescisaoInput): ResultadoCalculo {
  const {
    tipoRescisao,
    salarioBruto,
    dataAdmissao,
    dataDemissao,
    diasTrabalhadosNoMes,
    diasFeriasVencidas,
    avisoPrevio,
    saldoFgts,
  } = input;

  const admissao = new Date(dataAdmissao);
  const demissao = new Date(dataDemissao);
  const valorDia = salarioBruto / 30;
  const avisos: string[] = [
    "Os meses são contados de forma aproximada (30 dias por mês) e qualquer fração igual ou superior a 15 dias conta como mês completo, conforme a CLT.",
  ];

  const saldoSalario = round2(valorDia * diasTrabalhadosNoMes);

  const inicioAno = new Date(demissao.getFullYear(), 0, 1);
  const inicio13 = admissao > inicioAno ? admissao : inicioAno;
  const avos13 = mesesCompletosDesde(inicio13, demissao);
  const decimoTerceiroProporcional = round2((salarioBruto / 12) * avos13);

  const inicioPeriodoFerias = ultimoAniversarioAdmissao(admissao, demissao);
  const avosFerias = mesesCompletosDesde(inicioPeriodoFerias, demissao);
  const feriasProporcionais = round2((salarioBruto / 12) * avosFerias);
  const tercoFeriasProporcionais = round2(feriasProporcionais / 3);

  const valorFeriasVencidas = round2(valorDia * diasFeriasVencidas);
  const tercoFeriasVencidas = round2(valorFeriasVencidas / 3);

  const anos = anosCompletos(admissao, demissao);
  const diasAviso = Math.min(30 + anos * 3, 90);
  const valorAvisoIndenizado = round2(valorDia * diasAviso);

  const temDireitoVerbasCompletas = tipoRescisao === "sem_justa_causa" || tipoRescisao === "acordo";
  const fatorMulta = tipoRescisao === "sem_justa_causa" ? 0.4 : tipoRescisao === "acordo" ? 0.2 : 0;
  const multaFgts = round2(saldoFgts * fatorMulta);

  const passos: ResultadoCalculo["passos"] = [
    { label: `Saldo de salário (${diasTrabalhadosNoMes} dia(s))`, valor: saldoSalario, tipo: "soma" },
  ];

  if (tipoRescisao === "justa_causa") {
    avisos.push(
      "Na demissão por justa causa não há aviso prévio, multa de FGTS nem férias ou 13º proporcionais — apenas saldo de salário e férias vencidas, se houver.",
    );
    if (diasFeriasVencidas > 0) {
      passos.push({ label: `Férias vencidas (${diasFeriasVencidas} dia(s))`, valor: valorFeriasVencidas, tipo: "soma" });
      passos.push({ label: "1/3 sobre férias vencidas", valor: tercoFeriasVencidas, tipo: "soma" });
    }
    const totalJustaCausa = round2(saldoSalario + valorFeriasVencidas + tercoFeriasVencidas);
    return { passos, total: totalJustaCausa, avisos };
  }

  if (diasFeriasVencidas > 0) {
    passos.push({ label: `Férias vencidas (${diasFeriasVencidas} dia(s))`, valor: valorFeriasVencidas, tipo: "soma" });
    passos.push({ label: "1/3 sobre férias vencidas", valor: tercoFeriasVencidas, tipo: "soma" });
  }

  passos.push({ label: `Férias proporcionais (${avosFerias}/12 avos)`, valor: feriasProporcionais, tipo: "soma" });
  passos.push({ label: "1/3 sobre férias proporcionais", valor: tercoFeriasProporcionais, tipo: "soma" });
  passos.push({ label: `13º salário proporcional (${avos13}/12 avos)`, valor: decimoTerceiroProporcional, tipo: "soma" });

  if (avisoPrevio === "indenizado" && tipoRescisao !== "pedido_demissao") {
    passos.push({ label: `Aviso prévio indenizado (${diasAviso} dia(s))`, valor: valorAvisoIndenizado, tipo: "soma" });
  } else if (avisoPrevio === "trabalhado") {
    avisos.push("No aviso prévio trabalhado, os dias já são remunerados dentro do saldo de salário do período trabalhado — por isso não somamos um valor adicional aqui.");
  } else if (tipoRescisao === "pedido_demissao") {
    avisos.push(
      "No pedido de demissão sem cumprimento do aviso prévio, a empresa pode descontar o período correspondente do valor a receber.",
    );
  }

  if (fatorMulta > 0 && saldoFgts > 0) {
    passos.push({
      label: `Multa de ${fatorMulta * 100}% do FGTS sobre o saldo informado`,
      valor: multaFgts,
      tipo: "soma",
    });
  } else if (temDireitoVerbasCompletas) {
    avisos.push(
      "Informe o saldo do FGTS para incluir a multa na simulação — sem esse valor, a multa não entra no total.",
    );
  }

  if (tipoRescisao === "pedido_demissao") {
    avisos.push("No pedido de demissão não há multa de FGTS nem saque do fundo, salvo nas hipóteses gerais de saque (como compra de imóvel).");
  }

  const total = round2(passos.reduce((soma, passo) => soma + passo.valor, 0));

  avisos.push(
    "Este resultado não inclui descontos de INSS/IRRF sobre as verbas, que têm regras próprias de incidência, nem eventuais verbas específicas da sua categoria (convenção coletiva).",
  );

  return { passos, total, avisos };
}
