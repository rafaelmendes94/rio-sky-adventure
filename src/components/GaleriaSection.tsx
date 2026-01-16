import voo2 from "@/assets/voo-2.jpg";
import voo3 from "@/assets/voo-3.jpg";
import voo4 from "@/assets/voo-4.jpg";
import voo5 from "@/assets/voo-5.jpg";
import voo6 from "@/assets/voo-6.jpg";
import voo7 from "@/assets/voo-7.webp";
import voo8 from "@/assets/voo-8.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [voo2, voo3, voo4, voo5, voo6, voo7, voo8];

const GaleriaSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Sua Visão Durante O <span className="text-primary">Vôo</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={img} 
                      alt={`Voo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-white hover:bg-primary/90 border-none" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary text-white hover:bg-primary/90 border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
