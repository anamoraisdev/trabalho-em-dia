"use client";

import { useMemo, useState } from "react";
import { DoorOpen } from "lucide-react";
import CalculatorShell from "@/components/calculadoras/CalculatorShell";
import ResultBreakdown from "@/components/calculadoras/ResultBreakdown";
import { CurrencyField, DateField, NumberField, SelectField } from "@/components/calculadoras/fields";
import { calcularRescisao, type TipoAvisoPrevio, type TipoRescisao } from "@/lib/calculos/rescisao";

const OPCOES_TIPO: { value: TipoRescisao; label: string }[] = [
  { value: "sem_justa_causa", label: "Demissão sem justa causa" },
  { value: "pedido_demissao", label: "Pedido de demissão" },
  { value: "acordo", label: "Acordo entre as partes (art. 484-A)" },
  { value: "justa_causa", label: "Demissão por justa causa" },
];

const OPCOES_AVISO: { value: TipoAvisoPrevio; label: string }[] = [
  { value: "indenizado", label: "Indenizado (não trabalhado)" },
  { value: "trabalhado", label: "Trabalhado" },
  { value: "nenhum", label: "Não se aplica" },
];

export default function RescisaoCalculadoraPage() {
  const [tipoRescisao, setTipoRescisao] = useState<TipoRescisao>("sem_justa_causa");
  const [salarioBruto, setSalarioBruto] = useState(2200);
  const [dataAdmissao, setDataAdmissao] = useState("2023-03-01");
  const [dataDemissao, setDataDemissao] = useState("2026-10-24");
  const [diasTrabalhadosNoMes, setDiasTrabalhadosNoMes] = useState(24);
  const [diasFeriasVencidas, setDiasFeriasVencidas] = useState(0);
  const [avisoPrevio, setAvisoPrevio] = useState<TipoAvisoPrevio>("indenizado");
  const [saldoFgts, setSaldoFgts] = useState(0);

  const resultado = useMemo(
    () =>
      calcularRescisao({
        tipoRescisao,
        salarioBruto,
        dataAdmissao,
        dataDemissao,
        diasTrabalhadosNoMes,
        diasFeriasVencidas,
        avisoPrevio,
        saldoFgts,
      }),
    [tipoRescisao, salarioBruto, dataAdmissao, dataDemissao, diasTrabalhadosNoMes, diasFeriasVencidas, avisoPrevio, saldoFgts],
  );

  return (
    <CalculatorShell
      icon={DoorOpen}
      title="Calculadora de verbas rescisórias"
      description="Simule o valor aproximado a receber no fim do contrato, de acordo com o tipo de rescisão."
      form={
        <div className="space-y-5">
          <SelectField label="Tipo de rescisão" value={tipoRescisao} onChange={setTipoRescisao} options={OPCOES_TIPO} />
          <CurrencyField label="Salário bruto mensal" value={salarioBruto} onChange={setSalarioBruto} />
          <div className="grid grid-cols-2 gap-4">
            <DateField label="Data de admissão" value={dataAdmissao} onChange={setDataAdmissao} />
            <DateField label="Data de saída" value={dataDemissao} onChange={setDataDemissao} />
          </div>
          <NumberField
            label="Dias trabalhados no mês da saída"
            value={diasTrabalhadosNoMes}
            onChange={(v) => setDiasTrabalhadosNoMes(Math.min(31, Math.max(0, v)))}
            min={0}
            max={31}
          />
          <NumberField
            label="Dias de férias vencidas (não gozadas)"
            value={diasFeriasVencidas}
            onChange={(v) => setDiasFeriasVencidas(Math.min(30, Math.max(0, v)))}
            min={0}
            max={30}
            help="Deixe 0 se você não tem um período de férias completo ainda não tirado."
          />
          {tipoRescisao !== "justa_causa" && (
            <SelectField label="Aviso prévio" value={avisoPrevio} onChange={setAvisoPrevio} options={OPCOES_AVISO} />
          )}
          {tipoRescisao !== "justa_causa" && tipoRescisao !== "pedido_demissao" && (
            <CurrencyField
              label="Saldo atual do FGTS (opcional)"
              value={saldoFgts}
              onChange={setSaldoFgts}
              help="Usado só para estimar a multa de FGTS — consulte o app FGTS para o saldo exato."
            />
          )}
        </div>
      }
      result={<ResultBreakdown resultado={resultado} tituloTotal="Valor bruto estimado a receber" />}
      explicacao={
        <>
          <h2 className="text-xl font-bold text-slate-900">Como esse cálculo é feito</h2>
          <p className="text-slate-600 leading-relaxed">
            O resultado soma, conforme o tipo de rescisão: saldo de salário, férias vencidas e
            proporcionais com 1/3, 13º proporcional, aviso prévio e a multa de FGTS (quando você
            informa o saldo do fundo). Os meses de 13º e férias proporcionais são contados a partir
            da admissão e do último aniversário contratual, considerando mês completo qualquer
            fração igual ou superior a 15 dias.
          </p>
        </>
      }
    />
  );
}
