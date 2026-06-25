import { motion } from 'framer-motion';
import { Building2, Landmark, Compass, Coins, Scale, Sparkles } from 'lucide-react';

export default function WhyDubai() {
  const points = [
    {
      icon: Landmark,
      title: 'Tax-Efficient Environment',
      desc: 'Enjoy 0% personal income tax, 0% capital gains tax, and tax residency avenues under extensive double-tax treaties.'
    },
    {
      icon: Coins,
      title: 'Strong Rental Demand',
      desc: 'Consistent population growth feeds a highly active leasing market, supporting yields far exceeding global averages.'
    },
    {
      icon: Sparkles,
      title: 'Luxury Lifestyle & Security',
      desc: 'Consistently ranked among the safest cities globally. Exceptional infrastructure, premium dining, and beach access.'
    },
    {
      icon: Building2,
      title: 'Branded Residences',
      desc: 'Dubai hosts the world’s highest concentration of elite hotel-managed residences, cementing capital security.'
    },
    {
      icon: Scale,
      title: 'Buyer-Friendly Regulations',
      desc: '100% foreign property ownership allowed. Straightforward transaction laws and escrow protection systems.'
    },
    {
      icon: Compass,
      title: 'Global Connectivity Hub',
      desc: 'Bridging the East and West. State-of-the-art airports connect Dubai to two-thirds of the world within an 8-hour flight.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-luxury-dark relative overflow-hidden">
      {/* Light glow overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-radial-luxury pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
            Market Context
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
            Why Capital Flows to Dubai
          </h2>
          <p className="text-sm md:text-base text-ivory/60 font-light leading-relaxed">
            Dubai continues to secure its position as the premier haven for private wealth preservation and liquid high-yield real estate investments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                key={index}
                className="glass-card p-8 rounded-sm hover:border-gold-muted/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-gold-muted/5 border border-gold-muted/15 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-gold-muted" />
                </div>
                <h3 className="text-lg font-serif text-ivory mb-3 tracking-wide">{point.title}</h3>
                <p className="text-xs md:text-sm text-ivory/60 leading-relaxed font-light">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
