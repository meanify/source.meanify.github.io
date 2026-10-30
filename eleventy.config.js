import { generateOgImages } from "./scripts/og-images.js";
import site from "./src/_data/site.js";
import en from "./src/_data/i18n/en.js";
import pt from "./src/_data/i18n/pt.js";
import loadArticles from "./src/_data/articles.js";

const FONT_DIR = "node_modules/@fontsource-variable/inter/files";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({
    [`${FONT_DIR}/inter-latin-wght-normal.woff2`]: "fonts/inter-latin-wght-normal.woff2",
    [`${FONT_DIR}/inter-latin-ext-wght-normal.woff2`]: "fonts/inter-latin-ext-wght-normal.woff2",
  });

  // Absolute URL for canonical, hreflang, sitemap and structured data.
  eleventyConfig.addFilter("absUrl", (path, base) => new URL(path, base).href);

  // The same page in the other language.
  eleventyConfig.addFilter("altLang", (lang, langs) => langs.find((l) => l !== lang));

  // "30 October 2026" / "30 de outubro de 2026"
  eleventyConfig.addFilter("longDate", (date, lang) =>
    new Intl.DateTimeFormat(lang === "pt" ? "pt-PT" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date))
  );

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  // Safe JSON for <script type="application/ld+json">.
  eleventyConfig.addFilter("jsonld", (value) =>
    JSON.stringify(value, null, 2).replace(/</g, "\\u003c")
  );

  // Nunjucks escapes output for HTML; plain-text files (llms.txt, robots.txt) must not be.
  eleventyConfig.addTransform("unescape-txt", function (content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".txt")) return content;
    return content
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  });

  // Social share images, one per page and language (cached in .cache/og).
  eleventyConfig.on("eleventy.after", async ({ directories }) => {
    const generated = await generateOgImages({ outDir: directories.output, site, i18n: { en, pt }, articles: loadArticles() });
    if (generated) console.log(`[og] generated ${generated} share image(s)`);
  });

  // Total number of items across checklist sections.
  eleventyConfig.addFilter("countItems", (sections) => sections.reduce((n, s) => n + s.items.length, 0));

  eleventyConfig.addFilter("urlencode", (value) => encodeURIComponent(value));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
