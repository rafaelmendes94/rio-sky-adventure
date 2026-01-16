import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-paragliding.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-4">
              São Conrado, Rio de Janeiro
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Voe sobre o Rio
            </h1>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Uma experiência única de parapente com instrutor certificado CBVL. 
              Segurança, paisagens deslumbrantes e memórias para a vida toda.
            </p>
            
            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="bg-white text-foreground hover:bg-white/90 font-medium"
            >
              Agendar voo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
