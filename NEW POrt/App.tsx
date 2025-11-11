import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <PrinciplesSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <div id="contact">
        <ContactSection />
      </div>
      
      <footer className="py-16 px-8 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-sm text-gray-400">© 2025 SwiftNet Solutions</p>
            <p className="text-sm text-gray-400">Jamison Sanchez</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
