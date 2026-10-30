# Off-site SEO & GEO checklist

These steps happen outside this repository. Search engines and AI assistants (ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews) trust a company more when the same facts appear consistently on several independent sites.

## 1. Use the same facts everywhere

Copy these exactly. Small differences (a different address format or phone number) weaken the signal.

| Field | Value |
|---|---|
| Name | Meanify |
| Address | ÉvoraTech, Évora, Portugal |
| Phone / WhatsApp | +351 962 390 920 |
| Email | info@meanify.eu |
| Website | https://www.meanify.eu |
| Languages | English, Portuguese |
| Area served | Portugal and the European Union |

**Short description (EN, ~150 characters)**
> AI engineering company in Évora, Portugal. Forward Deployed Engineers build software, AI automation and data systems faster, with human review.

**Short description (PT, ~150 caracteres)**
> Empresa de engenharia de IA em Évora. Os nossos engenheiros criam software, automação com IA e sistemas de dados mais rápido, com revisão humana.

**Long description (EN)**
> Meanify is an AI engineering company based at ÉvoraTech, in Évora, Portugal. Our Forward Deployed Engineers join your team and use validated AI workflows to deliver software faster and at lower cost, with an engineer reviewing every change. We offer AI-accelerated development, AI automation, multi-agent systems, data pipelines and data governance, and small physical AI projects for local companies. We work in English and Portuguese, remotely across Europe and on site in Alentejo.

**Long description (PT)**
> A Meanify é uma empresa de engenharia de IA sediada no ÉvoraTech, em Évora. Os nossos Forward Deployed Engineers juntam-se à sua equipa e usam processos de IA validados para entregar software mais rápido e a menor custo, com um engenheiro a rever cada alteração. Oferecemos desenvolvimento acelerado com IA, automação com IA, sistemas multiagente, pipelines e governança de dados, e pequenos projetos de IA física para empresas locais. Trabalhamos em português e inglês, à distância em toda a Europa e presencialmente no Alentejo.

## 2. Search engines

- [ ] **Google Search Console** (search.google.com/search-console): add the property `https://www.meanify.eu`. Choose the "HTML tag" method and paste the code into `verification.google` in `src/_data/site.js`, then deploy and verify. Submit `https://www.meanify.eu/sitemap.xml`.
- [ ] **Bing Webmaster Tools** (bing.com/webmasters): import from Search Console, or use the meta tag method with `verification.bing` in `src/_data/site.js`. Bing results also feed ChatGPT search and Copilot.
- [ ] **Google Analytics 4**: mark `generate_lead` as a key event (Admin → Events). Link GA4 to Search Console (Admin → Product links).
- [ ] After the first deploy, use URL Inspection in Search Console on `/en/` and `/pt/` and request indexing.

## 3. Business profiles

- [ ] **Google Business Profile**: create a profile for the ÉvoraTech address. Suggested categories: "Software company" (primary) and "Computer consultant". Add the long description, website, phone, hours and photos of the office and team.
- [ ] **Apple Business Connect** and **Bing Places**: the same details.
- [ ] **LinkedIn company page**: update the tagline and "About" with the long description, add the website and specialities (AI-accelerated development, Forward Deployed Engineers, AI automation, multi-agent systems, data governance, physical AI).
- [ ] **Facebook page**: update the description and website.

## 4. Directories and mentions

- [ ] ÉvoraTech member or company listing (ask the ÉvoraTech team for a profile with a link).
- [ ] Clutch, GoodFirms and similar B2B service directories.
- [ ] Portuguese startup and tech ecosystem directories (for example Startup Portugal).
- [ ] Portuguese business directories such as Páginas Amarelas.
- [ ] Ask clients and partners to link to www.meanify.eu from their sites or case studies.

## 5. Reviews and proof

- [ ] Ask satisfied clients for a Google review and a short quote that can go on the site.
- [ ] Collect 3–5 use cases (sector, problem, what we built, where people approved, result). These are the next content to add to the site: they help visitors trust us, and AI assistants cite concrete examples.
- [ ] Add the team (names, photos, LinkedIn) to the About page. Named experts are a strong trust signal.

## 6. Keep it fresh

- [ ] Update `contentUpdated` in `src/_data/site.js` whenever the copy changes.
- [ ] Every month, check Search Console (queries, pages, errors) and GA4 (leads by method, service and language), and adjust page copy.
- [ ] Ask an AI assistant "Who builds AI automation in Évora?" or "What is a Forward Deployed Engineer?" every few months and note whether Meanify is mentioned.
