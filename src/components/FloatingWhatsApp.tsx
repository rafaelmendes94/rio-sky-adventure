import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl animate-pulse-slow"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
};

export default FloatingWhatsApp;
