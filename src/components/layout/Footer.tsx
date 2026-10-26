import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "./nav-links";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              Trabalho em Dia
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Educação e proteção dos direitos trabalhistas no Brasil, alinhado ao{" "}
              <span className="font-medium text-accent-700">ODS 8 — Trabalho decente e crescimento econômico</span>.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-900">Navegação</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-700 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-900">Fontes oficiais</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 hover:underline">
                  Ministério do Trabalho e Emprego
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/inss/pt-br" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 hover:underline">
                  INSS
                </a>
              </li>
              <li>
                <a href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 hover:underline">
                  CLT (Planalto)
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/fgts" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700 hover:underline">
                  FGTS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-900">Aviso legal</p>
            <p className="text-sm leading-relaxed text-slate-600">
              O conteúdo deste site é informativo e educacional. Não constitui aconselhamento
              jurídico nem substitui a análise de um profissional ou sindicato para o seu caso
              específico.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          Trabalho em Dia. Conteúdo informativo, sem fins lucrativos.
        </div>
      </Container>
    </footer>
  );
}
