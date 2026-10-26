import { HardHat } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const assedioSeguranca: TemaDireito = {
  slug: "assedio-seguranca",
  titulo: "Assédio e segurança no trabalho",
  resumo:
    "Como identificar assédio moral e sexual no ambiente de trabalho, a quem denunciar e quais são os direitos relacionados à saúde e segurança.",
  icone: HardHat,
  categoria: "Proteção e dignidade",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Assédio moral",
      paragrafos: [
        "É a exposição do trabalhador a situações humilhantes, repetitivas e prolongadas durante a jornada de trabalho, que afetam sua dignidade, identidade ou integridade psíquica — como humilhações públicas, isolamento proposital, metas inatingíveis usadas para constranger, ou ameaças constantes.",
        "Não se trata de cobrança de resultados ou feedback sobre desempenho, feitos de forma respeitosa — a diferença está na forma, na frequência e na intenção de desgastar ou humilhar.",
      ],
    },
    {
      titulo: "Assédio sexual",
      paragrafos: [
        "É constranger alguém com o objetivo de obter vantagem ou favorecimento sexual, prevalecendo-se de uma posição hierárquica (chefia) ou de ascendência inerente ao exercício de emprego, cargo ou função — é crime previsto no Código Penal (art. 216-A), além de falta grave no âmbito trabalhista.",
        "Pode ocorrer entre superior e subordinado, mas também entre colegas, e inclui insinuações, propostas, contato físico não consentido e exposição a conteúdo de natureza sexual não solicitado.",
      ],
    },
    {
      titulo: "Como e onde denunciar",
      paragrafos: [
        "Casos de assédio podem ser registrados internamente (canal de ética/RH da empresa, quando existir), mas também diretamente a órgãos externos, especialmente quando a denúncia interna não é possível ou eficaz.",
      ],
      lista: [
        "Sindicato da categoria",
        "Ministério Público do Trabalho (MPT)",
        "Superintendência Regional do Trabalho (fiscalização do Ministério do Trabalho e Emprego)",
        "Delegacia de Polícia, em caso de assédio sexual (conduta também criminal)",
        "Ação judicial trabalhista, com ou sem advogado (jus postulandi em alguns casos, ou assistência da Defensoria Pública)",
      ],
    },
    {
      titulo: "Segurança e saúde no trabalho",
      paragrafos: [
        "As Normas Regulamentadoras (NRs) do Ministério do Trabalho definem obrigações do empregador sobre equipamentos de proteção individual (EPIs), treinamentos, condições do ambiente de trabalho e prevenção de acidentes.",
        "O empregador deve fornecer EPIs adequados gratuitamente, treinar os trabalhadores para seu uso correto e manter condições seguras de trabalho, sob pena de responsabilidade por acidentes decorrentes de negligência.",
      ],
    },
  ],
  excecoes: [
    "Feedback técnico sobre desempenho, quando feito de forma respeitosa e com finalidade de orientação profissional, não configura assédio moral, mesmo que o trabalhador se sinta incomodado.",
    "Em pequenas empresas sem CIPA constituída (abaixo do número mínimo de empregados exigido), ainda assim subsistem as obrigações gerais de segurança e saúde previstas nas Normas Regulamentadoras.",
  ],
  exemplos: [
    {
      titulo: "Humilhação pública por metas não atingidas",
      descricao:
        "Um gestor que repetidamente expõe um trabalhador diante dos colegas por não atingir metas, com ofensas pessoais, pode estar praticando assédio moral — a cobrança de resultado, por si só, não é o problema; a forma humilhante e reiterada é o que caracteriza a conduta.",
    },
    {
      titulo: "Acidente por falta de EPI",
      descricao:
        "Se um trabalhador se acidenta por não ter recebido o equipamento de proteção adequado (como luvas ou óculos de segurança), isso pode configurar negligência do empregador quanto às normas de segurança, além de gerar direito à emissão da CAT.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Art. 483 (rescisão indireta por falta grave do empregador) e Normas Regulamentadoras",
      orgao: "Ministério do Trabalho e Emprego",
      url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/seguranca-e-saude-no-trabalho/normatizacao/normas-regulamentadoras",
    },
    {
      titulo: "Código Penal — Art. 216-A (assédio sexual)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
    },
  ],
};

export default assedioSeguranca;
