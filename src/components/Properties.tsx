import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { propertiesData } from '../data/properties';
import { MapPin, TrendingUp, DollarSign, Calendar, Award } from 'lucide-react';

interface PropertiesProps {
  onRequestDetails: (propertyName: string, location: string) => void;
}

export default function Properties({ onRequestDetails }: PropertiesProps) {
  const [selectedPurpose, setSelectedPurpose] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  // Unique lists for filters
  const purposes = ['All', 'Living', 'Investment', 'Capital Preservation'];
  const locations = ['All', 'Dubai Marina', 'Downtown Dubai', 'Dubai Hills Estate', 'Palm Jumeirah'];

  // Filter logic
  const filteredProperties = propertiesData.filter((prop) => {
    const matchesPurpose = selectedPurpose === 'All' || prop.purpose === selectedPurpose || 
      (selectedPurpose === 'Living' && prop.title.includes('Beachfront')) || // Beachfront fits both
      (selectedPurpose === 'Investment' && prop.title.includes('Beachfront'));
      
    const matchesLocation = selectedLocation === 'All' || prop.location === selectedLocation;
    return matchesPurpose && matchesLocation;
  });

  return (
    <section id="properties" className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Decorative Light */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold-muted/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight">
              Liquid Real Estate Portfolio
            </h2>
          </div>
          <p className="text-sm text-ivory/60 font-light max-w-md leading-relaxed">
            A hand-picked selection of high-liquidity properties in primary zones. Wording is conservative; returns are subject to market factors.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col gap-6 mb-12 border-y border-gold-muted/10 py-8">
          {/* Purpose Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-sand mr-4">Filter by Objective:</span>
            {purposes.map((purpose) => (
              <button
                key={purpose}
                onClick={() => setSelectedPurpose(purpose)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 border cursor-pointer ${
                  selectedPurpose === purpose
                    ? 'bg-gold-muted text-luxury-black border-gold-muted font-medium'
                    : 'bg-transparent text-ivory/60 border-gold-muted/10 hover:border-gold-muted/30 hover:text-ivory'
                }`}
              >
                {purpose}
              </button>
            ))}
          </div>

          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-sand mr-4">Filter by Location:</span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 border cursor-pointer ${
                  selectedLocation === loc
                    ? 'bg-gold-muted text-luxury-black border-gold-muted font-medium'
                    : 'bg-transparent text-ivory/60 border-gold-muted/10 hover:border-gold-muted/30 hover:text-ivory'
                }`}
              >
                {loc === 'Dubai Hills Estate' ? 'Dubai Hills' : loc}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={prop.id}
                className="glass-card glass-card-hover rounded-sm overflow-hidden flex flex-col h-full group"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-gold-muted/10">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur-md border border-gold-muted/20 text-[9px] uppercase tracking-[0.2em] px-3.5 py-1.5 text-gold-muted rounded-sm">
                    {prop.purpose}
                  </span>
                </div>

                {/* Info Block */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-gold-muted/80 text-xs mb-3 font-light">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prop.location}</span>
                    <span className="text-white/10">•</span>
                    <span>{prop.type}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-ivory tracking-wide mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {prop.title}
                  </h3>

                  <p className="text-xs md:text-sm text-ivory/60 font-light leading-relaxed mb-8">
                    {prop.description}
                  </p>

                  {/* Financials / Metadata */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-gold-muted/10 pt-6 mb-8 mt-auto text-xs">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-sand mb-1">Starting Price</span>
                      <div className="flex items-center space-x-1.5 text-ivory font-medium">
                        <DollarSign className="w-3.5 h-3.5 text-gold-muted" />
                        <span>{prop.price}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-sand mb-1">Expected Net Yield</span>
                      <div className="flex items-center space-x-1.5 text-ivory font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-gold-muted" />
                        <span>{prop.yield}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-sand mb-1">Payment Plan</span>
                      <div className="flex items-center space-x-1.5 text-ivory font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-muted" />
                        <span>{prop.paymentPlan}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-sand mb-1">Liquidity Rating</span>
                      <div className="flex items-center space-x-1.5 text-ivory font-medium">
                        <Award className="w-3.5 h-3.5 text-gold-muted" />
                        <span>{prop.liquidity}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => onRequestDetails(prop.title, prop.location)}
                    className="w-full text-center border border-gold-muted/30 py-3.5 text-[10px] uppercase tracking-[0.2em] text-gold-muted group-hover:bg-gold-muted group-hover:text-luxury-black group-hover:border-gold-muted transition-all duration-500 rounded-sm font-semibold cursor-pointer"
                  >
                    Request Details & Private Pitch
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gold-muted/15 rounded-sm">
            <span className="text-xs text-sand uppercase tracking-widest block mb-2">No Properties Match Selection</span>
            <button 
              onClick={() => { setSelectedPurpose('All'); setSelectedLocation('All'); }}
              className="text-[10px] uppercase tracking-[0.15em] text-gold-muted underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Real Estate Wording Disclaimer */}
        <p className="text-[10px] text-center text-sand/50 leading-relaxed mt-16 max-w-2xl mx-auto">
          * Note: Financial numbers represent current market projections. Expected yield values are estimated based on prevailing developer rental rates and historical returns, subject to final contracts, unit parameters, and changing market conditions.
        </p>

      </div>
    </section>
  );
}
