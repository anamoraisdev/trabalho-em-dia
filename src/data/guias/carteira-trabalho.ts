import { IdCard } from "lucide-react";
import type { GuiaInterativo } from "@/data/types";

const carteiraTrabalho: GuiaInterativo = {
  slug: "confira-sua-carteira-de-trabalho",
  titulo: "Confira sua carteira de trabalho",
  resumo: "Verifique se os dados registrados na sua Carteira de Trabalho Digital correspondem à realidade.",
  icone: IdCard,
  introducao: [
    "A Carteira de Trabalho Digital reúne as informações oficiais do seu vínculo de emprego: data de admissão, função e salário. Esses dados têm peso importante em caso de dúvidas futuras sobre o contrato.",
    "Compare o que está registrado com a sua experiência real no dia a dia de trabalho.",
  ],
  perguntas: [
    {
      id: "data-admissao",
      pergunta: "A data de admissão registrada é a mesma data em que você realmente começou a trabalhar?",
      opcoes: [
        { label: "Sim, é a mesma data", valor: "sim" },
        { label: "Não, comecei a trabalhar antes do registro", valor: "nao", indicaAtencao: true },
        { label: "Não tenho certeza", valor: "nao_sei", indicaAtencao: true },
      ],
    },
    {
      id: "funcao",
      pergunta: "A função registrada corresponde ao que você de fato realiza no trabalho?",
      opcoes: [
        { label: "Sim, corresponde", valor: "sim" },
        { label: "Não, faço tarefas de outra função", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "salario",
      pergunta: "O salário registrado é igual ao valor que você efetivamente recebe todo mês?",
      opcoes: [
        { label: "Sim, é o mesmo valor", valor: "sim" },
        { label: "Não, os valores são diferentes", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "prazo-registro",
      pergunta: "O registro foi feito em até 5 dias úteis após você começar a trabalhar?",
      opcoes: [
        { label: "Sim, dentro do prazo", valor: "sim" },
        { label: "Não, demorou mais do que isso", valor: "nao", indicaAtencao: true },
        { label: "Não sei dizer", valor: "nao_sei" },
      ],
    },
    {
      id: "acesso-digital",
      pergunta: "Você tem acesso ao aplicativo ou site da Carteira de Trabalho Digital para consultar seus próprios dados?",
      opcoes: [
        { label: "Sim, já acessei e confirmei os dados", valor: "sim" },
        { label: "Ainda não consultei", valor: "nao", indicaAtencao: true },
      ],
    },
  ],
  resultadoSemAtencao: {
    titulo: "Seus dados parecem estar de acordo com a realidade",
    texto: [
      "Pelo que você respondeu, os principais dados da sua Carteira de Trabalho Digital condizem com o que você vive no dia a dia de trabalho.",
    ],
    proximosPassos: [
      "Consulte sua Carteira de Trabalho Digital ao menos uma vez por ano, ou sempre que houver uma mudança (promoção, reajuste salarial).",
    ],
  },
  resultadoComAtencao: {
    titulo: "Há divergências que merecem atenção",
    texto: [
      "Suas respostas indicam diferenças entre o que está registrado oficialmente e a sua experiência real de trabalho. Esse tipo de divergência pode ter consequências em situações futuras, como cálculo de verbas rescisórias, FGTS ou benefícios do INSS.",
    ],
    proximosPassos: [
      "Reúna provas da sua rotina real de trabalho (mensagens, escalas, testemunhas, documentos internos).",
      "Converse com o RH para entender e, se possível, corrigir a divergência.",
      "Caso não haja solução amigável, considere buscar o sindicato da categoria ou orientação jurídica — veja 'Onde buscar ajuda'.",
    ],
  },
  temasRelacionados: ["contratacao", "salario"],
};

export default carteiraTrabalho;
