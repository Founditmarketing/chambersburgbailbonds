import PageSEO from '../components/PageSEO';
import StructuredData from '../components/StructuredData';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, MapPin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../lib/leads';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await submitLead(formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'peer w-full bg-dark-950 border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-dark-950 focus:outline-none transition-all duration-300';
  const labelClass =
    'absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none';

  return (
    <>
      <PageSEO
        title="Find Help Now | Contact Chambersburg Bail Bonds"
        description="Call or text Chambersburg Bail Bonds 24/7 at (717) 746-9884. Fast, confidential bail bond help across Franklin County and surrounding areas in PA."
        canonical={`${siteConfig.baseUrl}/contact`}
      />
      <StructuredData page="contact" />
      <main className="relative z-10 flex flex-col min-h-screen pt-32 pb-24 px-4 bg-dark-950">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 inline-block px-3 py-1 border border-green-500/40 bg-green-500/10 text-[10px] uppercase tracking-[0.3em] font-bold text-green-400 flex items-center gap-2 justify-center w-max mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              OPEN NOW • 24/7 DISPATCH
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6">
              Find Help <span className="text-gold-500">Now</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              When you need fast, confidential bail bond help, we're here. Call or text any time — day, night, weekends, and holidays — across Franklin County and beyond.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1">Call Us Immediately</p>
                <a href={siteConfig.phoneHref} className="text-2xl md:text-4xl font-black text-white hover:text-gold-500 transition-colors uppercase tracking-tight block">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1">Prefer to Text?</p>
                <a href={siteConfig.smsHref} className="text-2xl md:text-4xl font-black text-white hover:text-gold-500 transition-colors uppercase tracking-tight block">
                  Text {siteConfig.phoneDisplay}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-gold-500/30 group-hover:text-gold-500 transition-all duration-300 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-1">Service Area</p>
                <p className="text-xl md:text-2xl font-black text-white block uppercase tracking-tight">
                  Chambersburg, PA
                </p>
                <p className="text-slate-400 text-sm mt-1">Serving Franklin County & surrounding areas. We come to you.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 pt-8 border-t border-white/5 bg-dark-900 border border-white/5 p-6 rounded-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-2">Confidential & Judgment-Free</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your information is kept confidential and secure. When you reach out, a real person answers — we'll ask a few basic details so we can move fast, with no judgment.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-dark-900 border border-white/5 p-8 md:p-12 shadow-2xl overflow-hidden rounded-sm"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] pointer-events-none rounded-full" />

            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 relative z-10">Start Bail Help</h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center relative z-10"
                >
                  <CheckCircle className="w-16 h-16 text-green-400" />
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">Message Sent!</h4>
                  <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    We've received your message and will be in touch shortly. For urgent matters, please call or text us directly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-gold-500 text-xs uppercase tracking-widest font-bold border-b border-gold-500/40 hover:border-gold-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="John Doe"
                      />
                      <label htmlFor="contactName" className={labelClass}>Full Name</label>
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={siteConfig.phoneDisplay}
                      />
                      <label htmlFor="contactPhone" className={labelClass}>Phone Number</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                    <label htmlFor="contactEmail" className={labelClass}>Email Address</label>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      id="contactMessage"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="peer w-full min-h-[150px] bg-dark-950 border border-white/10 rounded-sm p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-dark-950 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="How can we help?"
                    ></textarea>
                    <label htmlFor="contactMessage" className={labelClass}>Who needs help, and where?</label>
                  </div>

                  {/* Error Banner */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-sm"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{errorMsg}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="relative overflow-hidden group bg-gold-500 text-black p-5 font-black uppercase tracking-widest text-sm transition-all duration-300 mt-2 flex items-center justify-center gap-3 w-full lg:w-max ml-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 relative z-10 animate-spin" />
                        <span className="relative z-10">Sending…</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500">Send Secure Message</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black/40 z-10 pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
    </>
  );
}
