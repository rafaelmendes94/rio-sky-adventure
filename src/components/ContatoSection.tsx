import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContatoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/andredoponte", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garanta sua vaga agora
          </h2>
          <p className="text-background/70 mb-8">
            As vagas são limitadas por condição climática. Fale direto no WhatsApp.
          </p>
          
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white mb-12"
          >
            📲 (21) 99421-9271
          </Button>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-background/70">
            <a href="tel:+5521994219271" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-4 h-4" />
              (21) 99421-9271
            </a>
            <button onClick={handleInstagram} className="flex items-center gap-2 hover:text-background transition-colors">
              <Instagram className="w-4 h-4" />
              @andredoponte
            </button>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              São Conrado, Rio de Janeiro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
