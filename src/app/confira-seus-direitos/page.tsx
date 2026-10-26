import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { AvisoInformativo } from "@/components/ui/Callout";
import { LinkCard } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { GUIAS_INTERATIVOS } from "@/data/guias";

export const metadata: Metadata = {
  title: "Confira seus direitos",
  description:
    "Guias interativos para verificar documentos, identificar divergências e entender os próximos passos.",
};

export default function ConfiraSeusDireitosPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Confira seus direitos" }]} />
      <SectionHeading
        eyebrow="Confira seus direitos"
        title="Guias interativos passo a passo"
        description="Responda a algumas perguntas simples e receba um resumo dos pontos que podem merecer mais atenção, sem compromisso e sem precisar se cadastrar."
        className="mb-10 mt-4"
      />

      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {GUIAS_INTERATIVOS.map((guia) => (
          <LinkCard key={guia.slug} href={`/confira-seus-direitos/${guia.slug}`}>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-50 text-accent-600 group-hover:bg-accent-100">
                <guia.icone className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{guia.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{guia.resumo}</p>
              </div>
              <ArrowRight className="h-5 w-5 flex-none text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-primary-600" aria-hidden="true" />
            </div>
          </LinkCard>
        ))}
      </div>

      <AvisoInformativo />
    </Container>
  );
}
