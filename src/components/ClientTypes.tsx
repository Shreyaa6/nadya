import { motion } from 'framer-motion';
import { UserCheck, Landmark, Briefcase, PlaneTakeoff, GraduationCap, Coins } from 'lucide-react';

export default function ClientTypes() {
  const clients = [
    {
      icon: UserCheck,
      type: 'Luxury End-Users',
      desc: 'Discerning buyers searching for secondary or primary residences that offer unparalleled style, location comfort, and privacy.'
    },
    {
      icon: Coins,
      type: 'Yield-Focused Investors',
      desc: 'Active investors requiring strict rental yield modeling, high-occupancy profiles, and structured property exits.'
    },
    {
      icon: Landmark,
      type: 'HNIs Preserving Capital',
      desc: 'Ultra-high-net-worth clients seeking to anchor wealth in premium, low-depreciation residential portfolios.'
    },
    {
      icon: PlaneTakeoff,
      type: 'International Buyers',
      desc: 'Global wealth allocators seeking cross-border diversification and clear, virtual acquisition capabilities.'
    },
    {
      icon: GraduationCap,
      type: 'Relocating Families',
      desc: 'Parents and professionals prioritizing gated security, luxury park views, and close proximity to elite academies.'
    },
    {
      icon: Briefcase,
      type: 'Entrepreneurs & Owners',
      desc: 'Business founders seeking to transition corporate cash flow distributions into stable, cash-yielding real estate.'
    }
  ];

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-muted/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
            Client Profiles
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
            Who I Guide
          </h2>
          <p className="text-sm md:text-base text-ivory/60 font-light leading-relaxed">
            I work with a select circle of clients worldwide, adapting my real estate services to match their unique lifestyle and financial imperatives.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                key={index}
                className="glass-card p-8 rounded-sm hover:border-gold-muted/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-9 h-9 rounded-sm bg-gold-muted/5 border border-gold-muted/15 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-gold-muted" />
                  </div>
                  <h3 className="text-base md:text-lg font-serif text-ivory tracking-wide">{client.type}</h3>
                </div>
                <p className="text-xs md:text-sm text-ivory/60 leading-relaxed font-light">{client.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
