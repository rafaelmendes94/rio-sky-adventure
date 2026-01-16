import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/voo-1.jpg";
import logo from "@/assets/logo.jpg";

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
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <img src={logo} alt="André do Ponte Voo Livre" className="w-32 h-32 object-contain mb-6" />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Voo de Parapente no Rio de Janeiro
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Viva a experiência mais emocionante da sua vida em São Conrado. 
              Sinta a liberdade de voar sobre uma das paisagens mais lindas do mundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-white text-foreground hover:bg-white/90 font-medium"
              >
                Agendar pelo WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <a href="tel:+5521994219271" className="text-white flex items-center gap-2 font-medium">
                📲 (21) 99421-9271
              </a>
            </div>

            <p className="text-white/70 text-sm">
              Instrutor credenciado CBVL • Tri-campeão Carioca
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
