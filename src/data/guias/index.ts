import type { GuiaInterativo } from "@/data/types";
import holerite from "./holerite";
import carteiraTrabalho from "./carteira-trabalho";
import sinaisIrregularidade from "./sinais-irregularidade";
import proximosPassos from "./proximos-passos";

export const GUIAS_INTERATIVOS: GuiaInterativo[] = [
  holerite,
  carteiraTrabalho,
  sinaisIrregularidade,
  proximosPassos,
];

export function getGuiaBySlug(slug: string): GuiaInterativo | undefined {
  return GUIAS_INTERATIVOS.find((guia) => guia.slug === slug);
}
