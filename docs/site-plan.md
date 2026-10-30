# Meanify.eu — Website Refactor Plan

Status: phases 1–4 implemented (2026-10-30), not committed or deployed. Still open: real use cases, and the off-site steps in docs/off-site-checklist.md. Ongoing growth work is in docs/growth-playbook.md.

## 1. Positioning

**One-line entity statement** (repeat it consistently on the site, LinkedIn, Google Business Profile and directories; search engines and AI answer engines both rely on it):

> Meanify is an AI engineering company based in Évora, Portugal. Our Forward Deployed Engineers use AI-accelerated development to deliver software, automation, multi-agent systems and data platforms faster and at lower cost. Every process we use is validated, and a human reviews every step.

**Service lines, in priority order:**

| # | Service | Who it's for | Main promise |
|---|---------|--------------|--------------|
| 1 | **AI-Accelerated Development (Forward Deployed Engineers)**, the flagship | SMEs and enterprises that need software built | Engineers embedded with your team who ship production software faster and cheaper using validated AI workflows, with a human reviewing every step |
| 2 | **AI Automation** | Operations, back-office and finance teams | Automate repetitive workflows with AI and keep people approving the decisions that matter |
| 3 | **Multi-Agent Systems** | Companies with complex, multi-step processes | Coordinated AI agents with guardrails, observability and human approval points |
| 4 | **Data Pipelines, Data Management & Governance** | Data-heavy organisations, regulated sectors | Reliable pipelines, data quality checks, lineage and GDPR/AI Act-ready governance |
| 5 | **Physical AI for Local Companies** | Alentejo and Portuguese SMEs, agriculture, industry, retail | Small, practical projects: sensors, computer vision and edge devices connected to AI |

**Message running through every page:** *Faster. More affordable. Always validated by a human.* This answers the main objection to AI-built software (can I trust it?), so it belongs in the hero, the process page and the FAQ.

**Tone change:** drop the current hype ("strategic superiority", "without limits", "senior architects") and the claims we can't back up ("40% faster", "70%"). Use concrete, checkable statements. AI answer engines cite sites that state specific facts, and buyers trust them more.

## 2. Information architecture

Move from one page translated by JavaScript to **separate pre-rendered pages for each language**. Today the Portuguese content only exists after JavaScript runs, so Google indexes almost none of it, and the hreflang tags all point to the same URL.

```
/                                   → language router (x-default), see §3
/en/                                → Home
/en/services/                       → Services hub
/en/services/ai-accelerated-development/
/en/services/ai-automation/
/en/services/multi-agent-systems/
/en/services/data-pipelines-governance/
/en/services/physical-ai/
/en/how-we-work/                    → Validated process + human in the loop
/en/use-cases/                      → Use cases / case studies (index + detail pages)
/en/about/                          → Company, team, Évora, ÉvoraTech
/en/faq/
/en/contact/                        → Direct channels, no form
/en/insights/                       → Articles (phase 2)
/en/privacy/  /en/terms/  /en/cookies/

/pt/                                → Início
/pt/servicos/
/pt/servicos/desenvolvimento-acelerado-com-ia/
/pt/servicos/automacao-com-ia/
/pt/servicos/sistemas-multiagente/
/pt/servicos/pipelines-e-governanca-de-dados/
/pt/servicos/ia-fisica/
/pt/como-trabalhamos/
/pt/casos-de-uso/
/pt/sobre/
/pt/perguntas-frequentes/
/pt/contacto/
/pt/artigos/
/pt/privacidade/  /pt/termos/  /pt/cookies/
```

Main navigation (5 items plus the CTA): **Services ▾ · How we work · Use cases · About · FAQ · [Talk to an engineer]**

Footer: service links, company links, legal pages, contacts (unchanged), social links, Livro de Reclamações (required by law, keep it), and the language switcher.

## 3. Languages (EN / PT, chosen from browser settings)

- **`/` (root):** a small page that reads `navigator.languages`. Any `pt*` locale goes to `/pt/`, everything else goes to `/en/`. A choice saved in `localStorage` (`meanify-lang`) overrides the browser setting. The page also has visible plain links to both languages, for crawlers and visitors without JavaScript. Use `<meta name="robots" content="noindex, follow">` plus `x-default` hreflang pointing at `/`.
- **Language switcher:** links to the matching page in the other language (not just the other homepage) and saves the choice.
- **On every page:** `<html lang="en">` or `<html lang="pt-PT">`, a self-referencing canonical, and a full set of hreflang links (`en`, `pt-PT`, `x-default`).
- **Portuguese copy** is written in European Portuguese and adapted for local search terms, not machine-translated word for word (see §6).
- Don't redirect from `/en/` or `/pt/` pages themselves. Only the root redirects, so crawlers can always reach both versions.

## 4. Page blueprints

### Home (the main conversion page)
1. **Hero:** H1 states what we do in plain words, for example *"Software and AI systems, built faster by Forward Deployed Engineers, validated by humans."* Subline: cheaper and faster, a human in the loop, based in Portugal and working across Europe. Two CTAs: **Talk to an engineer** (WhatsApp) and **See how we work**.
2. **Trust strip:** ÉvoraTech, client logos or sector names (when approved), "EN / PT", "GDPR & EU AI Act aware".
3. **Problem → answer:** traditional development is slow and expensive, and AI without oversight is risky. We use AI speed with human validation.
4. **Five service cards:** each links to its service page. AI-Accelerated Development is visually featured.
5. **How we work (short):** 4–5 steps (Discover → Plan → Build with AI → Human validation → Deliver & support) linking to the full page.
6. **Why Meanify:** 3 points (speed, cost, reliability), each backed by something concrete.
7. **Use cases:** 2–3 short stories (problem, what we did, result).
8. **FAQ excerpt:** 4 questions, marked up as FAQPage.
9. **Final CTA:** "Tell us what you want to build". Shows WhatsApp, email and phone (the existing contacts) and an optional booking link.

### Service page template (the same structure for all 5)
- H1 with the main keyword, then a short answer-first paragraph (the 40–60 words an AI engine can quote directly)
- "Who it's for" and "Problems we solve"
- What's included (deliverables)
- How it works (the validated process applied to this service, showing where the human checkpoints are)
- Typical project shape (duration range, engagement model, a "starting from" price if you're willing to publish one; it converts well and AI engines quote it)
- Tech and tools (helps long-tail search)
- A related use case
- 4–6 FAQs specific to the service
- A CTA with a WhatsApp message prefilled for that service
- Links to 2 related services

### How we work
The trust page. Covers: the validated, repeatable process; where AI is used and where humans review (code review, test gates, acceptance by the client); security and data handling (no client data used for training, EU hosting options); quality metrics; how the Forward Deployed Engineer model works (embedded with your team, your tools, your repo).

### Use cases
Start with 3–5 written use cases (anonymised is fine). Each one: sector, challenge, approach, human-in-the-loop point, result. Marked up as `Article`.

### About
Who we are, founders or team with photos and LinkedIn links (E-E-A-T: real people build trust with Google and AI engines), the Évora/ÉvoraTech story, values, legal company details.

### FAQ
15–25 real questions buyers ask, each answered in 2–4 sentences. Examples: *What is a Forward Deployed Engineer? Is AI-written code safe? How much cheaper is AI-accelerated development? Who owns the code? Do you work with small companies in Alentejo? Is our data used to train AI models? Do you comply with the EU AI Act?*

### Contact (no form)
Shows the existing channels, **unchanged**: phone +351 962 390 920 (with the "national mobile network" disclaimer), WhatsApp +351 962 390 920, info@meanify.eu, ÉvoraTech, Évora, Portugal. Adds an embedded map or map link, response-time promise, and office hours.

## 5. Lead generation (without a form)

The contact form is removed. The **footer newsletter form uses the same Formspree endpoint**, so I propose removing it too (see open questions).

Ways to turn visitors into leads:
1. **WhatsApp as the main CTA:** `wa.me/351962390920?text=…` with a message prefilled for each page and language (for example "Hi Meanify, I'm interested in Multi-Agent Systems…").
2. **Prefilled mailto:** `mailto:info@meanify.eu?subject=…&body=…` with a short brief template (company, what you want to build, timeline).
3. **Click-to-call** on mobile.
4. **Optional booking link** (Google Calendar appointment schedule or Cal.com) for a free 30-minute call. It doesn't need a form on our site and qualifies leads well.
5. **Lead magnets (ungated):** for example an "AI Readiness Checklist" or "Human-in-the-loop AI: our validation checklist". Downloads are tracked in GA4, and the end of each one has a CTA.
6. **A CTA on every page:** sticky header CTA, a CTA mid-page, and one at the end of the page.

## 6. SEO

**Technical**
- Pre-rendered static HTML for every page and language (§9). All content is in the HTML without JavaScript, including the text on the back of the flip cards.
- Unique `<title>` (≤60 chars) and meta description (≤155 chars) for each page and language. Remove `meta keywords` (search engines ignore it).
- Self-referencing canonical and hreflang on every page. Sitemap lists every URL with `xhtml:link` alternates and real `lastmod` dates.
- Clean URL structure, breadcrumbs, internal links between related services.
- **Performance / Core Web Vitals:** self-host a subset of the Inter font (removes the Google Fonts request and the privacy issue), serve WebP/AVIF images, replace the 3216×3046 PNG logo with SVG/WebP, inline critical CSS, defer JavaScript. Target Lighthouse ≥95.
- **Social sharing images:** 1200×630 OG image for each page and language (today it's the square logo).
- Custom 404 page in both languages.
- `robots.txt`: keep `Disallow: /design/`, add the sitemap, allow AI crawlers (§7).
- Register in Google Search Console and Bing Webmaster Tools, submit the sitemap, set up a Google Business Profile for the Évora address.

**Structured data (JSON-LD)**
- `Organization` + `ProfessionalService` (LocalBusiness subtype) with address, geo, phone, email, `areaServed` (Portugal and EU), `knowsAbout`, `sameAs` (LinkedIn, Facebook, WhatsApp)
- `WebSite`, `WebPage`, `BreadcrumbList` on every page
- `Service` on each service page (with `offers` if prices are published)
- `FAQPage` on the FAQ page and each service FAQ block
- `Article` on insights and use cases, with an author `Person`

**Keyword focus (to validate with Search Console data after launch)**

| Service | EN | PT |
|---|---|---|
| AI dev / FDE | forward deployed engineers, AI-assisted software development, AI software development company Portugal | desenvolvimento de software com IA, engenheiros forward deployed, empresa de desenvolvimento de software Portugal |
| Automation | AI automation services, business process automation with AI | automação com inteligência artificial, automação de processos empresariais |
| Multi-agent | multi-agent systems development, AI agents for business | sistemas multiagente, agentes de IA para empresas |
| Data | data pipeline development, data governance consulting, data management | pipelines de dados, governança de dados, gestão de dados RGPD |
| Physical AI | physical AI, edge AI, computer vision for SMEs | IA física, visão computacional para PME, IoT Alentejo, Évora |
| Local | AI company Évora, AI consultancy Portugal | empresa de IA Évora, consultoria de inteligência artificial Alentejo |

## 7. GEO (Generative Engine Optimisation)

Goal: get Meanify cited by ChatGPT, Perplexity, Gemini, Google AI Overviews and Claude when people ask about these services.

- **Answer first:** every page opens with a direct, quotable answer. Each H2 is phrased as a question or a clear claim, followed by a 40–60 word answer, then detail.
- **Clear entity facts:** the same company description, location, services and contacts everywhere (site, schema, LinkedIn, directories). Use the exact wording from §1.
- **`/llms.txt`** (and `/llms-full.txt`): a short Markdown summary of who Meanify is, the services, key pages and contacts, in EN and PT.
- **AI crawlers:** explicitly allow `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended` and `Applebot-Extended` in `robots.txt` (decision for you, see open questions).
- **Specific, citable content:** definitions ("What is a Forward Deployed Engineer?"), comparisons ("AI-accelerated vs traditional development"), checklists and numbers. AI engines prefer facts, lists and tables over marketing copy.
- **Authorship and freshness:** named authors with LinkedIn profiles, visible "last updated" dates, and `dateModified` in schema.
- **Third-party signals:** a consistent profile on LinkedIn, Google Business Profile, Clutch/GoodFirms, the ÉvoraTech member listing, and Portuguese startup directories. AI engines weigh mentions from other sites heavily.
- **Semantic HTML:** a single H1, a logical heading order, `<table>`/`<dl>` for structured facts, and text instead of images of text.

## 8. Analytics (Google Analytics 4)

> ⚠️ **Current state:** the GA4 tag `G-RDQM9R4TNT` was in the site until commit `da0d463` ("Replace the project") and **is not in the current `index.html`**. The live site is probably not collecting data. Restoring it is part of phase 1 and could be done right away as a hotfix.

- Restore `gtag.js` with **the same Measurement ID `G-RDQM9R4TNT`** on every page.
- **Google Consent Mode v2 + cookie banner (EN/PT):** consent defaults to denied for analytics and ads, and the banner updates it after the visitor chooses. This is required under GDPR/ePrivacy for EU visitors. The current privacy policy says "we do not use tracking cookies", which is already wrong once GA is back, so it must be updated.
- **Events** (mark `generate_lead` as a Key Event in GA4):
  - `generate_lead` with `method` = `whatsapp` | `email` | `phone` | `booking`, plus `service` and `page_language`
  - `file_download` (lead magnets), `language_switch`, `cta_click` (with location: hero/mid/footer)
- Link GA4 to Search Console.

## 9. Technical approach

- **Static site generator: Eleventy (11ty).** Templates plus translation files (`src/_data/i18n/en.json`, `pt.json`) produce real HTML for each language. Build output goes to `_site/`. It keeps the current plain HTML/CSS/JS style, needs no framework at runtime, and sets up hreflang, sitemap and JSON-LD once in a shared layout.
- **Deploy:** a GitHub Actions workflow builds and publishes to GitHub Pages. Only the build output is published, so `design/`, `docs/` and `INSTRUCTIONS.MD` stop being public. Keep the `www.meanify.eu` custom domain (CNAME) as it is.
- **Reuse:** the current dark/light theme, `css/styles.css` design tokens, scroll animations, mobile menu and logo. Remove the custom JavaScript i18n engine (replaced by build-time pages).
- **Accessibility:** WCAG 2.2 AA, visible focus states, `prefers-reduced-motion` support for the flip cards and animations.
- **Legal pages:** Privacy, Terms and Cookies as real pages instead of modals (they become indexable and linkable). Keep the legal information added in `bbaa036` and the Livro de Reclamações link.

## 10. Rollout phases

1. **Foundation (≈1 week):** Eleventy setup and deploy workflow, shared layout (head/SEO/hreflang/JSON-LD/GA4 + consent), root language router, header and footer, contact form and newsletter removed, legal pages migrated.
2. **Core pages (≈1–2 weeks):** Home, 5 service pages, How we work, Contact, About, FAQ, in EN and PT.
3. **Trust & GEO (≈1 week):** use cases, `llms.txt`, OG images, robots/AI crawler rules, Search Console/Bing, Google Business Profile, directory listings.
4. **Growth (ongoing):** Insights articles (1–2 a month per language), lead magnets, review GA4 and Search Console monthly and adjust copy and keywords.

## 11. Open questions

1. **Newsletter:** remove the footer newsletter form too (same Formspree endpoint as the contact form), or keep it?
2. **Booking link:** add a free-call booking link (Google Calendar or Cal.com)? Which account?
3. **Legal name:** the footer says "MEANIFY INC.". Is that the correct legal entity? Portuguese companies are usually "Lda." or "Unipessoal Lda.", with an NIF.
4. **Prices:** publish "starting from" prices or engagement models?
5. **Proof:** which clients, logos or use cases can be named?
6. **Team:** who appears on the About page (names, photos, LinkedIn)?
7. **AI crawlers:** allow all AI crawlers (recommended for GEO), or only search-type bots?
8. **Social links:** keep LinkedIn and Facebook as they are, or add others?
