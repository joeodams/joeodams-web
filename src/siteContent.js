export const personalDetails = {
  name: "Joe Odams",
  role: "Software Engineer",
  location: "Bristol, UK",
  email: "joeodams@gmail.com",
  linkedin: "https://www.linkedin.com/in/joe-odams-327333a4/",
  github: "https://github.com/joeodams",
};

export const homeHero = {
  eyebrow: "Open to software engineering opportunities",
  title:
    "Software engineer building fintech applications and distributed systems.",
  intro:
    "I am a Bristol-based software engineer whose commercial work is mostly backend-heavy .NET in regulated fintech. I also enjoy React, rapid prototyping, and getting my teeth into feature development or refactoring legacy codebases.",
  summary:
    "I'm a software engineer with 4 years building regulated fintech systems at Parmenion and earlier experience across SaaS and data-heavy products. I'm proficient with C#/.NET backend development and React. I have hands-on side projects in React Native, Go, and Python.",
  note: "Best fit: teams that give engineers room to own meaningful product and platform work.",
};

export const summaryBadges = [
  "4 years in fintech",
  "10 years across software and data roles",
  ".NET / C# backend",
  "React and React Native",
  "Go side projects and VPS deployment",
  "AI tools (Codex/Claude Code)",
];

export const focusAreas = [
  {
    title: "High-impact backend work",
    description:
      "Most of my commercial experience is in C#/.NET services where accuracy matters, especially around financial data, calculations, and distributed application flows.",
  },
  {
    title: "Frontend",
    description:
      "I am comfortable working in React and Blazor, as well as having experience with legacy frontend applications such as WebForms.",
  },
  {
    title: "Ownership and fast prototyping",
    description:
      "I do my best work when I can take a problem, break it down, and build out an elegant engineering solution.",
  },
];

export const skillGroups = [
  {
    title: "Backend and architecture",
    skills: [
      "C# / .NET",
      "ASP.NET Core and Framework",
      "Web API design",
      "SQL Server",
      "MassTransit",
      "Unit and integration testing",
    ],
  },
  {
    title: "Frontend and product work",
    skills: [
      "React",
      "TypeScript / JavaScript",
      "Blazor",
      "React Native / Expo",
      "HTML / CSS",
      "Data visualisation",
      "Rapid prototyping",
    ],
  },
  {
    title: "Platform and delivery",
    skills: [
      "Azure",
      "Azure Functions",
      "Docker",
      "Distributed services",
      "Git",
      "VPS deployment",
    ],
  },
];

export const experienceItems = [
  {
    company: "Parmenion Capital Partners LLP",
    role: "Software Engineer",
    dates: "2022 - Present",
    summary:
      "Build and enhance back-office, front-office, and peripheral distributed services within a mature investment platform. The work spans new product functionality, service development, and improving correctness in high-consequence financial logic.",
    highlights: [
      "Implemented new trading-related functionality within core business workflows.",
      "Built a financial projection engine to support important modelling outcomes.",
      "Made key contributions to a near-live valuations service used across the business and surfaced to customers.",
      "Reworked time-weighted performance calculation logic to improve robustness and reduce bugs around edge cases.",
      "Worked across both modern and legacy .NET applications, React frontends, and supporting integrations.",
    ],
    stack: [
      "C# / .NET",
      "ASP.NET Core and Framework",
      "React",
      "SQL Server",
      "MassTransit",
      "Docker",
    ],
  },
  {
    company: "Beedle Education",
    role: "Software Engineer",
    dates: "2020 - 2022",
    summary:
      "Worked in a startup environment with high ownership. I was the main backend engineer supporting the product as it grew. I worked closely with frontend developers and product work in Microsoft Teams.",
    highlights: [
      "Acted as the sole backend engineer for much of the product, supporting 3 to 4 frontend developers.",
      "Built most of the API and core application logic that powered feature delivery.",
      "Extended Azure-hosted infrastructure and deployments as the customer base grew.",
      "Balanced rapid implementation with keeping the platform maintainable for a small team.",
    ],
    stack: [
      "C#",
      "Azure Functions",
      "REST APIs",
      "Azure SQL Database",
      "React / TypeScript",
    ],
  },
  {
    company: "Landmark",
    role: "Data Scientist / Software Developer",
    dates: "2017 - 2020",
    summary:
      "Worked across data and application development, building pipelines, APIs, and business-facing systems in a data-heavy environment.",
    highlights: [
      "Developed data pipelines and APIs for internal users.",
      "Worked with Azure Functions, Logic Apps, REST and SOAP integrations.",
      "Used analytical and machine-learning tooling where it helped solve practical business problems.",
    ],
    stack: [
      "Azure Functions",
      "REST and SOAP integrations",
      "Azure Logic Apps",
      "Python",
      "scikit-learn",
    ],
  },
  {
    company: "Equiniti Data",
    role: "Data Analyst",
    dates: "2016 - 2017",
    summary:
      "Started my career working with SQL Server data and reporting workflows, which gave me a solid early grounding in data quality and business systems.",
    highlights: [
      "Worked with SQL Server datasets and analysis tasks.",
      "Built an early foundation in working carefully with business-critical data.",
    ],
    stack: ["SQL Server", "Data analysis"],
  },
];

export const commercialProjects = [
  {
    title: "Near-live valuations service",
    summary:
      "Key contributor to a service designed to publish fresh valuation figures quickly across the business and into customer-facing experiences. Accuracy in a regulated environment was key!",
    focus: ["Fintech", "Distributed services", "Customer-facing data"],
  },
  {
    title: "Financial projection engine",
    summary:
      "Built core logic for a retirement projection engine, translating complex modelling rules into maintainable application code.",
    focus: ["Calculation engine", "Business rules", ".NET backend"],
  },
  {
    title: "Trading workflow enhancements",
    summary:
      "Implemented new trading-related functionality inside core platform workflows, working across business-critical front-office and back-office systems.",
    focus: ["Trading systems", "Workflow design", "Legacy and modern .NET"],
  },
  {
    title: "Performance calculation hardening",
    summary:
      "Reworked time-weighted performance calculation code to reduce bugs and handle valuation edge cases more reliably.",
    focus: ["Correctness", "Refactoring", "Financial calculations"],
  },
];

export const sideProjects = [
  {
    id: "astron",
    title: "Bike-share mobile prototype",
    summary:
      "A cross-platform React Native and Expo prototype. It includes authentication, account state, trip browsing, and a .NET 7 backend with a PostGres data layer.",
    stack: ["React Native", "Expo", ".NET 7", "Authentication", "API design"],
    link: {
      label: "Ask for a walkthrough",
      href: "mailto:joeodams@gmail.com",
      external: true,
    },
    featured: true,
  },
  {
    id: "planning",
    title: "AI planning document tool",
    summary:
      "Experimental tool that uses a YOLACT AI segmentation model to extract structure and context from local authority planning application documents, then visualises the results in a 3D React application.",
    stack: ["React", "Computer vision", "YOLACT", "Visualisation"],
    link: {
      label: "Talk me through the tech",
      href: "mailto:joeodams@gmail.com",
      external: true,
    },
    featured: true,
  },
  {
    id: "election",
    title: "UK election data visualiser",
    summary:
      "Interactive data visualisation exploring how election demographics and geography shift over time in a lightweight React app.",
    stack: ["React", "Data visualisation", "Public datasets"],
    link: {
      label: "Open live project",
      href: "https://polydata.github.io/election-age-breakdown/",
      external: true,
    },
    featured: true,
  },
  {
    id: "go-api",
    title: "Go API on a VPS",
    summary:
      "Small Go service deployed on a VPS as a place to experiment with lean HTTP APIs, deployment, and operational simplicity outside the .NET ecosystem.",
    stack: ["Go", "REST API", "Linux / VPS", "Deployment"],
    link: {
      label: "More work on GitHub",
      href: "https://github.com/joeodams",
      external: true,
    },
    featured: false,
  },
];

export const education = {
  title: "BSc Physics",
  organisation: "University of Sussex",
  dates: "2012 - 2015",
};
