"use client";

import { useMemo, useState } from "react";
import { Timer } from "lucide-react";
import CalculatorShell from "@/components/calculadoras/CalculatorShell";
import ResultBreakdown from "@/components/calculadoras/ResultBreakdown";
import { CurrencyField, NumberField, SelectField, ToggleField } from "@/components/calculadoras/fields";
import { calcularHorasExtras } from "@/lib/calculos/horasExtras";
import { JORNADA_MENSAL_PADRAO } from "@/lib/constants/tabelas";

const OPCOES_PERCENTUAL = [
  { value: "50", label: "50% (dia normal)" },
  { value: "100", label: "100% (domingos e feriados)" },
  { value: "60", label: "60% (previsto em acordo/convenção)" },
  { value: "70", label: "70% (previsto em acordo/convenção)" },
];

export default function HorasExtrasCalculadoraPage() {
  const [salarioBruto, setSalarioBruto] = useState(2200);
  const [jornadaMensal, setJornadaMensal] = useState(JORNADA_MENSAL_PADRAO);
  const [horasExtras, setHorasExtras] = useState(10);
  const [percentual, setPercentual] = useState("50");
  const [incluirReflexoDSR, setIncluirReflexoDSR] = useState(true);

  const resultado = useMemo(
    () =>
      calcularHorasExtras({
        salarioBruto,
        jornadaMensal,
        horasExtras,
        percentualAdicional: parseFloat(percentual),
        incluirReflexoDSR,
      }),
    [salarioBruto, jornadaMensal, horasExtras, percentual, incluirReflexoDSR],
  );

  return (
    <CalculatorShell
      icon={Timer}
      title="Calculadora de horas extras"
      description="Simule o valor das horas extras do mês, com o percentual de adicional e o reflexo estimado no DSR."
      form={
        <div className="space-y-5">
          <CurrencyField label="Salário bruto mensal" value={salarioBruto} onChange={setSalarioBruto} />
          <NumberField
            label="Jornada mensal contratada (horas)"
            value={jornadaMensal}
            onChange={setJornadaMensal}
            min={1}
            help="Referência comum: 220 horas/mês para jornada de 44h semanais."
          />
          <NumberField label="Horas extras feitas no mês" value={horasExtras} onChange={setHorasExtras} min={0} />
          <SelectField label="Percentual do adicional" value={percentual} onChange={setPercentual} options={OPCOES_PERCENTUAL} />
          <ToggleField
            label="Incluir reflexo estimado no DSR"
            checked={incluirReflexoDSR}
            onChange={setIncluirReflexoDSR}
            help="Horas extras habituais refletem no Descanso Semanal Remunerado — aqui usamos uma estimativa simplificada."
          />
        </div>
      }
      result={<ResultBreakdown resultado={resultado} tituloTotal="Valor bruto estimado das horas extras" />}
      explicacao={
        <>
          <h2 className="text-xl font-bold text-slate-900">Como esse cálculo é feito</h2>
          <p className="text-slate-600 leading-relaxed">
            O valor da hora normal é o salário dividido pela jornada mensal contratada. A hora
            extra aplica o percentual de adicional sobre esse valor. Quando habituais, as horas
            extras também refletem no Descanso Semanal Remunerado (DSR) — aqui, essa estimativa usa
            uma referência simplificada de dias úteis e dias de descanso no mês, que pode variar
            conforme o calendário real.
          </p>
        </>
      }
    />
  );
}
