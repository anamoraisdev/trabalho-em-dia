import { ExternalLink, Landmark } from "lucide-react";
import type { FonteOficial } from "@/data/types";

export default function SourceList({
  fontes,
  atualizadoEm,
}: {
  fontes: FonteOficial[];
  atualizadoEm?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Landmark className="h-4 w-4 text-primary-600" aria-hidden="true" />
        Fontes oficiais
      </div>
      <ul className="space-y-2">
        {fontes.map((fonte) => (
          <li key={fonte.url} className="text-sm">
            <a
              href={fonte.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-1.5 text-primary-700 hover:text-primary-900 hover:underline"
            >
              <span>
                {fonte.titulo} <span className="text-slate-500">— {fonte.orgao}</span>
              </span>
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-none opacity-60 group-hover:opacity-100" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      {atualizadoEm && (
        <p className="mt-3 text-xs text-slate-500">Conteúdo atualizado em {atualizadoEm}.</p>
      )}
    </div>
  );
}
