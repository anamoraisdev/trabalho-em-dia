import type { Metadata } from "next";
import { ShieldAlert, Users, Scale, HeartPulse, Megaphone, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { AvisoInformativo } from "@/components/ui/Callout";
import { CANAIS_AJUDA } from "@/data/ajuda/canais";
import type { CanalAjuda } from "@/data/types";

export const metadata: Metadata = {
  title: "Onde buscar ajuda",
  description: "Canais oficiais, sindicatos e serviços de assistência jurídica gratuita.",
};

const CATEGORIAS: { categoria: CanalAjuda["categoria"]; titulo: string; icone: typeof ShieldAlert }[] = [
  { categoria: "fiscalizacao", titulo: "Fiscalização e denúncia", icone: ShieldAlert },
  { categoria: "sindical", titulo: "Representação sindical", icone: Users },
  { categoria: "juridica", titulo: "Assistência jurídica", icone: Scale },
  { categoria: "saude-seguranca", titulo: "Saúde e segurança", icone: HeartPulse },
  { categoria: "direitos-humanos", titulo: "Direitos humanos", icone: Megaphone },
];

export default function AjudaPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Onde buscar ajuda" }]} />
      <SectionHeading
        eyebrow="Onde buscar ajuda"
        title="Canais oficiais para apoio e orientação"
        description="Organizamos por categoria os principais canais oficiais, sindicais e de assistência jurídica gratuita disponíveis no Brasil."
        className="mb-10 mt-4"
      />

      <div className="space-y-12">
        {CATEGORIAS.map(({ categoria, titulo, icone: Icon }) => {
          const canais = CANAIS_AJUDA.filter((c) => c.categoria === categoria);
          if (canais.length === 0) return null;
          return (
            <section key={categoria}>
              <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {titulo}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {canais.map((canal) => (
                  <div key={canal.nome} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="font-semibold text-slate-900">{canal.nome}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{canal.descricao}</p>
                    <p className="mt-3 text-xs font-medium text-slate-500">Quando procurar</p>
                    <p className="text-sm text-slate-600">{canal.quandoProcurar}</p>
                    <p className="mt-3 text-xs font-medium text-slate-500">Como acessar</p>
                    <p className="text-sm text-slate-600">{canal.comoAcessar}</p>
                    <a
                      href={canal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:underline"
                    >
                      Acessar site oficial <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12">
        <AvisoInformativo />
      </div>
    </Container>
  );
}
