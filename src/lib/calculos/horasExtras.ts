import { round2 } from "@/lib/constants/tabelas";
import type { ResultadoCalculo } from "./types";

export type HorasExtrasInput = {
  salarioBruto: number;
  jornadaMensal: number; // ex. 220
  horasExtras: number;
  percentualAdicional: number; // 50, 100 ou outro definido em acordo/convenção
  incluirReflexoDSR: boolean;
};

const DIAS_UTEIS_REFERENCIA = 25;
const DIAS_DESCANSO_REFERENCIA = 5;

export function calcularHorasExtras(input: HorasExtrasInput): ResultadoCalculo {
  const { salarioBruto, jornadaMensal, horasExtras, percentualAdicional, incluirReflexoDSR } = input;

  const valorHoraNormal = round2(salarioBruto / jornadaMensal);
  const valorHoraExtra = round2(valorHoraNormal * (1 + percentualAdicional / 100));
  const totalHorasExtras = round2(valorHoraExtra * horasExtras);

  const reflexoDSR = incluirReflexoDSR
    ? round2((totalHorasExtras / DIAS_UTEIS_REFERENCIA) * DIAS_DESCANSO_REFERENCIA)
    : 0;

  const total = round2(totalHorasExtras + reflexoDSR);

  const avisos = [
    "Este valor é uma estimativa bruta (sem descontos de INSS/IRRF) do mês em que as horas extras foram feitas.",
  ];
  if (incluirReflexoDSR) {
    avisos.push(
      `O reflexo no Descanso Semanal Remunerado (DSR) usa uma estimativa de ${DIAS_UTEIS_REFERENCIA} dias úteis e ${DIAS_DESCANSO_REFERENCIA} dias de descanso no mês — o valor real varia conforme o calendário exato do mês e eventuais regras da convenção coletiva.`,
    );
  }

  return {
    passos: [
      { label: "Valor da hora normal", valor: valorHoraNormal, tipo: "info" },
      {
        label: `Valor da hora extra (+${percentualAdicional}%)`,
        valor: valorHoraExtra,
        tipo: "info",
      },
      { label: `Total de ${horasExtras} hora(s) extra(s)`, valor: totalHorasExtras, tipo: "soma" },
      ...(incluirReflexoDSR
        ? [{ label: "(+) Reflexo estimado no DSR", valor: reflexoDSR, tipo: "soma" as const }]
        : []),
    ],
    total,
    avisos,
  };
}
