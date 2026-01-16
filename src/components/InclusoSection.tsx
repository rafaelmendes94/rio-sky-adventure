import { Video, Camera, Car, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import experienceImage from "@/assets/paraglide-experience.jpg";

const inclusions = [
  {
    icon: Car,
    title: "Transporte",
    description: "Traslado até a rampa da Pedra Bonita incluso no pacote",
  },
  {
    icon: Video,
    title: "Vídeos Aéreos",
    description: "Gravação de vídeos entregues direto no seu celular",
  },
  {
    icon: Camera,
    title: "Fotos Ilimitadas",
    description: "Fotos ilimitadas para você escolher as melhores",
  },
  {
    icon: CreditCard,
    title: "Facilidade",
    description: "Diversas formas de pagamento para sua comodidade",
  },
];

const InclusoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de saber mais sobre o pacote do voo de parapente!", "_blank");
  };

  return (
    <section id="sobre" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            O Que Está <span className="text-gradient-gold">Incluso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seu pacote completo para uma experiência inesquecível nos céus do Rio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-gold">
              <img 
                src={experienceImage} 
                alt="Experiência de Parapente" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Voo Duplo
                </span>
                <h3 className="text-2xl font-bold mt-1">Experiência Completa</h3>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {inclusions.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}

            <Button 
              variant="gold" 
              size="lg" 
              className="w-full mt-6"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Agende Seu Voo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusoSection;
