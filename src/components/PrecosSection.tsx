import { Button } from "@/components/ui/button";

const PrecosSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valores
          </h2>
          <p className="text-muted-foreground mb-8">
            Domingo a Sábado
          </p>

          <div className="bg-secondary rounded-2xl p-8 mb-8">
            <p className="text-5xl font-bold mb-2">R$ 850</p>
            <p className="text-muted-foreground mb-6">Pix ou Dinheiro</p>
            
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                Cartão até 10x <span className="text-xs">(juros do cartão)</span>
              </p>
            </div>
          </div>

          <Button size="lg" onClick={handleWhatsApp} className="w-full sm:w-auto">
            Garantir minha vaga
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrecosSection;
