import PageSEO from '../components/PageSEO';
import StructuredData from '../components/StructuredData';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import OurWork from '../components/OurWork';

import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';
import { siteConfig } from '../data/siteConfig';

export default function HomePage() {
  return (
    <main className="relative z-10 flex flex-col">
      <PageSEO
        title="Chambersburg Bail Bonds | 24/7 Bail Help in Franklin County, PA"
        description="Fast, confidential 24/7 bail bonds in Chambersburg & Franklin County, PA. Real people answer — call or text (717) 746-9884. Transparent pricing, flexible payment plans."
        canonical={`${siteConfig.baseUrl}/`}
        ogImage={siteConfig.ogImage}
      />
      <StructuredData page="homepage" />
      <Hero />
      <Banner />
      <Services />
      <OurWork />

      <Reviews />
      <CallToAction />
    </main>
  );
}
