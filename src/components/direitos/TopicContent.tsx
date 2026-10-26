import { AlertTriangle, Lightbulb } from "lucide-react";
import Callout, { AvisoInformativo } from "@/components/ui/Callout";
import SourceList from "@/components/ui/SourceList";
import type { TemaDireito } from "@/data/types";

export default function TopicContent({ tema }: { tema: TemaDireito }) {
  return (
    <div className="space-y-10">
      <AvisoInformativo />

      {tema.secoes.map((secao) => (
        <section key={secao.titulo}>
          <h2 className="text-xl font-bold text-slate-900">{secao.titulo}</h2>
          <div className="mt-3 space-y-3 text-slate-600 leading-relaxed">
            {secao.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {secao.lista && (
            <ul className="mt-4 space-y-2">
              {secao.lista.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {secao.alerta && (
            <Callout variant="warning" className="mt-4">
              <p>{secao.alerta}</p>
            </Callout>
          )}
        </section>
      ))}

      {tema.excecoes && tema.excecoes.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
            Exceções e casos especiais
          </h2>
          <ul className="mt-4 space-y-3">
            {tema.excecoes.map((excecao, i) => (
              <li key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                {excecao}
              </li>
            ))}
          </ul>
        </section>
      )}

      {tema.exemplos && tema.exemplos.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Lightbulb className="h-5 w-5 text-primary-600" aria-hidden="true" />
            Exemplos práticos
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {tema.exemplos.map((exemplo) => (
              <div key={exemplo.titulo} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{exemplo.titulo}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{exemplo.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <SourceList fontes={tema.fontes} atualizadoEm={tema.atualizadoEm} />
    </div>
  );
}
