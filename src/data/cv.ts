export interface ContactInfo {
  name: string;
  title: string;
  email: string;
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

export interface CVData {
  header: ContactInfo;
  summary: string[];
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
    title: "Project Manager",
    email: "cerrato.lu@gmail.com",
    location: "Zürich, Switzerland",
    linkedIn: "linkedin.com/in/luisacerrato",
    linkedInUrl: "https://linkedin.com/in/luisacerrato",
    avatarUrl: "/avatar.jpg"
  },
  summary: [
    "Project Manager with a proven track record supporting Google - via Vaco in Palo Alto, CA - on Search Ads Quality and expertise in Google Ads policies. Repeatedly recognized as Best Rater and promoted to Team Captain, leading a 12-person team to drive quality, efficiency, and process improvements. Upon relocating to Switzerland, earned a Master’s in Data Management & Business Analytics from EDHEC (recognized as the highest-GPA student in the cohort) and completed a high-impact consulting project with Alstom deploying predictive algorithms.",
    "I have since continued building my project and program management experience through volunteer projects and the Google Project Management Professional Certificate, and I look forward to helping Google once again in delivering its mission."
  ],
  experience: [
    {
      id: "volunteer",
      role: "Volunteer Project & Program Management",
      company: "Independent",
      location: "Zürich, Switzerland",
      period: "2021 – Present",
      isOngoing: true,
      tag: "Leadership & Community",
      highlights: [
        "Project Delivery: Delivered 10+ community initiatives and career-return workshops managing timelines, stakeholder coordination, deliverables, and operational requirements.",
        "Partnerships: Managed sponsor acquisition and procurement for fundraising initiatives, including partnership negotiations, vendor coordination, and donor logistics.",
        "Operations: Facilitated team meetings to align 8–10 internal and external stakeholders on priorities and next steps. Tracked deliverables and budget spend, and maintained project documentation."
      ]
    },
    {
      id: "alstom",
      role: "Project Manager & Business Analyst - Master Consulting Project",
      company: "Alstom",
      location: "Zürich, Switzerland",
      period: "03/2022 – 06/2023",
      isOngoing: false,
      tag: "Predictive Analytics & Consulting",
      highlights: [
        "Predictive Fleet Maintenance: Spearheaded the transition from reactive to predictive maintenance for Alstom train doors to resolve costly downtime. Led a team to build predictive models using Pandas and Support Vector Machines to forecast door failures across 2.5M door openings events; integrated environmental telemetry (usage, weather, vibration) with financial-risk modeling to secure €5.5M in projected operational savings due to reduced delays and breakages over 8 years.",
        "Stakeholder Management: Built MS Excel performance dashboards, tracked project KPIs, risks, and progress, and facilitated weekly status and leadership reviews, translating technical findings into clear project updates, risks, and mitigation actions for executive client stakeholders."
      ]
    },
    {
      id: "google-captain",
      role: "Search Ads Team Captain",
      company: "Google via Vaco",
      location: "Palo Alto, California, United States",
      period: "06/2020 – 06/2021",
      isOngoing: false,
      tag: "Google Team Leadership",
      highlights: [
        "Leadership: Promoted to Team Captain, leading a 12-person team and coordinating priorities, deadlines, and dependencies across 500+ weekly deliverables.",
        "Performance: Monitored operational KPIs and performance trends, contributing to a 15% improvement in team performance (measured by Google-defined KPIs) through structured tracking, feedback, and follow-up.",
        "Improvement: Identified workflow inefficiencies and proactively drove process and guideline improvements that increased operational efficiency by 20%.",
        "Stakeholder Alignment: Collaborated with cross-functional stakeholders to clarify priorities, resolve operational issues, and align the team on deliverables, deadlines, quality standards, and policy requirements."
      ]
    },
    {
      id: "google-analyst",
      role: "Search Ads Content Analyst",
      company: "Google via Vaco",
      location: "Palo Alto, California, United States",
      period: "03/2020 – 06/2020",
      isOngoing: false,
      tag: "Google Ads Quality",
      highlights: [
        "Ads Quality: Evaluated Search Ads content against Google policies and quality guidelines, applying detailed standards to ensure accuracy, relevance, and consistency.",
        "Performance: Reviewed 300+ items daily while maintaining a 96% quality benchmark compared with a team median of 90.5%.",
        "Progression: Recognized as Best Rater multiple times for consistently high quality and performance, leading to subsequent promotion to Team Captain."
      ]
    },
    {
      id: "career-break",
      role: "Career Break & Professional Development",
      company: "Independent / Self-Directed",
      location: "California, United States",
      period: "08/2013 – 12/2019",
      isOngoing: false,
      tag: "Continuous Learning",
      highlights: [
        "Relocation: Managed international relocation. Coordinated timelines, documentation, and cross-border needs. Achieved English fluency through immersion.",
        "Development: Completed technical web-development courses to deepen my understanding of the tech workflow and tools and continued independent professional training, strengthening digital skills and maintaining professional development throughout the career break."
      ]
    },
    {
      id: "poste-italiane",
      role: "Investment Specialist",
      company: "Poste Italiane Spa",
      location: "Salerno, Italy",
      period: "01/2012 – 07/2013",
      isOngoing: false,
      tag: "Financial Advisory",
      highlights: [
        "Portfolio Management: Managed €100K in client portfolios monthly. Assessed risk profiles, objectives, and performance in a regulated financial environment.",
        "Client Advisory: Advised clients on investment options and portfolio adjustments, addressing concerns and aligning recommendations with changing objectives and market conditions.",
        "Executive Strategy: Prepared investment strategy proposals and growth presentations for senior leadership."
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
      "Asana"
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
      honors: "Awarded Best Student Award - Top of cohort (Highest-GPA student)"
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
