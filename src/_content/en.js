// English page content (phase 2 core pages). Keys must match pt.js.
// Imported by src/_data/i18n/en.js.
export default {
  nav: {
    services: "Services",
    allServices: "All services",
    process: "How we work",
    about: "About",
    faq: "FAQ",
    faqShort: "FAQ",
    contact: "Contact",
    insights: "Insights",
    cta: "Talk to an engineer",
  },

  meta: {
    home: {
      title: "Meanify | AI-Accelerated Software Development & Data",
      description: "Forward Deployed Engineers who build software, AI automation, multi-agent systems and data platforms faster and cheaper. Human-reviewed. Évora, Portugal.",
    },
    services: {
      title: "AI Development, Automation & Data Services | Meanify",
      description: "AI-accelerated development, AI automation, multi-agent systems, data pipelines and governance, and physical AI. One validated process with human review.",
    },
    svcDev: {
      title: "AI-Accelerated Development & Forward Deployed Engineers",
      description: "Forward Deployed Engineers who join your team and ship production software faster and at lower cost, with every AI-assisted change reviewed by a human.",
    },
    svcAutomation: {
      title: "AI Automation Services for Business Processes | Meanify",
      description: "Automate repetitive work such as documents, emails, data entry and routing with AI, with human approval for the decisions that matter. Based in Portugal.",
    },
    svcAgents: {
      title: "Multi-Agent Systems Development | Meanify",
      description: "We design and build multi-agent AI systems with guardrails, monitoring and human approval points, connected to your data and tools.",
    },
    svcData: {
      title: "Data Pipelines, Data Management & Governance | Meanify",
      description: "Reliable data pipelines, quality checks, lineage and access control. Data governance ready for analytics, AI, the GDPR and the EU AI Act.",
    },
    svcPhysical: {
      title: "Physical AI & Edge AI for Local Companies | Meanify",
      description: "Small, practical physical AI projects with sensors, cameras and edge devices for companies in Alentejo and across Portugal. Start with a pilot.",
    },
    process: {
      title: "How We Work: Validated AI Process, Human in the Loop | Meanify",
      description: "Our five-step, validated process: AI speeds up the work, engineers review every change, and you approve every delivery.",
    },
    about: {
      title: "About Meanify | AI Engineering Company in Évora, Portugal",
      description: "Meanify is an AI engineering company based at ÉvoraTech, Évora. We combine AI speed with human judgement to build software and data systems.",
    },
    faq: {
      title: "FAQ: AI Development, Forward Deployed Engineers & Data | Meanify",
      description: "Answers about Forward Deployed Engineers, AI-written code, human in the loop, data security, the GDPR, the EU AI Act and working with Meanify.",
    },
    contact: {
      title: "Contact Meanify | WhatsApp, Email & Phone",
      description: "Talk directly to a Meanify engineer by WhatsApp, email or phone. ÉvoraTech, Évora, Portugal. +351 962 390 920, info@meanify.eu.",
    },
    insights: {
      title: "Insights: AI Development, Automation & Data | Meanify",
      description: "Practical articles on AI-accelerated development, Forward Deployed Engineers, human-in-the-loop AI, automation and data governance.",
    },
    checklist: {
      title: "AI Readiness Checklist for Companies (Free) | Meanify",
      description: "A free 17-point checklist to see if your company is ready for an AI project: goals, process, data, systems, people and risk. No sign-up.",
    },
    privacy: {
      title: "Privacy Policy | Meanify",
      description: "How Meanify collects, uses and protects personal data under the GDPR, and how to exercise your rights.",
    },
    terms: {
      title: "Terms of Service | Meanify",
      description: "Terms of use for the Meanify website, www.meanify.eu.",
    },
    cookies: {
      title: "Cookie Policy | Meanify",
      description: "Which cookies and browser storage the Meanify website uses, and how to change your consent.",
    },
  },

  insights: {
    label: "Insights",
    title: "Practical notes on building with AI",
    lead: "Short, practical articles on AI-accelerated development, Forward Deployed Engineers, automation and data, written by the Meanify team.",
    readMore: "Read article",
    minRead: "{n} min read",
    published: "Published",
    by: "By",
    relatedTitle: "More articles",
    feed: "Subscribe via RSS",
  },

  checklist: {
    label: "Free checklist",
    title: "AI readiness checklist",
    lead: "Is your company ready for an AI project? Tick what is true today. It takes five minutes, needs no sign-up, and tells you where to start.",
    printCta: "Print or save as PDF",
    scoreLabel: "Your score",
    resultTitle: "What your score means",
    results: [
      { min: 0, title: "Start with a short discovery", text: "There are open questions about goals, process or data. That's normal. A short discovery will clarify them before you invest in building anything." },
      { min: 8, title: "A good candidate for a pilot", text: "You have the basics in place. A small, well-scoped pilot can prove the value quickly and show what to fix before scaling." },
      { min: 14, title: "Ready to build", text: "Goals, process, data and people are in place. You're ready to start building, with human checkpoints from day one." },
    ],
    ctaTitle: "Want a second opinion on your score?",
    ctaText: "Send us your score and a line about the process you want to improve. An engineer will reply with honest next steps.",
    ctaButton: "Send my score on WhatsApp",
    whatsappText: "Hi Meanify, I completed the AI readiness checklist and scored {score}/{total}. The process I want to improve is: ",
    sections: [
      {
        title: "Goals",
        items: [
          "We know which process or problem we want to improve.",
          "We can describe success in numbers, such as hours saved, cost or error rate.",
          "Someone in the business owns the project and can make decisions.",
        ],
      },
      {
        title: "Process",
        items: [
          "The process happens often (daily or weekly).",
          "Most steps follow rules that can be written down.",
          "We know which steps need human judgement or approval.",
        ],
      },
      {
        title: "Data",
        items: [
          "The data the process needs is digital, not only on paper.",
          "We know where the data lives and who is responsible for it.",
          "The data is reasonably complete and correct.",
          "We can give secure access to the data.",
        ],
      },
      {
        title: "Systems",
        items: [
          "Our main tools have APIs or export options.",
          "We can run a pilot without changing our core systems.",
        ],
      },
      {
        title: "People and risk",
        items: [
          "The people who do the work today are involved in the project.",
          "We know which rules apply, such as the GDPR, sector rules or the EU AI Act.",
          "We have agreed who reviews and approves the AI's output.",
          "We accept starting small and improving in steps.",
          "We have a budget for a pilot, even a small one.",
        ],
      },
    ],
    teaserTitle: "Is your company ready for AI?",
    teaserText: "Take our free 17-point checklist. Five minutes, no sign-up.",
    teaserCta: "Take the checklist",
  },

  // Shared call-to-action band shown at the end of most pages.
  ctaBand: {
    title: "Tell us what you want to build",
    text: "Talk directly to an engineer. No forms, no sales scripts.",
    whatsapp: "Message us on WhatsApp",
    email: "Send an email",
  },

  // Direct contact channels (home and contact page).
  channels: {
    whatsappTitle: "WhatsApp",
    whatsappDesc: "The fastest way to reach us.",
    whatsappCta: "Start a chat",
    emailTitle: "Email",
    emailDesc: "Send a short brief and we'll get back to you.",
    emailCta: "Write to us",
    phoneTitle: "Phone",
    phoneDesc: "Prefer to talk? Give us a call.",
    phoneCta: "Call us",
    addressTitle: "Office",
  },

  // Labels used by the service page template.
  servicePage: {
    whoTitle: "Who it's for",
    problemsTitle: "Problems we solve",
    includedTitle: "What's included",
    stepsTitle: "How it works",
    humanLabel: "Human checkpoint",
    techTitle: "Technologies we use",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Related services",
    learnMore: "Learn more",
    whatsappText: "Hi Meanify, I'm interested in {service}.",
  },

  home: {
    hero: {
      label: "Forward Deployed Engineers · AI-accelerated",
      title: "Software and AI systems, built faster by engineers, validated by humans.",
      subtitle: "Meanify's Forward Deployed Engineers join your team and use proven AI workflows to deliver software, automation and data systems faster and at lower cost. A person reviews every step.",
      ctaPrimary: "Talk to an engineer",
      ctaSecondary: "See how we work",
    },
    trust: [
      "Based at ÉvoraTech, Évora",
      "English & Portuguese",
      "Human review at every step",
      "GDPR & EU AI Act aware",
    ],
    problem: {
      label: "Why Meanify",
      title: "AI speed, with human judgement",
      items: [
        {
          title: "Traditional development is slow",
          text: "Custom software often takes months, needs a large team and goes over budget before it reaches users.",
        },
        {
          title: "AI without oversight is risky",
          text: "AI tools write code and make decisions quickly, but without review they introduce errors, security issues and loss of control.",
        },
        {
          title: "Our answer: both",
          text: "We use validated AI workflows to move fast, and engineers review and test every change. You approve every delivery.",
        },
      ],
    },
    services: {
      label: "Services",
      title: "What we build",
      intro: "Five services, one validated process. Start with the one that solves your most pressing problem.",
      featured: "Flagship",
    },
    process: {
      label: "How we work",
      title: "A validated process, with a human in the loop",
      intro: "The same five steps on every project. AI speeds up the work; people make the decisions.",
      cta: "See the full process",
    },
    why: {
      label: "What you get",
      title: "Faster. More affordable. Reliable.",
      items: [
        {
          title: "Faster delivery",
          text: "AI handles repetitive work such as boilerplate code, tests and documentation, so engineers focus on design and the hard problems.",
        },
        {
          title: "Lower cost",
          text: "Fewer hours are needed to reach the same quality, and you only pay for engineers embedded in your project when you need them.",
        },
        {
          title: "Reliable results",
          text: "Every AI-assisted change is reviewed by an engineer and checked by automated tests before it ships. Nothing goes live without your approval.",
        },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Common questions",
      cta: "All questions",
      ids: ["what-does-meanify-do", "fde", "human-in-the-loop", "data-training"],
    },
  },

  servicesHub: {
    label: "Services",
    title: "AI development, automation and data services",
    lead: "Meanify offers five services, all delivered by Forward Deployed Engineers using the same validated, human-reviewed process. Each one can start small and grow with your needs.",
    notSureTitle: "Not sure where to start?",
    notSureText: "Tell us about the problem you want to solve. We'll tell you honestly which service fits, or if AI is not the right answer.",
  },

  services: {
    svcDev: {
      name: "AI-Accelerated Development",
      tagline: "Forward Deployed Engineers",
      icon: "code",
      short: "Engineers who join your team and ship production software faster and at lower cost, using validated AI workflows with a human reviewing every step.",
      lead: "AI-accelerated development is how Meanify builds software. Our Forward Deployed Engineers work inside your team and use proven AI workflows to write code, tests and documentation faster. An engineer reviews every change before it ships, so you get speed and lower cost without losing quality or control.",
      who: [
        "Companies that need a new product, internal tool or integration",
        "Teams with a backlog bigger than their capacity",
        "Organisations modernising legacy systems",
        "Start-ups that need to reach production quickly",
      ],
      problems: [
        "Software projects that take months and go over budget",
        "Hiring a full in-house team is slow and expensive",
        "Worry that AI-written code is unreliable or insecure",
        "Legacy code that nobody wants to touch",
      ],
      included: [
        { title: "Embedded engineers", text: "Our engineers work in your tools, repositories and team routines, close to your users." },
        { title: "Production software", text: "Web applications, APIs, integrations and internal tools, built to run in production." },
        { title: "Tests and documentation", text: "Generated with AI, checked by engineers and delivered with the code." },
        { title: "Review on every change", text: "No AI-assisted code is merged without an engineer's review and passing tests." },
        { title: "Full handover", text: "Your team owns the code and gets the documentation to maintain it." },
      ],
      steps: [
        { title: "Discovery", text: "A short workshop to agree on scope, priorities and what success looks like.", human: "You approve the scope." },
        { title: "Set-up", text: "Engineers join your team and set up the AI-assisted workflow in your repositories.", human: "Your team agrees on tools and access." },
        { title: "Build in short iterations", text: "AI drafts code and tests; engineers design, review and refine them.", human: "Every change is reviewed and tested." },
        { title: "Deliver and hand over", text: "Demo, deploy and hand over with documentation.", human: "You accept each delivery." },
      ],
      tech: ["TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "AWS, Azure or Google Cloud", "CI/CD with automated tests"],
      faqs: [
        { q: "What is a Forward Deployed Engineer?", a: "A Forward Deployed Engineer is a software engineer who works directly inside a client's team, close to the users and the problem, instead of building in isolation. At Meanify, our Forward Deployed Engineers also bring validated AI workflows that speed up delivery." },
        { q: "Is AI-written code safe to use in production?", a: "Only when it is reviewed and tested. At Meanify, an engineer reviews every AI-assisted change, and it must pass automated tests before it is merged. AI speeds up the work; engineers stay responsible for the result." },
        { q: "Why is AI-accelerated development cheaper?", a: "AI handles a large share of repetitive work such as boilerplate code, tests and documentation, so engineers spend their time on design, review and the hard problems. Fewer hours are needed to reach the same quality." },
        { q: "Who owns the code?", a: "You do. The code is written in your repositories and handed over with documentation so your team can maintain it." },
      ],
      related: ["svcAgents", "svcData"],
    },

    svcAutomation: {
      name: "AI Automation",
      tagline: "Less manual work",
      icon: "ops",
      short: "Automate repetitive workflows with AI, while people keep approving the decisions that matter.",
      lead: "AI automation uses language models and integrations to handle repetitive work such as reading documents, routing requests, updating systems and drafting replies. Meanify designs each automation with clear human approval points, so routine tasks run on their own and important decisions stay with your team.",
      who: [
        "Operations and back-office teams",
        "Finance teams processing invoices and documents",
        "Customer service teams handling many requests",
        "Any team copying data between systems by hand",
      ],
      problems: [
        "Hours lost copying data between tools",
        "Documents and emails that must be read, sorted and routed",
        "Errors from manual data entry",
        "Old automations that break whenever something changes",
      ],
      included: [
        { title: "Process mapping", text: "We find the steps worth automating and the ones that should stay with a person." },
        { title: "Document and email processing", text: "Extract data from invoices, forms, contracts and emails, and classify them." },
        { title: "System integrations", text: "Connect your ERP, CRM, email and spreadsheets through APIs." },
        { title: "Human approval steps", text: "Review queues and approvals wherever judgement is needed." },
        { title: "Monitoring", text: "Logs, alerts and reports so you can always see what the automation did." },
      ],
      steps: [
        { title: "Map the process", text: "We map the current process and measure the effort it takes today.", human: "You confirm the process and priorities." },
        { title: "Design", text: "We design the automation and agree where people approve.", human: "You approve the rules and approval points." },
        { title: "Build and test", text: "We build and test with real examples from your own data.", human: "Results are checked against real cases." },
        { title: "Run and monitor", text: "The automation runs alongside the current process first, then takes over with monitoring.", human: "You decide when to switch over." },
      ],
      tech: ["Large language models (LLMs)", "Document AI and OCR", "REST APIs and webhooks", "Workflow automation tools", "Microsoft 365 and Google Workspace", "ERP and CRM integrations"],
      faqs: [
        { q: "What kind of processes can be automated with AI?", a: "Processes that are repetitive and follow recognisable patterns: reading and classifying documents, extracting data, routing requests, updating records and drafting standard replies. Steps that need judgement can stay with a person as an approval." },
        { q: "Will the automation make decisions without us?", a: "Only the ones you agree to. We define approval points together, and anything outside the agreed rules goes to a person for review." },
        { q: "Do we need to replace our current software?", a: "No. We connect to the tools you already use through their APIs or other integrations." },
      ],
      related: ["svcAgents", "svcData"],
    },

    svcAgents: {
      name: "Multi-Agent Systems",
      tagline: "AI agents that work together",
      icon: "agents",
      short: "Coordinated AI agents that handle complex, multi-step work, with guardrails, monitoring and human approval points.",
      lead: "A multi-agent system is a group of specialised AI agents that work together on a task: one plans, others look up information, act on your systems or check the results. Meanify designs and builds multi-agent systems with guardrails, full logging and human approval at key steps, so they are reliable enough for real business processes.",
      who: [
        "Companies with complex processes that span several systems",
        "Teams that tried a single chatbot and reached its limits",
        "Organisations that need AI assistants connected to internal data and tools",
        "Product teams adding agent features to their software",
      ],
      problems: [
        "A general-purpose chatbot can't handle multi-step work reliably",
        "No visibility into what the AI did or why",
        "Risk of AI taking actions without control",
        "Agents that work in a demo but fail in production",
      ],
      included: [
        { title: "Agent architecture", text: "We choose the agents' roles, their tools and how they coordinate." },
        { title: "Tool and data integrations", text: "Agents connect to your systems and documents, including through the Model Context Protocol (MCP)." },
        { title: "Guardrails", text: "Permissions, limits and checks on what each agent is allowed to do." },
        { title: "Human approvals", text: "Important actions wait for a person to approve them." },
        { title: "Evaluation and monitoring", text: "Test sets, logging and tracing to measure quality over time." },
      ],
      steps: [
        { title: "Define the task", text: "We agree on the task, what success looks like and the risks.", human: "You approve the scope and limits." },
        { title: "Prototype", text: "We build a first version and test it on a set of real cases.", human: "Results are reviewed case by case." },
        { title: "Add controls", text: "We add guardrails, approval steps and monitoring.", human: "You decide which actions need approval." },
        { title: "Roll out", text: "We roll out gradually and keep evaluating after every change.", human: "Quality is reviewed before each release." },
      ],
      tech: ["Anthropic Claude, OpenAI and open-source models", "Model Context Protocol (MCP)", "Agent orchestration frameworks", "Retrieval-augmented generation (RAG)", "Vector databases", "Tracing and evaluation tools"],
      faqs: [
        { q: "What is the difference between an AI agent and a multi-agent system?", a: "An AI agent is a single model that can use tools to complete a task. A multi-agent system splits the work between several specialised agents that coordinate, which makes complex tasks easier to control, test and improve." },
        { q: "How do you keep AI agents under control?", a: "Each agent only gets the permissions it needs, every action is logged, and important actions need human approval. We also test agents against a set of real cases before and after every change." },
        { q: "Can the agents use our internal data?", a: "Yes. We connect agents to your documents, databases and tools with access controls, so they only see what they are allowed to see." },
      ],
      related: ["svcAutomation", "svcDev"],
    },

    svcData: {
      name: "Data Pipelines & Governance",
      tagline: "Data you can trust",
      icon: "data",
      short: "Reliable data pipelines, data management and governance, ready for analytics, AI and the GDPR.",
      lead: "Data pipelines move data from your systems to where it is used, cleaning and checking it along the way. Meanify builds data pipelines and sets up data management and governance (quality checks, lineage, access control and retention rules), so your data is reliable for reporting and AI and compliant with the GDPR.",
      who: [
        "Companies whose reports don't match between departments",
        "Organisations preparing their data for AI projects",
        "Regulated sectors that need traceability and access control",
        "Teams maintaining fragile scripts and spreadsheets",
      ],
      problems: [
        "Data spread across many systems and spreadsheets",
        "Nobody trusts the numbers",
        "Pipelines that break without anyone noticing",
        "No clear rules on who can access which data, or how long it is kept",
      ],
      included: [
        { title: "Data pipelines", text: "Batch and streaming ingestion, transformation and loading." },
        { title: "Data quality checks", text: "Automated tests that catch errors before they reach your reports." },
        { title: "Data modelling", text: "Warehouse or lakehouse models designed for analytics and AI." },
        { title: "Governance", text: "Catalogue, lineage, ownership, access control and retention policies." },
        { title: "GDPR and EU AI Act support", text: "Documentation and controls for personal data and AI use." },
      ],
      steps: [
        { title: "Audit", text: "We review your data sources, flows and pain points.", human: "You confirm priorities and owners." },
        { title: "Design", text: "We design the target architecture and the governance rules.", human: "You approve the architecture and rules." },
        { title: "Build", text: "We build pipelines with tests and monitoring from day one.", human: "Every pipeline change is reviewed." },
        { title: "Hand over", text: "We document everything and train your team.", human: "Your team signs off the handover." },
      ],
      tech: ["SQL and Python", "dbt", "Apache Airflow", "Apache Spark", "PostgreSQL", "Cloud data warehouses", "Data catalogue and lineage tools"],
      faqs: [
        { q: "What is data governance?", a: "Data governance is the set of rules and responsibilities that decide who owns each dataset, who can access it, how its quality is checked and how long it is kept. It makes data trustworthy and helps meet legal requirements such as the GDPR." },
        { q: "Do we need clean data before starting an AI project?", a: "You need data that is good enough for the task. We often start with a short data audit, fix the issues that matter for the project and add quality checks so problems are caught early." },
        { q: "Can you work with our existing data platform?", a: "Yes. We build on the databases, warehouses and cloud services you already use whenever possible." },
      ],
      related: ["svcAgents", "svcAutomation"],
    },

    svcPhysical: {
      name: "Physical AI",
      tagline: "For local companies",
      icon: "chip",
      short: "Small, practical AI projects that connect sensors, cameras and devices for local companies.",
      lead: "Physical AI connects artificial intelligence to the physical world through sensors, cameras and small devices. Meanify works with local companies in Alentejo and across Portugal on small, practical projects, such as monitoring equipment, counting, inspection or measuring energy use, that start small and prove their value quickly.",
      who: [
        "Farms, wineries and agri-food companies",
        "Small factories and workshops",
        "Shops, warehouses and logistics",
        "Buildings that need to monitor energy, equipment or space",
      ],
      problems: [
        "Manual checks and readings that take time",
        "Problems found too late: breakdowns, waste or quality issues",
        "IoT projects that seem too big or expensive for a small company",
        "Data from machines and sensors that nobody uses",
      ],
      included: [
        { title: "Feasibility check", text: "A short visit to see whether the idea is worth doing." },
        { title: "Sensors and devices", text: "Choosing and installing affordable hardware." },
        { title: "Computer vision", text: "Cameras that count, inspect or detect events." },
        { title: "Edge AI", text: "Models that run on small devices on site, without sending everything to the cloud." },
        { title: "Dashboards and alerts", text: "Simple screens and notifications your team will actually use." },
      ],
      steps: [
        { title: "Site visit", text: "We visit your site and check what is feasible.", human: "You decide whether to go ahead." },
        { title: "Pilot", text: "A small pilot with one device, one machine or one line.", human: "Your team checks the readings." },
        { title: "Measure", text: "We measure the results together against what was agreed.", human: "You judge whether it delivered value." },
        { title: "Scale", text: "If it works, we extend it to more sites or machines.", human: "You approve each extension." },
      ],
      tech: ["Raspberry Pi and ESP32", "NVIDIA Jetson", "Computer vision models", "LoRaWAN and Wi-Fi sensors", "MQTT", "Dashboards"],
      faqs: [
        { q: "What is physical AI?", a: "Physical AI is artificial intelligence that senses or acts in the physical world, using sensors, cameras or devices. Examples include cameras that inspect product quality, sensors that warn of equipment failures and systems that monitor energy use." },
        { q: "Is physical AI only for large factories?", a: "No. We focus on small projects for local companies, starting with a pilot on one machine, line or site, so the investment stays small until the value is proven." },
        { q: "Do you work outside Alentejo?", a: "Yes. We are based in Évora and work across Portugal. On-site work outside Alentejo is planned per project." },
      ],
      related: ["svcData", "svcAutomation"],
    },
  },

  processPage: {
    label: "How we work",
    title: "A validated AI process, with a human in the loop",
    lead: "Every Meanify project follows the same validated process. AI speeds up the repetitive work, engineers review every change, and you approve every delivery. That is how we deliver faster and at lower cost without giving up reliability.",
    stepsTitle: "Five steps, on every project",
    steps: [
      { title: "Discover", text: "We learn your process, goals and constraints, and agree on what success looks like.", human: "You approve the scope and success criteria." },
      { title: "Plan", text: "We define the architecture, the iterations and where the review checkpoints are.", human: "You approve the plan." },
      { title: "Build with AI", text: "Engineers use validated AI workflows to draft code, tests, automations and documentation.", human: "Engineers design and guide the work." },
      { title: "Validate", text: "Every change is reviewed by an engineer and checked by automated tests before it is merged.", human: "Nothing ships without review." },
      { title: "Deliver and support", text: "We demo, deploy and hand over with documentation, then support you after go-live.", human: "You accept each delivery." },
    ],
    splitTitle: "What AI does, and what people decide",
    splitAi: "AI does",
    splitHuman: "People decide",
    split: [
      { ai: "Drafts code, tests and documentation", human: "Architecture, design and what gets merged" },
      { ai: "Reads, extracts and classifies documents", human: "Rules, exceptions and approvals" },
      { ai: "Suggests actions in agent workflows", human: "Which actions run, and with what permissions" },
      { ai: "Checks data quality at scale", human: "Data ownership, access and retention" },
    ],
    fdeTitle: "Forward Deployed Engineers",
    fdeText: "Our engineers work inside your team: in your tools, your repositories and your routines. They stay close to your users and the real problem, so what we build fits how your business actually works.",
    fdePoints: [
      "Work in your repositories and tools",
      "Join your planning and reviews",
      "Explain decisions in plain language",
      "Hand over everything they build",
    ],
    trustTitle: "Security, data and ownership",
    trust: [
      { title: "Your data stays yours", text: "We use AI services and settings that do not train on client data, and can use EU-hosted or on-premise models when needed." },
      { title: "You own the result", text: "Code, automations and documentation belong to you and live in your systems." },
      { title: "Privacy by design", text: "Access control, data minimisation and retention rules are part of the design, in line with the GDPR." },
      { title: "Traceable work", text: "Reviews, tests and decisions are recorded, so you can see who approved what and when." },
    ],
  },

  aboutPage: {
    label: "About",
    title: "An AI engineering company from Évora",
    lead: "Meanify is an AI engineering company based at ÉvoraTech, in Évora, Portugal. Our Forward Deployed Engineers use AI-accelerated development to build software, AI automation, multi-agent systems, data platforms and small physical AI projects, with a human reviewing every step.",
    storyTitle: "Why we exist",
    story: [
      "AI has changed how software is built. Work that took weeks can now take days, but only if someone with experience checks that the result is right.",
      "We started Meanify to bring that speed to companies of every size, without the risk. We combine validated AI workflows with engineers who take responsibility for every change.",
    ],
    valuesTitle: "What we stand for",
    values: [
      { title: "Human in the loop", text: "AI helps us work faster. People stay responsible for decisions and quality." },
      { title: "Honest advice", text: "If AI is not the right answer to your problem, we will tell you." },
      { title: "Practical results", text: "We start small, prove value and grow from there." },
      { title: "Close to our clients", text: "We work inside your team and speak your language, in English or Portuguese." },
    ],
    locationTitle: "Based in Alentejo, working across Europe",
    locationText: "We are part of the ÉvoraTech community in Évora. We work remotely with clients across Portugal and Europe, and on site with local companies in Alentejo.",
    detailsTitle: "Company details",
    details: {
      name: "Name",
      address: "Address",
      email: "Email",
      phone: "Phone",
      languages: "Languages",
      languagesValue: "English, Portuguese",
    },
  },

  faqPage: {
    label: "FAQ",
    title: "Frequently asked questions",
    lead: "Straight answers about how Meanify works, AI-accelerated development, data security and working together. Can't find your question? Ask us directly.",
    groups: [
      {
        title: "About Meanify",
        items: [
          { id: "what-does-meanify-do", q: "What does Meanify do?", a: "Meanify is an AI engineering company based in Évora, Portugal. Our Forward Deployed Engineers use AI-accelerated development to build software, AI automation, multi-agent systems, data pipelines and governance, and small physical AI projects, with a human reviewing every step." },
          { id: "location", q: "Where is Meanify based?", a: "At ÉvoraTech, in Évora, Portugal. We work with clients across Portugal and Europe, remotely and on site." },
          { id: "languages", q: "Which languages do you work in?", a: "English and Portuguese." },
          { id: "small-companies", q: "Do you work with small companies?", a: "Yes. Many of our projects start small, such as one automation, one pilot or one engineer embedded in your team, and grow once they have proven their value." },
        ],
      },
      {
        title: "AI and quality",
        items: [
          { id: "fde", q: "What is a Forward Deployed Engineer?", a: "A Forward Deployed Engineer is a software engineer who works directly inside a client's team, close to the users and the problem, instead of building in isolation. At Meanify, our Forward Deployed Engineers also bring validated AI workflows that speed up delivery." },
          { id: "human-in-the-loop", q: "What does \"human in the loop\" mean?", a: "It means a person reviews and approves the work at defined points. At Meanify, an engineer reviews every AI-assisted change, automated tests check it, and you approve every delivery." },
          { id: "ai-code-safe", q: "Is AI-written code safe to use in production?", a: "Only when it is reviewed and tested. An engineer reviews every AI-assisted change, and it must pass automated tests before it is merged. AI speeds up the work; engineers stay responsible for the result." },
          { id: "faster-cheaper", q: "How much faster and cheaper is AI-accelerated development?", a: "It depends on the project. AI shortens repetitive work such as boilerplate code, tests and documentation, so projects usually need fewer hours. We estimate each project after a short discovery." },
        ],
      },
      {
        title: "Data and security",
        items: [
          { id: "data-training", q: "Is our data used to train AI models?", a: "No. We use AI services and settings that do not train on client data, and we can use EU-hosted or on-premise models when required." },
          { id: "gdpr", q: "Do you comply with the GDPR?", a: "Yes. We follow the GDPR in our own work and design client systems with data protection built in: access control, data minimisation and retention rules." },
          { id: "ai-act", q: "Can you help with the EU AI Act?", a: "Yes. We help you understand which EU AI Act obligations apply to your systems and build in the documentation, transparency and human oversight they require." },
        ],
      },
      {
        title: "Working together",
        items: [
          { id: "start", q: "How does a project start?", a: "With a conversation. Send us a message on WhatsApp, an email or call us. We then run a short discovery and send you a proposal with scope, timeline and price." },
          { id: "ownership", q: "Who owns the code and intellectual property?", a: "You do. Everything we build lives in your systems and is handed over with documentation." },
          { id: "support", q: "Do you provide support after delivery?", a: "Yes. We offer support and maintenance after go-live, and we hand over documentation so your own team can maintain the system too." },
          { id: "pricing", q: "How do you charge?", a: "It depends on the project: a fixed price for a well-defined scope, or a monthly engagement for Forward Deployed Engineers embedded in your team." },
        ],
      },
    ],
  },

  contactPage: {
    label: "Contact",
    title: "Talk directly to an engineer",
    lead: "No forms. Send us a message on WhatsApp, an email or give us a call, and you'll talk to an engineer, not a sales script.",
    briefTitle: "What to include",
    brief: [
      "Your company and what it does",
      "What you want to build or improve",
      "Any deadline or budget range",
      "Your preferred language: English or Portuguese",
    ],
    nextTitle: "What happens next",
    next: [
      { title: "We reply", text: "An engineer reads your message and replies personally." },
      { title: "Short call", text: "We talk about your problem and whether we're a good fit." },
      { title: "Proposal", text: "You receive a clear proposal with scope, timeline and price." },
    ],
  },
};
