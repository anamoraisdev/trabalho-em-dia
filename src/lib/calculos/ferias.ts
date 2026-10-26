import { calcularINSS, calcularIRRF, round2 } from "@/lib/constants/tabelas";
import type { ResultadoCalculo } from "./types";

export type FeriasInput = {
  salarioBruto: number;
  diasDireito: number; // dias de férias a que o trabalhador tem direito (normalmente 30)
  diasGozo: number; // dias que serão efetivamente tirados de descanso
  venderUmTerco: boolean;
  dependentes: number;
};

export function calcularFerias(input: FeriasInput): ResultadoCalculo {
  const { salarioBruto, diasDireito, diasGozo, venderUmTerco, dependentes } = input;
  const avisos: string[] = [];

  const valorDia = salarioBruto / 30;
  const diasVendidos = venderUmTerco ? Math.floor(diasDireito / 3) : 0;

  const remuneracaoGozo = round2(valorDia * diasGozo);
  const tercoGozo = round2(remuneracaoGozo / 3);
  const abonoPecuniario = venderUmTerco ? round2(valorDia * diasVendidos) : 0;
  const tercoAbono = venderUmTerco ? round2(abonoPecuniario / 3) : 0;

  const baseComDescontos = round2(remuneracaoGozo + tercoGozo);
  const inss = calcularINSS(baseComDescontos);
  const irrf = calcularIRRF(round2(baseComDescontos - inss), dependentes);

  const brutoTotal = round2(remuneracaoGozo + tercoGozo + abonoPecuniario + tercoAbono);
  const liquido = round2(brutoTotal - inss - irrf);

  if (diasGozo + diasVendidos > diasDireito) {
    avisos.push(
      "A soma dos dias de descanso com os dias vendidos é maior do que os dias de direito informados — revise os valores.",
    );
  }
  avisos.push(
    "O abono pecuniário (venda de 1/3) e o respectivo terço constitucional são isentos de INSS e IRRF.",
  );

  return {
    passos: [
      { label: `Remuneração de ${diasGozo} dia(s) de férias`, valor: remuneracaoGozo, tipo: "soma" },
      { label: "Adicional de 1/3 constitucional sobre os dias de descanso", valor: tercoGozo, tipo: "soma" },
      ...(venderUmTerco
        ? [
            { label: `Abono pecuniário (venda de ${diasVendidos} dia(s))`, valor: abonoPecuniario, tipo: "soma" as const },
            { label: "1/3 sobre o abono pecuniário", valor: tercoAbono, tipo: "soma" as const },
          ]
        : []),
      { label: "Total bruto de férias", valor: brutoTotal, tipo: "info" },
      { label: "(–) Desconto de INSS", valor: inss, tipo: "subtracao" },
      { label: "(–) Desconto de IRRF", valor: irrf, tipo: "subtracao" },
    ],
    total: liquido,
    avisos,
  };
}
