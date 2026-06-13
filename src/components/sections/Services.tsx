import { useTranslation } from 'react-i18next';
import { services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as Icons from 'lucide-react';

export function Services() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 bg-forest text-cream transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/20 px-3.5 py-1.5 rounded-full inline-block border border-earth/30">
            {t('nav.services')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-cream">
            {t('services.title')}
          </h2>
          <p className="text-cream/60 max-w-xl mx-auto font-body text-sm">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

            return (
              <div
                key={index}
                className="bg-forest-dark/30 hover:bg-forest-dark/60 rounded-3xl p-8 border border-white/5 hover:border-earth/20 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="p-4 bg-earth/10 text-earth rounded-2xl w-fit group-hover:scale-110 transition duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold group-hover:text-earth transition-colors">
                      {isEn ? service.titleEn : service.titleId}
                    </h3>
                    <p className="text-sm font-body text-cream/70 leading-relaxed">
                      {isEn ? service.descriptionEn : service.descriptionId}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-1 bg-earth/30 group-hover:bg-earth mt-8 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
