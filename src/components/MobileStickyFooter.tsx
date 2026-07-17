import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Phone, Mail, X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../lib/leads';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function MobileStickyFooter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const { scrollY } = useScroll();

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowFooter(latest > window.innerHeight * 0.8);
    });
  }, [scrollY]);

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
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputClass = 'peer w-full bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300';
  const labelClass = 'absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none';

  return (
    <>
      {/* Sticky Bottom Bar */}
      <AnimatePresence>
        {showFooter && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-dark-950 border-t border-gold-500/20 flex items-center justify-between p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          >
            <a
              href={siteConfig.phoneHref}
              className="relative overflow-hidden group flex-1 flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-[10px] py-4 transition-all mr-3 hover:border-gold-500"
            >
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                <Phone className="w-4 h-4" />
                Call Now
              </span>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 z-10 transition-colors duration-500 pointer-events-none group-hover:scale-125"></div>
            </a>
            <button 
              onClick={() => { setIsOpen(true); setStatus('idle'); }}
              className="relative overflow-hidden group flex-1 flex items-center justify-center gap-2 bg-gold-500 text-black font-black uppercase tracking-widest text-[10px] py-4 shadow-[0_0_15px_rgba(195,98,34,0.3)] transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                <Mail className="w-4 h-4" />
                Contact Form
              </span>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[90dvh] bg-dark-950 border-t border-gold-500/30 z-[120] lg:hidden flex flex-col shadow-2xl overflow-hidden pb-[env(safe-area-inset-bottom)]"
            >
              <div className="flex-shrink-0 bg-dark-950/95 backdrop-blur-sm border-b border-white/10 p-5 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tighter text-white">Get Help Fast</h2>
                  <p className="text-[9px] text-gold-500 uppercase tracking-widest">Confidential • 24/7 Response</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto flex-grow">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                    >
                      <CheckCircle className="w-14 h-14 text-green-400" />
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">Message Sent!</h4>
                      <p className="text-slate-400 text-sm max-w-xs leading-relaxed">We'll be in touch shortly. For urgent matters, call us directly.</p>
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
                      className="flex flex-col gap-2"
                      onSubmit={handleSubmit}
                    >
                      {/* Full Name */}
                      <div className="relative group">
                        <input type="text" id="mobileFullName" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                        <label htmlFor="mobileFullName" className={labelClass}>Full Name</label>
                      </div>

                      {/* Phone */}
                      <div className="relative group">
                        <input type="tel" id="mobilePhone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder={siteConfig.phoneDisplay} />
                        <label htmlFor="mobilePhone" className={labelClass}>Phone Number</label>
                      </div>

                      {/* Email */}
                      <div className="relative group">
                        <input type="email" id="mobileEmail" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                        <label htmlFor="mobileEmail" className={labelClass}>Email Address</label>
                      </div>

                      {/* Service */}
                      <div className="relative group">
                        <label htmlFor="mobileService" className="absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest pointer-events-none z-10">Services Needed</label>
                        <select id="mobileService" name="service" value={formData.service} onChange={handleChange} defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer">
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
                      <div className="relative group flex-grow flex flex-col min-h-[80px]">
                        <textarea id="mobileMessage" name="message" value={formData.message} onChange={handleChange} required className="peer w-full h-full min-h-[60px] bg-white/5 border border-white/10 rounded-sm p-3 pt-5 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none" placeholder="Message"></textarea>
                        <label htmlFor="mobileMessage" className={labelClass}>Message</label>
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
                      <button type="submit" disabled={status === 'loading'} className="relative overflow-hidden group bg-gold-500 text-black p-4 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-4 w-full flex-shrink-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                        {status === 'loading' ? (
                          <><Loader2 className="w-4 h-4 relative z-10 animate-spin" /><span className="relative z-10">Sending…</span></>
                        ) : (
                          <span className="relative z-10 group-hover:text-black transition-colors duration-500">Request Bail Now</span>
                        )}
                        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
