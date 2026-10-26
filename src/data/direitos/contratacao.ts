import { FileSignature } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const contratacao: TemaDireito = {
  slug: "contratacao",
  titulo: "Contratação e carteira assinada",
  resumo:
    "Como funciona o início de um vínculo de emprego, os tipos de contrato previstos na CLT e o que a empresa é obrigada a registrar.",
  icone: FileSignature,
  categoria: "Início do vínculo",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "O que caracteriza um vínculo de emprego",
      paragrafos: [
        "Para a CLT, existe vínculo de emprego quando uma pessoa presta serviço com pessoalidade (não pode ser substituída por qualquer outra pessoa), de forma não eventual (habitual), recebendo salário e estando subordinada às ordens do empregador.",
        "Quando esses quatro elementos aparecem juntos, a relação é de emprego — independentemente do nome dado ao contrato (como 'prestador de serviços' ou 'parceiro') ou da existência de registro formal.",
      ],
    },
    {
      titulo: "Registro na carteira de trabalho (CTPS)",
      paragrafos: [
        "O registro deve ser feito pelo empregador em até 5 dias úteis a partir da admissão, na versão digital da CTPS (Carteira de Trabalho Digital), com dados como função, salário, data de admissão e condições especiais de trabalho.",
        "O registro não é um favor: é uma obrigação do empregador. A falta de registro não retira os direitos do trabalhador, mas dificulta a prova em caso de disputa — por isso é importante guardar outras provas do vínculo (mensagens, recibos, testemunhas, crachá, uniformes).",
      ],
      lista: [
        "Função e data de admissão",
        "Remuneração e forma de pagamento",
        "Jornada de trabalho contratada",
        "Eventuais condições especiais (periculosidade, insalubridade)",
      ],
    },
    {
      titulo: "Principais tipos de contrato",
      paragrafos: [
        "A CLT prevê diferentes modalidades, cada uma com regras próprias sobre prazo, rescisão e direitos.",
      ],
      lista: [
        "Contrato por prazo indeterminado: a regra geral, sem data para terminar.",
        "Contrato de experiência: prazo máximo de 90 dias, podendo ser dividido em até duas prorrogações.",
        "Contrato por prazo determinado: usado em situações específicas (serviços transitórios, contrato de safra), com data de término definida.",
        "Contrato intermitente: o trabalho é convocado para períodos específicos, com pagamento proporcional às horas efetivamente trabalhadas.",
        "Trabalho em regime de tempo parcial: jornada reduzida, com direitos proporcionais.",
      ],
    },
  ],
  excecoes: [
    "Estagiários não têm vínculo de emprego regido pela CLT — a relação segue a Lei do Estágio (Lei 11.788/2008), que prevê bolsa-auxílio, mas não os mesmos direitos trabalhistas.",
    "Trabalhadores domésticos possuem lei própria (LC 150/2015), com algumas regras específicas, embora próximas da CLT.",
    "Autônomos e pessoas jurídicas (contratos de prestação de serviço) não têm vínculo, salvo se, na prática, estiverem presentes os elementos de pessoalidade, habitualidade, subordinação e salário — o que pode caracterizar vínculo mesmo com contrato formal de PJ.",
  ],
  exemplos: [
    {
      titulo: "Contrato de experiência que se estende além de 90 dias",
      descricao:
        "Se o trabalhador continuar prestando serviço após o prazo máximo de experiência sem um novo contrato, o vínculo passa a ser considerado por prazo indeterminado automaticamente.",
    },
    {
      titulo: "'PJ' que trabalha como empregado",
      descricao:
        "Uma pessoa contratada como pessoa jurídica, mas que cumpre horário fixo, recebe ordens diretas e não pode se fazer substituir, pode ter o vínculo de emprego reconhecido, mesmo com nota fiscal emitida mensalmente.",
    },
  ],
  fontes: [
    {
      titulo: "Consolidação das Leis do Trabalho (CLT) — Arts. 442 a 456",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Carteira de Trabalho Digital",
      orgao: "Ministério do Trabalho e Emprego",
      url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/carteira-de-trabalho",
    },
  ],
};

export default contratacao;
