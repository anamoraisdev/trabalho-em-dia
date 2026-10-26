"use client";

import { useMemo, useState } from "react";
import { Gift } from "lucide-react";
import CalculatorShell from "@/components/calculadoras/CalculatorShell";
import ResultBreakdown from "@/components/calculadoras/ResultBreakdown";
import { CurrencyField, NumberField, ToggleField } from "@/components/calculadoras/fields";
import { calcularDecimoTerceiro } from "@/lib/calculos/decimoTerceiro";

export default function DecimoTerceiroCalculadoraPage() {
  const [salarioBruto, setSalarioBruto] = useState(2200);
  const [mesesTrabalhados, setMesesTrabalhados] = useState(12);
  const [jaRecebeuAdiantamento, setJaRecebeuAdiantamento] = useState(false);
  const [dependentes, setDependentes] = useState(0);

  const resultado = useMemo(
    () => calcularDecimoTerceiro({ salarioBruto, mesesTrabalhados, jaRecebeuAdiantamento, dependentes }),
    [salarioBruto, mesesTrabalhados, jaRecebeuAdiantamento, dependentes],
  );

  return (
    <CalculatorShell
      icon={Gift}
      title="Calculadora de 13º salário"
      description="Simule o valor do seu 13º salário, com a 1ª e a 2ª parcela e os descontos de INSS e IRRF."
      form={
        <div className="space-y-5">
          <CurrencyField label="Salário bruto mensal" value={salarioBruto} onChange={setSalarioBruto} />
          <NumberField
            label="Meses trabalhados no ano"
            value={mesesTrabalhados}
            onChange={(v) => setMesesTrabalhados(Math.min(12, Math.max(0, v)))}
            min={0}
            max={12}
            help="Fração igual ou superior a 15 dias no mês conta como mês completo."
          />
          <ToggleField
            label="Já recebi a 1ª parcela (adiantamento)"
            checked={jaRecebeuAdiantamento}
            onChange={setJaRecebeuAdiantamento}
            help="Se marcado, mostramos apenas o que falta receber na 2ª parcela."
          />
          <NumberField
            label="Número de dependentes (para IRRF)"
            value={dependentes}
            onChange={setDependentes}
            min={0}
          />
        </div>
      }
      result={
        <ResultBreakdown
          resultado={resultado}
          tituloTotal={jaRecebeuAdiantamento ? "Valor estimado da 2ª parcela" : "Valor líquido total do 13º"}
        />
      }
      explicacao={
        <>
          <h2 className="text-xl font-bold text-slate-900">Como esse cálculo é feito</h2>
          <p className="text-slate-600 leading-relaxed">
            O 13º salário corresponde a 1/12 do salário por mês trabalhado no ano. A 1ª parcela
            (50% do valor, sem descontos) pode ser paga entre fevereiro e novembro. A 2ª parcela é
            paga até 20 de dezembro, já com os descontos de INSS e IRRF calculados sobre o valor
            total do 13º.
          </p>
        </>
      }
    />
  );
}
