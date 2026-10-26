import { Wallet } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const salario: TemaDireito = {
  slug: "salario",
  titulo: "Salário, piso e descontos",
  resumo:
    "O que é o salário mínimo e o piso da categoria, quando o salário pode ser alterado e quais descontos a empresa pode fazer legalmente.",
  icone: Wallet,
  categoria: "Remuneração",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Salário mínimo e piso da categoria",
      paragrafos: [
        "O salário mínimo é o valor mínimo nacional, fixado por lei federal, que nenhum trabalhador pode receber abaixo dele por uma jornada completa (normalmente 220 horas mensais).",
        "Além do mínimo nacional, muitas categorias têm um piso salarial definido em convenção ou acordo coletivo, negociado pelo sindicato — esse piso pode ser maior que o mínimo nacional e prevalece sobre ele quando mais benéfico ao trabalhador.",
        "Para jornadas reduzidas (tempo parcial, meio período), o salário pode ser proporcional às horas trabalhadas, desde que respeitado o valor mínimo por hora.",
      ],
    },
    {
      titulo: "Irredutibilidade salarial",
      paragrafos: [
        "Como regra, o salário não pode ser reduzido unilateralmente pelo empregador. Reduções só são válidas quando negociadas coletivamente (acordo ou convenção coletiva) e dentro de hipóteses previstas em lei, como a redução proporcional de jornada e salário em acordos coletivos específicos.",
      ],
    },
    {
      titulo: "Descontos permitidos no salário",
      paragrafos: [
        "O empregador só pode descontar do salário valores previstos em lei, contrato, convenção coletiva ou com autorização expressa do trabalhador.",
      ],
      lista: [
        "INSS (contribuição previdenciária) e IRRF (quando aplicável)",
        "Pensão alimentícia determinada judicialmente",
        "Adiantamentos salariais já recebidos",
        "Faltas não justificadas e atrasos (proporcional ao tempo não trabalhado)",
        "Danos causados pelo empregado por dolo (intenção) — ou por culpa, se houver previsão contratual nesse sentido",
        "Benefícios como vale-transporte (até 6% do salário básico) e participação em planos de saúde/alimentação, quando há adesão voluntária",
      ],
      alerta:
        "Descontos por quebra de caixa, danos causados por mero acidente (sem dolo) ou multas não previstas em lei são, em regra, irregulares.",
    },
  ],
  excecoes: [
    "Em contratos de aprendizagem, o salário pode ser proporcional à jornada reduzida do aprendiz, respeitando o piso da categoria ou o mínimo, proporcionalmente.",
    "Comissionistas puros podem ter remuneração variável, mas ainda assim têm direito a um mínimo garantido quando a média das comissões não atinge o piso ou o mínimo.",
  ],
  exemplos: [
    {
      titulo: "Desconto de uniforme danificado sem culpa comprovada",
      descricao:
        "Se um uniforme é danificado por desgaste natural do uso, o desconto do valor no salário do trabalhador tende a ser considerado indevido, pois não há dolo nem previsão contratual de culpa.",
    },
    {
      titulo: "Piso da categoria acima do mínimo nacional",
      descricao:
        "Um trabalhador do comércio pode ter direito a um piso definido em convenção coletiva do sindicato da categoria, mesmo que esse valor seja superior ao salário mínimo nacional vigente.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Arts. 457 a 467 (salário e descontos)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Valor do salário mínimo vigente",
      orgao: "Ministério do Trabalho e Emprego",
      url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/salario-minimo",
    },
  ],
};

export default salario;
