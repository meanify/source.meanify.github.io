# meanify.eu — website source

Static site built with [Eleventy](https://www.11ty.dev/). Every page is pre-rendered in English (`/en/`) and Portuguese (`/pt/`). The root `/` sends visitors to their language, using a saved choice first and then their browser settings.

## Develop

```bash
npm install
npm start        # http://localhost:8080
npm run build    # output in _site/
```

## Test locally

To check the built site exactly as GitHub Pages will serve it, build it and serve `_site/` with any static web server:

```bash
npm run build
python3 -m http.server 8080 --directory _site
```

Open http://localhost:8080/ and press `Ctrl+C` in the terminal to stop the server.

Check these:

- `/` redirects to `/en/` or `/pt/` depending on your browser language, then remembers the language switcher choice.
- The menu, language switcher, light/dark theme, cookie banner and the AI readiness checklist all work.
- An unknown address, such as http://localhost:8080/nope/, shows the 404 page.

Don't open `_site/index.html` by double-clicking it. Over `file://`, links like `/en/` point to the root of your disk and folders don't load their `index.html`, so you get "file not found" errors. The site needs a web server, which is what GitHub Pages is.

Also, serve `_site/`, not the project folder. If you serve the project folder, you get errors such as "Cannot GET /en/", because the pages only exist after the build.

While editing, `npm start` is quicker: it rebuilds and reloads the browser on every change.

## Structure

| Path | What it is |
|---|---|
| `src/_data/site.js` | URL, GA4 ID, contacts, and the page map (`pages`) that drives URLs, hreflang, the language switcher and the sitemap |
| `src/_data/i18n/en.js`, `pt.js` | Shared text (header, footer, consent, legal), one file per language |
| `src/_content/en.js`, `pt.js` | Page content: home, services, process, about, FAQ, contact (keys must match between languages) |
| `src/pages/*.njk` | Translated pages. Each one sets `pageKey` and is generated once per language. Service pages share `partials/service.njk` |
| `src/_includes/` | Layout and partials (head/SEO, header, footer, consent banner, analytics) |
| `src/assets/` | CSS, JS and logos, copied to the site root |
| `src/index.njk` | Root language router |
| `src/insights/en/`, `src/insights/pt/` | Articles in Markdown, one file per language (see [docs/growth-playbook.md](docs/growth-playbook.md)) |
| `src/_data/articles.js` | Reads the articles' front matter for lists, feeds, sitemap, `llms.txt` and share images |
| `src/_lib/page-data.js` | Computed data shared by pages and articles: URLs per language, meta tags, structured data, breadcrumbs, lead links |
| `src/pages/checklist.njk` | The AI readiness checklist (free lead magnet); scoring and print are in `src/assets/js/main.js` |
| `src/llms.njk`, `src/llms-full.njk` | `/llms.txt` and `/llms-full.txt`, summaries of the site for AI assistants, generated from the content files |
| `scripts/og-images.js` | Generates a 1200×630 share image per page and language into `_site/og/` after each build (cached in `.cache/og`) |

To add a page, add its URLs to `site.pages`, its `meta` and text to both content files, and a template in `src/pages/`. To add a service, also add its key to `site.services` and `site.parents`.

## Content dates and verification

`src/_data/site.js` has `contentUpdated` (shown as "Last updated" on pages, and used in the sitemap and structured data): update it when you change the copy. It also has empty `verification.google` and `verification.bing` fields for the Search Console and Bing Webmaster Tools meta tags. See [docs/off-site-checklist.md](docs/off-site-checklist.md) for the steps outside this repo.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`. It builds the site and publishes `_site/` to [meanify/meanify.github.io](https://github.com/meanify/meanify.github.io), which serves www.meanify.eu. One-time setup (a deploy key) is described at the top of the workflow file.

The site itself is static: Node.js is only needed to build it. `_site/` contains plain HTML, CSS, JavaScript, images and fonts, with no server code, which is all GitHub Pages serves.

### Manual deploy (without GitHub Actions)

Build locally:

```bash
npm install && npm run build
```

Then copy the contents of `_site/` into a local checkout of `meanify.github.io` and push. For example, with both repos in the same folder:

```bash
rsync -a --delete --exclude .git --exclude .gitignore _site/ ../meanify.github.io/
cd ../meanify.github.io
touch .nojekyll
git add -A && git commit -m "Deploy site" && git push
```

- `--delete` removes pages that no longer exist in the build; `--exclude .git --exclude .gitignore` keeps the Pages repo's history and its `.gitignore`.
- `_site/` already includes `CNAME` (www.meanify.eu), so the custom domain is kept.
- `.nojekyll` tells GitHub Pages to serve the files as they are instead of running Jekyll (the Actions deploy adds it automatically).

## Analytics

GA4 (`G-RDQM9R4TNT`) runs with Google Consent Mode v2. Analytics cookies are only set after the visitor accepts. Clicks on WhatsApp, email and phone links send a `generate_lead` event (`method`, `cta_location`, `service`, `page_language`). The checklist sends `checklist_start`, `checklist_complete` and `checklist_print`. Mark `generate_lead` as a key event in GA4; the monthly review is in [docs/growth-playbook.md](docs/growth-playbook.md).
