import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import TopicContent from "@/components/direitos/TopicContent";
import { TEMAS_DIREITOS, getTemaBySlug } from "@/data/direitos";

export function generateStaticParams() {
  return TEMAS_DIREITOS.map((tema) => ({ slug: tema.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) return {};
  return { title: tema.titulo, description: tema.resumo };
}

export default async function TemaDireitoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tema = getTemaBySlug(slug);
  if (!tema) notFound();

  return (
    <Container className="py-12">
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Central de Direitos", href: "/direitos" },
          { label: tema.titulo },
        ]}
      />

      <div className="mt-4 mb-10 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
            <tema.icone className="h-6 w-6" aria-hidden="true" />
          </span>
          <Badge variant="neutral">{tema.categoria}</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{tema.titulo}</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{tema.resumo}</p>
      </div>

      <div className="max-w-3xl">
        <TopicContent tema={tema} />
      </div>
    </Container>
  );
}
