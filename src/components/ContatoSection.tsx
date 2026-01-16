import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContatoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Quero agendar um voo de parapente!", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/andredoponte", "_blank");
  };

  const handleMaps = () => {
    window.open("https://maps.app.goo.gl/WLvmYhdUXaCSsFL99", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-light-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Informações De <span className="text-primary">Contato</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all w-full text-left"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="font-semibold text-lg">(21) 99421-9271</p>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
              </div>
            </button>

            <button 
              onClick={handleInstagram}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all w-full text-left"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">@andredoponte</p>
                <p className="text-sm text-muted-foreground">Instagram</p>
              </div>
            </button>

            <button 
              onClick={handleMaps}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all w-full text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg">Praia de São Conrado</p>
                <p className="text-sm text-muted-foreground">Ver no Google Maps</p>
              </div>
            </button>

            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="w-full text-lg mt-4 animate-pulse-button"
            >
              <WhatsAppIcon />
              AGENDE SEU VÔO
            </Button>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
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
