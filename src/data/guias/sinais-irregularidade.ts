import { SearchCheck } from "lucide-react";
import type { GuiaInterativo } from "@/data/types";

const sinaisIrregularidade: GuiaInterativo = {
  slug: "sinais-de-possivel-irregularidade",
  titulo: "Sinais de possível irregularidade",
  resumo: "Um checklist rápido para identificar situações que costumam merecer mais atenção no dia a dia de trabalho.",
  icone: SearchCheck,
  introducao: [
    "Este guia não dá um diagnóstico jurídico — ele apenas organiza situações comuns que, quando presentes, costumam merecer uma análise mais cuidadosa, seja com o RH, o sindicato ou um profissional.",
    "Responda com sinceridade sobre a sua rotina de trabalho atual.",
  ],
  perguntas: [
    {
      id: "sem-registro",
      pergunta: "Você trabalha sem nenhum tipo de registro formal (carteira de trabalho ou contrato)?",
      opcoes: [
        { label: "Não, tenho registro formal", valor: "nao" },
        { label: "Sim, trabalho sem registro", valor: "sim", indicaAtencao: true },
      ],
    },
    {
      id: "abaixo-piso",
      pergunta: "Seu salário é menor que o salário mínimo ou o piso da categoria, considerando sua jornada?",
      opcoes: [
        { label: "Não, está dentro do esperado", valor: "nao" },
        { label: "Sim, ou tenho dúvidas sobre isso", valor: "sim", indicaAtencao: true },
      ],
    },
    {
      id: "horas-extras-nao-pagas",
      pergunta: "Você faz horas extras com frequência e elas não são pagas nem compensadas corretamente?",
      opcoes: [
        { label: "Não, as horas extras são pagas/compensadas", valor: "nao" },
        { label: "Não faço horas extras", valor: "nao_aplica" },
        { label: "Sim, não são pagas/compensadas", valor: "sim", indicaAtencao: true },
      ],
    },
    {
      id: "ferias-atrasadas",
      pergunta: "Você já ficou mais de 12 meses sem conseguir tirar férias, sem receber o valor em dobro?",
      opcoes: [
        { label: "Não, nunca aconteceu", valor: "nao" },
        { label: "Sim, já aconteceu", valor: "sim", indicaAtencao: true },
      ],
    },
    {
      id: "assedio",
      pergunta: "Você sofre ou já sofreu humilhações repetidas, ameaças ou constrangimento no ambiente de trabalho?",
      opcoes: [
        { label: "Não", valor: "nao" },
        { label: "Sim", valor: "sim", indicaAtencao: true },
      ],
    },
    {
      id: "seguranca",
      pergunta: "Falta equipamento de proteção (EPI) ou condições básicas de segurança para a sua função?",
      opcoes: [
        { label: "Não, as condições são adequadas", valor: "nao" },
        { label: "Sim, falta algo importante", valor: "sim", indicaAtencao: true },
      ],
    },
  ],
  resultadoSemAtencao: {
    titulo: "Nenhum sinal de atenção identificado nas respostas",
    texto: [
      "Com base no que você respondeu, não identificamos nenhuma das situações mais comuns de atenção. Isso é uma boa notícia, mas vale continuar acompanhando sua situação ao longo do tempo.",
    ],
    proximosPassos: [
      "Continue guardando holerites, contratos e comunicações relevantes como boa prática.",
      "Revise este checklist periodicamente, especialmente após mudanças na empresa ou na sua função.",
    ],
  },
  resultadoComAtencao: {
    titulo: "Identificamos pontos que merecem atenção",
    texto: [
      "Uma ou mais das suas respostas indicam uma situação que, em geral, merece ser olhada com mais cuidado. Isso não é uma conclusão jurídica — cada caso tem particularidades que só uma análise mais detalhada pode esclarecer.",
      "O importante agora é reunir informações e buscar orientação adequada para entender melhor a sua situação específica.",
    ],
    proximosPassos: [
      "Reúna documentos e registros que comprovem a situação (contracheques, mensagens, testemunhas).",
      "Leia o tema relacionado na Central de Direitos para entender melhor a regra aplicável.",
      "Considere conversar com o sindicato da categoria ou buscar assistência jurídica gratuita — veja 'Onde buscar ajuda'.",
    ],
  },
  temasRelacionados: ["contratacao", "salario", "horas-extras", "ferias", "assedio-seguranca"],
};

export default sinaisIrregularidade;
