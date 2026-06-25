import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black text-ivory"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-serif tracking-[0.25em] text-gold-muted mb-4 font-light"
            >
              N A D Y A
            </motion.div>
            
            {/* Brand descriptor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xs tracking-[0.4em] uppercase text-gold-light/60 font-light"
            >
              Private Property Advisory
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="w-[180px] h-[1px] bg-gold-muted/10 mt-8 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold-muted to-transparent"
              />
            </div>
            
            {/* Dubai context */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-[-100px] text-[10px] tracking-[0.3em] uppercase text-sand"
            >
              DUBAI, UAE
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
