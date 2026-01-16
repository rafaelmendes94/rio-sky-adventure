import { Plane, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">André do Ponte</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Voo Livre RJ - Experiências de parapente em São Conrado, Rio de Janeiro. 
              Instrutor credenciado CBVL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  O Que Está Incluso
                </a>
              </li>
              <li>
                <a href="#instrutor" className="hover:text-primary transition-colors">
                  Sobre o Instrutor
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Agende Seu Voo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                (21) 99421-9271
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="w-4 h-4 text-primary" />
                @andredoponte
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                São Conrado, RJ
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} André do Ponte - Voo Livre RJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
