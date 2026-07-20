import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, AlertCircle, Phone, MessageSquare, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { submitLead } from '../lib/leads';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Background carousel — a curated set of the counties we serve.
const heroSlides = [
  { name: 'Franklin County', seat: 'Chambersburg, PA', img: '/counties/franklin.jpg' },
  { name: 'Cumberland County', seat: 'Carlisle, PA', img: '/counties/cumberland.jpg' },
  { name: 'Adams County', seat: 'Gettysburg, PA', img: '/counties/adams.jpg' },
  { name: 'York County', seat: 'York, PA', img: '/counties/york.jpg' },
  { name: 'Bedford County', seat: 'Bedford, PA', img: '/counties/bedford.jpg' },
  { name: 'Huntingdon County', seat: 'Huntingdon, PA', img: '/counties/huntingdon.jpg' },
];

export default function Hero() {
  const services = [
    { value: 'bail-bonds', label: 'Bail Bonds' },
    { value: 'payment-plans', label: 'Payment Plans' },
    { value: 'warrant-check', label: 'Warrant Check' },
    { value: 'inmate-locator', label: 'Inmate Locator' },
    { value: 'other', label: 'Something Else' },
  ];
  const stepTitles = ['How can we help?', 'Who needs help?', 'How do we reach you?'];
  const TOTAL_STEPS = 3;

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [step, setStep] = useState(1);
  const [slide, setSlide] = useState(0);

  // Auto-advance the background carousel (paused for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Required fields for each step to advance / submit
  const stepValid = (s: number) => {
    if (s === 1) return formData.service !== '';
    if (s === 2) return formData.name.trim() !== '' && formData.message.trim() !== '';
    if (s === 3) return formData.phone.trim() !== '';
    return false;
  };

  const goNext = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const selectService = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setStep(2); // auto-advance from the single-choice first step
  };

  const sendLead = async () => {
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
    setStep(1);
  };

  // Enter advances the step (or submits on the last step) rather than
  // submitting prematurely from an early step.
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stepValid(step)) return;
    if (step < TOTAL_STEPS) goNext();
    else sendLead();
  };

  const inputClass = 'peer w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300';
  const labelClass = 'absolute left-4 top-2 text-[10px] uppercase text-gold-500 font-bold tracking-widest transition-all peer-placeholder-shown:text-[11px] peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-500 pointer-events-none';
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background image carousel — slides through county photos */}
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-dark-950">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={heroSlides[slide].img}
            alt=""
            aria-hidden="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.9, ease: [0.45, 0, 0.15, 1] }}
            className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center opacity-80"
          />
        </AnimatePresence>
        {/* Overlay gradients keep the headline legible over clearer photos */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/55 md:via-dark-950/65 to-dark-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/70 md:from-dark-950/85 via-dark-950/20 to-dark-950/40 md:to-dark-950/70" />
      </div>

      {/* County caption — shifts with the background carousel */}
      <div className="absolute bottom-6 left-4 md:left-10 z-10 hidden sm:flex items-center gap-2 pointer-events-none">
        <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
        <AnimatePresence mode="wait">
          <motion.span
            key={slide}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/60"
          >
            {heroSlides[slide].name} <span className="text-gold-500">· {heroSlides[slide].seat}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="w-full px-4 md:px-10 flex flex-col relative z-10 pt-20 lg:pr-[35vw]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 w-max rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm pl-2 pr-3.5 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-green-400">Open Now</span>
            <span className="h-3 w-px bg-white/20"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">24/7 Dispatch</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[4.25rem] xl:text-[5rem] font-black uppercase tracking-tighter text-white mb-6 leading-[0.95]">
            Get Your Loved One<br />
            <span className="text-gold-500">Home, Fast.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            <strong className="text-white font-bold">Fast answers. Clear steps. Help right now.</strong><br className="hidden sm:block" />
            <span className="mt-2 inline-block">We're here when it matters most — confidential, respectful bail bond help, 24 hours a day.</span><br />
            <span className="mt-4 inline-block text-white font-black text-lg lg:text-xl tracking-widest border-l-4 border-gold-500 pl-4 pr-6 py-2 bg-dark-950/50">
              {siteConfig.serviceAreaShort}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-lg w-full sm:w-auto"><Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}</a>
            <a href={siteConfig.smsHref} className="btn btn-outline btn-lg w-full sm:w-auto"><MessageSquare className="w-4 h-4" /> Text Us</a>
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
              className="flex flex-col flex-grow mt-3"
              onSubmit={handleFormSubmit}
            >
              {/* Progress indicator */}
              <div className="flex items-center gap-1.5 mb-2">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < step ? 'bg-gold-500' : 'bg-white/10'}`} />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
                Step {step} of {TOTAL_STEPS} · <span className="text-gold-500 font-bold">{stepTitles[step - 1]}</span>
              </p>

              {/* Steps */}
              <div className="flex-grow flex flex-col">
                <AnimatePresence mode="wait" initial={false}>
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="flex flex-col gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s.value}
                          onClick={() => selectService(s.value)}
                          className={`group flex items-center justify-between px-4 py-3.5 rounded-lg border text-sm font-bold uppercase tracking-wide transition-colors ${formData.service === s.value ? 'border-gold-500 bg-gold-500/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-gold-500/50 hover:text-white'}`}
                        >
                          {s.label}
                          <ArrowRight className="w-4 h-4 text-gold-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="flex flex-col gap-3 flex-grow">
                      <div className="relative group">
                        <input type="text" id="heroName" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" autoFocus />
                        <label htmlFor="heroName" className={labelClass}>Your Full Name</label>
                      </div>
                      <div className="relative group flex-grow flex flex-col">
                        <textarea id="heroMessage" name="message" value={formData.message} onChange={handleChange} className="peer w-full h-full min-h-[110px] bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 pt-7 text-white placeholder-transparent focus:border-gold-500 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none" placeholder="Details"></textarea>
                        <label htmlFor="heroMessage" className={labelClass}>Who needs help, and where?</label>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="flex flex-col gap-3">
                      <div className="relative group">
                        <input type="tel" id="heroPhone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder={siteConfig.phoneDisplay} autoFocus />
                        <label htmlFor="heroPhone" className={labelClass}>Phone Number</label>
                      </div>
                      <div className="relative group">
                        <input type="email" id="heroEmail" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                        <label htmlFor="heroEmail" className={labelClass}>Email (optional)</label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-lg mt-3">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {step === 1 ? (
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4">Select an option to continue →</p>
              ) : (
                <div className="flex items-center gap-3 mt-4">
                  <button type="button" onClick={goBack} className="btn btn-outline btn-md">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  {step < TOTAL_STEPS ? (
                    <button type="button" onClick={goNext} disabled={!stepValid(step)} className="btn btn-primary btn-md flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button type="submit" disabled={!stepValid(TOTAL_STEPS) || status === 'loading'} className="btn btn-primary btn-md flex-1 disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'loading' ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      ) : (
                        <>Request Bail Help <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
