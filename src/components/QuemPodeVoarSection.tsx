import { Check } from "lucide-react";

const eligibility = [
  "Pessoas de todas as idades",
  "Não precisa experiência prévia",
  "Pessoas com dificuldades motoras",
  "Orientação completa do instrutor",
];

const QuemPodeVoarSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O voo é para todos
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Você voa acompanhado de um instrutor nível 4, com equipamentos 
              modernos e total suporte do início ao pouso.
            </p>
            
            <ul className="space-y-4">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="w-3 h-3 text-background" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background rounded-2xl p-8">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">3x</p>
              <p className="text-muted-foreground">Campeão Carioca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemPodeVoarSection;
