import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Testimonial {
  quoteEn: string;
  quoteId: string;
  author: string;
  roleEn: string;
  roleId: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quoteEn: "We've been working with this team for over a year, and their shipping and commodity supply service has been outstanding. Our cargo always arrives on time and in perfect condition. Their container safety and real-time tracking give us complete peace of mind.",
    quoteId: "Kami telah bekerja sama dengan tim ini selama lebih dari setahun, dan layanan pengiriman serta pasokan komoditas mereka sangat luar biasa. Kargo kami selalu tiba tepat waktu dan dalam kondisi sempurna. Keamanan kontainer dan pelacakan langsung mereka memberi kami ketenangan pikiran.",
    author: "Savannah Nguyen",
    roleEn: "Supply Chain Manager",
    roleId: "Manajer Rantai Pasok",
    company: "Global Trade Inc.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    quoteEn: "Their compliance with European phytosanitary standards for charcoal and spices is unmatched. PT. Nusa Alam Komoditas Indonesia is our most reliable partner in Southeast Asia. Highly recommended for any serious commodity buyers.",
    quoteId: "Kepatuhan mereka terhadap standar fitosanitari Eropa untuk arang dan rempah-rempah tidak tertandingi. PT. Nusa Alam Komoditas Indonesia adalah mitra kami yang paling andal di Asia Tenggara. Sangat direkomendasikan untuk pembeli komoditas serius.",
    author: "Marcus Vance",
    roleEn: "Director of Procurement",
    roleId: "Direktur Pengadaan",
    company: "EuroAgri Import GmbH",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quoteEn: "The Cold Storage facility they operate is vital for our seafood trade. Accurate sub-zero storage and professional logistics staff ensure our export fish retains maximum freshness until loading.",
    quoteId: "Fasilitas Cold Storage yang mereka kelola sangat vital bagi bisnis makanan laut kami. Penyimpanan suhu sub-zero yang akurat dan staf logistik profesional memastikan ikan ekspor kami tetap segar maksimal hingga pemuatan.",
    author: "Hidetoshi Tanaka",
    roleEn: "Operations Lead",
    roleId: "Pimpinan Operasional",
    company: "Pacific Seafoods Ltd.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

const partners = [
  'SUPERIOR',
  'REPARIE',
  'buildin',
  'AGRO-TRADE',
  'INDOGLOBAL',
  'OCEAN-LINK',
  'PT. KARYA NUSA'
];

export function Testimonials() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isRevealed } = useScrollReveal(0.1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-24 bg-cream text-charcoal transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-cream-dark/40 relative mb-20">
          <div className="absolute top-6 left-6 text-cream-dark opacity-10">
            <Quote className="h-24 w-24 transform -scale-x-100" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left Header */}
            <div className="md:w-1/3 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
                Client Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
                Trust Us
              </h2>
            </div>

            {/* Right Review and Navigation */}
            <div className="md:w-2/3 space-y-6">
              {/* Navigation Arrows */}
              <div className="flex items-center justify-end space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-cream-dark text-forest hover:bg-forest hover:text-cream hover:border-forest transition duration-300 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-cream-dark text-forest hover:bg-forest hover:text-cream hover:border-forest transition duration-300 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Quote Description */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <p className="text-lg md:text-xl font-display italic text-charcoal/90 leading-relaxed">
                  "{isEn ? current.quoteEn : current.quoteId}"
                </p>
                
                {/* Author Credentials */}
                <div className="flex items-center space-x-4 pt-6">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-earth shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-forest font-body">{current.author}</h4>
                    <p className="text-xs text-charcoal/50 font-body">
                      {isEn ? current.roleEn : current.roleId}, <span className="font-semibold text-earth">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logo Ticker */}
        <div className="space-y-6">
          <h3 className="text-center text-xs uppercase tracking-widest text-charcoal/40 font-body font-bold">
            Mitra Kerja Sama & Klien Global
          </h3>
          <div className="relative overflow-hidden w-full py-4 border-y border-cream-dark/20">
            <div className="flex items-center space-x-12 animate-ticker whitespace-nowrap">
              {/* First Pass */}
              {partners.map((partner, i) => (
                <span
                  key={`p1-${i}`}
                  className="text-lg md:text-2xl font-display font-black text-charcoal/20 tracking-widest hover:text-earth/60 transition-colors duration-300 select-none cursor-default"
                >
                  {partner}
                </span>
              ))}
              {/* Second Pass for seamless scrolling */}
              {partners.map((partner, i) => (
                <span
                  key={`p2-${i}`}
                  className="text-lg md:text-2xl font-display font-black text-charcoal/20 tracking-widest hover:text-earth/60 transition-colors duration-300 select-none cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Animation */}
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          display: inline-flex;
          animation: ticker 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
