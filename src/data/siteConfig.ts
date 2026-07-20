/**
 * Central business info for Chambersburg Bail Bonds.
 * Update these values in one place to keep the whole site in sync.
 */
export const siteConfig = {
  name: 'Chambersburg Bail Bonds',
  shortName: 'Chambersburg',
  tagline: "Fast answers. Clear steps. Help right now. We're here when it matters most.",

  // Contact
  phoneDisplay: '(717) 746-9884',
  phoneHref: 'tel:7177469884',
  smsHref: 'sms:7177469884',

  // Location — no public street address; we operate mobile across the region.
  city: 'Chambersburg',
  region: 'PA',
  primaryCounty: 'Franklin County',
  serviceAreaShort: 'Serving Franklin County & surrounding areas',

  // Web
  baseUrl: 'https://www.chambersburgbailbonds.com',
  ogImage: 'https://www.chambersburgbailbonds.com/hero-bg.jpg',

  // Standard PA bail premium (informational)
  premium: '10%',
} as const;

/** Counties served, matching the reference business footprint.
 *  `slug` maps to a photo at /counties/<slug>.jpg */
export const serviceAreaCounties = [
  { county: 'Franklin County', seat: 'Chambersburg, PA', slug: 'franklin' },
  { county: 'Cumberland County', seat: 'Carlisle, PA', slug: 'cumberland' },
  { county: 'Adams County', seat: 'Gettysburg, PA', slug: 'adams' },
  { county: 'York County', seat: 'York, PA', slug: 'york' },
  { county: 'Fulton County', seat: 'McConnellsburg, PA', slug: 'fulton' },
  { county: 'Perry County', seat: 'New Bloomfield, PA', slug: 'perry' },
  { county: 'Bedford County', seat: 'Bedford, PA', slug: 'bedford' },
  { county: 'Huntingdon County', seat: 'Huntingdon, PA', slug: 'huntingdon' },
  { county: 'Mifflin County', seat: 'Lewistown, PA', slug: 'mifflin' },
  { county: 'Juniata County', seat: 'Mifflintown, PA', slug: 'juniata' },
  { county: 'Bucks County', seat: 'Doylestown, PA', slug: 'bucks' },
  { county: 'Philadelphia County', seat: 'Philadelphia, PA', slug: 'philadelphia' },
  { county: 'Montgomery County', seat: 'Norristown, PA', slug: 'montgomery' },
  { county: 'Columbia County', seat: 'Bloomsburg, PA', slug: 'columbia' },
  { county: 'Delaware County', seat: 'Media, PA', slug: 'delaware' },
  { county: 'Berks County', seat: 'Reading, PA', slug: 'berks' },
  { county: 'Chester County', seat: 'West Chester, PA', slug: 'chester' },
  { county: 'Lackawanna County', seat: 'Scranton, PA', slug: 'lackawanna' },
  { county: 'Luzerne County', seat: 'Wilkes-Barre, PA', slug: 'luzerne' },
];
