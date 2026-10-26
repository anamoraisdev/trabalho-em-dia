import { PiggyBank } from "lucide-react";
import type { TemaDireito } from "@/data/types";

const fgts: TemaDireito = {
  slug: "fgts",
  titulo: "FGTS",
  resumo:
    "O que é o Fundo de Garantia, como funcionam os depósitos mensais, quando é possível sacar e o que é a multa de 40%.",
  icone: PiggyBank,
  categoria: "Garantias e benefícios",
  atualizadoEm: "outubro de 2026",
  secoes: [
    {
      titulo: "O que é e como funciona o depósito",
      paragrafos: [
        "O FGTS (Fundo de Garantia do Tempo de Serviço) é formado por depósitos mensais feitos pelo empregador, equivalentes a 8% da remuneração do trabalhador, em uma conta vinculada na Caixa Econômica Federal.",
        "O depósito é feito pela empresa — não há desconto no salário do trabalhador para o FGTS. O saldo rende juros e correção monetária definidos em lei.",
      ],
    },
    {
      titulo: "Quando é possível sacar o FGTS",
      paragrafos: [
        "O saque não é livre a qualquer momento: a lei define as situações em que o saldo pode ser retirado.",
      ],
      lista: [
        "Demissão sem justa causa",
        "Término de contrato por prazo determinado",
        "Aposentadoria",
        "Compra de imóvel próprio (dentro das regras do programa habitacional)",
        "Doenças graves (do trabalhador ou dependentes) previstas em lei",
        "Falecimento do trabalhador (saque pelos dependentes)",
        "Modalidade de saque-aniversário, para quem optar por esse regime",
      ],
    },
    {
      titulo: "Multa de 40% em caso de demissão sem justa causa",
      paragrafos: [
        "Quando o trabalhador é demitido sem justa causa, o empregador deve depositar uma multa adicional de 40% sobre o total já depositado (com atualização) na conta do FGTS durante todo o contrato.",
        "Em caso de demissão por acordo entre as partes (art. 484-A da CLT), essa multa é reduzida para 20%, e apenas 80% do saldo do FGTS pode ser sacado.",
      ],
    },
  ],
  excecoes: [
    "Em pedido de demissão pelo próprio trabalhador, não há multa de 40% e o saque do FGTS, em regra, não é liberado (exceto nas hipóteses gerais de saque, como compra de imóvel).",
    "Em demissão por justa causa, também não há multa de 40% e o saque segue restrito às hipóteses gerais.",
  ],
  exemplos: [
    {
      titulo: "Conferindo os depósitos",
      descricao:
        "O trabalhador pode consultar os depósitos do FGTS pelo aplicativo FGTS (Caixa) ou extrato disponibilizado, comparando os valores depositados com 8% do salário informado em cada mês — divergências podem indicar depósito feito a menor ou em atraso.",
    },
    {
      titulo: "Demissão por acordo (art. 484-A)",
      descricao:
        "Em uma demissão por acordo, se o saldo do FGTS é de R$ 10.000, o trabalhador pode sacar 80% (R$ 8.000) e a empresa deve pagar 20% de multa sobre o saldo total (R$ 2.000), ao invés dos 40% integrais.",
    },
  ],
  fontes: [
    {
      titulo: "Lei nº 8.036/1990 (dispõe sobre o FGTS)",
      orgao: "Planalto / Presidência da República",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm",
    },
    {
      titulo: "FGTS — regras, saques e aplicativo",
      orgao: "Caixa Econômica Federal",
      url: "https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx",
    },
  ],
};

export default fgts;
