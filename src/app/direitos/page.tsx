import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TopicCard from "@/components/direitos/TopicCard";
import { TEMAS_DIREITOS } from "@/data/direitos";

export const metadata: Metadata = {
  title: "Central de Direitos",
  description:
    "Contratação, salário, jornada, horas extras, férias, 13º, FGTS, INSS, demissão, assédio e segurança no trabalho — explicados com exemplos e fontes oficiais.",
};

export default function DireitosPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Central de Direitos" }]} />
      <SectionHeading
        eyebrow="Central de Direitos"
        title="Entenda seus direitos trabalhistas"
        description="Escolha um tema para ver a explicação completa, com regras, exceções, exemplos práticos e fontes oficiais atualizadas."
        className="mb-10 mt-4"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEMAS_DIREITOS.map((tema) => (
          <TopicCard key={tema.slug} tema={tema} />
        ))}
      </div>
    </Container>
  );
}
