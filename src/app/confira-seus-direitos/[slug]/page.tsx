import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GuiaRunner from "@/components/guias/GuiaRunner";
import { GUIAS_INTERATIVOS, getGuiaBySlug } from "@/data/guias";

export function generateStaticParams() {
  return GUIAS_INTERATIVOS.map((guia) => ({ slug: guia.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);
  if (!guia) return {};
  return { title: guia.titulo, description: guia.resumo };
}

export default async function GuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guia = getGuiaBySlug(slug);
  if (!guia) notFound();

  return (
    <Container className="py-12">
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Confira seus direitos", href: "/confira-seus-direitos" },
          { label: guia.titulo },
        ]}
      />

      <div className="mt-4 mb-10 max-w-2xl">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
          <guia.icone className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{guia.titulo}</h1>
        <div className="mt-3 space-y-2 text-lg leading-relaxed text-slate-600">
          {guia.introducao.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="max-w-2xl">
        <GuiaRunner
          perguntas={guia.perguntas}
          resultadoComAtencao={guia.resultadoComAtencao}
          resultadoSemAtencao={guia.resultadoSemAtencao}
          temasRelacionados={guia.temasRelacionados}
        />
      </div>
    </Container>
  );
}
