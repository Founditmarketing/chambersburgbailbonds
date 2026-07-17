import PageSEO from '../components/PageSEO';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function PrivacyPage() {
  return (
    <>
      <PageSEO
        title="Privacy Policy | Chambersburg Bail Bonds"
        description="Chambersburg Bail Bonds privacy policy. All personal information is kept strictly confidential."
        canonical={`${siteConfig.baseUrl}/privacy`}
        noIndex={true}
      />
      <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
          Privacy <span className="text-gold-500">Policy</span>
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
            Last Updated: July 2026
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Information We Collect</h2>
          <p>
            {siteConfig.name} collects personal information that you voluntarily provide when contacting us, including your name, phone number, email address, and details about your bail bond needs.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to process bail bond requests, respond to inquiries, and provide our services. We do not sell, rent, or share your personal information with third parties except as required by law or to fulfill our bail bond obligations.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Confidentiality</h2>
          <p>
            All communications and personal information shared with {siteConfig.name} are treated as strictly confidential. We understand the sensitive nature of bail bond services and take every measure to protect your privacy and dignity.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at <a href={siteConfig.phoneHref} className="text-gold-500 hover:underline">{siteConfig.phoneDisplay}</a>.
          </p>

          <h2 className="text-xl font-black uppercase tracking-tighter text-white mt-10">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact {siteConfig.name} at:<br />
            <strong className="text-white">{siteConfig.serviceAreaShort}</strong><br />
            <a href={siteConfig.phoneHref} className="text-gold-500 hover:underline">{siteConfig.phoneDisplay}</a>
          </p>

          <div className="pt-8 border-t border-white/10 mt-10">
            <Link to="/" className="text-gold-500 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
