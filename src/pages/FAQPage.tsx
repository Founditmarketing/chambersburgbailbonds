import PageSEO from '../components/PageSEO';
import StructuredData from '../components/StructuredData';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

const faqs = [
  {
    question: "How much does a bail bond cost?",
    answer: "In Pennsylvania, the bail bond premium is typically 10% of the total bail amount set by the court. That premium is the non-refundable fee for our service. We'll always explain your exact costs upfront — no hidden fees and no surprises."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. We understand bail is an unexpected expense, and not everyone has the full premium available right away. For those who qualify, we build flexible payment plans around your situation. We accept cash, credit and debit cards, and money orders."
  },
  {
    question: "How fast can someone be released?",
    answer: "Once bail is set and the bond is posted, release usually takes a couple of hours — sometimes longer, depending on how busy the facility is and the time of day. We work 24/7 to get the paperwork done and the bond posted as quickly as possible."
  },
  {
    question: "What information do I need to get started?",
    answer: "It helps to have the person's full legal name, date of birth, the jail or facility where they're being held (if known), and the charges (if known), plus your own contact information. If you're missing some of these, don't worry — we can help you locate the person and confirm their bail status."
  },
  {
    question: "Is my information kept private?",
    answer: "Absolutely. Every conversation and every detail you share with us is handled confidentially and without judgment. We understand how sensitive these situations are and treat your privacy and dignity as a priority."
  },
  {
    question: "What is a co-signer?",
    answer: "A co-signer (also called an indemnitor) is the person who signs the bail bond agreement and takes responsibility for making sure the defendant appears at all court dates. If the defendant fails to appear, the co-signer may be responsible for the full bond amount and any related costs."
  },
  {
    question: "Is collateral always required?",
    answer: "No. Not every bond requires collateral. Collateral is property or assets — such as a vehicle, real estate, or valuables — used to help secure a larger bond. We'll let you know whether it applies to your specific situation and explain everything clearly."
  },
  {
    question: "What happens if the defendant misses a court date?",
    answer: "Missing a court date is serious — it can result in the bail being revoked and a warrant being issued, and the co-signer may become responsible for the full bail amount. We help make sure you understand every court date and obligation so this doesn't happen."
  },
  {
    question: "Can you help if I'm not in Chambersburg?",
    answer: "Yes. We're based in Chambersburg but serve Franklin County and many surrounding counties across Pennsylvania. If your loved one is being held in another county, call us — we can often help or point you in the right direction."
  },
  {
    question: "Do you provide legal advice?",
    answer: "No. We're bail bond professionals, not attorneys, and nothing on this site is legal advice. For legal questions about a specific case, you should consult a licensed defense attorney. What we do is make the bail process fast, clear, and stress-free."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageSEO
        title="Bail Bond FAQ | Chambersburg Bail Bonds"
        description="Common questions about bail bonds in Franklin County, PA — costs, payment plans, co-signers, collateral, release times, and privacy. Answered in plain language."
        canonical={`${siteConfig.baseUrl}/faq`}
      />
      <StructuredData page="faq" />
      <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gregsbailbondsgavel.jpeg')" }}
          />
          <div className="absolute inset-0 bg-dark-950/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-30 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              You Have Questions.<br />
              <span className="text-gold-500">We Have Answers.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about the bail process in Franklin County? You're not alone. Here are the most common questions we receive — answered simply and clearly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-12 md:py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">

            {/* Main Content: FAQs Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-4"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card card-interactive overflow-hidden group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg text-white pr-8 group-hover:text-gold-500 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    <div className="text-slate-400 whitespace-pre-wrap leading-relaxed pt-4 border-t border-white/5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Sidebar: Still have questions? */}
            <div className="h-full relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                <div className="card card-glow p-8">
                  <HelpCircle className="w-10 h-10 text-gold-500 mb-6" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Still Have Questions?</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    If you didn't find the answer you were looking for, or you need immediate help with a bond, reach out. We're available 24/7 — call or text.
                  </p>

                  <div className="space-y-4">
                    <a href={siteConfig.phoneHref} className="card card-interactive flex items-center gap-4 group p-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">Call 24/7</p>
                        <p className="font-bold text-white group-hover:text-gold-500 transition-colors">{siteConfig.phoneDisplay}</p>
                      </div>
                    </a>
                    <a href={siteConfig.smsHref} className="card card-interactive flex items-center gap-4 group p-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-500">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">Prefer to text?</p>
                        <p className="font-bold text-white group-hover:text-gold-500 transition-colors">Text Us Anytime</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </main>
    </>
  );
}
