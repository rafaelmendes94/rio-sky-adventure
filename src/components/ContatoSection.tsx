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
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garanta sua vaga agora
          </h2>
          <p className="text-muted-foreground">
            As vagas são limitadas por condição climática. Fale direto no WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 mb-8">
              <a 
                href="tel:+5521994219271"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">(21) 99421-9271</p>
                  <p className="text-sm text-muted-foreground">WhatsApp / Ligação</p>
                </div>
              </a>

              <button 
                onClick={handleInstagram}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors w-full text-left"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">@andredoponte</p>
                  <p className="text-sm text-muted-foreground">Siga no Instagram</p>
                </div>
              </button>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">São Conrado</p>
                  <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full"
            >
              📲 Agendar pelo WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5998478914777!2d-43.27947892469685!3d-22.996714979193344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd55ed15d23d9%3A0x1faef95dc3d98d3b!2sPraia%20de%20S%C3%A3o%20Conrado!5e0!3m2!1spt-BR!2sbr!4v1705425600000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Praia de São Conrado"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
