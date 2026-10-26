import type { TemaDireito } from "@/data/types";
import contratacao from "./contratacao";
import salario from "./salario";
import jornada from "./jornada";
import horasExtras from "./horas-extras";
import ferias from "./ferias";
import decimoTerceiro from "./decimo-terceiro";
import fgts from "./fgts";
import inss from "./inss";
import demissao from "./demissao";
import assedioSeguranca from "./assedio-seguranca";

export const TEMAS_DIREITOS: TemaDireito[] = [
  contratacao,
  salario,
  jornada,
  horasExtras,
  ferias,
  decimoTerceiro,
  fgts,
  inss,
  demissao,
  assedioSeguranca,
];

export function getTemaBySlug(slug: string): TemaDireito | undefined {
  return TEMAS_DIREITOS.find((tema) => tema.slug === slug);
}
