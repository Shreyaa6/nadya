'use no memo';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Watermark parallax — slides up as you scroll into footer
  const watermarkY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.02, 0.04]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <footer ref={footerRef} className="bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
      
      {/* Cinematic Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.92, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-neutral-200 p-12 md:p-20 rounded-3xl text-center relative overflow-hidden shadow-sm"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            <motion.h2 
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6"
            >
              Let's connect <br />
              and talk
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm text-neutral-500 font-normal leading-relaxed mb-10 max-w-md"
            >
              Reach out to me directly on WhatsApp to explore Dubai off-market acquisitions, verify net yield calculations, or discuss your property goals.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/971500000000?text=Hi%20Nadya%2C%20I%20would%20like%20to%20connect%20and%20talk%20about%20Dubai%20real%20estate.', '_blank')}
              className="inline-flex items-center space-x-2 bg-black hover:bg-neutral-800 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Let's Chat</span>
            </motion.button>

          </div>
        </motion.div>
      </div>

      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-t border-neutral-200 pt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          
          {/* Logo & Brief */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-lg font-bold tracking-tight text-neutral-900">NADYA</span>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-semibold border-l border-neutral-200 pl-2">Advisory</span>
            </div>
            <p className="text-xs text-neutral-500 font-normal max-w-sm leading-relaxed">
              My discretionary real estate advisory practice caters to global citizens seeking to protect wealth and invest strategically in Dubai's premier residential sectors.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Contact Office</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-600">
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>Burj Khalifa District, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <a href="mailto:nadya@nadyadubai.com" className="hover:text-black transition-colors">nadya@nadyadubai.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                <a href="https://wa.me/971500000000" className="hover:text-black transition-colors">+971 50 000 0000</a>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Privacy & Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-neutral-400 gap-6 relative z-10"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>© {currentYear} Nadya Real Estate. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <a href="#privacy" className="hover:text-black transition-colors font-semibold">Privacy Policy</a>
          </div>
          
          <div className="max-w-md text-center md:text-right leading-relaxed font-normal">
            Disclaimer: Investment outcomes depend on market conditions and should be evaluated with updated financial and legal guidance.
          </div>
        </motion.div>
      </div>

      {/* Animated Watermark Background — scroll-linked parallax */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity, scale: watermarkScale }}
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 text-[22vw] font-extrabold tracking-[0.05em] text-neutral-900 select-none pointer-events-none z-0 leading-none uppercase"
      >
        NADYA
      </motion.div>
    </footer>
  );
}
