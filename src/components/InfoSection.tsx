import { Clock, Shirt, CloudSun, Phone } from "lucide-react";

const infos = [
  {
    icon: Clock,
    title: "Duração",
    description: "8 a 25 minutos (dependendo das condições meteorológicas)",
  },
  {
    icon: Shirt,
    title: "O que vestir",
    description: "Roupa confortável + tênis",
  },
  {
    icon: CloudSun,
    title: "Clima desfavorável?",
    description: "Remarcamos sem custo",
  },
  {
    icon: Phone,
    title: "Vagas limitadas",
    description: "Agende agora pelo WhatsApp",
  },
];

const InfoSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Informações rápidas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {infos.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
