'use no memo';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import nadiaImg from '../assets/nadia.png';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for the portrait
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Container with Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: -100, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <motion.div 
              style={{ y: imageY, rotate: imageRotate }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img 
                src={nadiaImg} 
                alt="Nadya - Dubai Private Real Estate Advisor" 
                className="w-full h-full object-cover object-top grayscale-[10%] transition-all duration-700 hover:scale-103 hover:grayscale-0"
              />
            </motion.div>

            {/* Float Experience Badge */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 120, damping: 12 }}
              className="absolute bottom-[-10px] right-[10px] md:right-[-15px] bg-white border border-neutral-200 shadow-md px-6 py-4 rounded-2xl z-20"
            >
              <span className="block text-2xl font-extrabold text-neutral-900 leading-none mb-1">08+</span>
              <span className="block text-[8px] tracking-widest text-neutral-400 font-bold uppercase">Years Experience</span>
            </motion.div>
          </motion.div>

          {/* Copy & Structured Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <motion.h2 
              initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-8"
            >
              I don't just broker deals.<br />
              <span className="text-neutral-900 underline decoration-neutral-200 underline-offset-8">I secure wealth.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-neutral-500 font-normal leading-relaxed"
            >
              <p className="font-serif italic text-lg text-neutral-800 mb-4">
                "My name is Nadya. I am a real estate expert in Dubai."
              </p>
              <p>
                Unlike traditional brokers, my private advisory is built on data-driven strategy and capital protection. I analyze transaction datasets, real net yields, and future resale liquidity to source high-growth properties across Dubai, guiding you from consultation to keys with absolute transparency.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
