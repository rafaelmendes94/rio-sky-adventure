import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "James W.",
    date: "Janeiro 2025",
    text: "Superei meu medo para fazer esse voo. Quando cheguei, todos os meus medos foram completamente aliviados. O instrutor é muito simpático, muito profissional e direto ao ponto. A instrução e segurança foram excelentes. E o voo foi INCRÍVEL! Um destaque da minha vida com certeza.",
    rating: 5,
  },
  {
    name: "Jiřina S.",
    date: "Janeiro 2025",
    text: "O agendamento foi fácil via WhatsApp, reservamos apenas 2 dias antes da experiência. Tudo foi tranquilo, tem o clube ao lado da praia, primeiro vá lá para conhecer o piloto, eles te levam até o topo do morro.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    date: "Dezembro 2024",
    text: "Experiência única! O André é um excelente profissional, muito atencioso e transmite muita segurança. A vista durante o voo é simplesmente espetacular. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    date: "Novembro 2024",
    text: "Foi meu primeiro voo de parapente e não podia ter sido melhor! O instrutor me deixou muito tranquila e o voo foi maravilhoso. As fotos e vídeos ficaram incríveis!",
    rating: 5,
  },
  {
    name: "Ricardo L.",
    date: "Outubro 2024",
    text: "Nunca me esquecer da experiência. O time é super organizado, o clube ao lado da praia é muito bem estruturado. O registro foi rápido e logo estávamos voando. Sensacional!",
    rating: 5,
  },
];

const DepoimentosSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Avaliações reais de quem já viveu essa experiência
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-6 shadow-lg h-full flex flex-col border border-border">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    
                    <p className="text-foreground/80 mb-6 flex-grow text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-white hover:bg-primary/90 border-none" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary text-white hover:bg-primary/90 border-none" />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/search?q=CSCVL+-+Clube+S%C3%A3o+Conrado+de+Voo+Livre#lrd=0x9bd720f722ff03:0xbaa4f237af256d7b,1,,,," 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Ver todas as avaliações no Google
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
