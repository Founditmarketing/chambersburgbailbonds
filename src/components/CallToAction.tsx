import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600">
      {/* Depth vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="px-3 py-1 border border-white/40 w-max text-[10px] uppercase tracking-[0.3em] font-bold text-white">
            Immediate Release is a Call Away
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[1.1]">
            Do not let your loved one wait. <span className="text-dark-950">Call or text us now, 24/7.</span>
          </h2>

          <div className="mt-12 flex justify-center w-full max-w-sm">
            <a
              href={siteConfig.phoneHref}
              className="btn btn-dark btn-lg inline-block w-full"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
