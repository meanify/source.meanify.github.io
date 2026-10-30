# Growth playbook

How to keep www.meanify.eu bringing in leads after launch: publish articles, review the numbers every month, and adjust.

## 1. Publishing an article

Articles live in `src/insights/en/` and `src/insights/pt/`, one Markdown file per language. The file name becomes the URL:

- `src/insights/en/my-article.md` → `/en/insights/my-article/`
- `src/insights/pt/o-meu-artigo.md` → `/pt/artigos/o-meu-artigo/`

Front matter:

```yaml
---
title: "What is a Forward Deployed Engineer?"
description: "One or two sentences (about 150–160 characters). Used in search results, share cards and the article list."
date: "2026-10-30"          # publication date
updated: "2026-11-15"       # optional, when you revise it
translationKey: forward-deployed-engineer   # same value in the EN and PT files, links the two versions
keywords: ["Forward Deployed Engineer", "AI development"]
faqs:                       # optional, shown at the end and marked up for search engines
  - q: "Question?"
    a: "Answer in 1–3 sentences."
draft: true                 # optional, leaves the article out of the site
---
```

Everything else is automatic: the Insights list, related articles, the language switcher, the RSS feeds (`/en/insights/feed.xml`, `/pt/artigos/feed.xml`), the sitemap, `llms.txt`, the share image and the structured data.

**Writing guidelines (for both search engines and AI assistants):**

- Start with a **bold one- or two-sentence answer** to the question in the title. This is the part AI assistants quote.
- Use **H2 headings** (`##`) that read like questions or clear statements.
- Prefer **lists and tables** for steps, comparisons and criteria.
- Be **specific**: real numbers, named tools, concrete examples. Avoid hype.
- Link to **one or two service pages** and **one other article**, and end with a link to the contact page.
- Write the **Portuguese version as an adaptation**, not a word-for-word translation, using the terms Portuguese buyers search for.
- Aim for 600–1,200 words. One good article a month per language is better than four thin ones.

## 2. Content calendar (first six months)

Topics chosen for search demand, AI-assistant questions and closeness to the services. Each one links to the service in brackets.

| Month | EN | PT | Links to |
|---|---|---|---|
| Nov 2026 | What does AI automation cost for a small company? | Quanto custa a automação com IA para uma PME? | AI Automation |
| Dec 2026 | Multi-agent systems explained: when one AI agent isn't enough | Sistemas multiagente explicados: quando um agente de IA não chega | Multi-Agent Systems |
| Jan 2027 | Data governance for SMEs: a practical starting point | Governança de dados para PME: por onde começar | Data Pipelines & Governance |
| Feb 2027 | The EU AI Act for software projects: what changes for you | O Regulamento Europeu da IA em projetos de software: o que muda | How we work |
| Mar 2027 | Physical AI for farms and wineries in Alentejo | IA física para explorações agrícolas e adegas do Alentejo | Physical AI |
| Apr 2027 | AI-accelerated vs traditional software development: a comparison | Desenvolvimento acelerado com IA vs tradicional: comparação | AI-Accelerated Development |

Once you have real projects, turn each into a use case article (sector, problem, what was built, where people approved, result).

## 3. Monthly review (about 30 minutes)

### Google Analytics 4

Mark these as **key events** once (Admin → Events): `generate_lead`. Optionally also `checklist_complete`.

Each month, in Reports → Engagement → Events, look at:

| Event | What it tells you | Useful parameters |
|---|---|---|
| `generate_lead` | Clicks on WhatsApp, email or phone links | `method`, `cta_location`, `service`, `page_language` |
| `cta_click` | Clicks on other calls to action | `cta_location` |
| `checklist_start` / `checklist_complete` / `checklist_print` | Engagement with the AI readiness checklist | `score`, `page_language` |
| `language_switch` | Visitors changing language | `from_language`, `to_language` |

To see parameters such as `method` or `service` in reports, register them as **custom dimensions** (Admin → Custom definitions → Create custom dimension, scope "Event"): `method`, `cta_location`, `service`, `page_language`, `score`.

Questions to answer:

1. How many leads this month, and by which method (WhatsApp, email, phone)?
2. Which pages and services produce leads? Which get visits but no leads?
3. Which CTA locations work (hero, header, contact section, service pages, checklist)?
4. English vs Portuguese: where is each audience coming from, and does each convert?

Only visitors who accepted analytics cookies are counted in full, so treat the numbers as a trend, not an exact count.

### Google Search Console

In Performance → Search results, last 28 days compared with the previous period:

1. **Queries** with many impressions but a low click-through rate: improve that page's title and description in `src/_content/*.js`.
2. **Queries in positions 8–20**: a page is close to page one. Add a section, FAQ or article that answers that query better.
3. **New queries** you didn't expect: candidates for the next article.
4. Pages → check that `/en/` and `/pt/` pages are both indexed, and fix anything under "Why pages aren't indexed".

### AI assistants

Every few months, ask ChatGPT, Perplexity, Gemini and Claude questions such as "Who builds AI automation in Évora?", "What is a Forward Deployed Engineer?" or "Empresa de desenvolvimento de software com IA em Portugal". Note whether Meanify is mentioned and which pages are cited, and strengthen the pages that should be cited but aren't.

## 4. After each change

- Update `contentUpdated` in `src/_data/site.js` when the copy of the main pages changes.
- Keep the off-site profiles in [off-site-checklist.md](off-site-checklist.md) consistent with the site.
