import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DisclaimerBox from "./DisclaimerBox";

export default function CalculatorShell({
  icon: Icon,
  title,
  description,
  form,
  result,
  explicacao,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  form: ReactNode;
  result: ReactNode;
  explicacao?: ReactNode;
}) {
  return (
    <Container className="py-12">
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "CalculaTrabalho", href: "/calculadora" },
          { label: title },
        ]}
      />

      <div className="mt-4 mb-10 max-w-2xl">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{form}</div>
        <div className="space-y-6">
          {result}
          <DisclaimerBox />
        </div>
      </div>

      {explicacao && <div className="mt-12 max-w-3xl space-y-4">{explicacao}</div>}
    </Container>
  );
}
