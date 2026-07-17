import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { DollarSign, Heart, Shield } from 'lucide-react';

export default function Reviews() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const values = [
    {
      title: "Transparent",
      text: "No hidden costs or surprises — ever.",
      icon: <DollarSign className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Compassion",
      text: "Respectful, non-judgmental help when it's hardest.",
      icon: <Heart className="w-5 h-5 text-gold-500" />
    },
    {
      title: "Commitment",
      text: "We stay with you until your loved one is home.",
      icon: <Shield className="w-5 h-5 text-gold-500" />
    }
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Call or Text Us",
      text: "Reach out 24/7 — we pick up day and night. Tell us who needs help and where they are."
    },
    {
      step: "02",
      title: "We Handle the Details",
      text: "We confirm the jail, bail amount, and paperwork, and explain your costs clearly. You get straight answers."
    },
    {
      step: "03",
      title: "Bond Posted, Release Begins",
      text: "We post the bond and walk you through every next step — including court dates — until release."
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header & Intro */}
        <div className="text-center mb-20 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
            3 Steps to <span className="text-gold-500">Release</span>
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-slate-300 tracking-tight">
            Simple, Fast, and Always on Your Side
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed pt-4">
            We keep the bail process as smooth and stress-free as possible — no confusing steps, no hidden surprises. Whether it's day or night, we're ready to help you get your loved one home fast.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Vertical Timeline */}
          <div className="relative pt-4" ref={timelineRef}>
            {/* Background Line */}
            <div className="absolute top-4 bottom-4 left-[23px] w-[2px] bg-white/10 z-0"></div>
            
            {/* Animated Scroll Line */}
            <motion.div 
              className="absolute top-4 bottom-4 left-[23px] w-[2px] bg-gold-500 z-0 origin-top"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>

            <div className="flex flex-col gap-28 relative z-10 pb-8">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-dark-950 border-4 border-gold-500 flex flex-shrink-0 items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(195,98,34,0.4)] group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-black uppercase tracking-widest text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Other Content */}
          <div className="flex flex-col gap-10 lg:pt-8">
            {/* Value Cards */}
            <div className="flex flex-col gap-6">
              {values.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-center gap-6 bg-dark-900 border border-white/5 p-8 relative group hover:border-gold-500/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-gold-500/10 flex flex-shrink-0 items-center justify-center rounded-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-lg mb-1">{item.title}</h4>
                    <p className="text-gold-500 text-sm font-bold">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Summary Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-900 border border-white/5 p-8 relative overflow-hidden mt-4"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
              <div className="space-y-4">
                <p className="text-gold-500 font-black uppercase tracking-widest text-sm">
                  24-Hour Bail Bonds. Flexible Payment Plans. Zero Hassle.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Real people answer the phone — not a machine. With honest, reliable service and local knowledge of Franklin County courts, we're the first call to make when someone's locked up.
                </p>
                <p className="text-white font-black text-2xl pt-2">
                  Let's get them home — the right way.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
