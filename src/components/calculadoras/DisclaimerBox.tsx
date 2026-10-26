import Callout from "@/components/ui/Callout";

export default function DisclaimerBox() {
  return (
    <Callout variant="warning" title="Esta é uma simulação, não um cálculo oficial">
      <p>
        Os resultados são estimativas educativas baseadas na legislação geral e em tabelas de
        referência que podem estar desatualizadas. Convenções coletivas, benefícios específicos
        da empresa e particularidades do seu contrato podem alterar o valor real. Para
        confirmação, consulte o departamento de RH, o sindicato da categoria ou um profissional
        habilitado.
      </p>
    </Callout>
  );
}
