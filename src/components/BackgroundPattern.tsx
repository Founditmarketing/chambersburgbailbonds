import { motion, useScroll, useTransform } from 'motion/react';

export default function BackgroundPattern() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500, 1000], [0.3, 0.5, 0.3]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-pattern w-[200vw] h-[200vh] -left-[50vw] -top-[50vh]"
      />
      {/* Decorative Lines and Pulses */}
      <motion.div 
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #c36222 1px, transparent 1px), linear-gradient(to bottom, #c36222 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      {/* Subtle vignettes to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_80%,#050505_100%)]" />
    </div>
  );
}
