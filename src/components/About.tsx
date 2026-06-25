import { motion } from 'framer-motion';
import nadiaImg from '../assets/nadia.png';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold-muted/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-sand/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Container - Columns 1 to 5 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] p-3 border border-gold-muted/20 bg-luxury-dark rounded-sm overflow-hidden gold-glow">
              {/* Picture borders */}
              <div className="absolute inset-4 border border-gold-muted/10 pointer-events-none z-10" />
              
              <img 
                src={nadiaImg} 
                alt="Nadya - Dubai Real Estate Advisor" 
                className="w-full h-full object-cover object-top grayscale-[15%] transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
              
              {/* Fine corner marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold-muted/65" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold-muted/65" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold-muted/65" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold-muted/65" />
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-[-20px] right-[10px] md:right-[-25px] glass-card px-6 py-4 rounded-sm border border-gold-muted/20">
              <span className="block text-2xl font-serif text-gold-muted font-light leading-none mb-1">08+</span>
              <span className="block text-[8px] tracking-[0.25em] text-ivory/60 uppercase">Years Experience</span>
            </div>
          </motion.div>

          {/* Copy - Columns 6 to 12 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
              Private Property Advisor
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-8">
              A Strategic Partner in <br />
              <span className="gold-gradient-text italic">Dubai's Wealth Growth</span>
            </h2>

            <div className="space-y-6 text-sm md:text-base text-ivory/70 font-light leading-relaxed">
              <p className="font-serif italic text-lg text-deep-sand">
                “My name is Nadya. I am a real estate expert in Dubai.”
              </p>
              
              <p>
                Unlike traditional real estate brokers who focus solely on transactions, my practice is rooted in premium, private advisory. I specialize in identifying and capturing liquid properties tailored for living, investment, and capital preservation.
              </p>
              
              <p>
                Dubai's market is highly dynamic. To ensure your wealth is secure and growing, I carefully analyze transaction datasets, calculate real net rental returns, factor in maintenance and service fees, and evaluate future resale liquidity.
              </p>
              
              <p>
                From the moment we begin our first consultation to the viewing, negotiation, legal paperwork, and the day you receive your keys, I guide you step-by-step with absolute transparency and strategic foresight.
              </p>
            </div>

            {/* Signature Accent */}
            <div className="mt-10 pt-8 border-t border-gold-muted/15 flex items-center justify-between">
              <div>
                <span className="block text-sm tracking-[0.1em] text-ivory uppercase font-semibold">Nadya</span>
                <span className="text-xs text-sand font-light">Dubai Luxury Real Estate Consultant</span>
              </div>
              <span className="font-serif italic text-3xl md:text-4xl text-gold-muted opacity-80 select-none tracking-widest pl-4">
                Nadya
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
