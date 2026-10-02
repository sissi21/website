export interface ContactInfo {
  name: string;
  title: string;
  phone?: string;
  email: string;
  website?: string;
  websiteUrl?: string;
  location: string;
  linkedIn: string;
  linkedInUrl: string;
  avatarUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isOngoing?: boolean;
  tag?: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  honors?: string | null;
  period?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  url?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: number; // 1 to 5
}

export interface SummaryHighlight {
  label: string;
  value: string;
  desc: string;
  icon: "users" | "trending" | "award" | "check";
}

export interface CVData {
  header: ContactInfo;
  summary: string[];
  summaryHighlights: SummaryHighlight[];
  experience: ExperienceItem[];
  skills: {
    coreCompetencies: string[];
    technicalTools: string[];
    professionalStrengths: string[];
  };
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
}

export const cvData: CVData = {
  header: {
    name: "Luisa Cerrato",
    title: "Program Manager",
    phone: "0765250662",
    email: "cerrato.lu@gmail.com",
    website: "luisacerrato.com",
    websiteUrl: "https://luisacerrato.com",
    location: "Zürich, Switzerland",
    linkedIn: "linkedin.com/in/luisacerrato",
    linkedInUrl: "https://linkedin.com/in/luisacerrato",
    avatarUrl: "/avatar.jpg"
  },
  summary: [
    "Program Manager with a proven track record supporting Google - via Vaco in Palo Alto, CA - on Search Ads Quality and expertise in Google Ads policies. Repeatedly recognized as Best Rater and promoted to Team Captain, leading a 12-person team to drive quality, efficiency, and process improvements.",
    "Upon relocating to Switzerland, earned a Master’s in Data Management & Business Analytics from EDHEC - recognized as the highest-GPA student in the cohort - and completed a high-impact consulting project with Alstom developing a machine-learning prototype for predictive maintenance.",
    "I have since continued building my project and program management experience through volunteer projects and the Google Project Management Professional Certificate, combining analytical thinking, cross-functional coordination, and structured delivery across international and technical environments."
  ],
  summaryHighlights: [
    {
      label: "Team Leadership",
      value: "12-Person Team",
      desc: "Coordinated 18k+ weekly deliverables across priorities",
      icon: "users"
    },
    {
      label: "Cost Optimization",
      value: "Up to €5.5M Savings",
      desc: "Predictive maintenance business case with Alstom",
      icon: "trending"
    },
    {
      label: "Academic Honors",
      value: "Highest GPA",
      desc: "Best Student Award in Master's cohort at EDHEC",
      icon: "award"
    },
    {
      label: "Quality Benchmark",
      value: "Best Rater",
      desc: "96% Ads Quality standard achieved at Google / Vaco",
      icon: "check"
    }
  ],
  experience: [
    {
      id: "volunteer",
      role: "Volunteer Project & Program Management",
      company: "Independent",
      location: "Zürich, Switzerland",
      period: "08/2021 - 12/2025",
      isOngoing: false,
      tag: "Leadership & Community",
      highlights: [
        "Project Delivery: Delivered 10+ career-return workshops and social events managing timelines, stakeholder coordination, deliverables, and operational requirements.",
        "Project Coordination: Coordinated fundraising initiatives from planning through execution, managing sponsor engagement, procurement, vendor coordination, and donor logistics to ensure operational requirements and deadlines were met.",
        "Operations: Facilitated team meetings to align 8–10 internal and external stakeholders on priorities and next steps. Tracked deliverables and budget spend, and maintained project documentation."
      ]
    },
    {
      id: "alstom",
      role: "Project Management & Business Analyst - Master Consulting Project",
      company: "Alstom",
      location: "Zürich, Switzerland",
      period: "03/2022 - 06/2023",
      isOngoing: false,
      tag: "Predictive Analytics & Consulting",
      highlights: [
        "Project Execution: Contributed to a data-driven Prognostics Health Management (PHM) project for Alstom passenger train doors to reduce costly downtime and failures, coordinating project activities and supporting the development of a machine-learning predictive maintenance prototype using time-series analysis, regression, and clustering on 7,787 operational door cycles across 16 unique doors to identify potential failure patterns.",
        "Project Monitoring: Developed a business case estimating €2.5M–€5.5M in potential maintenance savings over 8 years for a 99-train fleet. Tracked project KPIs, risks, mitigations, dependencies, and progress through Excel dashboards and regular reviews, translating technical and financial findings into clear recommendations for client stakeholders and leadership."
      ]
    },
    {
      id: "google-captain",
      role: "Search Ads Team Captain",
      company: "Google via Vaco",
      location: "Palo Alto, California",
      period: "06/2020 - 06/2021",
      isOngoing: false,
      tag: "Google Team Leadership",
      highlights: [
        "Team Leadership: Promoted to Team Captain, leading a 12-person team and coordinating priorities, deadlines, and dependencies across 18k+ weekly deliverables.",
        "Performance Monitoring: Monitored operational KPIs and performance trends, contributing to a 15% improvement in team performance within one month, measured by Google-defined KPIs, through structured tracking, feedback, and follow-up, helping the team rank #1 among the 10 teams working on the project.",
        "Process Improvement: Identified workflow inefficiencies and proactively drove process and guideline improvements that increased operational efficiency by 20%.",
        "Stakeholder Alignment: Collaborated with cross-functional stakeholders to clarify priorities, resolve operational issues, and align the team on deliverables, deadlines, quality standards, and policy requirements."
      ]
    },
    {
      id: "google-analyst",
      role: "Search Ads Content Reviewer",
      company: "Google via Vaco",
      location: "Palo Alto, California",
      period: "03/2020 - 06/2020",
      isOngoing: false,
      tag: "Google Ads Quality",
      highlights: [
        "Ads Quality Assurance: Evaluated Search Ads content against Google policies and quality guidelines, applying detailed standards to ensure accuracy, relevance, and consistency.",
        "KPI Performance: Reviewed 300+ ads daily while maintaining a 96% quality benchmark compared with a team median of 90.5%.",
        "Professional growth: Repeatedly recognized as Best Rater for consistently high quality and performance, leading to subsequent promotion to Team Captain."
      ]
    },
    {
      id: "career-break",
      role: "Career Break & Professional Development",
      company: "California, United States",
      location: "California, United States",
      period: "08/2013 - 12/2019",
      isOngoing: false,
      tag: "Continuous Learning",
      highlights: [
        "Relocation Planning & Coordination: Managed international relocation. Coordinated timelines, documentation, and cross-border needs. Achieved English fluency through immersion.",
        "Continuous Learning: Unable to work due to visa limitations, completed technical web-development courses to deepen my understanding of the tech workflow and tools and continued independent professional training, strengthening digital skills and maintaining professional development throughout the career break."
      ]
    },
    {
      id: "poste-italiane",
      role: "Investment Specialist",
      company: "Poste Italiane Spa",
      location: "Salerno, Italy",
      period: "01/2012 - 07/2013",
      isOngoing: false,
      tag: "Financial Advisory",
      highlights: [
        "Risk management: Managed €100K in client portfolios monthly. Assessed risk profiles, objectives, and performance in a regulated financial environment.",
        "Stakeholder management: Advised clients on investment options and portfolio adjustments, addressing concerns and aligning recommendations with changing objectives and market conditions.",
        "Executive communication: Prepared investment strategy proposals and growth presentations for senior leadership."
      ]
    }
  ],
  skills: {
    coreCompetencies: [
      "Project & Program Management",
      "Project Planning & Delivery",
      "Stakeholder Management & Alignment",
      "Cross-Functional Coordination",
      "Risk Management & Mitigation",
      "Dependency Management",
      "Schedule & Milestone Management",
      "KPI & Progress Tracking",
      "Process Improvement",
      "Budget Management",
      "Agile & Waterfall Methodologies",
      "Project Documentation"
    ],
    technicalTools: [
      "Google Workspace",
      "MS Project",
      "MS Excel & Dashboards",
      "Jira",
      "Asana",
      "Basics of Python, HTML/CSS, SQL, Machine Learning"
    ],
    professionalStrengths: [
      "Analytical Thinking",
      "Stakeholder Communication",
      "Planning & Organization",
      "Attention to Detail",
      "Accountability & Ownership",
      "Problem Solving",
      "International & Cross-Cultural Collaboration"
    ]
  },
  education: [
    {
      institution: "EDHEC Business School",
      degree: "Master's Degree: Data Management & Business Analytics",
      honors: "Awarded Best Student Award - Top of cohort"
    },
    {
      institution: "Bocconi University",
      degree: "Bachelor: Institutions & Financial Markets Management",
      honors: null
    }
  ],
  certifications: [
    {
      title: "Google Project Management Professional Certificate",
      issuer: "Coursera"
    },
    {
      title: "Python and Machine Learning for Asset Management",
      issuer: "EDHEC Business School on Coursera"
    },
    {
      title: "Core - MBA Credential of Readiness",
      issuer: "Harvard Business School Online"
    },
    {
      title: "Full-Stack Developer Program",
      issuer: "Coding Dojo"
    }
  ],
  languages: [
    {
      language: "Italian",
      proficiency: "Bilingual or Proficient (C2)",
      level: 5
    },
    {
      language: "English",
      proficiency: "Bilingual or Proficient (C2)",
      level: 5
    },
    {
      language: "French",
      proficiency: "Intermediate",
      level: 2
    },
    {
      language: "German",
      proficiency: "Beginner (A1)",
      level: 1
    }
  ]
};
