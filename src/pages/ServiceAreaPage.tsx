import PageSEO from '../components/PageSEO';
import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { siteConfig, serviceAreaCounties } from '../data/siteConfig';

export default function ServiceAreaPage() {
  return (
    <>
      <PageSEO
        title="Service Area | Chambersburg Bail Bonds — Franklin County & Beyond"
        description="Based in Chambersburg, we serve Franklin County and neighboring communities across Pennsylvania, including Cumberland, Adams, York, Fulton, Perry, and more."
        canonical={`${siteConfig.baseUrl}/service-area`}
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
                Serving Franklin County <span className="text-gold-500">& Beyond</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Based in Chambersburg, we're ready to help across Franklin County and neighboring communities throughout Pennsylvania. Not sure if we cover your area? Just call — we can usually help or point you in the right direction.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreaCounties.map((c, idx) => (
                <motion.div
                  key={c.county}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                  className="bg-dark-900 border border-white/5 p-5 rounded-sm flex items-center gap-4 hover:border-gold-500/40 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">{c.county}</p>
                    <p className="text-slate-500 text-xs">{c.seat}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 bg-gold-500 text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors">
                <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
