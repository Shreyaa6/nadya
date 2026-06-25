import { ArrowUpRight, Mail, MessageSquare, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black relative overflow-hidden">
      {/* 1. Cinematic Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-gold-muted/15 relative z-10">
        <div className="glass-card border border-gold-muted/20 p-12 md:p-20 rounded-sm text-center relative overflow-hidden gold-glow bg-radial-luxury">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            <span className="text-[10px] tracking-[0.35em] text-gold-muted uppercase mb-4 block font-medium">
              Take the Next Step
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide leading-tight mb-6">
              Your Dubai Property Decision Should Feel Clear, Calculated, and Confident.
            </h2>
            
            <p className="text-xs md:text-sm text-ivory/60 font-light leading-relaxed mb-10">
              Whether you are buying for lifestyle, income, or capital preservation, Nadya helps you choose with strategy — not guesswork.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2.5 bg-gold-muted text-luxury-black font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-bright px-8 py-4 transition-all duration-300 rounded-sm cursor-pointer"
            >
              <span>Book Your Private Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 border-t border-white/[0.03] pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Brief */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex flex-col cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-xl font-serif tracking-[0.2em] font-light text-ivory">NADYA</span>
              <span className="text-[8px] tracking-[0.35em] text-sand uppercase -mt-0.5">Private Advisory</span>
            </div>
            <p className="text-xs text-ivory/50 font-light max-w-sm leading-relaxed">
              Discretionary real estate advisory services catering to global citizens seeking to protect wealth and invest strategically in Dubai's premier residential sectors.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold-muted font-medium">Contact Office</h4>
            <ul className="space-y-2.5 text-xs font-light text-ivory/70">
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-sand" />
                <span>Burj Khalifa District, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-sand" />
                <a href="mailto:nadya@nadyadubai.com" className="hover:text-gold-muted transition-colors">nadya@nadyadubai.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-sand" />
                <a href="https://wa.me/971500000000" className="hover:text-gold-muted transition-colors">+971 50 000 0000</a>
              </li>
            </ul>
          </div>

          {/* Social Handles */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold-muted font-medium">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-sm bg-white/[0.03] hover:bg-gold-muted/10 border border-white/[0.05] hover:border-gold-muted/30 flex items-center justify-center text-ivory hover:text-gold-muted transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-sm bg-white/[0.03] hover:bg-gold-muted/10 border border-white/[0.05] hover:border-gold-muted/30 flex items-center justify-center text-ivory hover:text-gold-muted transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* 3. Privacy, Copyright & Legal Disclaimer */}
        <div className="border-t border-white/[0.03] pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-sand/40 gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>© {currentYear} Nadya Real Estate. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <a href="#privacy" className="hover:text-gold-muted transition-colors">Privacy Policy</a>
          </div>
          
          <div className="max-w-md text-center md:text-right leading-relaxed font-light">
            Disclaimer: This website provides general real estate advisory information. Investment outcomes depend on market conditions and should be evaluated with updated financial and legal guidance.
          </div>
        </div>
      </div>
    </footer>
  );
}
