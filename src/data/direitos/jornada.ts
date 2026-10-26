import { Clock } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const jornada: TemaDireito = {
  slug: "jornada",
  titulo: "Jornada de trabalho",
  resumo:
    "Limites de horas diárias e semanais, intervalos obrigatórios, descanso semanal e as principais escalas usadas no Brasil.",
  icone: Clock,
  categoria: "Tempo de trabalho",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Limites gerais de jornada",
      paragrafos: [
        "A jornada padrão prevista na Constituição e na CLT é de até 8 horas diárias e 44 horas semanais, o que resulta em uma carga mensal de referência de aproximadamente 220 horas.",
        "Jornadas diferentes podem ser definidas por acordo ou convenção coletiva, respeitando o limite de 44 horas semanais (ou 48 horas com horas extras) e certas proteções mínimas de descanso.",
      ],
    },
    {
      titulo: "Intervalos obrigatórios",
      paragrafos: [
        "A lei prevê intervalos mínimos tanto dentro da jornada diária quanto entre uma jornada e a outra."
      ],
      lista: [
        "Intervalo intrajornada: no mínimo 1 hora para jornadas acima de 6 horas diárias (pode ser reduzido a 30 minutos por acordo coletivo em alguns casos); 15 minutos para jornadas entre 4 e 6 horas.",
        "Intervalo interjornadas: no mínimo 11 horas de descanso entre o fim de uma jornada e o início da seguinte.",
        "Descanso Semanal Remunerado (DSR): ao menos 24 horas consecutivas por semana, preferencialmente aos domingos.",
      ],
      alerta:
        "Quando o intervalo intrajornada não é concedido integralmente, a empresa deve pagar o período suprimido com acréscimo, e não apenas como hora extra simples.",
    },
    {
      titulo: "Escalas e jornadas especiais",
      paragrafos: [
        "Algumas categorias usam escalas específicas, negociadas coletivamente ou previstas em lei, como 12x36 (12 horas de trabalho por 36 de descanso), comum em saúde, segurança e alguns serviços essenciais.",
        "Trabalho em turnos ininterruptos de revezamento tem jornada reduzida (regra geral de 6 horas), salvo negociação coletiva em contrário.",
      ],
    },
  ],
  excecoes: [
    "Cargos de confiança com poderes de gestão (gerentes com amplos poderes, por exemplo) podem não ter controle de jornada e, consequentemente, não têm direito a horas extras.",
    "Trabalho externo incompatível com controle de horário (quando declarado expressamente na carteira e comprovado na prática) também pode afastar o direito a horas extras.",
    "Regimes de teletrabalho podem ter regras de controle de jornada definidas em contrato, inclusive a ausência de controle quando a atividade é por produção ou tarefa.",
  ],
  exemplos: [
    {
      titulo: "Jornada 12x36 sem previsão correta",
      descricao:
        "A escala 12x36 só é válida quando prevista em acordo individual escrito, acordo coletivo ou convenção coletiva. Sem essa previsão formal, a escala pode ser considerada irregular e gerar horas extras.",
    },
    {
      titulo: "Intervalo de almoço reduzido na prática",
      descricao:
        "Um trabalhador que tem 1 hora de intervalo no contrato, mas é chamado para resolver problemas durante esse período com frequência, pode ter direito ao pagamento do tempo de intervalo não usufruído.",
    },
  ],
  fontes: [
    {
      titulo: "CLT — Arts. 58 a 75 (duração do trabalho)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
    },
    {
      titulo: "Constituição Federal — Art. 7º, inciso XIII",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    },
  ],
};

export default jornada;
