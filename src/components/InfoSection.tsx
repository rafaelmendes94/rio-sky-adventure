import { Clock, Shirt, CloudSun, Users } from "lucide-react";

const infos = [
  {
    icon: Clock,
    title: "Duração média",
    description: "8 a 25 minutos (depende das condições meteorológicas)",
  },
  {
    icon: Shirt,
    title: "O que vestir",
    description: "Roupa confortável + tênis",
  },
  {
    icon: CloudSun,
    title: "Clima desfavorável?",
    description: "Remarcamos sem custo adicional",
  },
  {
    icon: Users,
    title: "Vagas limitadas",
    description: "Por condição climática do dia",
  },
];

const InfoSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Informações <span className="text-primary">Rápidas</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {infos.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
