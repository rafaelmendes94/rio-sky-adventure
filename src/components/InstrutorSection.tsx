import { Shield, Award, Trophy } from "lucide-react";

const credentials = [
  { icon: Shield, text: "Instrutor credenciado pela CBVL" },
  { icon: Award, text: "Certificador de Voo Duplo – CBVL" },
  { icon: Trophy, text: "Tri-campeão Carioca de Parapente" },
  { icon: Trophy, text: "Campeão do Desafio Sudeste" },
];

const InstrutorSection = () => {
  return (
    <section id="instrutor" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que voar com a gente?
            </h2>
            <p className="text-muted-foreground text-lg">
              Com André do Ponte Voo Livre RJ, você faz seu voo de parapente com 
              instrutor credenciado pela CBVL, segurança total e imagens incríveis.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-foreground text-background rounded-2xl p-8 text-center">
            <p className="text-xl font-medium mb-2">
              Aqui, seu voo não é passeio.
            </p>
            <p className="text-2xl font-bold">
              É uma experiência transformadora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrutorSection;
