# Chambersburg Bail Bonds

Marketing website for **Chambersburg Bail Bonds** — a confidential, 24/7 bail bond service in Chambersburg and Franklin County, PA.

Built with React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion, deployed on Vercel.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Configuration

Business details (name, phone, service area, etc.) live in a single file:
`src/data/siteConfig.ts` — update them there and they propagate across the site.

### ⚠️ Setup TODOs before going live

The site was recycled from a previous template. A few integrations were intentionally
**disconnected** so no data flows to the prior owner. Wire these up to Chambersburg's
own accounts before launch:

- **Lead form destination** — `src/lib/leads.ts` (`LEAD_ENDPOINT`). Currently empty:
  forms validate and show success but do not transmit. Set it to your own form/CRM endpoint.
- **Analytics & lead-capture scripts** — `index.html` (see the TODO comment in `<head>`).
  The previous Google Analytics tag and third-party CRM embed were removed.
- **Images** — the photo/video assets in `public/` are generic bail-bond imagery carried
  over from the template (filenames still start with `gregsbailbonds*`). Swap in Chambersburg's
  own assets when available.
- **Domain** — canonical URLs, sitemap, and schema assume `https://www.chambersburgbailbonds.com`.
