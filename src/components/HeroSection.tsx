import { Button } from "@/components/ui/button";
import { MessageCircle, Plane } from "lucide-react";
import heroImage from "@/assets/hero-paragliding.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Plane className="w-8 h-8 text-primary animate-float" />
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              André do Ponte Voo Livre RJ
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Uma Experiência{" "}
            <span className="text-gradient-gold">Inesquecível</span>
            <br />no Rio de Janeiro
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Viva a experiência mais emocionante da sua vida em São Conrado
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Sinta a liberdade de voar sobre uma das paisagens mais lindas do mundo 
            com instrutor credenciado pela CBVL e segurança total.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gold" 
              size="xl" 
              onClick={handleWhatsApp}
              className="min-w-[280px]"
            >
              <MessageCircle className="w-5 h-5" />
              Agende Seu Voo
            </Button>
            
            <Button 
              variant="goldOutline" 
              size="xl"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[280px]"
            >
              Saiba Mais
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Tri-campeão Carioca
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              CBVL Credenciado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              +10 Anos Experiência
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
