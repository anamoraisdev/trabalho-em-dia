import type { LucideIcon } from "lucide-react";

export type FonteOficial = {
  titulo: string;
  orgao: string;
  url: string;
};

export type SecaoConteudo = {
  titulo: string;
  paragrafos: string[];
  lista?: string[];
  alerta?: string;
};

export type Exemplo = {
  titulo: string;
  descricao: string;
};

export type TemaDireito = {
  slug: string;
  titulo: string;
  resumo: string;
  icone: LucideIcon;
  categoria: string;
  atualizadoEm: string;
  secoes: SecaoConteudo[];
  excecoes?: string[];
  exemplos?: Exemplo[];
  fontes: FonteOficial[];
};

export type OpcaoPergunta = {
  label: string;
  valor: string;
  indicaAtencao?: boolean;
};

export type PerguntaGuia = {
  id: string;
  pergunta: string;
  ajuda?: string;
  opcoes: OpcaoPergunta[];
};

export type ResultadoGuia = {
  titulo: string;
  texto: string[];
  proximosPassos: string[];
};

export type GuiaInterativo = {
  slug: string;
  titulo: string;
  resumo: string;
  icone: LucideIcon;
  introducao: string[];
  perguntas: PerguntaGuia[];
  resultadoSemAtencao: ResultadoGuia;
  resultadoComAtencao: ResultadoGuia;
  temasRelacionados?: string[];
};

export type CanalAjuda = {
  nome: string;
  categoria:
    | "fiscalizacao"
    | "sindical"
    | "juridica"
    | "saude-seguranca"
    | "direitos-humanos";
  descricao: string;
  quandoProcurar: string;
  comoAcessar: string;
  url: string;
};
