import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContatoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Agende seu voo
          </h2>
          <p className="text-background/70 text-lg mb-10">
            Entre em contato pelo WhatsApp e reserve sua experiência
          </p>
          
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-white text-foreground hover:bg-white/90 font-medium mb-16"
          >
            (21) 99421-9271
          </Button>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(21) 99421-9271</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@andredoponte</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>São Conrado, RJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
