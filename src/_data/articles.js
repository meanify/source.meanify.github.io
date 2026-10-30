// Every article in src/insights/<lang>/*.md, newest first, with links to its translations.
// Used by the article pages, the Insights index, feeds, sitemap, llms.txt and share images.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import site from "./site.js";

const ROOT = "src/insights";
const isoDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d));

export default function () {
  const list = [];
  for (const lang of site.langs) {
    const dir = path.join(ROOT, lang);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
      const { data, content } = matter(readFileSync(path.join(dir, file), "utf8"));
      if (data.draft) continue;
      const slug = path.basename(file, ".md");
      const words = content.split(/\s+/).filter(Boolean).length;
      list.push({
        lang,
        slug,
        url: `${site.pages.insights[lang]}${slug}/`,
        translationKey: data.translationKey || slug,
        title: data.title,
        description: data.description,
        date: isoDate(data.date),
        updated: isoDate(data.updated || data.date),
        keywords: data.keywords || [],
        faqs: data.faqs || [],
        readingMinutes: Math.max(1, Math.round(words / 200)),
      });
    }
  }
  for (const a of list) {
    a.alternates = Object.fromEntries(
      list.filter((b) => b.translationKey === a.translationKey).map((b) => [b.lang, b.url])
    );
  }
  return list.sort((a, b) => b.date.localeCompare(a.date));
}
