import { Clock, BadgeCheck, Zap, MapPin, Lock, Wallet, HeartHandshake } from 'lucide-react';
import type { ReactNode } from 'react';

interface TrustPoint {
  icon: ReactNode;
  label: string;
}

export default function Banner() {
  const points: TrustPoint[] = [
    { icon: <Clock className="w-4 h-4" strokeWidth={2.25} />, label: '24/7 Availability' },
    { icon: <BadgeCheck className="w-4 h-4" strokeWidth={2.25} />, label: 'Licensed & Bonded' },
    { icon: <Zap className="w-4 h-4" strokeWidth={2.25} />, label: 'Fast, Secure Release' },
    { icon: <MapPin className="w-4 h-4" strokeWidth={2.25} />, label: 'Franklin County & Beyond' },
    { icon: <Lock className="w-4 h-4" strokeWidth={2.25} />, label: '100% Confidential' },
    { icon: <Wallet className="w-4 h-4" strokeWidth={2.25} />, label: 'Flexible Payment Plans' },
    { icon: <HeartHandshake className="w-4 h-4" strokeWidth={2.25} />, label: 'Respectful & Judgment-Free' },
  ];

  // Render the sequence twice so the -50% translate loops seamlessly.
  const track = [...points, ...points];

  return (
    <section
      aria-label="Why families trust Chambersburg Bail Bonds"
      className="marquee-group relative w-full z-20 border-y border-gold-500/15 bg-gradient-to-r from-dark-900 via-dark-950 to-dark-900 overflow-hidden py-3.5"
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {track.map((point, idx) => (
          <div key={idx} className="flex items-center" aria-hidden={idx >= points.length}>
            {/* Diamond separator */}
            <span className="mx-6 md:mx-8 h-1.5 w-1.5 rotate-45 bg-gold-500/70 shadow-[0_0_8px_rgba(195,98,34,0.6)]" />

            {/* Trust point */}
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/10 ring-1 ring-gold-500/30 text-gold-500 shrink-0">
                {point.icon}
              </span>
              <span className="text-white text-xs md:text-[13px] font-black uppercase tracking-[0.18em] whitespace-nowrap">
                {point.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
