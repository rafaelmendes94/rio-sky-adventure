import voo2 from "@/assets/voo-2.jpg";
import voo3 from "@/assets/voo-3.jpg";
import voo4 from "@/assets/voo-4.jpg";
import voo5 from "@/assets/voo-5.jpg";
import voo6 from "@/assets/voo-6.jpg";

const images = [voo2, voo3, voo4, voo5, voo6];

const GaleriaSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você voa. A gente registra tudo.
          </h2>
          <p className="text-muted-foreground">
            Veja momentos de alguns dos nossos voos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] rounded-xl overflow-hidden"
            >
              <img 
                src={img} 
                alt={`Voo ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
