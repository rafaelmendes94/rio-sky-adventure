import { Check, Users, Heart, Accessibility, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const eligibility = [
  {
    icon: Users,
    text: "Pessoas de todas as idades",
  },
  {
    icon: Accessibility,
    text: "Pessoas com dificuldades motoras",
  },
  {
    icon: Heart,
    text: "Portadores de algumas deficiências",
  },
  {
    icon: Baby,
    text: "Crianças acompanhadas (consulte)",
  },
];

const QuemPodeVoarSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Tenho dúvidas sobre quem pode voar. Pode me ajudar?", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Quem Pode <span className="text-gradient-gold">Voar?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              O voo livre é para todos! Não precisa ter experiência prévia.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {eligibility.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">O voo livre é para todos!</p>
                  <p className="text-muted-foreground">
                    Não precisa ter nenhuma experiência prévia. Você voa acompanhado de um instrutor 
                    nível 4, utilizando equipamentos modernos, com orientações simples e total 
                    suporte do início ao pouso.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Ficou com alguma dúvida? Entre em contato!
              </p>
              <Button 
                variant="gold" 
                size="lg"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Tire Suas Dúvidas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemPodeVoarSection;
