import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521994219271?text=Olá! Gostaria de agendar um voo de parapente!", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  );
};

export default FloatingWhatsApp;
