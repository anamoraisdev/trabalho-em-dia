import type { CanalAjuda } from "@/data/types";

export const CANAIS_AJUDA: CanalAjuda[] = [
  {
    nome: "Central 158 — Ministério do Trabalho e Emprego",
    categoria: "fiscalizacao",
    descricao:
      "Canal para denúncias sobre irregularidades trabalhistas, incluindo trabalho sem registro, condições inseguras e situações análogas à escravidão.",
    quandoProcurar: "Quando você quer denunciar uma irregularidade para fiscalização, com ou sem identificação.",
    comoAcessar: "Telefone 158 (ligação gratuita) ou formulário on-line.",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/fiscalizacao-do-trabalho",
  },
  {
    nome: "Superintendências Regionais do Trabalho",
    categoria: "fiscalizacao",
    descricao:
      "Unidades regionais responsáveis pela fiscalização do cumprimento das leis trabalhistas nas empresas.",
    quandoProcurar: "Para denúncias formais ou para obter orientação sobre direitos trabalhistas na sua região.",
    comoAcessar: "Atendimento presencial ou on-line, conforme a unidade do seu estado.",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/institucional/unidades-descentralizadas",
  },
  {
    nome: "Sindicato da sua categoria",
    categoria: "sindical",
    descricao:
      "Representa os trabalhadores da sua categoria profissional, negociando convenções coletivas e oferecendo orientação sobre direitos específicos.",
    quandoProcurar: "Para entender o piso salarial da categoria, negociações coletivas, ou para apoio em conflitos com a empresa.",
    comoAcessar: "Busque pelo nome da sua categoria profissional + cidade/estado, ou pergunte ao RH qual é o sindicato correspondente.",
    url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/relacoes-de-trabalho/registro-sindical",
  },
  {
    nome: "Ministério Público do Trabalho (MPT)",
    categoria: "fiscalizacao",
    descricao:
      "Atua na defesa de direitos trabalhistas coletivos e em casos graves, como trabalho infantil, assédio e condições degradantes de trabalho.",
    quandoProcurar: "Para denúncias que afetam um grupo de trabalhadores ou situações graves de violação de direitos.",
    comoAcessar: "Canal de denúncias on-line (MPT Pardal e outros canais) ou unidades regionais.",
    url: "https://mpt.mp.br/pgt/area-de-imprensa/noticias/canais-de-denuncia",
  },
  {
    nome: "Defensoria Pública",
    categoria: "juridica",
    descricao:
      "Oferece assistência jurídica gratuita a quem não pode pagar um advogado, incluindo ações trabalhistas.",
    quandoProcurar: "Quando você precisa de orientação jurídica ou representação em uma ação trabalhista e não tem condições de contratar um advogado.",
    comoAcessar: "Procure a unidade da Defensoria Pública do seu estado, presencialmente ou pelos canais digitais.",
    url: "https://www.gov.br/pt-br/orgaos/defensoria-publica-da-uniao",
  },
  {
    nome: "Justiça do Trabalho (TRTs e PJe)",
    categoria: "juridica",
    descricao:
      "Responsável por julgar ações trabalhistas. Para causas de menor complexidade, é possível ajuizar ação sem advogado (jus postulandi) em alguns casos.",
    quandoProcurar: "Quando você decide formalizar uma reclamação trabalhista contra o empregador.",
    comoAcessar: "Processo Judicial Eletrônico (PJe) ou atendimento presencial no Tribunal Regional do Trabalho (TRT) da sua região.",
    url: "https://www.trt.jus.br/",
  },
  {
    nome: "OAB — Advogados trabalhistas",
    categoria: "juridica",
    descricao: "Caso prefira contratar um advogado particular especializado em Direito do Trabalho.",
    quandoProcurar: "Para orientação jurídica paga, com atendimento mais personalizado.",
    comoAcessar: "Consulte a seccional da OAB do seu estado para indicação de profissionais.",
    url: "https://www.oab.org.br/",
  },
  {
    nome: "INSS — Benefícios e perícia médica",
    categoria: "saude-seguranca",
    descricao: "Para solicitar auxílio-doença, aposentadoria por invalidez e outros benefícios relacionados à saúde.",
    quandoProcurar: "Quando você precisa de afastamento prolongado por doença ou acidente de trabalho.",
    comoAcessar: "Aplicativo ou site Meu INSS, ou telefone 135.",
    url: "https://www.gov.br/inss/pt-br",
  },
  {
    nome: "Comunicação de Acidente de Trabalho (CAT)",
    categoria: "saude-seguranca",
    descricao: "Documento que formaliza um acidente de trabalho junto ao INSS, garantindo proteções específicas.",
    quandoProcurar: "Após qualquer acidente de trabalho, mesmo que pareça pequeno no início.",
    comoAcessar: "Pode ser emitida pela empresa, pelo sindicato, pelo médico assistente ou pelo próprio trabalhador.",
    url: "https://www.gov.br/inss/pt-br/saiba-mais/vida-funcional/cat",
  },
  {
    nome: "Disque 100 — Direitos Humanos",
    categoria: "direitos-humanos",
    descricao: "Canal para denúncias relacionadas a violações de direitos humanos, incluindo discriminação e assédio no trabalho.",
    quandoProcurar: "Para denúncias de assédio, discriminação ou violência relacionada ao trabalho.",
    comoAcessar: "Telefone 100 (ligação gratuita) ou plataforma on-line.",
    url: "https://www.gov.br/mdh/pt-br/acesso-a-informacao/disque-100",
  },
  {
    nome: "Ouvidoria da Mulher / Canal específico de assédio sexual",
    categoria: "direitos-humanos",
    descricao: "Para denúncias específicas de assédio sexual e violência de gênero no ambiente de trabalho.",
    quandoProcurar: "Em casos de assédio sexual, quando a denúncia interna não é possível ou segura.",
    comoAcessar: "Disque 180 (Central de Atendimento à Mulher) ou delegacia especializada.",
    url: "https://www.gov.br/mulheres/pt-br/assuntos/ligue-180",
  },
];
