import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionGrid from './SectionGrid';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2 seconds loading duration before starting to fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // 800ms exit animation duration
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1, x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark-950 overflow-hidden"
        >
          {/* Subtle grid backdrop + brand glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <SectionGrid drift />
            <div className="loader-glow" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white text-center block"
            >
              Chambersburg <span className="text-gold-500">Bail Bonds</span>
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mt-1 text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.4em] font-bold"
            >
              Franklin County, PA
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
