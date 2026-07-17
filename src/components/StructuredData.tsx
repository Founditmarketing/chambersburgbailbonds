import { Helmet } from 'react-helmet-async';
import { siteConfig, serviceAreaCounties } from '../data/siteConfig';

const BASE_URL = siteConfig.baseUrl;

const BUSINESS_ID = `${BASE_URL}/#business`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const organization = {
  '@type': ['LocalBusiness', 'BailBondService'],
  '@id': BUSINESS_ID,
  name: siteConfig.name,
  description:
    'Confidential, 24/7 bail bond services in Chambersburg and Franklin County, PA. Fast answers, transparent pricing, and flexible payment plans.',
  url: BASE_URL,
  telephone: '+1-717-746-9884',
  // No public street address — mobile service across the region.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chambersburg',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    ...serviceAreaCounties.map((c) => ({ '@type': 'AdministrativeArea', name: c.county })),
    { '@type': 'State', name: 'Pennsylvania' },
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BASE_URL,
  name: siteConfig.name,
};

const SERVICE_SEO: Record<string, { name: string; description: string }> = {
  'bail-bonds': {
    name: 'Bail Bonds',
    description: 'Fast, professional 24/7 bail bonds for Chambersburg and Franklin County, PA.',
  },
  'payment-plans': {
    name: 'Bail Bond Payment Plans',
    description: 'Flexible bail bond financing — cash, card, money order, and payment plans with approval.',
  },
  'warrant-check': {
    name: 'Warrant Check Assistance',
    description: 'Confidential guidance on your options if you may have an active warrant in Pennsylvania.',
  },
  'inmate-locator': {
    name: 'Inmate Locator Assistance',
    description: 'Help finding where someone is being held and confirming their bail status, quickly.',
  },
  'what-to-do-if-arrested': {
    name: 'What To Do If Arrested',
    description: 'A clear, step-by-step guide for individuals and families dealing with an arrest.',
  },
  'bail-process': {
    name: 'The Bail Process Explained',
    description: 'A plain-language, step-by-step explanation of how bail works from arrest to release.',
  },
};

const FAQ_PAIRS = [
  {
    q: 'How much does a bail bond cost?',
    a: 'In Pennsylvania, the bail bond premium is typically 10% of the total bail amount set by the court. That premium is the non-refundable fee for our service. We always explain your exact costs upfront — no hidden fees.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. For those who qualify, we build flexible payment plans around your situation. We accept cash, credit and debit cards, and money orders.',
  },
  {
    q: 'How fast can someone be released?',
    a: 'Once bail is set and the bond is posted, release usually takes a couple of hours — sometimes longer, depending on how busy the facility is. We work 24/7 to move as quickly as possible.',
  },
  {
    q: 'What information do I need to get started?',
    a: "It helps to have the person's full legal name, date of birth, the facility where they're being held (if known), and the charges (if known), plus your contact information. If you're missing details, we can help locate the person.",
  },
  {
    q: 'Is my information kept private?',
    a: 'Yes. Every conversation and detail you share is handled confidentially and without judgment.',
  },
  {
    q: 'Can you help if I am not in Chambersburg?',
    a: 'Yes. We are based in Chambersburg but serve Franklin County and many surrounding counties across Pennsylvania. If your loved one is held in another county, call us.',
  },
];

// ── Schema builders ────────────────────────────────────────────────────────

function buildBreadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

function buildHomepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  };
}

function buildServiceSchema(slug: string) {
  const svc = SERVICE_SEO[slug];
  if (!svc) return null;
  const service = {
    '@type': 'Service',
    name: svc.name,
    description: svc.description,
    url: `${BASE_URL}/services/${slug}`,
    provider: { '@id': BUSINESS_ID },
    serviceType: 'Bail Bond Service',
    areaServed: { '@type': 'AdministrativeArea', name: 'Franklin County' },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: svc.name, path: `/services/${slug}` },
  ]);
  return { '@context': 'https://schema.org', '@graph': [service, breadcrumb] };
}

function buildFAQSchema() {
  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: FAQ_PAIRS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [faqPage, breadcrumb] };
}

function buildAboutSchema() {
  const aboutPage = {
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#webpage`,
    url: `${BASE_URL}/about`,
    name: `About ${siteConfig.name}`,
    about: { '@id': BUSINESS_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [aboutPage, breadcrumb] };
}

function buildContactSchema() {
  const contactPage = {
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact#webpage`,
    url: `${BASE_URL}/contact`,
    name: `Contact ${siteConfig.name}`,
    about: { '@id': BUSINESS_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
  const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);
  return { '@context': 'https://schema.org', '@graph': [contactPage, breadcrumb] };
}

// ── Component ──────────────────────────────────────────────────────────────

interface StructuredDataProps {
  page: 'homepage' | 'service' | 'faq' | 'about' | 'contact' | 'privacy';
  serviceSlug?: string;
}

export default function StructuredData({ page, serviceSlug }: StructuredDataProps) {
  let schema: object | null = null;

  if (page === 'homepage') schema = buildHomepageSchema();
  else if (page === 'service' && serviceSlug) schema = buildServiceSchema(serviceSlug);
  else if (page === 'faq') schema = buildFAQSchema();
  else if (page === 'about') schema = buildAboutSchema();
  else if (page === 'contact') schema = buildContactSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
}
