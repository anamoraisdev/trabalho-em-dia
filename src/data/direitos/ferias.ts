import { Palmtree } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const ferias: TemaDireito = {
  slug: "ferias",
  titulo: "Férias",
  resumo:
    "Como se forma o direito às férias, quando elas devem ser concedidas, o adicional de 1/3 e a possibilidade de vender parte do período.",
  icone: Palmtree,
  categoria: "Descanso",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Período aquisitivo e concessivo",
      paragrafos: [
        "A cada 12 meses trabalhados (período aquisitivo), o trabalhador adquire o direito a 30 dias de férias, desde que não tenha ultrapassado o limite de faltas injustificadas permitido (até 5 faltas no período, sem redução do direito).",
        "O empregador tem os 12 meses seguintes (período concessivo) para conceder as férias. Se não conceder dentro desse prazo, deve pagá-las em dobro.",
      ],
      lista: [
        "Até 5 faltas: direito a 30 dias de férias",
        "De 6 a 14 faltas: direito a 24 dias",
        "De 15 a 23 faltas: direito a 18 dias",
        "De 24 a 32 faltas: direito a 12 dias",
      ],
    },
    {
      titulo: "Adicional de 1/3 e abono pecuniário",
      paragrafos: [
        "Além do salário correspondente ao período de férias, o trabalhador recebe um adicional de 1/3 (um terço) sobre esse valor, garantido pela Constituição.",
        "O trabalhador pode optar por vender até 1/3 dos dias de férias (o chamado abono pecuniário), recebendo o valor correspondente em dinheiro e tirando os dias restantes de descanso. Essa opção deve ser comunicada até 15 dias antes do fim do período aquisitivo.",
      ],
    },
    {
      titulo: "Fracionamento das férias",
      paragrafos: [
        "As férias podem ser divididas em até 3 períodos, sendo que um deles não pode ser inferior a 14 dias corridos e os demais não podem ser inferiores a 5 dias corridos cada. O fracionamento depende de concordância do trabalhador.",
      ],
    },
  ],
  excecoes: [
    "Menores de 18 anos e maiores de 50 anos (na data de início das férias) não podem ter o período fracionado, salvo acordo entre as partes em condições específicas.",
    "Trabalhadores estudantes menores de 18 anos têm direito a fazer coincidir as férias com as férias escolares.",
  ],
  exemplos: [
    {
      titulo: "Férias não concedidas no prazo",
      descricao:
        "Se o período aquisitivo terminou em janeiro e a empresa não concede as férias até janeiro do ano seguinte, o trabalhador tem direito a receber o valor das férias em dobro, incluindo o terço constitucional.",
    },
    {
      titulo: "Venda de 1/3 das férias",
      descricao:
        "Em 30 dias de férias, o trabalhador pode vender até 10 dias (1/3), recebendo o valor correspondente a esses dias e tirando 20 dias de descanso efetivo.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Arts. 129 a 153 (férias)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Constituição Federal — Art. 7º, inciso XVII",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    },
  ],
};

export default ferias;
