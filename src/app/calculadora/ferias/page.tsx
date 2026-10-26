"use client";

import { useMemo, useState } from "react";
import { Palmtree } from "lucide-react";
import CalculatorShell from "@/components/calculadoras/CalculatorShell";
import ResultBreakdown from "@/components/calculadoras/ResultBreakdown";
import { CurrencyField, NumberField, ToggleField } from "@/components/calculadoras/fields";
import { calcularFerias } from "@/lib/calculos/ferias";

export default function FeriasCalculadoraPage() {
  const [salarioBruto, setSalarioBruto] = useState(2200);
  const [diasDireito, setDiasDireito] = useState(30);
  const [diasGozo, setDiasGozo] = useState(30);
  const [venderUmTerco, setVenderUmTerco] = useState(false);
  const [dependentes, setDependentes] = useState(0);

  const resultado = useMemo(
    () =>
      calcularFerias({
        salarioBruto,
        diasDireito,
        diasGozo: venderUmTerco ? diasDireito - Math.floor(diasDireito / 3) : diasGozo,
        venderUmTerco,
        dependentes,
      }),
    [salarioBruto, diasDireito, diasGozo, venderUmTerco, dependentes],
  );

  return (
    <CalculatorShell
      icon={Palmtree}
      title="Calculadora de férias"
      description="Simule o valor líquido das suas férias, incluindo o adicional de 1/3 e a venda de dias (abono pecuniário)."
      form={
        <div className="space-y-5">
          <CurrencyField label="Salário bruto mensal" value={salarioBruto} onChange={setSalarioBruto} />
          <NumberField
            label="Dias de férias a que tem direito"
            value={diasDireito}
            onChange={(v) => setDiasDireito(Math.min(30, Math.max(1, v)))}
            min={1}
            max={30}
            help="Normalmente 30 dias; pode ser menor em caso de faltas injustificadas no período."
          />
          <ToggleField
            label="Quero vender 1/3 das férias (abono pecuniário)"
            checked={venderUmTerco}
            onChange={setVenderUmTerco}
            help="Você recebe em dinheiro o valor de 1/3 dos dias e tira o restante de descanso."
          />
          {!venderUmTerco && (
            <NumberField
              label="Dias que serão efetivamente de descanso"
              value={diasGozo}
              onChange={(v) => setDiasGozo(Math.min(diasDireito, Math.max(1, v)))}
              min={1}
              max={diasDireito}
            />
          )}
          <NumberField
            label="Número de dependentes (para IRRF)"
            value={dependentes}
            onChange={setDependentes}
            min={0}
            help="Cada dependente reduz a base de cálculo do Imposto de Renda."
          />
        </div>
      }
      result={<ResultBreakdown resultado={resultado} tituloTotal="Valor líquido estimado das férias" />}
      explicacao={
        <>
          <h2 className="text-xl font-bold text-slate-900">Como esse cálculo é feito</h2>
          <p className="text-slate-600 leading-relaxed">
            O valor diário das férias corresponde ao salário bruto dividido por 30. Sobre os dias
            de descanso, soma-se o adicional de 1/3 garantido pela Constituição. Se parte dos dias
            for vendida (abono pecuniário), esse valor e o respectivo 1/3 são calculados
            separadamente e não entram na base do INSS/IRRF, pois são isentos. Por fim, aplicam-se
            os descontos de INSS e IRRF apenas sobre a remuneração dos dias de descanso.
          </p>
        </>
      }
    />
  );
}
