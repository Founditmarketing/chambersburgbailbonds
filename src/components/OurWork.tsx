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
            <Link to="/faq" className="btn btn-dark btn-lg">
              Got Questions?
              <ChevronRight className="w-5 h-5" />
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
              >
                <Link to="/contact" className="card card-interactive block py-5 px-6 cursor-pointer w-full h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-dark-950 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-black uppercase tracking-widest text-white text-sm mb-1 leading-tight">
                        {feature.name}
                      </h3>
                      <p className="text-xs text-slate-400 leading-tight">
                        {feature.desc}
                      </p>
                    </div>
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
