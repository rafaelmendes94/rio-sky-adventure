import { Button } from "@/components/ui/button";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-32 text-center">
          <img src={logo} alt="André do Ponte Voo Livre" className="w-40 h-40 object-contain mx-auto mb-8 rounded-2xl" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Uma experiência <span className="text-primary">inesquecível</span>
            <br />no Rio de Janeiro
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Viva a emoção de voar sobre São Conrado com instrutor credenciado CBVL
          </p>

          <Button 
            size="lg" 
            onClick={handleWhatsApp}
            className="text-lg px-10 py-6 h-auto"
          >
            AGENDE O SEU VÔO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
