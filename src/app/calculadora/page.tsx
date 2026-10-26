import type { Metadata } from "next";
import { Palmtree, Gift, Timer, DoorOpen, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { AvisoInformativo } from "@/components/ui/Callout";
import { LinkCard } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "CalculaTrabalho",
  description:
    "Simuladores de férias, 13º salário, horas extras e verbas rescisórias, com cada etapa do cálculo explicada.",
};

const CALCULADORAS = [
  { href: "/calculadora/ferias", icon: Palmtree, title: "Férias", description: "Valor líquido das férias, com 1/3 constitucional e venda de dias." },
  { href: "/calculadora/decimo-terceiro", icon: Gift, title: "13º salário", description: "1ª e 2ª parcela, com os descontos de INSS e IRRF." },
  { href: "/calculadora/horas-extras", icon: Timer, title: "Horas extras", description: "Valor da hora extra e o reflexo estimado no DSR." },
  { href: "/calculadora/rescisao", icon: DoorOpen, title: "Verbas rescisórias", description: "Estimativa do valor a receber conforme o tipo de rescisão." },
];

export default function CalculadoraHubPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "CalculaTrabalho" }]} />
      <SectionHeading
        eyebrow="CalculaTrabalho"
        title="Simule seus valores com transparência"
        description="Cada calculadora mostra o passo a passo do cálculo, não apenas o resultado final — para você entender de onde vem cada valor."
        className="mb-10 mt-4"
      />

      <div className="mb-10 grid gap-5 sm:grid-cols-2">
        {CALCULADORAS.map((calc) => (
          <LinkCard key={calc.href} href={calc.href}>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100">
                <calc.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{calc.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{calc.description}</p>
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
