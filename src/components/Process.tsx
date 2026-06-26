import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Private Consultation',
      desc: 'Understand your goals: lifestyle, rental yield focus, wealth preservation, or tax diversification.'
    },
    {
      num: '02',
      title: 'Market & Property Shortlist',
      desc: 'Receive curated properties based on liquidity analysis, premier developers, and exit potential.'
    },
    {
      num: '03',
      title: 'Financial Analysis',
      desc: 'Perform stress-testing on yields, service fee audits, and projected appreciation timelines.'
    },
    {
      num: '04',
      title: 'Viewings & Negotiation',
      desc: 'Coordinate viewings in Dubai or secure virtual tours. Negotiate terms directly with sellers or developers.'
    },
    {
      num: '05',
      title: 'Documentation & Purchase',
      desc: 'Complete reservation agreements, DLD fee escrow clearances, and legal power of attorney drafts.'
    },
    {
      num: '06',
      title: 'Handover & Keys',
      desc: 'Snagging review, title deed acquisition, key collection, and property management onboarding.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };


  return (
    <section id="process" className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Decorative center line accent */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-b from-gold-muted/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Area */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
            Strategic Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
            The Realtor Journey
          </h2>
          <p className="text-sm md:text-base text-ivory/60 font-light leading-relaxed">
            A precise, risk-mitigated process structured to guide you from initial inquiry to secure asset possession.
          </p>
        </div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-sm relative group flex flex-col justify-between hover:border-gold-muted/25 transition-all duration-300"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-muted font-mono font-medium">Step</span>
                  <span className="text-4xl font-serif font-extralight text-gold-muted/30 group-hover:text-gold-muted transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-serif text-ivory tracking-wide mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-xs md:text-sm text-ivory/60 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Connector line for design details */}
              <div className="w-8 h-[1px] bg-gold-muted/10 group-hover:bg-gold-muted/30 transition-colors duration-300 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
