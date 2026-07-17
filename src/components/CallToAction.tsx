import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export default function CallToAction() {
  // Video autoplay is handled via raw HTML injection for mobile reliability
  return (
    <section className="relative py-32 px-4 overflow-hidden border-t border-b border-gold-500/20 bg-dark-950">
      {/* Background Video (Forced autoplay via ref) */}
      <div className="absolute inset-0 z-0">
        <div dangerouslySetInnerHTML={{ __html: `
          <video 
            loop 
            muted 
            autoplay 
            playsinline 
            disablepictureinpicture
            class="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
          >
            <source src="/jailcelldoor.mp4" type="video/mp4" />
          </video>
        `}} />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950"></div>
        <div className="absolute inset-0 bg-dark-950/40"></div>
      </div>

      {/* Background line work override */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-10 scale-[1.5] mix-blend-screen" 
           style={{ maskImage: 'radial-gradient(circle at center, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="px-3 py-1 border border-gold-500/40 w-max text-[10px] uppercase tracking-[0.3em] font-bold text-gold-500">
            Immediate Release is a Call Away
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[1.1]">
            DO NOT LET YOUR LOVED ONE WAIT. <span className="text-gold-500">CALL OR TEXT US NOW, 24/7.</span>
          </h2>

          <div className="mt-12 flex justify-center w-full max-w-sm">
            <a
              href={siteConfig.phoneHref}
              className="relative overflow-hidden group bg-transparent border-2 border-gold-500 text-white px-10 py-5 font-black uppercase tracking-widest transition-all duration-300 text-sm text-center inline-block w-full"
            >
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Call {siteConfig.phoneDisplay}</span>
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
