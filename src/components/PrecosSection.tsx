import { Button } from "@/components/ui/button";

const PrecosSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-primary">Valores</span>
          </h2>

          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <p className="text-muted-foreground mb-2">Domingo a Sábado</p>
            <p className="text-5xl font-bold text-primary mb-2">R$ 850</p>
            <p className="text-muted-foreground mb-6">(Pix / Dinheiro)</p>
            
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                Cartão até 10x <span className="text-xs">(juros do cartão)</span>
              </p>
            </div>
          </div>

          <Button size="lg" onClick={handleWhatsApp} className="text-lg px-10 w-full">
            AGENDE O SEU VÔO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrecosSection;
