'use no memo';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1200); // Shorter, cleaner loading duration for premium UX
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-neutral-900"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-extrabold tracking-[0.2em] text-neutral-900 mb-2"
            >
              NADYA
            </motion.div>
            
            {/* Brand descriptor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[9px] tracking-[0.3em] uppercase text-neutral-500 font-bold"
            >
              Private Property Advisory
            </motion.div>

            {/* Premium Minimalist Progress Bar */}
            <div className="w-[120px] h-[2px] bg-neutral-100 mt-6 overflow-hidden relative rounded-full">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                className="absolute top-0 bottom-0 w-1/2 bg-black"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
