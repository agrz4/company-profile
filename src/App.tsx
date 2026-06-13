import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { AboutUs } from './components/sections/AboutUs';
import { BusinessLines } from './components/sections/BusinessLines';
import { Services } from './components/sections/Services';
import { WarehouseLogistics } from './components/sections/WarehouseLogistics';
import { ExportMap } from './components/sections/ExportMap';
import { Testimonials } from './components/sections/Testimonials';
import { NewsSection } from './components/sections/NewsSection';
import { ContactForm } from './components/sections/ContactForm';
import { Footer } from './components/layout/Footer';
import { FloatingWA } from './components/layout/FloatingWA';
import { ScrollToTop } from './components/layout/ScrollToTop';

export default function App() {
  // Define sections monitored by navbar active-highlight hook
  const activeSection = useActiveSection([
    'home',
    'about',
    'business',
    'services',
    'warehouse',
    'news',
    'contact'
  ]);

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col justify-between selection:bg-earth selection:text-forest-dark overflow-x-hidden antialiased">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Stats />
        <AboutUs />
        <BusinessLines />
        <Services />
        <WarehouseLogistics />
        <ExportMap />
        <Testimonials />
        <NewsSection />
        <ContactForm />
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Floating Helpers */}
      <FloatingWA />
      <ScrollToTop />
    </div>
  );
}
