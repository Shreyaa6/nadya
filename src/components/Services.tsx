import { motion } from 'framer-motion';
import { Home, TrendingUp, Shield, BarChart3, Layers, Key } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Property Selection for Living',
      description: 'Find homes that match your lifestyle, location preferences, and long-term family comfort, ensuring a sound lifestyle investment.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Property Advisory',
      description: 'Identify properties with strong rental liquidity, robust demand, capital appreciation potential, and clear strategic exit options.'
    },
    {
      icon: Shield,
      title: 'Capital Preservation Strategy',
      description: 'Choose real estate assets designed to shelter and protect wealth within Dubai’s stable, tax-efficient, and globally connected market.'
    },
    {
      icon: BarChart3,
      title: 'ROI & Market Analysis',
      description: 'Understand real numbers before buying—including projected net rental yield, service charges, maintenance reserve costs, and resale liquidity.'
    },
    {
      icon: Layers,
      title: 'Developer & Project Comparison',
      description: 'Review premium developer track records, construction quality, historical delay rates, payment plan values, and location fundamentals.'
    },
    {
      icon: Key,
      title: 'End-to-End Buying Support',
      description: 'Comprehensive guidance from initial consultation and property viewing to negotiation, DLD registration, handover, and keys.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };


  return (
    <section id="services" className="py-24 md:py-32 bg-luxury-dark relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-muted/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-luxury-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Area */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
            Tailored Advisory Services
          </h2>
          <p className="text-sm md:text-base text-ivory/60 font-light leading-relaxed">
            Every client's objective is unique. I align my services to deliver rigorous, data-driven solutions for residency, income, and legacy preservation.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card glass-card-hover p-8 rounded-sm relative flex flex-col h-full group"
              >
                {/* Thin gold border glow effect */}
                <div className="absolute inset-0 border border-gold-muted/0 group-hover:border-gold-muted/15 rounded-sm transition-all duration-500" />
                
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-sm bg-gold-muted/5 border border-gold-muted/15 flex items-center justify-center mb-6 group-hover:bg-gold-muted/10 group-hover:border-gold-muted/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gold-muted group-hover:text-gold-bright transition-colors duration-300" />
                </div>

                <h3 className="text-lg md:text-xl font-serif text-ivory mb-4 tracking-wide group-hover:text-gold-light transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-xs md:text-sm text-ivory/60 font-light leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Micro detail line */}
                <div className="w-0 h-[1px] bg-gold-muted/40 mt-8 group-hover:w-12 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
