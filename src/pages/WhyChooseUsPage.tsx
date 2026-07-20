import PageSEO from '../components/PageSEO';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, MapPin, Handshake, Zap, CreditCard, MessagesSquare, LifeBuoy } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

const reasons = [
  { icon: Clock, title: '24/7 Availability', desc: 'Day, night, weekends, holidays — we pick up when you call.' },
  { icon: ShieldCheck, title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. You know your costs upfront.' },
  { icon: MapPin, title: 'Local Expertise', desc: 'We know Franklin County courts and processes inside and out.' },
  { icon: Handshake, title: 'Respectful & Discreet', desc: 'Every interaction is handled with dignity, compassion, and complete confidentiality.' },
  { icon: Zap, title: 'Fast Processing', desc: 'We post the bond immediately after paperwork is completed.' },
  { icon: CreditCard, title: 'Flexible Payment Options', desc: 'Payment plans and multiple payment methods available.' },
  { icon: MessagesSquare, title: 'Clear Communication', desc: 'We explain the process in plain English — no legal jargon.' },
  { icon: LifeBuoy, title: 'Ongoing Support', desc: 'We stay with you beyond bond posting, through court dates and conditions.' },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageSEO
        title="Why Choose Us | Chambersburg Bail Bonds"
        description="Why families choose Chambersburg Bail Bonds: 24/7 availability, transparent pricing, local Franklin County expertise, and respectful, confidential service."
        canonical={`${siteConfig.baseUrl}/why-choose-us`}
      />
      <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 px-4 overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto relative z-30 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                Why Families Choose <span className="text-gold-500">Us</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                An arrest is stressful enough. Here's what you can count on when you call {siteConfig.name}.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 relative z-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="card card-interactive p-8 flex items-start gap-5"
                >
                  <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center rounded-sm flex-shrink-0 text-gold-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-2">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
