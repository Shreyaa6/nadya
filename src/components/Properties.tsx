'use no memo';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { propertiesData } from '../data/properties';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Properties() {
  const sectionRef = useRef<HTMLElement>(null);

  const closedDeals = [
    { id: 'deal-1', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', sizeClass: 'col-span-2 row-span-2' },
    { id: 'deal-2', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', sizeClass: 'col-span-1 row-span-1' },
    { id: 'deal-3', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', sizeClass: 'col-span-1 row-span-2' },
    { id: 'deal-4', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', sizeClass: 'col-span-1 row-span-1' },
  ];

  return (
    <section ref={sectionRef} id="properties" className="py-24 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION 1: CURATED PROPERTIES */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-2">
              New properties I curated
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 font-normal">
              A bespoke registry of off-market acquisitions in Dubai's premium sectors.
            </p>
          </motion.div>
        </div>

        {/* Unique Alternating Editorial Layout */}
        <div className="space-y-16 lg:space-y-24 mb-32">
          {propertiesData.map((prop, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={prop.id}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -80 : 80,
                  y: 40,
                  filter: 'blur(10px)',
                  scale: 0.95 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0,
                  filter: 'blur(0px)',
                  scale: 1 
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Showcase Block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm group"
                  >
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="absolute top-6 left-6 bg-white border border-neutral-200 text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 text-black rounded-full shadow-sm"
                    >
                      {prop.purpose}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Content & Details Block */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center space-x-2 text-neutral-400 text-xs mb-3"
                  >
                    <MapPin className="w-4 h-4 text-black animate-pulse" />
                    <span className="font-semibold text-neutral-900">{prop.location}</span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6"
                  >
                    {prop.title}
                  </motion.h3>

                  {/* Param Lines - staggered reveal */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3.5 border-t border-neutral-100 pt-6 mb-8 text-xs font-semibold"
                  >
                    {[
                      { label: 'Property Type', value: prop.type },
                      { label: 'Liquidity Index', value: prop.liquidity },
                      { label: 'Projected Return', value: prop.yield.split(' ')[0], bold: true },
                      { label: 'Payment Terms', value: prop.paymentPlan },
                    ].map((item, i) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex justify-between py-1 ${i < 3 ? 'border-b border-neutral-50' : ''}`}
                      >
                        <span className="text-neutral-400 font-normal">{item.label}</span>
                        <span className={`text-neutral-900 ${item.bold ? 'text-black font-extrabold' : ''}`}>{item.value}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pitch Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      type="button"
                      onClick={() => window.open(`https://wa.me/971500000000?text=Hi%20Nadya%2C%20I%20am%20interested%20in%20the%20private%20pitch%20for%20${encodeURIComponent(prop.title)}%20in%20${encodeURIComponent(prop.location)}.`, '_blank')}
                      className="inline-flex items-center justify-between bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm group"
                    >
                      <span>Request Private Pitch</span>
                      <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION 2: DEALS I'VE CLOSED */}
        <div className="border-t border-neutral-100 pt-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-2">
              Deals I've closed
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 font-normal">
              A private visual registry of successfully navigated acquisitions.
            </p>
          </motion.div>
        </div>

        {/* Premium Asymmetric Gallery Grid with Gaps and Rounded Cards */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[220px]"
        >
          {closedDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 60, scale: 0.85, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`relative overflow-hidden group bg-neutral-50 rounded-3xl border border-neutral-200 shadow-sm cursor-pointer ${deal.sizeClass}`}
            >
              <img
                src={deal.image}
                alt="Closed transaction property"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
