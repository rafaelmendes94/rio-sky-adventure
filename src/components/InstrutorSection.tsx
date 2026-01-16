import { Award, Shield, Medal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";
import instructorImage from "@/assets/instructor-andre.jpg";

const credentials = [
  "Instrutor credenciado pela CBVL",
  "Certificador de Voo Duplo – CBVL",
  "Tri-campeão Carioca de Parapente",
  "Campeão do Desafio Sudeste",
  "Anos de experiência em voos duplos",
];

const certifications = [
  { name: "CBVL", description: "Confederação Brasileira de Voo Livre" },
  { name: "Instrutor Nível 4", description: "Mais alto nível de certificação" },
];

const InstrutorSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá André! Vi seu site e gostaria de agendar um voo!", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/andredoponte", "_blank");
  };

  return (
    <section id="instrutor" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Conheça Seu <span className="text-gradient-gold">Instrutor</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com André do Ponte, você voa com um dos melhores pilotos do Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image & Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={instructorImage} 
                alt="André do Ponte - Instrutor de Parapente" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black">André do Ponte</h3>
                <p className="text-primary font-semibold">Voo Livre RJ</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -right-4 top-8 bg-card border border-primary/30 rounded-xl p-4 shadow-gold">
              <div className="flex items-center gap-3">
                <Medal className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-black text-2xl">3x</p>
                  <p className="text-xs text-muted-foreground">Campeão Carioca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-xl">Por que voar com a gente?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Atendimento profissional, seguro e humanizado. Aqui, seu voo não é passeio 
                — <span className="text-primary font-semibold">é uma experiência transformadora</span>.
              </p>
              
              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-primary/10 rounded-xl p-4 border border-primary/20 text-center"
                >
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gold" 
                size="lg" 
                className="flex-1"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
              <Button 
                variant="goldOutline" 
                size="lg" 
                className="flex-1"
                onClick={handleInstagram}
              >
                <Instagram className="w-5 h-5" />
                @andredoponte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrutorSection;
