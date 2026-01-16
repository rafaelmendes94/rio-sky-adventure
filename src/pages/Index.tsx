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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InclusoSection />
      <GaleriaSection />
      <DepoimentosSection />
      <PrecosSection />
      <InfoSection />
      <InstrutorSection />
      <ContatoSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
