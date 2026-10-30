// Site-wide settings shared by every page and language.
export default {
  url: "https://www.meanify.eu",
  name: "Meanify",
  gaId: "G-RDQM9R4TNT",
  buildDate: new Date(),

  // Date the page content was last reviewed. Update it when you change the copy:
  // it is shown on pages, and used in the sitemap and structured data.
  contentUpdated: "2026-10-30",

  // Search engine ownership verification codes (leave empty until you have them).
  // Google Search Console: "HTML tag" method; Bing Webmaster Tools: "Meta tag" method.
  verification: {
    google: "",
    bing: "",
  },

  langs: ["en", "pt"],
  locales: { en: "en_US", pt: "pt_PT" },
  hreflang: { en: "en", pt: "pt-PT" },

  // Every translated page, keyed by page id. Keep both languages in sync:
  // the language switcher, hreflang tags and sitemap are generated from this map.
  pages: {
    home: { en: "/en/", pt: "/pt/" },
    services: { en: "/en/services/", pt: "/pt/servicos/" },
    svcDev: { en: "/en/services/ai-accelerated-development/", pt: "/pt/servicos/desenvolvimento-acelerado-com-ia/" },
    svcAutomation: { en: "/en/services/ai-automation/", pt: "/pt/servicos/automacao-com-ia/" },
    svcAgents: { en: "/en/services/multi-agent-systems/", pt: "/pt/servicos/sistemas-multiagente/" },
    svcData: { en: "/en/services/data-pipelines-governance/", pt: "/pt/servicos/pipelines-e-governanca-de-dados/" },
    svcPhysical: { en: "/en/services/physical-ai/", pt: "/pt/servicos/ia-fisica/" },
    process: { en: "/en/how-we-work/", pt: "/pt/como-trabalhamos/" },
    about: { en: "/en/about/", pt: "/pt/sobre/" },
    faq: { en: "/en/faq/", pt: "/pt/perguntas-frequentes/" },
    contact: { en: "/en/contact/", pt: "/pt/contacto/" },
    insights: { en: "/en/insights/", pt: "/pt/artigos/" },
    checklist: { en: "/en/ai-readiness-checklist/", pt: "/pt/checklist-preparacao-ia/" },
    privacy: { en: "/en/privacy/", pt: "/pt/privacidade/" },
    terms: { en: "/en/terms/", pt: "/pt/termos/" },
    cookies: { en: "/en/cookies/", pt: "/pt/cookies/" },
  },

  // Service pages, in display order (the first one is the flagship).
  services: ["svcDev", "svcAutomation", "svcAgents", "svcData", "svcPhysical"],

  // Breadcrumb parent of each page (home is the implicit root).
  parents: {
    svcDev: "services",
    svcAutomation: "services",
    svcAgents: "services",
    svcData: "services",
    svcPhysical: "services",
    article: "insights",
  },

  // Contacts: do not change without approval.
  contact: {
    phone: "+351 962 390 920",
    phoneHref: "tel:+351962390920",
    phoneSchema: "+351-962-390-920",
    email: "info@meanify.eu",
    whatsapp: "351962390920",
    address: {
      street: "ÉvoraTech",
      locality: "Évora",
      region: "Alentejo",
      country: "PT",
      display: "ÉvoraTech, Évora, Portugal",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/meanify",
    facebook: "https://www.facebook.com/meanify",
  },
};
