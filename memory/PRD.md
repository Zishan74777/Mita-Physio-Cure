# Mita Physio Cure — PRD

## Problem Statement
Premium, SEO-optimized, responsive physiotherapy clinic website for "Mita Physio Cure" (owner Sk Zishan Physio), Birampur, Bagnan, Howrah, WB 711303. Phone/WhatsApp +91 7477707139. Blue & green palette matching the uploaded logo. Netlify deployment target.

## Decisions (user choices)
- Appointment form: opens pre-filled WhatsApp message (static, no DB) — chosen static-only build.
- Blog: 6 pre-seeded SEO articles, no CMS.
- Testimonials: pre-seeded.
- Owner photo: placeholder (user will add later).
- **Deployment: STATIC frontend-only, Netlify-ready (no FastAPI/Mongo backend used).**

## Architecture
- React 19 SPA + CRA/craco + Tailwind + shadcn/ui + framer-motion + react-helmet-async.
- No backend. Forms use wa.me links. `@` alias = src.
- Netlify: /app/netlify.toml (base=frontend, publish=build), public/_redirects (SPA), robots.txt, sitemap.xml.

## Implemented (2026-01, MVP complete)
- Pages: Home, About, Services index + 16 service detail pages, Blog index + 6 posts, Appointment, Contact, FAQ, Privacy Policy, Terms, 5 SEO location landing pages, 404.
- Components: Navbar (sticky, glass, mobile menu), Footer, FloatingWhatsApp, Hero, ServicesGrid, Testimonials carousel, FAQ accordion, MapCard (Google embed), AppointmentForm (WhatsApp), Breadcrumbs, Seo, AreasMarquee, Stats, ScrollToTop.
- SEO: meta titles/descriptions, OG, Twitter cards, canonical, robots.txt, sitemap.xml, Schema.org (MedicalBusiness/Physiotherapist/LocalBusiness + FAQ + Breadcrumb + BlogPosting + MedicalProcedure), semantic headings, alt tags, internal linking.
- Data files: clinic.js, services.js (16), testimonials.js, faqs.js, blog.js (6), locations.js (5).
- Design: Outfit + Plus Jakarta Sans, blue-700 / emerald-500, light theme, card-lift hover, WhatsApp pulse.

## Testing
- iteration_1.json: frontend 100% (12/12 categories), no issues.

## Backlog / Next
- P1: Replace `mitaphysiocure.netlify.app` placeholder domain + Google Maps embed (exact pin) + owner photo.
- P1: Add real Google Business reviews / GBP link; Google Search Console verification meta.
- P2: Prerender/SSG for SPA so crawlers see full meta per route (react-snap or migrate to Next.js).
- P2: Optional backend to store appointment leads + admin dashboard (currently WhatsApp only).
