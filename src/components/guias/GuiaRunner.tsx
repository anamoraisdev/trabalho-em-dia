"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, RotateCcw, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import Callout from "@/components/ui/Callout";
import { LinkButton } from "@/components/ui/Button";
import type { GuiaInterativo, OpcaoPergunta } from "@/data/types";

type GuiaRunnerProps = Pick<
  GuiaInterativo,
  "perguntas" | "resultadoComAtencao" | "resultadoSemAtencao" | "temasRelacionados"
>;

export default function GuiaRunner(guia: GuiaRunnerProps) {
  const [respostas, setRespostas] = useState<Record<string, OpcaoPergunta>>({});
  const [indiceAtual, setIndiceAtual] = useState(0);

  const totalPerguntas = guia.perguntas.length;
  const finalizado = indiceAtual >= totalPerguntas;
  const perguntaAtual = guia.perguntas[indiceAtual];

  const temAtencao = useMemo(
    () => Object.values(respostas).some((resposta) => resposta.indicaAtencao),
    [respostas],
  );

  function responder(opcao: OpcaoPergunta) {
    setRespostas((atual) => ({ ...atual, [perguntaAtual.id]: opcao }));
    setIndiceAtual((i) => i + 1);
  }

  function reiniciar() {
    setRespostas({});
    setIndiceAtual(0);
  }

  if (finalizado) {
    const resultado = temAtencao ? guia.resultadoComAtencao : guia.resultadoSemAtencao;
    return (
      <div className="space-y-6">
        <Callout variant={temAtencao ? "warning" : "success"} title={resultado.titulo}>
          {resultado.texto.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Callout>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
            {temAtencao ? (
              <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="h-5 w-5 text-accent-600" aria-hidden="true" />
            )}
            Próximos passos sugeridos
          </h3>
          <ul className="space-y-2">
            {resultado.proximosPassos.map((passo, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary-500" />
                <span>{passo}</span>
              </li>
            ))}
          </ul>
        </div>

        {guia.temasRelacionados && guia.temasRelacionados.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="mb-3 text-sm font-semibold text-slate-900">Leia mais na Central de Direitos</p>
            <div className="flex flex-wrap gap-2">
              {guia.temasRelacionados.map((slug) => (
                <Link
                  key={slug}
                  href={`/direitos/${slug}`}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50"
                >
                  {slug.replace(/-/g, " ")} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reiniciar}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-primary-300 hover:text-primary-700"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Refazer o guia
          </button>
          <LinkButton href="/ajuda" variant="outline">
            Ver onde buscar ajuda
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            Pergunta {indiceAtual + 1} de {totalPerguntas}
          </span>
          <span>{Math.round((indiceAtual / totalPerguntas) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-primary-600 transition-all"
            style={{ width: `${(indiceAtual / totalPerguntas) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">{perguntaAtual.pergunta}</h3>
        {perguntaAtual.ajuda && <p className="mt-2 text-sm text-slate-500">{perguntaAtual.ajuda}</p>}

        <div className="mt-5 space-y-2.5">
          {perguntaAtual.opcoes.map((opcao) => (
            <button
              key={opcao.valor}
              type="button"
              onClick={() => responder(opcao)}
              className={clsx(
                "block w-full rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition",
                "hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
              )}
            >
              {opcao.label}
            </button>
          ))}
        </div>
      </div>

      {indiceAtual > 0 && (
        <button
          type="button"
          onClick={() => setIndiceAtual((i) => Math.max(0, i - 1))}
          className="text-sm font-medium text-slate-500 hover:text-primary-700"
        >
          ← Voltar
        </button>
      )}
    </div>
  );
}
