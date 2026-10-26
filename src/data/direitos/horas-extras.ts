import { Timer } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const horasExtras: TemaDireito = {
  slug: "horas-extras",
  titulo: "Horas extras e banco de horas",
  resumo:
    "Quando o trabalho além da jornada normal deve ser pago como hora extra, os percentuais aplicáveis e como funciona o banco de horas.",
  icone: Timer,
  categoria: "Tempo de trabalho",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "O que é hora extra",
      paragrafos: [
        "É o tempo trabalhado além da jornada normal contratada (diária ou semanal). A CLT permite até 2 horas extras por dia, mediante acordo individual, acordo coletivo ou convenção coletiva.",
        "A hora extra deve ser paga com acréscimo de, no mínimo, 50% sobre o valor da hora normal em dias úteis, e 100% quando trabalhada em domingos e feriados (salvo percentual maior previsto em convenção coletiva).",
      ],
    },
    {
      titulo: "Reflexos da hora extra em outras verbas",
      paragrafos: [
        "Quando habituais, as horas extras não impactam apenas o salário do mês: elas também refletem no Descanso Semanal Remunerado (DSR), nas férias, no 13º salário e no FGTS, aumentando a base de cálculo dessas verbas.",
      ],
      lista: [
        "DSR: a hora extra habitual aumenta proporcionalmente o valor do repouso semanal remunerado.",
        "Férias e 13º: a média das horas extras do período deve ser somada ao salário base para o cálculo.",
        "FGTS: o depósito mensal de 8% incide também sobre o valor das horas extras pagas.",
      ],
    },
    {
      titulo: "Banco de horas",
      paragrafos: [
        "É um sistema de compensação em que as horas extras trabalhadas não são pagas em dinheiro, mas acumuladas para serem compensadas com dias ou horas de descanso no futuro.",
        "Para ser válido, o banco de horas precisa estar previsto em acordo individual escrito (compensação em até 6 meses) ou em acordo/convenção coletiva (compensação em prazo maior, usualmente até 1 ano). As horas não compensadas dentro do prazo acordado devem ser pagas como extras.",
      ],
    },
  ],
  excecoes: [
    "Empregados em cargo de confiança com amplos poderes de gestão e trabalhadores externos incompatíveis com controle de horário podem não ter direito a horas extras, pois não há jornada controlada a ser excedida.",
    "Em alguns regimes de compensação simples (sem banco de horas formal), é possível compensar horas extras de um dia com redução em outro dia da mesma semana, sem pagamento em dinheiro, desde que previsto em acordo.",
  ],
  exemplos: [
    {
      titulo: "Hora extra habitual não refletida nas férias",
      descricao:
        "Um trabalhador que faz horas extras regularmente ao longo do ano deve ter a média dessas horas somada ao cálculo das férias, mesmo que no mês de gozo das férias ele não tenha feito hora extra alguma.",
    },
    {
      titulo: "Banco de horas sem acordo formal",
      descricao:
        "Se a empresa 'compensa' horas extras com dias de folga sem nenhum acordo individual ou coletivo por escrito, essa compensação pode ser considerada inválida, e as horas extras tornam-se devidas em dinheiro, com o adicional correspondente.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Art. 59 e seguintes (horas extras e compensação)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Constituição Federal — Art. 7º, inciso XVI",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    },
  ],
};

export default horasExtras;
