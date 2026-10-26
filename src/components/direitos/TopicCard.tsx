import { ArrowRight } from "lucide-react";
import { LinkCard } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { TemaDireito } from "@/data/types";

export default function TopicCard({ tema }: { tema: TemaDireito }) {
  return (
    <LinkCard href={`/direitos/${tema.slug}`} className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100">
            <tema.icone className="h-5 w-5" aria-hidden="true" />
          </span>
          <Badge variant="neutral">{tema.categoria}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{tema.titulo}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tema.resumo}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
          Ler conteúdo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </LinkCard>
  );
}
