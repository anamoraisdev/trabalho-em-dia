"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export type AccordionItemData = {
  pergunta: string;
  resposta: string;
};

export default function Accordion({ items }: { items: AccordionItemData[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}

function AccordionItem({ pergunta, resposta }: AccordionItemData) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-slate-800 hover:text-primary-700"
      >
        <span>{pergunta}</span>
        <ChevronDown
          className={clsx(
            "h-4 w-4 flex-none text-slate-400 transition-transform",
            open && "rotate-180 text-primary-600",
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm leading-relaxed text-slate-600">{resposta}</div>
      )}
    </div>
  );
}
