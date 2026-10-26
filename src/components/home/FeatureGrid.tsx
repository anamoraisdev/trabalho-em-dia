import { BookOpenCheck, Calculator, ClipboardCheck, LifeBuoy, ArrowRight } from "lucide-react";
import { LinkCard } from "@/components/ui/Card";

const FEATURES = [
  {
    href: "/direitos",
    icon: BookOpenCheck,
    title: "Central de Direitos",
    description:
      "Contratação, salário, jornada, horas extras, férias, 13º, FGTS, INSS, demissão, assédio e segurança do trabalho — explicados em linguagem clara.",
  },
  {
    href: "/calculadora",
    icon: Calculator,
    title: "CalculaTrabalho",
    description:
      "Simuladores de férias, 13º salário, horas extras e verbas rescisórias, com cada etapa do cálculo explicada passo a passo.",
  },
  {
    href: "/confira-seus-direitos",
    icon: ClipboardCheck,
    title: "Confira seus direitos",
    description:
      "Guias interativos para revisar documentos, identificar divergências e entender quais seriam os próximos passos.",
  },
  {
    href: "/ajuda",
    icon: LifeBuoy,
    title: "Onde buscar ajuda",
    description:
      "Canais oficiais, sindicatos e serviços de assistência jurídica gratuita para quando você precisar de apoio.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {FEATURES.map((feature) => (
        <LinkCard key={feature.href} href={feature.href} className="h-full">
          <div className="flex h-full flex-col">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-100">
              <feature.icon className="h-5.5 w-5.5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
              Explorar <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </LinkCard>
      ))}
    </div>
  );
}
