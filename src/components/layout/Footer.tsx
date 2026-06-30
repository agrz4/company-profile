import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import logoImg from '../../assets/img/logo.png';

export function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (id: string) => {
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
    <footer className="bg-forest-dark border-t border-white/10 text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="h-14 w-14 flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="PT Nusa Alam Komoditas Indonesia Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display font-bold text-cream text-lg leading-tight tracking-wider">
                NUSA ALAM
              </span>
            </div>
            <p className="text-cream/60 font-body text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-cream/70 hover:text-earth hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-cream/70 hover:text-earth hover:bg-white/10 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-cream/70 hover:text-earth hover:bg-white/10 transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-earth font-display font-semibold text-lg mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2 font-body text-sm">
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'about', label: t('nav.about') },
                { id: 'business', label: t('nav.business') },
                { id: 'services', label: t('nav.services') },
                { id: 'warehouse', label: t('nav.warehouse') },
                { id: 'news', label: t('nav.news') },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-cream/60 hover:text-earth transition duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-earth font-display font-semibold text-lg mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3 font-body text-sm text-cream/75">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-earth shrink-0" />
                <span className="leading-normal">Jl. Letjen S. Parman No.28, RT.15/RW.5, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-5 w-5 text-earth shrink-0" />
                <span>+62 817-671-2525</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-5 w-5 text-earth shrink-0" />
                <span>info@ptnaki.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-earth font-display font-semibold text-lg mb-4">{t('contact.hours')}</h3>
            <p className="text-cream/60 font-body text-sm leading-relaxed">
              {t('contact.hoursVal')}
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/45 font-body">
          <p>© 2026 PT. Nusa Alam Komoditas Indonesia. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-cream transition">{t('footer.privacyPolicy')}</a>
            <a href="#terms" className="hover:text-cream transition">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
