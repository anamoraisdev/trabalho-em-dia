import { Receipt } from "lucide-react";
import type { GuiaInterativo } from "@/data/types";

const holerite: GuiaInterativo = {
  slug: "verifique-seu-holerite",
  titulo: "Verifique seu holerite",
  resumo: "Um passo a passo para revisar se os principais itens do seu contracheque fazem sentido.",
  icone: Receipt,
  introducao: [
    "O holerite (ou contracheque) reúne as informações sobre quanto você ganhou, quanto foi descontado e por quê. Revisar esses itens com regularidade ajuda a identificar erros ou esquecimentos antes que eles se acumulem.",
    "Responda às perguntas abaixo com base no seu holerite mais recente. No final, você verá um resumo dos pontos que podem merecer uma conferência mais atenta.",
  ],
  perguntas: [
    {
      id: "salario-base",
      pergunta: "O salário-base no holerite é igual ao valor combinado no contrato ou na carteira de trabalho?",
      opcoes: [
        { label: "Sim, é o mesmo valor", valor: "sim" },
        { label: "Não, os valores são diferentes", valor: "nao", indicaAtencao: true },
        { label: "Não sei / nunca comparei", valor: "nao_sei", indicaAtencao: true },
      ],
    },
    {
      id: "horas-extras",
      pergunta: "As horas extras que você fez aparecem discriminadas (com quantidade e percentual) no holerite?",
      ajuda: "Procure por linhas como 'HE 50%' ou 'Hora extra 100%'.",
      opcoes: [
        { label: "Sim, aparecem corretamente", valor: "sim" },
        { label: "Não fiz horas extras neste período", valor: "nao_aplica" },
        { label: "Fiz horas extras, mas não aparecem ou parecem incompletas", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "desconto-inss",
      pergunta: "O desconto de INSS no holerite parece compatível com o seu salário (nem muito alto, nem muito baixo)?",
      opcoes: [
        { label: "Sim, parece compatível", valor: "sim" },
        { label: "Não, parece estranho", valor: "nao", indicaAtencao: true },
        { label: "Não sei avaliar", valor: "nao_sei" },
      ],
    },
    {
      id: "fgts",
      pergunta: "Você já conferiu se o depósito de FGTS (8% do salário) está aparecendo no aplicativo FGTS?",
      opcoes: [
        { label: "Sim, está em dia", valor: "sim" },
        { label: "Não verifiquei ainda", valor: "nao_verificou", indicaAtencao: true },
        { label: "Verifiquei e está com atraso ou divergência", valor: "nao", indicaAtencao: true },
      ],
    },
    {
      id: "descontos-desconhecidos",
      pergunta: "Existe algum desconto no holerite que você não reconhece ou não autorizou?",
      opcoes: [
        { label: "Não, todos os descontos fazem sentido", valor: "nao" },
        { label: "Sim, há algo que não reconheço", valor: "sim", indicaAtencao: true },
      ],
    },
  ],
  resultadoSemAtencao: {
    titulo: "Nenhum ponto de atenção evidente nas suas respostas",
    texto: [
      "Com base no que você respondeu, os principais itens do seu holerite parecem consistentes. Isso não significa que está tudo garantidamente correto — vale manter o hábito de revisar o holerite todos os meses.",
    ],
    proximosPassos: [
      "Guarde seus holerites (digitais ou físicos) por período prolongado, eles podem ser úteis no futuro.",
      "Sempre que houver mudança de salário, função ou jornada, confira se o holerite do mês seguinte já reflete a mudança.",
    ],
  },
  resultadoComAtencao: {
    titulo: "Encontramos pontos que vale a pena conferir com mais calma",
    texto: [
      "Algumas das suas respostas indicam divergências ou dúvidas que merecem uma conferência mais detalhada. Isso não quer dizer necessariamente que há uma irregularidade — às vezes é só um lançamento diferente ou uma dúvida que o RH pode esclarecer.",
      "O próximo passo é reunir informações (holerites de alguns meses, contrato, carteira de trabalho) e, se a dúvida persistir, buscar orientação.",
    ],
    proximosPassos: [
      "Peça esclarecimento ao RH ou ao departamento pessoal sobre os itens que ficaram em dúvida.",
      "Guarde cópias dos holerites e de qualquer comunicação sobre o assunto.",
      "Se a divergência persistir, consulte o sindicato da sua categoria ou veja as opções em 'Onde buscar ajuda'.",
    ],
  },
  temasRelacionados: ["salario", "horas-extras", "fgts", "inss"],
};

export default holerite;
