import { motion } from 'framer-motion';
import { Award, Compass, Shield, TrendingUp, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { icon: Compass, text: 'Market Analysis' },
    { icon: TrendingUp, text: 'ROI-Focused Deals' },
    { icon: Shield, text: 'End-to-End Guidance' },
    { icon: Award, text: 'Luxury & Investment Properties' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Image with Pinterest URL (No Dark Overlay) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/bb/70/dd/bb70dd9e6ce18a7123c6b79b088d2552.jpg')`,
            filter: 'brightness(0.96) contrast(0.98)',
          }}
        />
        {/* Soft bottom gradient to blend image into the light sand body below */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/35 to-transparent" />
        <div className="absolute inset-0 bg-radial-luxury" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-16 text-center flex flex-col items-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 bg-gold-muted/15 border border-gold-muted/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-bright animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-gold-bright">
            Dubai Real Estate Expert
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory tracking-wide leading-[1.1] mb-6 max-w-4xl"
        >
          Dubai Real Estate, <br className="hidden md:inline" />
          Curated for <span className="gold-gradient-text">Wealth, Lifestyle</span> & <span className="gold-gradient-text">Long-Term Value</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-ivory/80 font-light max-w-2xl leading-relaxed mb-12"
        >
          I help clients find liquid properties for living, investment, and capital preservation — backed by market analysis, real return calculations, and end-to-end guidance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gold-bright text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-deep-sand hover:text-white hover:shadow-lg hover:shadow-gold-bright/15 hover:scale-[1.02] transition-all duration-300 rounded-sm cursor-pointer"
          >
            Book a Private Consultation
          </button>
          
          <button
            onClick={() => onNavigate('properties')}
            className="px-8 py-4 border border-gold-muted/30 hover:border-gold-muted text-ivory hover:text-gold-bright text-xs tracking-[0.2em] uppercase bg-luxury-black/35 backdrop-blur-sm transition-all duration-300 rounded-sm cursor-pointer"
          >
            Explore Investment Opportunities
          </button>
        </motion.div>

        {/* Soft Animated Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-gold-muted/15 pt-10 w-full max-w-4xl"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="flex flex-col items-center p-3 rounded-md transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gold-muted/10 flex items-center justify-center mb-3">
                  <IconComponent className="w-4 h-4 text-gold-muted" />
                </div>
                <span className="text-[11px] font-sans font-light tracking-widest text-ivory/80 uppercase text-center leading-normal">
                  {stat.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => onNavigate('about')}
      >
        <span className="text-[9px] tracking-[0.25em] text-sand uppercase mb-2">Scroll to discover</span>
        <ChevronDown className="w-4 h-4 text-gold-muted/60" />
      </motion.div>
    </section>
  );
}
