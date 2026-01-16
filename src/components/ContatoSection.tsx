import { MapPin, Phone, Instagram, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContatoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/andredoponte", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/WLvmYhdUXaCSsFL99", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Como <span className="text-gradient-gold">Agendar</span> Seu Voo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e agende sua experiência inesquecível
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <a 
                href="tel:+5521994219271"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">(21) 99421-9271</p>
                  <p className="text-sm text-muted-foreground">WhatsApp / Ligação</p>
                </div>
              </a>

              <div 
                onClick={handleInstagram}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">@andredoponte</p>
                  <p className="text-sm text-muted-foreground">Siga no Instagram</p>
                </div>
              </div>

              <div 
                onClick={handleMaps}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">São Conrado, Rio de Janeiro</p>
                  <p className="text-sm text-muted-foreground">Ver no Google Maps</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Voos diários</p>
                  <p className="text-sm text-muted-foreground">Sujeito a condições climáticas</p>
                </div>
              </div>
            </div>

            <Button 
              variant="whatsapp" 
              size="xl" 
              className="w-full mt-8"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.599847891478!2d-43.27947892469685!3d-22.996714979193344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd55ed15d23d9%3A0x1faef95dc3d98d3b!2sPraia%20de%20S%C3%A3o%20Conrado!5e0!3m2!1spt-BR!2sbr!4v1705425600000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização São Conrado"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
