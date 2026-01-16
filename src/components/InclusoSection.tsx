import { Video, Camera, Car } from "lucide-react";

const inclusions = [
  {
    icon: Car,
    title: "Transporte incluso",
    description: "Traslado até a rampa da Pedra Bonita",
  },
  {
    icon: Video,
    title: "Vídeos do voo",
    description: "Gravação entregue no seu celular",
  },
  {
    icon: Camera,
    title: "Fotos ilimitadas",
    description: "Escolha as melhores memórias",
  },
];

const InclusoSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que está incluso
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para uma experiência completa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {inclusions.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InclusoSection;
