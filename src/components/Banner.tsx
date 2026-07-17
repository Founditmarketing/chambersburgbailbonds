import { Clock, Shield, Unlock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Banner() {
  const stats = [
    {
      icon: <Clock className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "24/7 Availability",
      desc: "Emergency dispatch around the clock"
    },
    {
      icon: <Shield className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Licensed & Bonded",
      desc: "Vetted professionals you can trust"
    },
    {
      icon: <Unlock className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Fast, Secure Release",
      desc: "Swift processing and protocols"
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-500" strokeWidth={2} />,
      title: "Local Coverage",
      desc: "Serving Franklin County & Beyond"
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const repeatedStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="relative w-full z-20 bg-dark-950 border-y border-white/5 overflow-hidden py-5">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        className="flex w-max"
      >
        {repeatedStats.map((stat, idx) => (
          <div key={idx} className="flex items-center pr-12 group cursor-default">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:border-gold-500/60 transition-colors bg-dark-900 relative">
                {/* Geometric Corner Embellishments */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gold-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gold-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-black uppercase tracking-widest whitespace-nowrap leading-tight mb-1">{stat.title}</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap leading-tight">{stat.desc}</p>
              </div>
            </div>
            
            {/* Separator Accent */}
            <div className="flex items-center ml-12 opacity-30">
              <div className="w-1 h-1 bg-gold-500 rotate-45"></div>
              <div className="w-12 h-px bg-gold-500/50"></div>
              <div className="w-1 h-1 bg-gold-500 rotate-45"></div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
