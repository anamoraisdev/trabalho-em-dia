import { clsx } from "clsx";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  info: {
    wrap: "bg-primary-50 border-primary-200 text-primary-900",
    icon: "text-primary-600",
    Icon: Info,
  },
  warning: {
    wrap: "bg-amber-50 border-amber-200 text-amber-900",
    icon: "text-amber-600",
    Icon: AlertTriangle,
  },
  success: {
    wrap: "bg-accent-50 border-accent-200 text-accent-900",
    icon: "text-accent-600",
    Icon: CheckCircle2,
  },
};

export default function Callout({
  children,
  variant = "info",
  title,
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  title?: string;
  className?: string;
}) {
  const { wrap, icon, Icon } = variants[variant];
  return (
    <div className={clsx("flex gap-3 rounded-xl border p-4 text-sm", wrap, className)}>
      <Icon className={clsx("mt-0.5 h-5 w-5 flex-none", icon)} aria-hidden="true" />
      <div className="space-y-1">
        {title && <p className="font-semibold">{title}</p>}
        <div className="leading-relaxed [&_p]:mb-1 [&_p:last-child]:mb-0">{children}</div>
      </div>
    </div>
  );
}

export function AvisoInformativo() {
  return (
    <Callout variant="warning" title="Aviso importante">
      <p>
        Este conteúdo tem caráter informativo e educacional. Não substitui orientação
        jurídica individual. Consulte sempre as fontes oficiais e, se precisar, um
        sindicato, a Defensoria Pública ou um profissional habilitado.
      </p>
    </Callout>
  );
}
