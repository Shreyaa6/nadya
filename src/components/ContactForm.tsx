import { useState, useEffect } from 'react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  preferredProperty?: string;
  preferredLocation?: string;
  onClearPreference?: () => void;
}

export default function ContactForm({ preferredProperty, preferredLocation, onClearPreference }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync preferred property updates
  useEffect(() => {
    if (preferredProperty && preferredLocation) {
      setLocation(preferredLocation);
      setMessage(`I am interested in requesting private pitch details for the "${preferredProperty}" in ${preferredLocation}. Please provide the financial model and layout details.`);
    }
  }, [preferredProperty, preferredLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !budget || !purpose) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    
    // Simulating API submit
    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setBudget('');
    setPurpose('');
    setLocation('');
    setMessage('');
    
    if (onClearPreference) {
      onClearPreference();
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-luxury-black relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-muted/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
            Exclusive Access
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
            Initiate Consultation
          </h2>
          <p className="text-sm text-ivory/60 font-light leading-relaxed">
            Please provide your details below. Nadya will review your parameters and initiate a confidential consultation within 2 hours.
          </p>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card border border-gold-muted/30 p-8 md:p-12 rounded-sm text-center gold-glow mb-12"
            >
              <div className="w-16 h-16 rounded-full bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-gold-muted animate-bounce" />
              </div>
              <h3 className="text-2xl font-serif text-ivory tracking-wide mb-3">Request Received</h3>
              <p className="text-xs md:text-sm text-ivory/70 leading-relaxed max-w-md mx-auto mb-6">
                Your parameters have been logged securely. A private real estate advisory summary is being structured for you. Nadya will contact you via WhatsApp shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 border border-gold-muted/30 text-gold-muted hover:bg-gold-muted hover:text-luxury-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 rounded-sm cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Consultation Form */}
        {!submitted && (
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-sm border border-gold-muted/15 space-y-6">
            
            {/* Preferred property notification bar */}
            {preferredProperty && (
              <div className="bg-gold-muted/5 border border-gold-muted/20 px-4 py-3 rounded-sm flex items-center justify-between text-xs text-gold-light">
                <span>Selected Focus: <strong>{preferredProperty}</strong> in {preferredLocation}</span>
                <button
                  type="button"
                  onClick={onClearPreference}
                  className="text-[10px] uppercase tracking-[0.1em] text-sand hover:text-gold-muted underline cursor-pointer"
                >
                  Clear Selection
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-luxury-black/40 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-luxury-black/40 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@mercerinvest.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-luxury-black/40 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                />
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">Budget Range *</label>
                <select
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-luxury-black/60 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                >
                  <option value="" disabled>Select Budget Range</option>
                  <option value="AED 2M - 5M">AED 2,000,000 - AED 5,000,000</option>
                  <option value="AED 5M - 10M">AED 5,000,000 - AED 10,000,000</option>
                  <option value="AED 10M - 20M">AED 10,000,000 - AED 20,000,000</option>
                  <option value="AED 20M+">AED 20,000,000+ (Ultra High End)</option>
                </select>
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">Primary Objective *</label>
                <select
                  required
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-luxury-black/60 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                >
                  <option value="" disabled>Select Primary Objective</option>
                  <option value="Living">Lifestyle / Primary Residence</option>
                  <option value="Investment">Rental Income Yield</option>
                  <option value="Capital Preservation">Asset Capital Preservation</option>
                  <option value="Relocation">Family Relocation</option>
                </select>
              </div>

              {/* Preferred Location */}
              <div className="space-y-2">
                <label className="text-xs text-ivory/70 font-light block">Preferred Location (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Palm Jumeirah, Downtown, Dubai Marina"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-luxury-black/40 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs text-ivory/70 font-light block">Advisory Brief / Notes (Optional)</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your requirements or assets timeline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-luxury-black/40 border border-gold-muted/30 focus:border-gold-bright/60 text-ivory text-xs px-4 py-3.5 rounded-sm outline-none transition-colors resize-none"
              />
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gold-bright text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase hover:bg-deep-sand py-4 transition-all duration-300 rounded-sm cursor-pointer"
              >
                <span>Request Private Consultation</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <p className="text-[10px] text-center text-sand/40">
              * By submitting this request, you agree to the confidential transmission of your details under our private data security guidelines.
            </p>
          </form>
        )}
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/971500000000" // Placeholder phone number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-emerald-600/20 hover:scale-[1.04] transition-all duration-300 group border border-emerald-500/20 cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 fill-white text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-[10px] uppercase font-semibold tracking-[0.15em] hidden sm:inline">Speak with Nadya</span>
      </a>
    </section>
  );
}
