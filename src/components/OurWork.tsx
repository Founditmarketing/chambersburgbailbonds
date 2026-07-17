import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight, Clock, CreditCard, MapPin, MessageSquare, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurWork() {
  const features = [
    { name: "24/7 Availability", icon: Clock, desc: "Day, night, weekends, holidays — we pick up." },
    { name: "Transparent Pricing", icon: ShieldCheck, desc: "No hidden fees, no surprises." },
    { name: "Local Expertise", icon: MapPin, desc: "We know Franklin County courts & facilities." },
    { name: "Flexible Payments", icon: CreditCard, desc: "Payment plans to fit your budget." },
    { name: "Clear Communication", icon: MessageSquare, desc: "Plain English — no legal jargon." },
    { name: "Respectful & Discreet", icon: Handshake, desc: "Dignity, compassion, and confidentiality." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-dark-950 relative overflow-hidden border-t border-white/5">
      {/* Background block on the LEFT */}
      <div className="absolute top-0 left-0 bottom-0 w-full xl:w-[45%] bg-gold-500 z-0 border-r border-dark-950/10">
        {/* Corner embellishments */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-dark-950/20 pointer-events-none"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-dark-950/20 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-dark-950/20 pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-dark-950/20 pointer-events-none"></div>
      </div>
      
      <div className="max-w-[90rem] mx-auto flex flex-col xl:flex-row gap-12 xl:gap-24 items-center">
        
        {/* Left Column: Intro & Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full xl:w-5/12 space-y-6 relative z-10 xl:pr-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-dark-950 leading-[0.9]">
              We'll Get <br/>
              <span className="text-white">Them Home</span>
            </h2>
          </div>

          <div className="w-20 h-px bg-dark-950/30" />

          <p className="text-dark-950/80 text-sm md:text-base leading-relaxed max-w-lg font-medium">
            When someone you love is locked up, every minute counts. We act fast to get them out — and we walk you through every step. 24/7, right here in Franklin County and the surrounding communities.
          </p>

          <div>
            <Link to="/faq" className="relative overflow-hidden group bg-transparent border-2 border-dark-950 text-dark-950 px-10 py-5 font-black uppercase tracking-widest transition-all duration-300 text-sm inline-flex items-center gap-2">
              <div className="absolute inset-0 w-full h-full bg-dark-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-gold-500 transition-colors duration-500 flex items-center gap-2">
                Got Questions?
                <ChevronRight className="w-5 h-5" />
              </span>
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-dark-950/40 group-hover:border-gold-500/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-dark-950/40 group-hover:border-gold-500/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Interactive Grid */}
        <div className="w-full xl:w-7/12 flex justify-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 xl:pl-8"
          >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative"
              >
                <Link to="/contact" className="block relative overflow-hidden border border-gold-500 bg-dark-900 py-5 px-6 cursor-pointer transition-colors duration-500 hover:border-white w-full h-full">
                  {/* Hover Reveal Fill */}
                  <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-dark-950 border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-dark-950/20 group-hover:bg-dark-950/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-gold-500 group-hover:text-dark-950 transition-colors duration-500" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-black uppercase tracking-widest text-white text-sm mb-1 group-hover:text-dark-950 transition-colors duration-500 leading-tight">
                        {feature.name}
                      </h3>
                      <p className="text-xs text-slate-400 group-hover:text-dark-950/70 transition-colors duration-500 leading-tight">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Interactive Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
                    <ChevronRight className="w-5 h-5 text-dark-950" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
