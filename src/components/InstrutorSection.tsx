import { Award, Shield } from "lucide-react";
import instructorImage from "@/assets/instructor-andre.jpg";

const credentials = [
  "Instrutor credenciado CBVL",
  "Certificador de Voo Duplo",
  "Tri-campeão Carioca de Parapente",
  "Campeão do Desafio Sudeste",
];

const InstrutorSection = () => {
  return (
    <section id="instrutor" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={instructorImage} 
              alt="André do Ponte" 
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Seu instrutor
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              André do Ponte
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Anos de experiência em voos duplos com atendimento profissional, 
              seguro e humanizado. Aqui, seu voo é uma experiência transformadora.
            </p>
            
            <div className="space-y-3">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">CBVL</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Nível 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrutorSection;
