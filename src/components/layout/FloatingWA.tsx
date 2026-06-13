import { MessageCircle } from 'lucide-react';

export function FloatingWA() {
  const whatsappNumber = '628176712525'; 
  const message = encodeURIComponent('Hello, I am interested in PT. Nusa Alam Komoditas Indonesia services.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/20 group flex items-center space-x-2"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs font-body">
        WhatsApp Us
      </span>
    </a>
  );
}
