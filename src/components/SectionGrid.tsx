interface SectionGridProps {
  /** Slowly drift the accent grid for subtle motion. */
  drift?: boolean;
  className?: string;
}

/**
 * Decorative, radially-masked grid overlay for section backgrounds.
 * Absolutely positioned — drop it inside a `relative` section, before
 * the `z-10` content. Purely visual, so it's hidden from assistive tech.
 */
export default function SectionGrid({ drift = false, className = '' }: SectionGridProps) {
  return <div aria-hidden className={`section-grid ${drift ? 'section-grid--drift' : ''} ${className}`} />;
}
