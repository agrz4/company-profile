import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { businessLines } from '../../data/businessLines';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as Icons from 'lucide-react';

type CategoryFilter = 'all' | 'agriculture' | 'forestry' | 'energy' | 'logistics' | 'aquaculture' | 'rental' | 'services' | 'construction';

export function BusinessLines() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const { ref, isRevealed } = useScrollReveal(0.1);

  const filters: { id: CategoryFilter; labelKey: string }[] = [
    { id: 'all', labelKey: 'business.all' },
    { id: 'agriculture', labelKey: 'business.agriculture' },
    { id: 'aquaculture', labelKey: 'business.aquaculture' },
    { id: 'construction', labelKey: 'business.construction' },
    { id: 'energy', labelKey: 'business.energy' },
    { id: 'forestry', labelKey: 'business.forestry' },
    { id: 'logistics', labelKey: 'business.logistics' },
    { id: 'rental', labelKey: 'business.rental' },
    { id: 'services', labelKey: 'business.services' }
  ];

  const filteredLines = businessLines.filter(
    (line) => activeFilter === 'all' || line.category === activeFilter
  );

  return (
    <section
      id="business"
      ref={ref}
      className={`py-24 bg-cream transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
            {t('business.kbliRegistered')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
            {t('business.title')}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-body text-sm">
            {t('business.subtitle')}
          </p>
        </div>

        {/* Filters buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-forest text-cream border-forest shadow-md'
                  : 'bg-white text-charcoal border-cream-dark/50 hover:bg-cream-dark/30 hover:border-cream-dark'
              }`}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {filteredLines.map((line) => {
            // Dynamically resolve Lucide Icon
            const IconComponent = (Icons as any)[line.icon] || Icons.HelpCircle;

            return (
              <div
                key={line.code}
                className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark/40 hover:shadow-md hover:border-earth/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Card Header: KBLI Code & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-body text-earth uppercase bg-earth/10 px-2.5 py-1 rounded-md">
                      KBLI {line.code}
                    </span>
                    <div className="p-3 bg-cream text-forest rounded-xl group-hover:bg-earth group-hover:text-forest-dark transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-bold text-forest leading-snug group-hover:text-earth transition-colors">
                      {isEn ? line.titleEn : line.titleId}
                    </h3>
                    <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                      {isEn ? line.descriptionEn : line.descriptionId}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Category Label */}
                <div className="border-t border-cream-dark/30 pt-4 mt-6 flex items-center justify-between text-xs">
                  <span className="text-charcoal/40 font-body uppercase font-medium">{t('business.division')}</span>
                  <span className="text-forest/75 font-body font-semibold capitalize">
                    {line.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
