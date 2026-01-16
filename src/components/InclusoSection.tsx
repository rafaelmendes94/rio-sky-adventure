import { Video, Camera, Car, CreditCard } from "lucide-react";

const inclusions = [
  {
    icon: Car,
    title: "Transporte incluso",
    description: "Traslado gratuito até a rampa para clientes dentro da rota de atendimento",
  },
  {
    icon: Video,
    title: "Vídeos aéreos",
    description: "Gravação completa entregue direto no seu celular",
  },
  {
    icon: Camera,
    title: "Fotos ilimitadas",
    description: "Escolha as melhores memórias do seu voo",
  },
  {
    icon: CreditCard,
    title: "Facilidade no pagamento",
    description: "Pix, dinheiro ou cartão até 10x",
  },
];

const InclusoSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu pacote inclui
          </h2>
          <p className="text-muted-foreground">
            Experiência completa para você só se preocupar em aproveitar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {inclusions.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-secondary">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5" />
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

export default InclusoSection;
