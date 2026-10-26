import { calcularINSS, calcularIRRF, round2 } from "@/lib/constants/tabelas";
import type { ResultadoCalculo } from "./types";

export type DecimoTerceiroInput = {
  salarioBruto: number;
  mesesTrabalhados: number; // 1 a 12
  jaRecebeuAdiantamento: boolean;
  dependentes: number;
};

export function calcularDecimoTerceiro(input: DecimoTerceiroInput): ResultadoCalculo {
  const { salarioBruto, mesesTrabalhados, jaRecebeuAdiantamento, dependentes } = input;
  const avisos: string[] = [
    "O cálculo considera apenas o salário fixo informado — horas extras, comissões e adicionais habituais no ano também entram na base de cálculo real.",
  ];

  const meses = Math.min(Math.max(mesesTrabalhados, 0), 12);
  const valorProporcional = round2((salarioBruto / 12) * meses);
  const primeiraParcela = round2(valorProporcional / 2);
  const segundaParcelaBruta = round2(valorProporcional - primeiraParcela);

  const inss = calcularINSS(valorProporcional);
  const irrf = calcularIRRF(round2(valorProporcional - inss), dependentes);
  const segundaParcelaLiquida = round2(segundaParcelaBruta - inss - irrf);
  const liquidoTotal = round2(primeiraParcela + segundaParcelaLiquida);

  if (jaRecebeuAdiantamento) {
    return {
      passos: [
        { label: `13º proporcional (${meses}/12 avos)`, valor: valorProporcional, tipo: "info" },
        { label: "1ª parcela já recebida (sem descontos)", valor: primeiraParcela, tipo: "info" },
        { label: "2ª parcela — valor bruto", valor: segundaParcelaBruta, tipo: "soma" },
        { label: "(–) Desconto de INSS (sobre o 13º total)", valor: inss, tipo: "subtracao" },
        { label: "(–) Desconto de IRRF (sobre o 13º total)", valor: irrf, tipo: "subtracao" },
      ],
      total: segundaParcelaLiquida,
      avisos: [...avisos, "O valor em destaque é o que ainda falta receber na 2ª parcela."],
    };
  }

  return {
    passos: [
      { label: `13º proporcional (${meses}/12 avos)`, valor: valorProporcional, tipo: "info" },
      { label: "1ª parcela (até 30/11, sem descontos)", valor: primeiraParcela, tipo: "soma" },
      { label: "2ª parcela — valor bruto (até 20/12)", valor: segundaParcelaBruta, tipo: "soma" },
      { label: "(–) Desconto de INSS (sobre o 13º total)", valor: inss, tipo: "subtracao" },
      { label: "(–) Desconto de IRRF (sobre o 13º total)", valor: irrf, tipo: "subtracao" },
    ],
    total: liquidoTotal,
    avisos,
  };
}
