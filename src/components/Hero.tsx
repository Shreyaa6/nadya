'use no memo';
import { motion } from 'framer-motion';

interface HeroProps {
  isPreloaderFinished: boolean;
}

export default function Hero({ isPreloaderFinished }: HeroProps) {
  if (!isPreloaderFinished) return null;

  return (
    <section id="home" className="relative pt-28 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        
        {/* Split Header Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]"
            >
              Find a place you <br />
              will call home
            </motion.h1>
          </div>

          <div className="lg:col-span-5 pt-2">
            <motion.p 
              initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
              whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-neutral-500 font-normal leading-relaxed"
            >
              I help you find the home that will be yours, calculated for capital growth, stability, and high yields. Explore off-market luxury units across Dubai's most liquid zones.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Modernist Asymmetric Full-Right Showcase Image */}
      <div className="w-full pl-6 md:pl-12 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+3rem))] pr-0">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[55vh] md:h-[75vh] rounded-l-[40px] overflow-hidden border-l border-y border-neutral-100 shadow-sm bg-neutral-50"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
