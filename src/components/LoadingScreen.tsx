import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
          {/* Faint Skyline at the bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.015 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 w-full pointer-events-none flex items-end justify-center"
          >
            <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-auto min-h-[25vh] max-h-[40vh]">
              <path fill="currentColor" d="M0,200 L0,150 L30,150 L30,110 L60,110 L60,170 L90,170 L90,80 L130,80 L130,140 L160,140 L160,70 L185,30 L210,70 L210,120 L250,120 L250,30 L300,30 L300,100 L340,100 L340,70 L390,70 L390,130 L430,130 L430,60 L455,10 L480,60 L480,90 L530,90 L530,40 L580,40 L580,140 L620,140 L620,60 L670,60 L670,110 L710,110 L710,60 L735,20 L760,60 L760,130 L810,130 L810,70 L860,70 L860,100 L910,100 L910,50 L935,10 L960,50 L960,160 L1000,160 L1000,200 Z" className="text-white" />
            </svg>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white text-center block"
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
