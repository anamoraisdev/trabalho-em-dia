import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trabalho em Dia — Seus direitos trabalhistas, explicados",
    template: "%s | Trabalho em Dia",
  },
  description:
    "Entenda seus direitos trabalhistas, confira valores e identifique possíveis irregularidades com informações claras, exemplos práticos e fontes oficiais. Alinhado ao ODS 8 — Trabalho decente e crescimento econômico.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
