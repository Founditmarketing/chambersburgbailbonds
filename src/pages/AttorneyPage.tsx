import PageSEO from '../components/PageSEO';
import { motion } from 'motion/react';
import { Clock, Zap, MessagesSquare, MapPin, Handshake, CreditCard, Phone, MessageSquare } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

const offerings = [
  { icon: Clock, title: 'Round-the-Clock Availability', desc: 'Arrange client bail any time — day, night, weekends, and holidays.' },
  { icon: Zap, title: 'Expedited Bond Posting', desc: 'We post quickly once paperwork is complete, minimizing time in custody.' },
  { icon: MessagesSquare, title: 'Transparent Communication', desc: 'Clear, consistent updates for you and your client\'s family.' },
  { icon: MapPin, title: 'Local Court Expertise', desc: 'Familiarity with Franklin County courts and facilities.' },
  { icon: Handshake, title: 'Dignified Client Treatment', desc: 'Every client is treated with respect and discretion.' },
  { icon: CreditCard, title: 'Installment Options', desc: 'Payment arrangements for eligible clients.' },
];

export default function AttorneyPage() {
  return (
    <>
      <PageSEO
        title="Attorney Resources | Chambersburg Bail Bonds"
        description="Chambersburg Bail Bonds works closely with defense attorneys across Franklin County — fast, transparent, professional bail arrangement, 24/7. Call (717) 746-9884."
        canonical={`${siteConfig.baseUrl}/attorney-resources`}
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
                Attorney <span className="text-gold-500">Resources</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                We work closely with defense attorneys across Franklin County. We know your clients and their families are often anxious and confused during the bail process — so we prioritize clear communication, fast processing, and professional service.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-10 text-center">For Defense Attorneys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {offerings.map((o, idx) => {
                const Icon = o.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-dark-900 border border-white/5 p-8 rounded-sm"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center rounded-sm mb-5 text-gold-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-2">{o.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-dark-900 border border-gold-500/20 p-8 md:p-12 rounded-sm text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4 relative z-10">Arranging Bail for a Client?</h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
                Call our office and we'll handle the details quickly and professionally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a href={siteConfig.phoneHref} className="bg-gold-500 text-black px-8 py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors">
                  <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
                </a>
                <a href={siteConfig.smsHref} className="border border-white/20 text-white px-8 py-4 font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:border-gold-500 hover:text-gold-500 transition-colors">
                  <MessageSquare className="w-4 h-4" /> Text Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
