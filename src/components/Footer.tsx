import { Phone, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const services = [
    { name: "Bail Bonds", path: "/services/bail-bonds" },
    { name: "Payment Plans", path: "/services/payment-plans" },
    { name: "Warrant Check", path: "/services/warrant-check" },
    { name: "Inmate Locator", path: "/services/inmate-locator" },
  ];

  const helpLinks = [
    { name: "What To Do If Arrested", path: "/services/what-to-do-if-arrested" },
    { name: "The Bail Process", path: "/services/bail-process" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Service Area", path: "/service-area" },
    { name: "Payments", path: "/payments" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gold-500/20 pt-20 pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <div className="leading-none">
                <span className="text-2xl font-black uppercase tracking-tighter text-white">CHAMBERSBURG <span className="text-gold-500">BAIL BONDS</span></span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Franklin County, PA</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Serving Franklin County and surrounding areas with confidential, respectful bail bond services — 24 hours a day, 7 days a week.
            </p>
            <div className="space-y-3">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-white text-sm font-bold hover:text-gold-500 transition-colors">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" /> {siteConfig.phoneDisplay}
              </a>
              <a href={siteConfig.smsHref} className="flex items-center gap-3 text-white text-sm font-bold hover:text-gold-500 transition-colors">
                <MessageSquare className="w-4 h-4 text-gold-500 flex-shrink-0" /> Text Us
              </a>
              <p className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" /> {siteConfig.serviceAreaShort}
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to={service.path} className="text-slate-400 text-sm hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Help & Info</h4>
            <ul className="space-y-3">
              {helpLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 text-sm hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company + 24/7 */}
          <div className="flex flex-col">
            <h4 className="text-white font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Company</h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 text-sm hover:text-gold-500 transition-colors duration-300 flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-dark-950 border border-gold-500/20 p-6 relative group overflow-hidden mt-auto">
              <div className="absolute inset-0 w-full h-full bg-gold-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-black/70 transition-colors duration-500">Open Now · 24/7</p>
                </div>
                <a href={siteConfig.phoneHref} className="text-white text-xl font-black group-hover:text-black transition-colors duration-500">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy.html" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
              <Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 leading-relaxed text-center md:text-left">
            The information on this website is for general informational purposes only and does not constitute legal advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
