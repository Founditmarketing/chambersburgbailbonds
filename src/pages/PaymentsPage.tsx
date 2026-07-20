import PageSEO from '../components/PageSEO';
import { motion } from 'motion/react';
import { Banknote, CreditCard, CalendarClock, Phone, MessageSquare } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

const methods = [
  { icon: Banknote, title: 'Cash', desc: 'Accepted in person.' },
  { icon: CreditCard, title: 'Card', desc: 'Visa, Mastercard, and major debit cards accepted.' },
  { icon: CalendarClock, title: 'Payment Plan', desc: 'Flexible plans available with approval. Call to discuss.' },
];

export default function PaymentsPage() {
  return (
    <>
      <PageSEO
        title="Make a Payment | Chambersburg Bail Bonds"
        description="Payment options for Chambersburg Bail Bonds — cash, card, and flexible payment plans. All arrangements follow Pennsylvania regulations. Call (717) 746-9884."
        canonical={`${siteConfig.baseUrl}/payments`}
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
                Make a <span className="text-gold-500">Payment</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                We discuss all payment details upfront before any paperwork is signed — you'll always know the amount owed and when it's due. No hidden fees, no surprises.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 relative z-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {methods.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card p-8 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center rounded-sm mb-6 text-gold-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="card card-glow p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4 relative z-10">Ready to Pay or Set Up a Plan?</h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
                To make a payment or discuss your payment plan, please call us directly. All fees and payment arrangements follow Pennsylvania regulations, and everything is handled confidentially.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <a href={siteConfig.phoneHref} className="btn btn-primary btn-lg">
                  <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
                </a>
                <a href={siteConfig.smsHref} className="btn btn-outline btn-lg">
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
