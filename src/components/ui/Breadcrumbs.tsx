import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Breadcrumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="flex items-center gap-1.5 text-sm text-slate-500">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 flex-none" aria-hidden="true" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-700 hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
