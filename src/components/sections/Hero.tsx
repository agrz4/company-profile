import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-forest overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600"
          alt="Container Ship Ocean"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-black/40" />
      </div>

      {/* Top Spacer for Navbar */}
      <div className="h-24"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full py-12">
          {/* Tagline & Buttons */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-cream">
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2 bg-earth/20 border border-earth/30 rounded-full px-4 py-1.5 w-fit animate-fade-in-down">
              <span className="h-2 w-2 rounded-full bg-earth animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-earth">
                {t('hero.badge')}
              </span>
            </div>

            {/* Subtitle / Intro Description */}
            <p className="text-lg md:text-xl font-body text-cream/90 max-w-2xl leading-relaxed font-light animate-fade-in">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('business')}
                className="px-8 py-3.5 rounded-full bg-white text-forest hover:bg-cream transition-all duration-300 font-body font-bold text-sm shadow-lg hover:shadow-white/10 flex items-center space-x-2 cursor-pointer"
              >
                <span>{t('hero.ctaBusiness')}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-3.5 rounded-full border-2 border-cream/30 text-cream hover:bg-white/10 hover:border-cream transition-all duration-300 font-body font-bold text-sm cursor-pointer"
              >
                {t('hero.ctaContact')}
              </button>
            </div>
          </div>

          {/* Right Badge */}
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <div className="bg-forest-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xs space-y-3 shadow-xl">
              <span className="text-[10px] text-earth uppercase tracking-widest font-semibold block">
                {t('hero.badgeText')}
              </span>
              <p className="text-xs text-cream/70 font-body leading-normal">
                Connecting Indonesian commodity hubs like Sumatra, Java, and Sulawesi directly to Singapore, China, Europe, and America.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HUGE Background Text Overlay & Scroll indicator */}
      <div className="relative z-10 w-full overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-bold tracking-tight text-white/5 font-display uppercase leading-none transform translate-y-3 sm:translate-y-8 select-none whitespace-nowrap">
            NUSA EXPORT
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => handleScrollTo('stats')}
          className="absolute right-8 bottom-4 text-cream/40 hover:text-earth transition cursor-pointer flex flex-col items-center space-y-1 animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-widest font-body font-semibold">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
