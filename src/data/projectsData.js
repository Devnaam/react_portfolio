// src/data/projectsData.js

export const projects = [
  {
    id: 1,
    title: "RentFair",
    category: "SaaS Platform",
    tagline: "Hyperlocal PG Discovery for Students",
    problem: "Students waste hours searching unreliable PG listings scattered across WhatsApp groups and Facebook.",
    solution: "Built a location-based platform connecting verified PG owners with students in real-time.",
    results: [
      "Reduced search time by 70%",
      "500+ verified PG listings across 3 cities",
      "Real-time availability updates"
    ],
    technologies: ["Next.js", "PostgreSQL", "Mapbox", "Prisma", "NextAuth"],
    images: ["/assets/rentfair/rentfair1.png"],
    liveLink: "https://rent-fair.vercel.app",
    githubLink: "https://github.com/Devnaam/RentFair",
    featured: true,
    caseStudyComponent: "RentFairCaseStudy"
  },
  {
    id: 2,
    title: "Inventory AI Assistant",
    category: "AI-Powered Tool",
    tagline: "Natural Language Inventory Management",
    problem: "Small business owners struggle with complex Excel sheets and manual inventory tracking.",
    solution: "Created an AI assistant that answers inventory questions in plain English.",
    results: [
      "90% faster query resolution",
      "Supports Excel, PDF, CSV uploads",
      "Natural language insights"
    ],
    technologies: ["React", "Node.js", "Gemini API", "MongoDB"],
    images: ["/images/agentic_ai/WhatsApp Image 2025-08-14 at 21.48.10_a97ce783.jpg"],
    liveLink: "https://inventory-ai.vercel.app",
    githubLink: "https://github.com/yourusername/inventory-ai",
    featured: true,
    caseStudyComponent: "InventoryAICaseStudy"
  },
  {
    id: 3,
    title: "Skill Exchange Platform",
    category: "Community Platform",
    tagline: "Learn and Teach Skills Locally",
    problem: "People can't find local teachers or students for skill exchange.",
    solution: "Built a hyperlocal platform with AI matching, messaging, and location-based discovery.",
    results: [
      "AI-powered skill matching",
      "Real-time messaging system",
      "Location-based discovery"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API", "Mapbox"],
    images: ["/assets/skillexchange/skill1.png"],
    liveLink: "https://skillexchange.vercel.app",
    githubLink: "https://github.com/yourusername/skillexchange",
    featured: true,
    caseStudyComponent: "SkillExchangeCaseStudy"
  },
  {
    id: 4,
    title: "Resume Builder",
    category: "Productivity Tool",
    tagline: "Free ATS-Friendly Resume Builder",
    problem: "Most resume builders require signup and charge for basic features.",
    solution: "Built a completely free, no-signup resume builder with instant PDF download.",
    results: [
      "Zero signup required",
      "ATS-friendly templates",
      "Real-time preview"
    ],
    technologies: ["React", "Tailwind CSS", "jsPDF", "HTML2Canvas"],
    images: ["/images/resumebuilder/resume1.png"],
    liveLink: "https://v0-resume-builder-ui-design.vercel.app",
    githubLink: "https://github.com/Devnaam/Resume-Builder-",
    featured: false,
    caseStudyComponent: "ResumeBuilderCaseStudy"
  },
  {
    id: 5,
    title: "Finance Analyzer",
    category: "AI Tool",
    tagline: "AI-Powered Financial Insights",
    problem: "Individuals struggle to analyze bank statements and track spending patterns.",
    solution: "Built an AI analyzer that extracts data from PDFs and provides insights.",
    results: [
      "Smart PDF parsing",
      "Natural language queries",
      "Interactive dashboards"
    ],
    technologies: ["React", "TypeScript", "Python", "Gemini API", "Chart.js"],
    images: ["/images/financeanalyzer/finance1.png"],
    liveLink: "https://finance-analyzer-ai.vercel.app",
    githubLink: "https://github.com/Devnaam/FinanceAnalyzer",
    featured: false,
    caseStudyComponent: "FinanceAnalyzerCaseStudy"
  },
  {
    id: 6,
    title: "College Management System",
    category: "Enterprise Solution",
    tagline: "Complete College Administration Platform",
    problem: "Educational institutions lack unified systems for attendance, grades, and communication.",
    solution: "Built a comprehensive platform with role-based dashboards for students, teachers, and admins.",
    results: [
      "Digital attendance with QR codes",
      "Grade management system",
      "Real-time notifications"
    ],
    technologies: ["MERN Stack", "Socket.io", "JWT", "AWS S3"],
    images: ["/images/college/college1.png"],
    liveLink: "",
    githubLink: "",
    featured: false,
    caseStudyComponent: "CollegeManagementCaseStudy"
  }
];
