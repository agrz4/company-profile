import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Stats() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section
      id="stats"
      ref={ref}
      className={`py-20 bg-cream transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 100% Quality - Dark Theme with Grid Lines */}
          <div className="relative overflow-hidden bg-forest text-cream rounded-3xl p-10 shadow-2xl flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-2 group border border-white/5">
            <div className="absolute inset-0 grid-lines-dark opacity-40 z-0" />
            <div className="relative z-10 space-y-4">
              <span className="text-7xl lg:text-8xl font-display font-bold text-earth tracking-tighter block group-hover:scale-105 transition-transform duration-300">
                {t('stats.scoreTitle')}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-wide text-cream">
                  {t('stats.scoreHeader')}
                </h3>
                <p className="text-sm text-cream/70 font-body leading-relaxed">
                  {t('stats.scoreDesc')}
                </p>
              </div>
            </div>
            <div className="relative z-10 w-8 h-1 bg-earth mt-6" />
          </div>

          {/* Card 2: 93% Delivery Time - Light Cream Theme */}
          <div className="relative overflow-hidden bg-cream-dark text-charcoal rounded-3xl p-10 shadow-xl flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-2 group border border-charcoal/5">
            <div className="absolute inset-0 grid-lines opacity-10 z-0" />
            <div className="relative z-10 space-y-4">
              <span className="text-7xl lg:text-8xl font-display font-bold text-forest tracking-tighter block group-hover:scale-105 transition-transform duration-300">
                {t('stats.deliveryTitle')}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-wide text-forest">
                  {t('stats.deliveryHeader')}
                </h3>
                <p className="text-sm text-charcoal/70 font-body leading-relaxed">
                  {t('stats.deliveryDesc')}
                </p>
              </div>
            </div>
            <div className="relative z-10 w-8 h-1 bg-forest mt-6" />
          </div>

          {/* Card 3: 48+ Ports - Dark Theme */}
          <div className="relative overflow-hidden bg-forest-dark text-cream rounded-3xl p-10 shadow-2xl flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-2 group border border-white/5">
            <div className="absolute inset-0 grid-lines-dark opacity-25 z-0" />
            <div className="relative z-10 space-y-4">
              <span className="text-7xl lg:text-8xl font-display font-bold text-earth tracking-tighter block group-hover:scale-105 transition-transform duration-300">
                {t('stats.portsTitle')}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-wide text-cream">
                  {t('stats.portsHeader')}
                </h3>
                <p className="text-sm text-cream/70 font-body leading-relaxed">
                  {t('stats.portsDesc')}
                </p>
              </div>
            </div>
            <div className="relative z-10 w-8 h-1 bg-earth mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
