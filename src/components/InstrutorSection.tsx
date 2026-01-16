import { Shield, Award, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
  { icon: Shield, text: "Instrutor credenciado pela CBVL" },
  { icon: Award, text: "Certificador de Voo Duplo – CBVL" },
  { icon: Trophy, text: "Tri-campeão Carioca de Parapente" },
  { icon: Trophy, text: "Campeão do Desafio Sudeste" },
  { icon: Users, text: "Anos de experiência em voos duplos" },
];

const InstrutorSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section id="instrutor" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça Mais Sobre O <span className="text-primary">Piloto</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Com André do Ponte Voo Livre RJ, você voa com segurança total, 
            atendimento profissional e humanizado. Aqui, seu voo não é passeio 
            — é uma experiência transformadora.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4 border border-border">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-left">{item.text}</span>
              </div>
            ))}
          </div>

          <Button size="lg" onClick={handleWhatsApp} className="text-lg px-10">
            AGENDE O SEU VÔO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstrutorSection;
