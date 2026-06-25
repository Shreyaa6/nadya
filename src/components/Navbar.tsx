import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About Nadya', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Properties', target: 'properties' },
    { name: 'Process', target: 'process' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <motion.nav
      initial={{ y: -60, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ left: '50%' }}
      className={`fixed top-6 z-40 w-[92%] max-w-5xl transition-all duration-500 border backdrop-blur-md ${
        isOpen ? 'rounded-[28px] py-6' : 'rounded-full py-3 md:py-3.5'
      } ${
        isScrolled
          ? 'bg-white/90 border-gold-muted/25 shadow-[0_12px_40px_rgba(179,155,130,0.12)]'
          : 'bg-luxury-black/60 border-gold-muted/15 shadow-[0_4px_20px_rgba(179,155,130,0.04)]'
      } px-6 md:px-8`}
    >
      <div className="flex flex-col w-full">
        {/* Main Row */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('home')} 
            className="flex flex-col cursor-pointer group"
          >
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-light text-ivory group-hover:text-gold-bright transition-colors duration-300">
              NADYA
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.35em] text-sand group-hover:text-gold-bright transition-colors duration-300 uppercase -mt-0.5">
              Private Advisory
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-[11px] uppercase tracking-[0.2em] text-ivory/70 hover:text-gold-bright transition-colors duration-300 relative py-1 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Consultation CTA (Pill Button) */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center space-x-2 border border-gold-bright/30 px-5 py-2 text-[9px] uppercase tracking-[0.2em] text-gold-bright hover:text-luxury-black hover:bg-gold-bright transition-all duration-500 rounded-full cursor-pointer font-semibold"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ivory hover:text-gold-bright transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Inside Capsule) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="pt-6 pb-2 flex flex-col space-y-4 border-t border-gold-muted/10 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => handleLinkClick(link.target)}
                    className="text-left text-xs uppercase tracking-[0.2em] text-ivory/80 hover:text-gold-bright transition-colors py-1 cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center space-x-2 border border-gold-bright px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gold-bright hover:bg-gold-bright hover:text-luxury-black transition-all duration-300 rounded-full cursor-pointer font-semibold"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
