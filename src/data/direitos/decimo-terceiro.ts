import { Gift } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const decimoTerceiro: TemaDireito = {
  slug: "decimo-terceiro",
  titulo: "13º salário",
  resumo:
    "Como se calcula o 13º salário, os prazos de pagamento das duas parcelas e o que acontece em caso de demissão no meio do ano.",
  icone: Gift,
  categoria: "Remuneração",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "Direito e cálculo básico",
      paragrafos: [
        "Todo trabalhador com vínculo CLT tem direito a uma gratificação natalina equivalente a 1/12 da remuneração por mês trabalhado (ou fração igual ou superior a 15 dias) no ano.",
        "Quem trabalhou o ano inteiro recebe o equivalente a um salário integral; quem trabalhou menos meses recebe o valor proporcional.",
      ],
    },
    {
      titulo: "Parcelas e prazos de pagamento",
      paragrafos: [
        "O 13º é pago em até duas parcelas:",
      ],
      lista: [
        "1ª parcela: entre 1º de fevereiro e 30 de novembro, sem descontos de INSS/IRRF, correspondente a 50% do valor calculado.",
        "2ª parcela: até 20 de dezembro, com os descontos de INSS e IRRF calculados sobre o valor total do 13º, compensando o que já foi adiantado na 1ª parcela.",
      ],
    },
    {
      titulo: "Base de cálculo",
      paragrafos: [
        "O cálculo considera o salário do mês de dezembro (ou da rescisão) e inclui médias de verbas variáveis recebidas ao longo do ano, como horas extras, comissões e adicional noturno, quando houver.",
      ],
    },
  ],
  excecoes: [
    "Em caso de demissão por justa causa, o trabalhador perde o direito ao 13º proporcional do ano em curso.",
    "Afastamentos pelo INSS (auxílio-doença) interrompem a contagem de meses para fins de 13º enquanto durar o benefício, exceto nos primeiros 15 dias, que são de responsabilidade da empresa e contam normalmente.",
  ],
  exemplos: [
    {
      titulo: "Trabalhador admitido em agosto",
      descricao:
        "Alguém admitido em 1º de agosto e que permanece até dezembro trabalhou 5 meses completos (agosto a dezembro), tendo direito a 5/12 do 13º salário.",
    },
    {
      titulo: "Horas extras habituais no cálculo",
      descricao:
        "Um trabalhador que recebeu horas extras na maioria dos meses do ano deve ter a média dessas horas incluída na base de cálculo do 13º, e não apenas o salário fixo.",
    },
  ],
  fontes: [
    {
      titulo: "Lei nº 4.090/1962 (institui a gratificação de Natal)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l4090.htm",
    },
    {
      titulo: "13º salário — regras e calendário",
      orgao: "Ministério do Trabalho e Emprego",
      url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/13-salario",
    },
  ],
};

export default decimoTerceiro;
