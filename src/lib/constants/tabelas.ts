/**
 * Tabelas de referência usadas nas simuladoras do CalculaTrabalho.
 *
 * Estes valores são ilustrativos e podem estar desatualizados — salário mínimo,
 * alíquotas de INSS e de IRRF mudam por lei/decreto, geralmente todo início de ano.
 * Sempre confira a tabela vigente nas fontes oficiais linkadas em cada simulador.
 */

export const REFERENCIA_TABELAS = "tabelas de referência vigentes desde fevereiro de 2024";

export const SALARIO_MINIMO_REFERENCIA = 1412.0;

export const JORNADA_MENSAL_PADRAO = 220;

export type FaixaProgressiva = {
  ate: number; // Infinity para a última faixa
  aliquota: number; // percentual, ex. 7.5
  deducao?: number; // valor fixo a deduzir (usado no IRRF)
};

export const TABELA_INSS: FaixaProgressiva[] = [
  { ate: 1412.0, aliquota: 7.5 },
  { ate: 2666.68, aliquota: 9 },
  { ate: 4000.03, aliquota: 12 },
  { ate: 7786.02, aliquota: 14 },
];

export const TETO_CONTRIBUICAO_INSS = 908.86;

export const TABELA_IRRF: FaixaProgressiva[] = [
  { ate: 2259.2, aliquota: 0, deducao: 0 },
  { ate: 2826.65, aliquota: 7.5, deducao: 169.44 },
  { ate: 3751.05, aliquota: 15, deducao: 381.44 },
  { ate: 4664.68, aliquota: 22.5, deducao: 662.77 },
  { ate: Infinity, aliquota: 27.5, deducao: 896.0 },
];

export const DEDUCAO_POR_DEPENDENTE_IRRF = 189.59;

export function calcularINSS(baseDeCalculo: number): number {
  if (baseDeCalculo <= 0) return 0;
  if (baseDeCalculo >= TABELA_INSS[TABELA_INSS.length - 1].ate) {
    return round2(TETO_CONTRIBUICAO_INSS);
  }

  let total = 0;
  let faixaAnterior = 0;
  for (const faixa of TABELA_INSS) {
    const baseNaFaixa = Math.min(baseDeCalculo, faixa.ate) - faixaAnterior;
    if (baseNaFaixa > 0) {
      total += (baseNaFaixa * faixa.aliquota) / 100;
    }
    faixaAnterior = faixa.ate;
    if (baseDeCalculo <= faixa.ate) break;
  }
  return round2(total);
}

export function calcularIRRF(baseDeCalculo: number, dependentes = 0): number {
  const base = baseDeCalculo - dependentes * DEDUCAO_POR_DEPENDENTE_IRRF;
  if (base <= TABELA_IRRF[0].ate) return 0;

  const faixa = TABELA_IRRF.find((f) => base <= f.ate) ?? TABELA_IRRF[TABELA_IRRF.length - 1];
  const imposto = (base * faixa.aliquota) / 100 - (faixa.deducao ?? 0);
  return round2(Math.max(imposto, 0));
}

export function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
