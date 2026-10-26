import { clsx } from "clsx";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-primary-50 text-primary-700 ring-primary-200",
  accent: "bg-accent-50 text-accent-700 ring-accent-200",
  neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  warning: "bg-amber-50 text-amber-800 ring-amber-200",
};

export default function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
