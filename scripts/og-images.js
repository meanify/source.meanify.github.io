// Generates 1200×630 social share (Open Graph) images for every page and language.
// Runs before each Eleventy build; output: _site/og/<lang>/<pageKey>.png
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const WIDTH = 1200;
const HEIGHT = 630;
const FONT_DIR = "node_modules/@fontsource/inter/files";
const CACHE_DIR = ".cache/og";

// Label (small, orange) and title (large) for each page. Articles use the Insights label.
function pageText(t, key) {
  const svc = t.services[key];
  if (svc) return { label: svc.tagline, title: svc.name, subtitle: svc.short };
  const pages = {
    home: { label: t.home.hero.label, title: t.home.hero.title },
    services: { label: t.servicesHub.label, title: t.servicesHub.title },
    process: { label: t.processPage.label, title: t.processPage.title },
    about: { label: t.aboutPage.label, title: t.aboutPage.title },
    faq: { label: t.faqPage.label, title: t.faqPage.title },
    contact: { label: t.contactPage.label, title: t.contactPage.title },
    insights: { label: t.insights.label, title: t.insights.title },
    checklist: { label: t.checklist.label, title: t.checklist.title },
  };
  return pages[key] || { label: "Meanify", title: t.legal[key].title };
}

const el = (type, style, children) => ({ type, props: { style, children } });

function template({ label, title, subtitle }, logoDataUri, footer) {
  const titleSize = title.length > 70 ? 56 : title.length > 40 ? 64 : 76;
  return el(
    "div",
    {
      width: WIDTH,
      height: HEIGHT,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "64px 72px",
      backgroundColor: "#0a0a0a",
      backgroundImage: "radial-gradient(circle at 85% 15%, rgba(212,89,61,0.45), rgba(10,10,10,0) 55%)",
      color: "#ffffff",
      fontFamily: "Inter",
    },
    [
      el("div", { display: "flex", alignItems: "center", gap: 18 }, [
        { type: "img", props: { src: logoDataUri, width: 56, height: 53 } },
        el("div", { fontSize: 34, fontWeight: 800, letterSpacing: -1 }, "Meanify"),
      ]),
      el("div", { display: "flex", flexDirection: "column" }, [
        el(
          "div",
          { fontSize: 22, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#e06a4e", marginBottom: 24 },
          label
        ),
        el("div", { fontSize: titleSize, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }, title),
        ...(subtitle
          ? [el("div", { fontSize: 26, lineHeight: 1.4, color: "#a3a3a3", marginTop: 24, maxWidth: 980 }, subtitle)]
          : []),
      ]),
      el(
        "div",
        { display: "flex", justifyContent: "space-between", fontSize: 22, color: "#888888", borderTop: "1px solid #2a2a2a", paddingTop: 24 },
        [el("div", {}, "www.meanify.eu"), el("div", {}, footer)]
      ),
    ]
  );
}

export async function generateOgImages({ outDir, site, i18n, articles = [] }) {
  const font = (file) => readFile(path.join(FONT_DIR, file));
  const fonts = [
    { name: "Inter", data: await font("inter-latin-400-normal.woff"), weight: 400, style: "normal" },
    { name: "Inter", data: await font("inter-latin-700-normal.woff"), weight: 700, style: "normal" },
    { name: "Inter", data: await font("inter-latin-800-normal.woff"), weight: 800, style: "normal" },
    { name: "Inter", data: await font("inter-latin-ext-400-normal.woff"), weight: 400, style: "normal" },
    { name: "Inter", data: await font("inter-latin-ext-800-normal.woff"), weight: 800, style: "normal" },
  ];
  const logo = await readFile("src/assets/logos/meanify-logo.svg");
  const logoDataUri = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const templateVersion = createHash("sha1").update(await readFile(new URL(import.meta.url))).digest("hex");

  await mkdir(CACHE_DIR, { recursive: true });
  let generated = 0;

  for (const lang of site.langs) {
    const t = i18n[lang];
    const dir = path.join(outDir, "og", lang);
    await mkdir(dir, { recursive: true });

    const jobs = [
      ...Object.keys(site.pages).map((key) => ({ name: key, text: pageText(t, key) })),
      ...articles
        .filter((a) => a.lang === lang)
        .map((a) => ({ name: `article-${a.translationKey}`, text: { label: t.insights.label, title: a.title } })),
    ];

    for (const { name, text } of jobs) {
      const footer = `${site.contact.address.locality}, Portugal · ${t.langShort}`;
      const hash = createHash("sha1").update(JSON.stringify({ text, footer, templateVersion })).digest("hex");
      const cached = path.join(CACHE_DIR, `${hash}.png`);

      let png;
      if (existsSync(cached)) {
        png = await readFile(cached);
      } else {
        const svg = await satori(template(text, logoDataUri, footer), { width: WIDTH, height: HEIGHT, fonts });
        png = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } }).render().asPng();
        await writeFile(cached, png);
        generated++;
      }
      await writeFile(path.join(dir, `${name}.png`), png);
    }
  }
  return generated;
}
