import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, FileSearch, Search, LifeBuoy, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Bail Bonds",
      description: "Fast, professional bail bonds for Franklin County and beyond.",
      icon: <ShieldCheck className="w-8 h-8 mb-4" />,
      link: "/services/bail-bonds"
    },
    {
      title: "Payment Plans",
      description: "Flexible financing to fit your budget. We work with you.",
      icon: <CreditCard className="w-8 h-8 mb-4" />,
      link: "/services/payment-plans"
    },
    {
      title: "Warrant Check",
      description: "Concerned about a warrant? Let us help you understand your options.",
      icon: <FileSearch className="w-8 h-8 mb-4" />,
      link: "/services/warrant-check"
    },
    {
      title: "Inmate Locator",
      description: "Find where someone is being held so we can act quickly.",
      icon: <Search className="w-8 h-8 mb-4" />,
      link: "/services/inmate-locator"
    },
    {
      title: "What To Do If Arrested",
      description: "Clear steps for families and individuals — stay calm, act smart.",
      icon: <LifeBuoy className="w-8 h-8 mb-4" />,
      link: "/services/what-to-do-if-arrested"
    },
    {
      title: "The Bail Process",
      description: "Understand how bail works, step by step, in plain language.",
      icon: <ListChecks className="w-8 h-8 mb-4" />,
      link: "/services/bail-process"
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">How We Can Help</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From bail bonds to step-by-step guidance, we're with you through the process — 24/7 across Franklin County and beyond.</p>
          <div className="w-20 h-px bg-gold-500/50 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={service.link}
                className="relative overflow-hidden flex flex-col p-8 border border-white/5 bg-dark-900 rounded-sm group cursor-pointer h-full w-full block"
              >
                <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                
                <div className="relative z-10 text-gold-500 group-hover:text-black transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-black transition-colors duration-500">{service.title}</h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-black/80 transition-colors duration-500">{service.description}</p>
                
                {/* Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-110"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
