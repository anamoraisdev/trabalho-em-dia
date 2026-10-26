import { clsx } from "clsx";
import { Info } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import type { ResultadoCalculo } from "@/lib/calculos/types";

export default function ResultBreakdown({ resultado, tituloTotal = "Valor estimado" }: {
  resultado: ResultadoCalculo;
  tituloTotal?: string;
}) {
  return (
    <div className="rounded-2xl border border-primary-200 bg-primary-50/40">
      <div className="divide-y divide-primary-100">
        {resultado.passos.map((passo, i) => (
          <div key={i} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
            <span className={clsx("text-slate-700", passo.tipo === "info" && "text-slate-500 italic")}>
              {passo.label}
            </span>
            <span
              className={clsx(
                "font-semibold tabular-nums",
                passo.tipo === "subtracao" ? "text-rose-600" : "text-slate-900",
              )}
            >
              {passo.tipo === "subtracao" ? "– " : ""}
              {formatCurrency(passo.valor)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 rounded-b-2xl bg-primary-600 px-5 py-4 text-white">
        <span className="text-sm font-semibold">{tituloTotal}</span>
        <span className="text-xl font-bold tabular-nums">{formatCurrency(resultado.total)}</span>
      </div>

      {resultado.avisos.length > 0 && (
        <div className="space-y-1.5 border-t border-primary-100 px-5 py-4 text-xs text-slate-600">
          {resultado.avisos.map((aviso, i) => (
            <p key={i} className="flex gap-1.5">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none text-primary-500" aria-hidden="true" />
              <span>{aviso}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
