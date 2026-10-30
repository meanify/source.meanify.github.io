// Shared data for every translated page in src/pages/.
// Each page template sets `pageKey` and paginates over site.langs (alias `lang`).
import { computed } from "../_lib/page-data.js";

export default {
  layout: "layouts/base.njk",
  pagination: { data: "site.langs", size: 1, alias: "lang" },
  permalink: (data) => data.site.pages[data.pageKey][data.lang],
  eleventyComputed: computed,
};
