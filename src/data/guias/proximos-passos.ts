import { Signpost } from "lucide-react";
import type { GuiaInterativo } from "@/data/types";

const proximosPassos: GuiaInterativo = {
  slug: "proximos-passos",
  titulo: "Próximos passos",
  resumo: "Se você já identificou um possível problema, veja o que costuma ajudar antes de buscar ajuda externa.",
  icone: Signpost,
  introducao: [
    "Identificar uma possível irregularidade é só o primeiro passo. Este guia organiza o que geralmente ajuda a decidir como seguir, de forma organizada e com mais segurança.",
  ],
  perguntas: [
    {
      id: "documentos",
      pergunta: "Você já reuniu documentos como contracheques, carteira de trabalho, contrato e mensagens relevantes?",
      opcoes: [
        { label: "Sim, já reuni", valor: "sim" },
        { label: "Ainda não", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "conversa-interna",
      pergunta: "Você já tentou resolver a situação diretamente com a empresa (RH ou gestão)?",
      opcoes: [
        { label: "Sim, já tentei", valor: "sim" },
        { label: "Não, ainda não tentei", valor: "nao", indicaAtencao: true },
        { label: "Não se aplica ao meu caso", valor: "nao_aplica" },
      ],
    },
    {
      id: "prazo",
      pergunta: "Você sabe quanto tempo faz desde o fim do contrato (se já terminou) ou desde o início do problema?",
      ajuda: "Em geral, o prazo para buscar a Justiça do Trabalho é de até 2 anos após o fim do contrato, cobrindo os últimos 5 anos de vínculo.",
      opcoes: [
        { label: "Sim, e está dentro do prazo esperado", valor: "dentro_prazo" },
        { label: "Não sei dizer com certeza", valor: "nao_sei", indicaAtencao: true },
        { label: "Acho que pode já ter passado bastante tempo", valor: "pode_ter_passado", indicaAtencao: true },
      ],
    },
    {
      id: "sindicato",
      pergunta: "Você já considerou buscar o sindicato da sua categoria para orientação?",
      opcoes: [
        { label: "Sim", valor: "sim" },
        { label: "Não, ainda não pensei nisso", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "assistencia-gratuita",
      pergunta: "Você sabe que existe assistência jurídica gratuita (Defensoria Pública) e que, em alguns casos, é possível buscar a Justiça do Trabalho sem advogado?",
      opcoes: [
        { label: "Sim, já sabia", valor: "sim" },
        { label: "Não sabia", valor: "nao", indicaAtencao: true },
      ],
    },
  ],
  resultadoSemAtencao: {
    titulo: "Você já está bem preparado para buscar orientação",
    texto: [
      "Pelo que você respondeu, já reuniu boa parte do que costuma ser necessário para buscar orientação mais específica, caso ainda não tenha resolvido a situação.",
    ],
    proximosPassos: [
      "Se o problema persistir, procure diretamente o sindicato da categoria ou um dos canais em 'Onde buscar ajuda'.",
      "Mantenha os documentos organizados e atualizados.",
    ],
  },
  resultadoComAtencao: {
    titulo: "Ainda há passos importantes antes de seguir",
    texto: [
      "Algumas etapas que costumam ajudar bastante ainda não foram feitas. Isso é normal — a maioria das pessoas não sabe exatamente por onde começar.",
      "Organizar essas etapas aumenta as chances de uma resolução mais rápida e tranquila, seja internamente ou com apoio externo.",
    ],
    proximosPassos: [
      "Reúna contracheques, contrato, carteira de trabalho e qualquer mensagem ou prova relevante.",
      "Se possível, tente uma conversa direta e documentada com o RH ou a gestão antes de buscar outras vias.",
      "Verifique os prazos: em geral, até 2 anos após o fim do contrato, cobrindo os últimos 5 anos trabalhados.",
      "Busque o sindicato da categoria ou a Defensoria Pública — veja a página 'Onde buscar ajuda' para os canais oficiais.",
    ],
  },
  temasRelacionados: ["demissao"],
};

export default proximosPassos;
