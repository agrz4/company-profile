import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Globe, RefreshCw, Smile } from 'lucide-react';

export function ExportMap() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal(0.1);

  return (
    <section
      id="export-map"
      ref={ref}
      className={`py-24 bg-forest text-cream relative overflow-hidden transition-all duration-1000 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-lines-dark opacity-10 z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-earth/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-earth/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/20 px-3.5 py-1.5 rounded-full inline-block border border-earth/30">
              {t('map.network')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              {t('map.title')}
            </h2>
          </div>
          <div className="lg:col-span-4 text-cream/70 font-body text-sm leading-relaxed">
            <p>{t('map.subtitle')}</p>
          </div>
        </div>

        {/* Trade Routes Map Visualization */}
        <div className="bg-forest-dark/40 border border-white/5 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden flex items-center justify-center min-h-[350px]">
          {/* SVG Dotted Map Representation */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto max-w-4xl text-cream/10 select-none fill-current"
            aria-label="World Map Export Routes"
          >
            {/* Dotted Continents background */}
            {/* North America */}
            <circle cx="150" cy="180" r="45" />
            <circle cx="200" cy="150" r="30" />
            {/* South America */}
            <circle cx="300" cy="380" r="50" />
            {/* Europe */}
            <circle cx="500" cy="140" r="40" />
            {/* Africa */}
            <circle cx="520" cy="300" r="60" />
            {/* Asia */}
            <circle cx="720" cy="160" r="75" />
            <circle cx="800" cy="220" r="50" />
            {/* Australia */}
            <circle cx="850" cy="400" r="40" />
            {/* Indonesia (Origin) */}
            <circle cx="730" cy="340" r="25" className="fill-earth/40 animate-ping duration-1000" />
            <circle cx="730" cy="340" r="12" className="fill-earth text-earth" />

            {/* Glowing Trade Routes (Bezier Curves from Indonesia cx=730 cy=340) */}
            {/* Route to Europe (Rotterdam) cx=500 cy=140 */}
            <path
              d="M 730 340 Q 615 240 500 140"
              fill="none"
              stroke="#C4873A"
              strokeWidth="2.5"
              strokeDasharray="5,5"
              className="animate-dash"
              opacity="0.8"
            />
            <circle cx="500" cy="140" r="6" className="fill-earth animate-pulse" />

            {/* Route to China/Japan cx=800 cy=160 */}
            <path
              d="M 730 340 Q 765 250 800 160"
              fill="none"
              stroke="#C4873A"
              strokeWidth="2.5"
              strokeDasharray="5,5"
              className="animate-dash"
              opacity="0.8"
            />
            <circle cx="800" cy="160" r="6" className="fill-earth animate-pulse" />

            {/* Route to USA West Coast cx=180 cy=160 */}
            <path
              d="M 730 340 Q 450 250 180 160"
              fill="none"
              stroke="#C4873A"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-dash"
              opacity="0.65"
            />
            <circle cx="180" cy="160" r="5" className="fill-earth animate-pulse" />

            {/* Route to Middle East cx=620 cy=240 */}
            <path
              d="M 730 340 Q 675 290 620 240"
              fill="none"
              stroke="#C4873A"
              strokeWidth="2.5"
              strokeDasharray="5,5"
              className="animate-dash"
              opacity="0.8"
            />
            <circle cx="620" cy="240" r="6" className="fill-earth animate-pulse" />

            {/* Route to Australia cx=850 cy=400 */}
            <path
              d="M 730 340 Q 790 370 850 400"
              fill="none"
              stroke="#C4873A"
              strokeWidth="2.5"
              strokeDasharray="5,5"
              className="animate-dash"
              opacity="0.8"
            />
            <circle cx="850" cy="400" r="6" className="fill-earth animate-pulse" />
          </svg>

          {/* Glowing dot label */}
          <div className="absolute bottom-4 left-6 flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-earth animate-ping" />
            <span className="text-[10px] text-earth font-body font-semibold uppercase tracking-widest">
              {t('map.originPort')}
            </span>
          </div>
        </div>

        {/* Highlight points bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-cream">
          {/* Point 1: Network Expansion */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-earth/10 text-earth rounded-2xl shrink-0 border border-earth/20">
              <Globe className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold">
                {t('map.network')}
              </h3>
              <p className="text-sm font-body text-cream/70 leading-relaxed">
                {t('map.networkDesc')}
              </p>
            </div>
          </div>

          {/* Point 2: Efficient Logistics */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-earth/10 text-earth rounded-2xl shrink-0 border border-earth/20">
              <RefreshCw className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold">
                {t('map.logistics')}
              </h3>
              <p className="text-sm font-body text-cream/70 leading-relaxed">
                {t('map.logisticsDesc')}
              </p>
            </div>
          </div>

          {/* Point 3: Customer Satisfaction */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-earth/10 text-earth rounded-2xl shrink-0 border border-earth/20">
              <Smile className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold">
                {t('map.satisfaction')}
              </h3>
              <p className="text-sm font-body text-cream/70 leading-relaxed">
                {t('map.satisfactionDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animation for routes */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
