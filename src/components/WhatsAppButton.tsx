import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20adopting%20a%20puppy%20from%20D-Code%20Studio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Ping animation */}
        <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-success-foreground fill-success-foreground" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
    </a>
  );
}
