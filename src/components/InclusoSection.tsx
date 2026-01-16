import { Video, Camera, Car, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const inclusions = [
  {
    icon: Car,
    title: "Transporte incluso",
    description: "Traslado gratuito até a rampa para clientes dentro da rota",
  },
  {
    icon: Video,
    title: "Vídeos aéreos",
    description: "Gravação completa entregue no seu celular",
  },
  {
    icon: Camera,
    title: "Fotos ilimitadas",
    description: "Escolha as melhores memórias do seu voo",
  },
  {
    icon: CreditCard,
    title: "Facilidade",
    description: "Pix, dinheiro ou cartão até 10x",
  },
];

const InclusoSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Está <span className="text-primary">Incluso:</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {inclusions.map((item, index) => (
            <div key={index} className="bg-secondary/50 rounded-lg p-6 border border-border">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={handleWhatsApp} className="text-lg px-10">
            AGENDE O SEU VÔO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InclusoSection;
