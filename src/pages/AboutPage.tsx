import PageSEO from '../components/PageSEO';
import StructuredData from '../components/StructuredData';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen bg-dark-950">
      <PageSEO
        title="About | Chambersburg Bail Bonds — Franklin County, PA"
        description="A local team helping Franklin County families through difficult moments with dignity, speed, and honesty. 24/7 confidential bail bond service."
        canonical={`${siteConfig.baseUrl}/about`}
      />
      <StructuredData page="about" />
      <section className="relative pt-40 pb-12 md:pt-40 md:pb-16 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/gregsbailbondscoplights.jpeg')" }}
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
              Helping You When It <span className="text-gold-500">Matters Most</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              A local team dedicated to helping Franklin County families through difficult moments — with dignity, speed, and honesty. Need help right now? Call or text us 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-12 md:py-24 px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-slate-300 leading-relaxed"
            >
              <p className="text-lg">
                <strong className="text-white">{siteConfig.name}</strong> was founded on a simple principle: families going through an arrest deserve clear answers, honest guidance, and fast action — not confusion, pressure, or hidden costs. We're a local team that lives and works in this community, and we treat every client the way we'd want our own family treated.
              </p>

              <div className="card p-8 overflow-hidden mt-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none" />
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-gold-500 w-6 h-6" /> What Makes Us Different
                </h2>
                <p className="mb-6">
                  When you call, a real person answers — not a machine or a distant call center. We ask straightforward questions so we can move fast, explain your costs in plain English, and stay with you through every step until your loved one is home.
                </p>
                <p className="italic text-slate-400 border-l-2 border-gold-500 pl-4">
                  "Whether you're calling from a jail, a courtroom, or your kitchen table at 2am, we work quickly and respectfully — every single time."
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 flex items-center gap-3">
                  <MapPin className="text-gold-500 w-6 h-6" /> Local to Franklin County
                </h2>
                <p>
                  Based in Chambersburg, we know the local courts and facilities and how to work with them efficiently. We're ready to help across Franklin County and neighboring communities — and thanks to our mobile approach, help is always just a phone call away.{' '}
                  <Link to="/service-area" className="text-gold-500 hover:underline">See our full service area →</Link>
                </p>
              </div>
            </motion.div>

            {/* Sidebar / Stats */}
            <div className="h-full relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-32 space-y-6"
              >
                <div className="card p-8">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-6">What You Can Expect</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Clock className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">24/7 Availability, Including Holidays</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <ShieldCheck className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Transparent Fees — No Surprises</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <MapPin className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Local Franklin County Knowledge</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Respectful, Non-Judgmental Service</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                        <Award className="w-5 h-5 text-gold-500 group-hover:text-black" />
                      </div>
                      <span className="font-semibold tracking-wide text-base lg:text-lg">Confidential Handling, Always</span>
                    </li>
                  </ul>

                  <Link to="/why-choose-us" className="mt-8 inline-flex items-center gap-2 text-gold-500 text-xs uppercase tracking-widest font-bold border-b border-gold-500/40 hover:border-gold-500 transition-colors">
                    Why families choose us →
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}
