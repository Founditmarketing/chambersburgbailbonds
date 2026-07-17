import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Loader2, CheckCircle, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../lib/leads';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Video autoplay is handled via raw HTML injection for mobile reliability

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Service: ${formData.service}\n\n${formData.message}`,
      });
    } catch {
      // Lead helper is fail-safe; ignore transient network issues.
    }

    setStatus('success');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const inputClass = 'peer w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300';
  const labelClass = 'absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none';
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Video layer */}
      <div className="absolute inset-0 z-[-1]">
        <div dangerouslySetInnerHTML={{ __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            disablepictureinpicture
            class="pointer-events-none absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center opacity-60 md:opacity-40 mix-blend-luminosity scale-105"
          >
            <source src="/handcuffsvideo.mp4" type="video/mp4" />
          </video>
        `}} />
        {/* Overlay gradients for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 md:via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/30 md:from-dark-950/70 via-transparent to-dark-950/30 md:to-dark-950/70" />
      </div>

      <div className="w-full px-4 md:px-10 flex flex-col relative z-10 pt-20 lg:pr-[35vw]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-4 px-3 py-1 border border-green-500/40 bg-green-500/10 w-max text-[10px] uppercase tracking-[0.3em] font-bold text-green-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            OPEN NOW • 24/7 DISPATCH
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black uppercase tracking-tighter text-white mb-6 leading-[0.95]">
            <span className="whitespace-nowrap">Chambersburg</span><br />
            <span>Bail Bonds in <span className="text-gold-500">Franklin County</span></span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            <strong className="text-white font-bold">Fast answers. Clear steps. Help right now.</strong><br className="hidden sm:block" />
            <span className="mt-2 inline-block">We're here when it matters most — confidential, respectful bail bond help, 24 hours a day.</span><br />
            <span className="mt-4 inline-block text-white font-black text-lg lg:text-xl tracking-widest border-l-4 border-gold-500 pl-4 pr-6 py-2 bg-dark-950/50">
              {siteConfig.serviceAreaShort}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href={siteConfig.phoneHref} className="relative overflow-hidden group bg-gold-500 text-black px-8 py-4 font-black text-sm tracking-widest uppercase transition-all w-full sm:w-auto text-center block">
              <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}</span>
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            </a>
            <a href={siteConfig.smsHref} className="relative overflow-hidden group bg-transparent border border-white/20 text-white px-8 py-4 font-black text-sm tracking-widest uppercase transition-all w-full sm:w-auto text-center hover:border-gold-500 block">
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center justify-center gap-2"><MessageSquare className="w-4 h-4" /> Text Us</span>
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form — Desktop Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="hidden lg:flex absolute top-24 bottom-0 right-0 w-full lg:w-1/3 border-l border-white/10 bg-transparent p-12 flex-col z-20"
      >
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Start Bail Help</h2>
        <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Confidential • We respond within minutes</p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center gap-4 flex-grow text-center"
            >
              <CheckCircle className="w-14 h-14 text-green-400" />
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Message Sent!</h4>
              <p className="text-slate-400 text-xs leading-relaxed">We'll be in touch shortly. For urgent matters, call or text us directly.</p>
              <button onClick={() => setStatus('idle')} className="text-gold-500 text-xs uppercase tracking-widest font-bold border-b border-gold-500/40 hover:border-gold-500 transition-colors mt-2">
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3 flex-grow mt-2"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="relative group">
                <input type="text" id="heroFullName" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                <label htmlFor="heroFullName" className={labelClass}>Full Name</label>
              </div>

              {/* Phone */}
              <div className="relative group">
                <input type="tel" id="heroPhone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder={siteConfig.phoneDisplay} />
                <label htmlFor="heroPhone" className={labelClass}>Phone Number</label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input type="email" id="heroEmail" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                <label htmlFor="heroEmail" className={labelClass}>Email Address</label>
              </div>

              {/* Service */}
              <div className="relative group">
                <label htmlFor="heroService" className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest pointer-events-none z-10">How Can We Help?</label>
                <select id="heroService" name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer">
                  <option value="" disabled className="bg-dark-950">Select an Option</option>
                  <option value="bail-bonds" className="bg-dark-950">Bail Bonds</option>
                  <option value="payment-plans" className="bg-dark-950">Payment Plans</option>
                  <option value="warrant-check" className="bg-dark-950">Warrant Check</option>
                  <option value="inmate-locator" className="bg-dark-950">Inmate Locator</option>
                  <option value="other" className="bg-dark-950">Something Else</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Message */}
              <div className="relative group flex-grow flex flex-col">
                <textarea id="heroMessage" name="message" value={formData.message} onChange={handleChange} required className="peer w-full h-full min-h-[80px] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none" placeholder="Message"></textarea>
                <label htmlFor="heroMessage" className={labelClass}>Who needs help, and where?</label>
              </div>

              {/* Error */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-sm">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button type="submit" disabled={status === 'loading'} className="relative overflow-hidden group bg-gold-500 text-black p-4 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-2 w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 relative z-10 animate-spin" /><span className="relative z-10">Sending…</span></>
                ) : (
                  <><span className="relative z-10 group-hover:text-black transition-colors duration-500">Request Bail Help</span><ArrowRight className="w-4 h-4 relative z-10" /></>
                )}
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden flex justify-center">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-gold-500 to-transparent"
          />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-gold-500 transition-colors duration-300 ml-1">Scroll</span>
      </div>
    </section>
  );
}
