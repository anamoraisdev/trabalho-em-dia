export type PassoCalculo = {
  label: string;
  valor: number;
  tipo?: "soma" | "subtracao" | "info" | "total";
  detalhe?: string;
};

export type ResultadoCalculo = {
  passos: PassoCalculo[];
  total: number;
  avisos: string[];
};
