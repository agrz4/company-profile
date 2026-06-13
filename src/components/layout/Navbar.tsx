import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '../../assets/img/logo.png';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'business', label: t('nav.business') },
    { id: 'services', label: t('nav.services') },
    { id: 'warehouse', label: t('nav.warehouse') },
    { id: 'news', label: t('nav.news') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-forest/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="h-14 w-14 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src={logoImg} alt="PT Nusa Alam Komoditas Indonesia Logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-cream text-lg leading-tight tracking-wider">
                NUSA ALAM
              </span>
              <span className="text-[10px] text-earth font-body font-semibold tracking-widest uppercase">
                Komoditas Indonesia
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200 cursor-pointer ${activeSection === item.id
                    ? 'text-earth font-bold bg-white/5'
                    : 'text-cream/80 hover:text-cream hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Controls: Language and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 border border-cream/20 rounded-full text-cream/90 hover:bg-white/10 hover:text-cream transition text-xs font-body cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-earth" />
              <span className="font-semibold">{i18n.language === 'en' ? 'EN' : 'ID'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 rounded-full border-2 border-earth text-cream hover:bg-earth hover:text-charcoal font-body font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              {t('hero.ctaContact')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-1 border border-cream/20 rounded-full text-cream/95 hover:bg-white/10 text-xs font-body"
            >
              <Globe className="h-3.5 w-3.5 text-earth" />
              <span className="font-semibold">{i18n.language === 'en' ? 'EN' : 'ID'}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream hover:text-earth transition focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-forest/95 backdrop-blur-lg border-b border-white/10 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-body font-medium rounded-lg transition-colors cursor-pointer ${activeSection === item.id
                    ? 'text-earth bg-white/5 font-bold'
                    : 'text-cream/80 hover:text-cream hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-2.5 rounded-full bg-earth text-forest hover:bg-earth-light font-body font-semibold text-sm transition duration-300"
              >
                {t('hero.ctaContact')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
