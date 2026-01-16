import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const eligibility = [
  "Pessoas de todas as idades",
  "Pessoas com dificuldades motoras",
  "Portadores de algumas deficiências",
  "O voo livre é para todos",
];

const QuemPodeVoarSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quem Pode <span className="text-primary">Voar?</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {eligibility.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span>{item}</span>
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

export default QuemPodeVoarSection;
