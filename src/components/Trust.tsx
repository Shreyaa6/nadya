import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Database, Compass, KeyRound, Handshake, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Trust() {
  const pillars = [
    { icon: ShieldCheck, title: 'Absolute Confidentiality', desc: 'Private client details and asset holdings are protected with strict discretionary standards.' },
    { icon: Database, title: 'Data-Backed Decisions', desc: 'No marketing hype. Audits are backed by DLD registry logs, local yields, and cost calculations.' },
    { icon: Compass, title: 'Unbiased Developer Audits', desc: 'Comparing projects across developers objectively to highlight schedule delays and build qualities.' },
    { icon: KeyRound, title: 'End-to-End Support', desc: 'Managing the entire sequence from transaction contracts and escrows to final handover checks.' },
    { icon: Handshake, title: 'Relational, Not Transactional', desc: 'Focused on long-term portfolio growth and retention rather than closing single transactions.' }
  ];

  const testimonials = [
    {
      quote: "Working with Nadya felt like having a private advisory partner, not a sales agent. She steered us away from high-commission projects that didn't fit our risk profile.",
      author: "H.R. Weber",
      role: "Capital Allocator, Zurich"
    },
    {
      quote: "Her financial modeling was accurate. She calculated net yield factoring in service fees and local utility variables, projecting our real returns before we signed the contract.",
      author: "Elena Rostov",
      role: "Portfolio Investor, Vienna"
    },
    {
      quote: "Nadya managed our Palm Jumeirah acquisition from Europe. The documentation, negotiation, escrow payments, and snagging inspection were handled flawlessly in our absence.",
      author: "Marcus & Sarah Sterling",
      role: "HNIs, London"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-luxury-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-muted/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Pillars (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
                Pillars of Practice
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
                A Discretionary <br />
                Advisory Approach
              </h2>
              <p className="text-xs md:text-sm text-ivory/60 font-light max-w-lg leading-relaxed">
                Traditional brokerage is transaction-driven. Private advisory is trust-driven. I operate under strict operational pillars to protect capital and build lasting relationships.
              </p>
            </div>

            {/* Pillar Cards */}
            <div className="space-y-4 pt-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    key={index}
                    className="flex space-x-4 p-4 border border-gold-muted/15 hover:border-gold-muted/30 rounded-sm transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-sm bg-gold-muted/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold-bright" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif text-ivory tracking-wide mb-1">{pillar.title}</h4>
                      <p className="text-xs text-ivory/60 leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Testimonials Slider (5 Cols) */}
          <div className="lg:col-span-5 h-full lg:sticky lg:top-32">
            <div className="glass-card border border-gold-muted/15 p-8 md:p-10 rounded-sm relative overflow-hidden gold-glow flex flex-col justify-between h-[360px]">
              
              {/* Quote Mark */}
              <div className="text-gold-muted/20 absolute top-6 right-6">
                <Quote className="w-16 h-16 transform scale-x-[-1]" />
              </div>

              {/* Slider Content */}
              <div className="relative z-10 flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <p className="text-xs md:text-sm text-ivory/80 leading-relaxed font-light italic">
                      “{testimonials[activeIndex].quote}”
                    </p>
                    <div>
                      <span className="block text-sm font-serif text-gold-muted tracking-wider">
                        {testimonials[activeIndex].author}
                      </span>
                      <span className="text-[10px] text-sand uppercase tracking-wider block mt-0.5">
                        {testimonials[activeIndex].role}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between border-t border-gold-muted/10 pt-6 mt-6">
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-[3px] rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'w-6 bg-gold-muted' : 'w-2 bg-gold-muted/20'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 border border-gold-muted/30 rounded-sm hover:border-gold-bright hover:text-gold-bright transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 border border-gold-muted/30 rounded-sm hover:border-gold-bright hover:text-gold-bright transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
