'use no memo';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971500000000?text=Hi%20Nadya%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20Dubai%20real%20estate.', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        isScrolled ? 'border-neutral-200 shadow-sm py-3' : 'border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="text-lg font-bold tracking-tight text-neutral-900">
            NADYA
          </span>
          <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold border-l border-neutral-200 pl-2">
            Advisory
          </span>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-black text-white hover:bg-neutral-800 px-4 py-2 md:px-5 md:py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer inline-flex items-center space-x-1"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
