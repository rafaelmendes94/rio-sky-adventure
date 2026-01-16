import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InclusoSection from "@/components/InclusoSection";
import GaleriaSection from "@/components/GaleriaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import PrecosSection from "@/components/PrecosSection";
import InfoSection from "@/components/InfoSection";
import InstrutorSection from "@/components/InstrutorSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <InclusoSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <GaleriaSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <DepoimentosSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <PrecosSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <InfoSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <InstrutorSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ContatoSection />
      </AnimatedSection>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
