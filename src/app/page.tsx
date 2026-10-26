import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AvisoInformativo } from "@/components/ui/Callout";
import Hero from "@/components/home/Hero";
import FeatureGrid from "@/components/home/FeatureGrid";

export default function Home() {
  return (
    <>
      <Hero />

      <Container className="py-16">
        <SectionHeading
          eyebrow="O que você encontra aqui"
          title="Quatro formas de ficar em dia com seus direitos"
          description="Cada seção foi pensada para um momento diferente: entender a regra, calcular um valor, revisar um documento ou saber a quem recorrer."
          className="mb-10"
        />
        <FeatureGrid />
      </Container>

      <Container className="pb-16">
        <AvisoInformativo />
      </Container>
    </>
  );
}
