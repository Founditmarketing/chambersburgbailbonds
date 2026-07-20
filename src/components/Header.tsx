import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const servicesLinks = [
  { label: 'Bail Bonds', path: '/services/bail-bonds' },
  { label: 'Payment Plans', path: '/services/payment-plans' },
  { label: 'Warrant Check', path: '/services/warrant-check' },
  { label: 'Inmate Locator', path: '/services/inmate-locator' },
];

const helpLinks = [
  { label: 'What To Do If Arrested', path: '/services/what-to-do-if-arrested' },
  { label: 'The Bail Process', path: '/services/bail-process' },
  { label: 'FAQ', path: '/faq' },
];

const aboutLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Service Area', path: '/service-area' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { x: "100%", transition: { duration: 0.5, ease: [0.12, 0, 0.39, 1] } }
  };

  const linkVars = {
    initial: { y: 30, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const mobileGroups = [
    { label: 'Services', items: servicesLinks },
    { label: 'Customer Help', items: helpLinks },
    { label: 'About', items: aboutLinks },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${isScrolled ? 'h-20 border-b border-gold-500/20 bg-dark-950/90 backdrop-blur-sm' : 'h-24 bg-transparent border-b border-white/5'} flex items-center px-4 md:px-10`}>
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
          <Link to="/" className="leading-none block">
            <span className="font-display text-xl md:text-2xl xl:text-3xl font-black uppercase tracking-tighter">CHAMBERSBURG <span className="text-gold-500">BAIL BONDS</span></span>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-white">Franklin County, PA · 24/7</p>
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex flex-1 justify-center items-center gap-7 text-xs font-semibold uppercase tracking-widest">
          <Link to="/" className="text-white hover:text-gold-500 transition-colors">Home</Link>

          {/* Services dropdown */}
          <div className="relative group flex items-center cursor-pointer">
            <span className="text-white group-hover:text-gold-500 transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-60 bg-dark-950/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 rounded-sm shadow-xl shadow-black">
              {servicesLinks.map((l) => (
                <Link key={l.path} to={l.path} className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Customer Help dropdown */}
          <div className="relative group flex items-center cursor-pointer">
            <span className="text-white group-hover:text-gold-500 transition-colors flex items-center gap-1">
              Customer Help <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-60 bg-dark-950/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 rounded-sm shadow-xl shadow-black">
              {helpLinks.map((l) => (
                <Link key={l.path} to={l.path} className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* About dropdown */}
          <div className="relative group flex items-center cursor-pointer">
            <span className="text-white group-hover:text-gold-500 transition-colors flex items-center gap-1">
              About <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-dark-950/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50 rounded-sm shadow-xl shadow-black">
              {aboutLinks.map((l) => (
                <Link key={l.path} to={l.path} className="px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-gold-500 transition-colors text-xs tracking-wider">{l.label}</Link>
              ))}
            </div>
          </div>

          <Link to="/attorney-resources" className="text-white hover:text-gold-500 transition-colors">Attorneys</Link>
          <Link to="/payments" className="text-white hover:text-gold-500 transition-colors">Payments</Link>
        </nav>

        {/* Action */}
        <div className="hidden xl:flex flex-col items-end gap-1">
          <Link to="/contact" className="btn btn-primary btn-md flex items-center">Find Help Now</Link>
          <a href={siteConfig.phoneHref} className="text-[11px] text-white/70 hover:text-gold-500 uppercase tracking-widest font-bold transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3" /> {siteConfig.phoneDisplay}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-white hover:text-gold-500 transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[140] xl:hidden"
            />

            {/* Side Panel */}
            <motion.div
              key="mobile-panel"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-[100dvh] w-full sm:w-[400px] bg-dark-950 border-l border-gold-500/20 z-[150] p-6 sm:p-10 flex flex-col xl:hidden shadow-2xl overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-12">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="leading-none block">
                  <span className="font-display text-lg font-black uppercase tracking-tighter text-white">CHAMBERSBURG <span className="text-gold-500">BAIL BONDS</span></span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors bg-dark-900/50 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col space-y-5"
              >
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white hover:text-gold-500 transition-colors inline-block">
                    Home
                  </Link>
                </motion.div>

                {mobileGroups.map((group) => (
                  <motion.div key={group.label} variants={linkVars} className="overflow-hidden">
                    <button
                      onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                      className="text-3xl sm:text-4xl font-black uppercase tracking-tighter transition-colors flex items-center gap-2 text-white hover:text-gold-500 w-full text-left"
                    >
                      {group.label}
                      <ChevronDown className={`w-7 h-7 transition-transform duration-300 ${openGroup === group.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openGroup === group.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-4 mt-5 pl-4 border-l-2 border-gold-500/30 overflow-hidden"
                        >
                          {group.items.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-lg font-bold text-slate-300 hover:text-gold-500 uppercase tracking-widest block"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link to="/attorney-resources" onClick={() => setMobileMenuOpen(false)} className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white hover:text-gold-500 transition-colors inline-block">
                    Attorneys
                  </Link>
                </motion.div>
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link to="/payments" onClick={() => setMobileMenuOpen(false)} className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white hover:text-gold-500 transition-colors inline-block">
                    Payments
                  </Link>
                </motion.div>
              </motion.div>

              {/* Menu Footer */}
              <div className="mt-8">
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">24/7 Dispatch — Call or Text</p>
                  <a href={siteConfig.phoneHref} className="text-3xl font-black text-gold-500 mb-8 block hover:text-white transition-colors">{siteConfig.phoneDisplay}</a>

                  <div className="flex flex-col items-center gap-2">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline btn-lg w-full flex items-center justify-center">Find Help Now</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
