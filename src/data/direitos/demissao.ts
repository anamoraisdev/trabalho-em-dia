import { DoorOpen } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const demissao: TemaDireito = {
  slug: "demissao",
  titulo: "Demissão e verbas rescisórias",
  resumo:
    "Os diferentes tipos de rescisão de contrato, o aviso prévio e quais verbas são devidas em cada caso.",
  icone: DoorOpen,
  categoria: "Fim do vínculo",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Tipos de rescisão",
      paragrafos: [
        "A forma como o contrato termina define quais verbas o trabalhador tem direito a receber.",
      ],
      lista: [
        "Demissão sem justa causa: iniciativa do empregador, sem motivo grave do trabalhador. Dá direito ao conjunto mais completo de verbas.",
        "Pedido de demissão: iniciativa do trabalhador, sem direito a aviso prévio indenizado (se não cumprido) nem à multa de 40% do FGTS, e sem saque do fundo (salvo hipóteses gerais).",
        "Demissão por justa causa: motivada por falta grave do trabalhador (art. 482 da CLT). Reduz bastante as verbas devidas.",
        "Acordo entre as partes (art. 484-A): modalidade intermediária, com verbas e multa de FGTS reduzidas pela metade em relação à demissão sem justa causa.",
        "Rescisão indireta: quando o empregador comete falta grave contra o trabalhador (como atraso contumaz de salário), permitindo que o trabalhador 'se demita' com os mesmos direitos de uma demissão sem justa causa.",
      ],
    },
    {
      titulo: "Aviso prévio",
      paragrafos: [
        "É o período de antecedência que uma parte deve dar à outra antes de terminar o contrato sem justa causa. O prazo mínimo é de 30 dias, acrescido de 3 dias para cada ano completo de serviço na mesma empresa, até o limite de 90 dias.",
        "O aviso pode ser trabalhado (com redução de 2 horas diárias ou 7 dias corridos ao final, para busca de novo emprego) ou indenizado (pago sem a necessidade de trabalhar o período).",
      ],
    },
    {
      titulo: "Verbas comuns na rescisão",
      paragrafos: [
        "Dependendo do tipo de rescisão, podem ser devidas:",
      ],
      lista: [
        "Saldo de salário (dias trabalhados no mês da saída)",
        "Aviso prévio (trabalhado ou indenizado)",
        "Férias vencidas (já adquiridas e não usufruídas) + 1/3",
        "Férias proporcionais + 1/3",
        "13º salário proporcional",
        "Saque do FGTS e, quando aplicável, multa de 40% (ou 20% no acordo do art. 484-A)",
      ],
    },
  ],
  excecoes: [
    "Na demissão por justa causa, não há aviso prévio, multa de FGTS, nem férias proporcionais — apenas saldo de salário e férias vencidas (se houver), além do saque do FGTS restrito às hipóteses gerais.",
    "Empregados com estabilidade (gestantes, membros de CIPA, acidentados em determinadas situações) têm proteção contra demissão sem justa causa durante o período de estabilidade, salvo justa causa comprovada.",
  ],
  exemplos: [
    {
      titulo: "Demissão sem justa causa após 2 anos de empresa",
      descricao:
        "Um trabalhador com 2 anos completos tem direito a 30 dias de aviso prévio mais 6 dias adicionais (3 por ano completo), totalizando 36 dias de aviso prévio.",
    },
    {
      titulo: "Conferindo o Termo de Rescisão",
      descricao:
        "Vale comparar cada verba do Termo de Rescisão do Contrato de Trabalho (TRCT) com a data de admissão, salário e tipo de rescisão informados, para identificar valores que não foram calculados corretamente.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Arts. 477 a 486 (rescisão contratual) e 487 a 491 (aviso prévio)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Lei nº 12.506/2011 (aviso prévio proporcional)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm",
    },
  ],
};

export default demissao;
