import { Target, Scale, Users } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const STATS = [
  { icon: Scale, label: "Baseado na CLT e em fontes oficiais do governo" },
  { icon: Target, label: "Alinhado ao ODS 8 — Trabalho decente e crescimento econômico" },
  { icon: Users, label: "Feito para todo trabalhador, sem jargão jurídico" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="accent">ODS 8 · Trabalho decente e crescimento econômico</Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Seus direitos trabalhistas, <span className="text-primary-700">explicados com clareza</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            O <strong>Trabalho em Dia</strong> ajuda você a entender seus direitos, conferir
            valores e identificar possíveis irregularidades — com informações claras, exemplos
            práticos e sempre com base em fontes oficiais.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/direitos" variant="primary">
              Explorar a Central de Direitos
            </LinkButton>
            <LinkButton href="/calculadora" variant="outline">
              Fazer uma simulação
            </LinkButton>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-start gap-2.5 text-sm text-slate-600">
                <stat.icon className="mt-0.5 h-4.5 w-4.5 flex-none text-accent-600" aria-hidden="true" />
                <span>{stat.label}</span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
