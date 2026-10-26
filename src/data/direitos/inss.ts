import { ShieldPlus } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const inss: TemaDireito = {
  slug: "inss",
  titulo: "INSS e previdência social",
  resumo:
    "Como funciona a contribuição previdenciária descontada do salário e quais benefícios ela garante, como auxílio-doença e aposentadoria.",
  icone: ShieldPlus,
  categoria: "Garantias e benefícios",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "A contribuição descontada do salário",
      paragrafos: [
        "Todo trabalhador com vínculo CLT contribui mensalmente para o INSS, com um percentual descontado diretamente do salário, de forma progressiva (alíquotas maiores incidem sobre faixas de renda mais altas).",
        "Essa contribuição é obrigatória e garante acesso a benefícios previdenciários, não sendo uma escolha do trabalhador ou da empresa.",
      ],
    },
    {
      titulo: "Principais benefícios garantidos",
      paragrafos: [
        "A contribuição ao INSS garante acesso a diversos benefícios, entre eles:",
      ],
      lista: [
        "Aposentadoria por idade ou por tempo de contribuição, conforme as regras vigentes",
        "Auxílio-doença (incapacidade temporária) e aposentadoria por invalidez (incapacidade permanente)",
        "Salário-maternidade",
        "Auxílio-reclusão (para dependentes de segurados presos em regime fechado, conforme critérios de renda)",
        "Pensão por morte para dependentes",
      ],
    },
    {
      titulo: "Afastamento por doença ou acidente",
      paragrafos: [
        "Nos primeiros 15 dias de afastamento por doença, o salário é pago pela própria empresa. A partir do 16º dia, caso o afastamento continue, o trabalhador pode solicitar o auxílio-doença (benefício por incapacidade temporária) diretamente ao INSS, mediante perícia médica.",
        "Em caso de acidente de trabalho, a empresa deve emitir a Comunicação de Acidente de Trabalho (CAT), o que garante proteções específicas, como a manutenção do FGTS durante o afastamento e estabilidade no retorno.",
      ],
    },
    {
      titulo: "Carência: número mínimo de contribuições",
      paragrafos: [
        "Carência é a quantidade mínima de contribuições mensais que o trabalhador precisa ter para ter direito a um benefício. Esse número varia conforme o tipo de benefício solicitado.",
      ],
      lista: [
        "Auxílio-doença e aposentadoria por invalidez: 12 contribuições mensais (dispensadas em caso de acidente de qualquer natureza ou de doenças graves listadas em lei)",
        "Salário-maternidade: 10 contribuições mensais para contribuintes individuais e facultativas (empregadas com carteira assinada não precisam de carência)",
        "Aposentadoria por idade: 180 contribuições mensais (15 anos)",
        "Pensão por morte e auxílio-reclusão: em geral, não exigem carência",
      ],
      alerta:
        "Perder a qualidade de segurado (ficar muito tempo sem contribuir) pode interromper a contagem da carência — por isso manter os recolhimentos em dia é importante mesmo fora de um vínculo CLT.",
    },
    {
      titulo: "Aposentadoria: regras gerais após a reforma de 2019",
      paragrafos: [
        "Desde a Emenda Constitucional nº 103/2019 (Reforma da Previdência), as regras de aposentadoria passaram a exigir idade mínima combinada com tempo de contribuição, substituindo o modelo antigo baseado apenas em tempo de contribuição.",
        "Na regra geral, homens precisam de 65 anos de idade e ao menos 20 anos de contribuição; mulheres precisam de 62 anos de idade e ao menos 15 anos de contribuição.",
        "Quem já contribuía antes da reforma pode se enquadrar em regras de transição (como sistema de pontos, pedágio de tempo adicional ou idade mínima progressiva), que costumam ser mais vantajosas do que a regra geral.",
      ],
      alerta:
        "As regras de transição têm critérios específicos e mudam conforme a data de ingresso no mercado de trabalho — o cálculo exato do tempo e da regra mais vantajosa deve ser conferido diretamente no Meu INSS ou com apoio especializado.",
    },
    {
      titulo: "Como consultar suas contribuições (CNIS)",
      paragrafos: [
        "O CNIS (Cadastro Nacional de Informações Sociais) reúne o histórico de vínculos empregatícios e contribuições de cada trabalhador junto ao INSS. É esse extrato que embasa o cálculo de qualquer benefício.",
        "Vale consultar o CNIS periodicamente pelo aplicativo ou site Meu INSS, conferindo se todos os vínculos e salários aparecem corretamente — períodos faltando ou com valores errados podem reduzir o valor de um benefício futuro.",
      ],
    },
  ],
  excecoes: [
    "Trabalhadores em contrato intermitente e autônomos (contribuintes individuais) contribuem de forma diferente, com alíquotas e regras próprias de carência e cálculo — por exemplo, o contribuinte individual pode optar pelo Plano Simplificado (alíquota menor), mas sem direito a aposentadoria por tempo de contribuição nessa opção.",
    "Nos primeiros 15 dias de afastamento, o pagamento é de responsabilidade da empresa (não do INSS) e esse período não gera benefício previdenciário.",
    "Pessoas com deficiência e trabalhadores expostos a atividades especiais (insalubres ou perigosas) podem ter regras de aposentadoria diferenciadas, com idade ou tempo de contribuição reduzidos.",
  ],
  exemplos: [
    {
      titulo: "Verificando o desconto no holerite",
      descricao:
        "O valor do desconto de INSS no holerite deve corresponder à aplicação das alíquotas progressivas vigentes sobre o salário — um desconto muito acima ou abaixo do esperado pode indicar erro de cálculo.",
    },
    {
      titulo: "Acidente de trabalho sem emissão de CAT",
      descricao:
        "Se o trabalhador sofre um acidente a caminho do trabalho ou durante o expediente e a empresa não emite a CAT, ele pode solicitar a emissão por sindicato, médico assistente ou até pela própria perícia do INSS.",
    },
    {
      titulo: "Vínculo faltando no CNIS",
      descricao:
        "Um trabalhador que percebe que um período trabalhado não aparece no extrato do CNIS pode solicitar a correção ao INSS, apresentando documentos como carteira de trabalho, contracheques ou contrato — do contrário, esse tempo pode não contar para a aposentadoria.",
    },
  ],
  fontes: [
    {
      titulo: "Lei nº 8.213/1991 (Planos de Benefícios da Previdência Social)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
    },
    {
      titulo: "Emenda Constitucional nº 103/2019 (Reforma da Previdência)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm",
    },
    {
      titulo: "Benefícios e serviços do INSS / Meu INSS",
      orgao: "INSS / Ministério da Previdência Social",
      url: "https://www.gov.br/inss/pt-br",
    },
  ],
};

export default inss;
