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
  ogImage: 'https://www.chambersburgbailbonds.com/gregsbailbondsskyline.jpeg',

  // Standard PA bail premium (informational)
  premium: '10%',
} as const;

/** Counties served, matching the reference business footprint. */
export const serviceAreaCounties = [
  { county: 'Franklin County', seat: 'Chambersburg, PA' },
  { county: 'Cumberland County', seat: 'Carlisle, PA' },
  { county: 'Adams County', seat: 'Gettysburg, PA' },
  { county: 'York County', seat: 'York, PA' },
  { county: 'Fulton County', seat: 'McConnellsburg, PA' },
  { county: 'Perry County', seat: 'New Bloomfield, PA' },
  { county: 'Bedford County', seat: 'Bedford, PA' },
  { county: 'Huntingdon County', seat: 'Huntingdon, PA' },
  { county: 'Mifflin County', seat: 'Lewistown, PA' },
  { county: 'Juniata County', seat: 'Mifflintown, PA' },
  { county: 'Bucks County', seat: 'Doylestown, PA' },
  { county: 'Philadelphia County', seat: 'Philadelphia, PA' },
  { county: 'Montgomery County', seat: 'Norristown, PA' },
  { county: 'Columbia County', seat: 'Bloomsburg, PA' },
  { county: 'Delaware County', seat: 'Media, PA' },
  { county: 'Berks County', seat: 'Reading, PA' },
  { county: 'Chester County', seat: 'West Chester, PA' },
  { county: 'Lackawanna County', seat: 'Scranton, PA' },
  { county: 'Luzerne County', seat: 'Wilkes-Barre, PA' },
];
