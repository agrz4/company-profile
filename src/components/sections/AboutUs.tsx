import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { managementTeam } from '../../data/management';
import { ShieldCheck, Eye, Target, User } from 'lucide-react';

export function AboutUs() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  
  const { ref: sectionRef, isRevealed: isSectionRevealed } = useScrollReveal(0.1);
  const { ref: visionRef, isRevealed: isVisionRevealed } = useScrollReveal(0.1);
  const { ref: teamRef, isRevealed: isTeamRevealed } = useScrollReveal(0.1);

  return (
    <section
      id="about"
      className="py-24 bg-cream text-charcoal overflow-hidden border-t border-cream-dark/50"
    >
      {/* 1. Core Profile & Story */}
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isSectionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Label & Title */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
              {t('about.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest leading-tight">
              {t('about.title')}
            </h2>
          </div>

          {/* Right Side: Detailed Descriptions */}
          <div className="lg:col-span-8 space-y-6 font-body text-charcoal/80 text-base leading-relaxed">
            <p className="text-xl text-forest font-medium leading-relaxed font-display">
              {t('about.subtitle')}
            </p>
            <p>{t('about.desc1')}</p>
            <p>{t('about.desc2')}</p>
          </div>
        </div>
      </div>

      {/* 2. Vision, Mission & Core Values */}
      <div
        ref={visionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 transition-all duration-1000 delay-200 ${
          isVisionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-cream-dark/50 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 hover:shadow-lg transition">
            <div className="p-4 bg-earth/10 text-earth rounded-2xl shrink-0">
              <Eye className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-semibold text-forest">
                {t('about.vision')}
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-cream-dark/50 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 hover:shadow-lg transition">
            <div className="p-4 bg-forest/10 text-forest rounded-2xl shrink-0">
              <Target className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-semibold text-forest">
                {t('about.mission')}
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Corporate Legitimacy / Legalitas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-forest text-cream rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 grid-lines-dark opacity-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-earth block">
                {t('about.legalTitle')}
              </span>
              <h3 className="text-3xl font-display font-semibold">
                {t('about.legalSubtitle')}
              </h3>
              <p className="text-sm font-body text-cream/70 leading-relaxed max-w-3xl">
                {t('about.legalDesc')}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
                <ShieldCheck className="h-8 w-8 text-earth shrink-0" />
                <div className="text-left">
                  <span className="text-xs text-cream/60 font-body block">Status Regulasi</span>
                  <span className="text-sm font-bold text-cream font-body">100% Terverifikasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Management Team */}
      <div
        ref={teamRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 transition-all duration-1000 ${
          isTeamRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
            {t('about.managementTitle')}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-body text-sm">
            {t('about.managementSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/30 text-center hover:shadow-md hover:border-earth/30 transition-all duration-300 flex flex-col items-center space-y-4"
            >
              {member.image ? (
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-earth shadow-md mb-2">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center text-forest mb-2">
                  <User className="h-8 w-8 text-earth" />
                </div>
              )}
              
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-forest font-body leading-tight">
                  {member.name}
                </h4>
                <span className="text-xs text-earth font-semibold uppercase tracking-wider block">
                  {isEn ? member.roleEn : member.roleId}
                </span>
              </div>
              
              {(isEn ? member.bioEn : member.bioId) && (
                <p className="text-sm text-charcoal/70 font-body leading-relaxed pt-2 border-t border-cream-dark/30 w-full">
                  {isEn ? member.bioEn : member.bioId}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
