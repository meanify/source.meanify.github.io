// Articles: src/insights/<lang>/<slug>.md → /en/insights/<slug>/ or /pt/artigos/<slug>/
// Front matter: title, description, date, updated (optional), translationKey (same in both
// languages), keywords (optional), faqs (optional list of { q, a }), draft (optional).
import { computed } from "../_lib/page-data.js";

export default {
  layout: "layouts/article.njk",
  pageKey: "article",
  eleventyComputed: {
    article: (data) => data.articles.find((a) => a.lang === data.lang && a.slug === data.page.fileSlug),
    // Up to two other articles in the same language.
    relatedArticles: (data) =>
      data.articles.filter((a) => a.lang === data.lang && a.slug !== data.page.fileSlug).slice(0, 2),
    ...computed,
  },
};
