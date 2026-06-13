import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Snowflake, Clipboard, Map, Shield } from 'lucide-react';

export function WarehouseLogistics() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section
      id="warehouse"
      ref={ref}
      className={`py-24 bg-cream text-charcoal transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Stat Badge (OceanVault style) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
              {t('warehouse.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest leading-tight">
              {t('warehouse.title')}
            </h2>
            <p className="text-sm font-body text-charcoal/70 leading-relaxed">
              {t('warehouse.subtitle')}
            </p>

            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl group border border-cream-dark/40">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Modern Cold Storage Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
              
              {/* Floating Stat Card (99% Secure Environment) */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-white flex items-center space-x-4">
                <div className="p-3 bg-forest text-earth rounded-xl">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-display font-bold text-forest block">
                    {t('warehouse.secureTitle')}
                  </span>
                  <span className="text-xs font-body font-semibold text-charcoal block">
                    {t('warehouse.secureSub')}
                  </span>
                  <span className="text-[10px] font-body text-charcoal/50 block">
                    {t('warehouse.secureDesc')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Logistics services (SRG & Cold Storage cards) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Service 1: SRG */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/30 hover:border-earth/20 transition group">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <div className="p-4 bg-forest text-earth rounded-2xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Clipboard className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-display font-bold text-forest">
                      {t('warehouse.systemTitle')}
                    </h3>
                    <span className="text-[10px] font-body text-earth uppercase font-bold bg-earth/10 px-2 py-0.5 rounded">
                      KBLI 52101
                    </span>
                  </div>
                  <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                    {t('warehouse.systemDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Cold Storage */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/30 hover:border-earth/20 transition group">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <div className="p-4 bg-forest text-earth rounded-2xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-display font-bold text-forest">
                      {t('warehouse.coldTitle')}
                    </h3>
                    <span className="text-[10px] font-body text-earth uppercase font-bold bg-earth/10 px-2 py-0.5 rounded">
                      KBLI 52102
                    </span>
                  </div>
                  <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                    {t('warehouse.coldDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Facility Scope */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/30 hover:border-earth/20 transition group">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5">
                <div className="p-4 bg-forest text-earth rounded-2xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Map className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-forest">
                    {t('warehouse.facilityTitle')}
                  </h3>
                  <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                    {t('warehouse.facilityDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
