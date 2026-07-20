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
                  className="card card-interactive relative overflow-hidden h-40 group"
                >
                  <img
                    src={`/counties/${c.slug}.jpg`}
                    alt={`${c.county} — ${c.seat}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/20" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <p className="text-white font-bold text-sm uppercase tracking-wide">{c.county}</p>
                    </div>
                    <p className="text-slate-300 text-xs mt-1 pl-6">{c.seat}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href={siteConfig.phoneHref} className="btn btn-primary btn-lg">
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
