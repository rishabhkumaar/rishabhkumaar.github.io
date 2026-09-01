// ─────────────────────────────────────────────
// Centralized Portfolio Data
// ─────────────────────────────────────────────
// All factual content extracted from:
//   1. Rishabh Kumar CV (Rishabh_Kumar_CV_Premium.docx)
//   2. CSE111 Portfolio (Rishabh Kumar CSE111.pdf)
//   3. instruction.md
//
// DO NOT invent information not present in source material.

import * as links from "./links";
import { ASSETS } from "./assets";

// ── Identity ─────────────────────────────────

export const identity = {
  name: "Rishabh Kumar",
  role: "Computer Science Undergraduate | Full-Stack & Software Developer",
  tagline: "I build systems and interfaces that turn complex ideas into usable software.",
  metaStrip: ["CSE UNDERGRADUATE", "FULL-STACK", "SYSTEMS", "APIs"],
  email: links.EMAIL,
  phone: links.PHONE,
  github: links.GITHUB_URL,
  linkedin: links.LINKEDIN_URL,
  resumeUrl: links.RESUME_URL,
  resumeDownloadUrl: links.RESUME_DOWNLOAD_URL,
};

// ── Education ────────────────────────────────

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  period: string;
  grade: string;
  gradeLabel: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2025 – Present",
    grade: "9.89 / 10",
    gradeLabel: "CGPA",
  },
  {
    institution: "PM Shree Kendriya Vidyalaya No. 2",
    location: "Ambala Cantt",
    degree: "Higher Secondary Education",
    period: "2023 – 2024",
    grade: "90.6%",
    gradeLabel: "Percentage",
  },
  {
    institution: "PM Shree Kendriya Vidyalaya No. 2",
    location: "Ambala Cantt",
    degree: "Secondary Education",
    period: "2021 – 2022",
    grade: "87.6%",
    gradeLabel: "Percentage",
  },
];

// ── Skills ───────────────────────────────────

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "LANGUAGES",
    items: ["Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "FRONTEND",
    items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Chart.js", "PDF.js"],
  },
  {
    category: "BACKEND / DATABASE",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Prisma"],
  },
  {
    category: "APIs / SERVICES",
    items: [
      "Discord API",
      "OpenAI API",
      "OpenWeatherMap API",
      "Firebase Authentication",
      "Discord OAuth",
      "REST APIs",
    ],
  },
  {
    category: "ENGINEERING",
    items: [
      "OAuth",
      "API caching",
      "Rate limiting",
      "Async programming",
      "Connection pooling",
      "Modular architecture",
    ],
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
  },
];

// ── Projects ─────────────────────────────────

export interface ProjectModule {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  heroImage: string;
  heroImageAlt: string;
  screenshots: { path: string; alt: string }[];
  githubUrl: string;
  liveUrl: string;
  modules?: ProjectModule[];
}

export const projects: Project[] = [
  {
    id: "rishource",
    name: "RISHOURCE",
    subtitle: "Discord Bot & Management Platform",
    technologies: [
      "Python",
      "discord.py",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
    ],
    highlights: [
      "Architected a modular Discord platform with independently organized Cogs spanning moderation, AI, weather, air quality, games, utilities, ticketing, leveling, logging, and server management.",
      "Re-engineered the bot around AutoShardedBot, dynamic extension discovery, asynchronous PostgreSQL connectivity, centralized configuration, and shared OpenAI infrastructure.",
      "Integrated Discord OAuth, Discord's guild API, Prisma, PostgreSQL, Redux Toolkit, and discord.js into a full-stack management dashboard with permission-aware server discovery.",
      "Optimized guild retrieval with a 15-minute Node-Cache TTL and rate-limited forced refreshes, returning cached data when external Discord refreshes fail.",
      "Developed interactive Discord workflows with buttons, modals, embeds, and pagination; established custom logging with 5 log levels, persistent files, caller metadata, exception details, rotation, and backups.",
    ],
    featured: true,
    heroImage: ASSETS.RISHOURCE_HERO.path,
    heroImageAlt: ASSETS.RISHOURCE_HERO.alt,
    screenshots: [
      { path: ASSETS.RISHOURCE_DASHBOARD.path, alt: ASSETS.RISHOURCE_DASHBOARD.alt },
    ],
    githubUrl: links.RISHOURCE_GITHUB_URL,
    liveUrl: links.RISHOURCE_LIVE_URL,
    modules: [
      { name: "Moderation", description: "Automated moderation, warnings, mutes, and bans" },
      { name: "AI", description: "OpenAI-powered conversational and utility commands" },
      { name: "Weather", description: "Real-time weather data and air quality monitoring" },
      { name: "Games", description: "Interactive multiplayer games and challenges" },
      { name: "Utilities", description: "Server management and quality-of-life tools" },
      { name: "Ticketing", description: "Support ticket system with categories and logs" },
      { name: "Leveling", description: "XP tracking, level roles, and leaderboards" },
      { name: "Logging", description: "Event logging with 5 log levels and rotation" },
      { name: "Server Mgmt", description: "Configuration, permissions, and dashboard controls" },
    ],
  },
  {
    id: "courses-glance",
    name: "COURSES GLANCE",
    subtitle: "Course & PDF Study Platform",
    technologies: ["JavaScript", "PDF.js", "Firebase Authentication", "Firebase Firestore"],
    highlights: [
      "Architected an authenticated academic resource platform around 9 structured courses, centralizing course-specific PDF learning material through a responsive dashboard.",
      "Integrated PDF.js for browser-based document rendering with page navigation, zoom, thumbnails, text search, lazy rendering, bookmarks, and responsive mobile viewing.",
      "Engineered persistent PDF annotations by capturing selected text and normalized page coordinates, keeping highlights accurately positioned across sessions.",
      "Synchronized highlights, bookmarks, reading position, and zoom state with Firebase Firestore while enforcing user-scoped access through authentication and database rules.",
    ],
    featured: false,
    heroImage: ASSETS.COURSES_GLANCE_HERO.path,
    heroImageAlt: ASSETS.COURSES_GLANCE_HERO.alt,
    screenshots: [
      { path: ASSETS.COURSES_GLANCE_PDF_VIEWER.path, alt: ASSETS.COURSES_GLANCE_PDF_VIEWER.alt },
      { path: ASSETS.COURSES_GLANCE_ANNOTATIONS.path, alt: ASSETS.COURSES_GLANCE_ANNOTATIONS.alt },
    ],
    githubUrl: links.COURSES_GLANCE_GITHUB_URL,
    liveUrl: links.COURSES_GLANCE_LIVE_URL,
  },
  {
    id: "portfolio-os",
    name: "PORTFOLIO 2.0",
    subtitle: "UbuntuOS Web Environment",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "react-draggable"],
    highlights: [
      "Engineered an Ubuntu 20.04-inspired desktop environment that transforms a conventional portfolio into an interactive operating-system-style web application.",
      "Developed a reusable window manager supporting dragging, minimizing, maximizing, restoring, closing, focus management, and z-index control.",
      "Orchestrated an application registry connecting desktop shortcuts, dock entries, metadata, and dynamically rendered applications.",
      "Embedded functional Terminal, Calculator, Chrome, VS Code, Spotify, Settings, Trash, and portfolio interfaces within the shared desktop architecture.",
    ],
    featured: false,
    heroImage: ASSETS.PORTFOLIO_OS_HERO.path,
    heroImageAlt: ASSETS.PORTFOLIO_OS_HERO.alt,
    screenshots: [
      { path: ASSETS.PORTFOLIO_OS_DESKTOP.path, alt: ASSETS.PORTFOLIO_OS_DESKTOP.alt },
    ],
    githubUrl: links.PORTFOLIO_OS_GITHUB_URL,
    liveUrl: links.PORTFOLIO_OS_LIVE_URL,
  },
  {
    id: "weather-now",
    name: "WEATHER NOW",
    subtitle: "Real-Time Weather Dashboard",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap", "Chart.js"],
    highlights: [
      "Engineered a responsive weather dashboard retrieving current conditions and approximately 5 days of 3-hour forecast data for searched cities and predefined coordinates.",
      "Integrated 10+ environmental attributes and visualized up to 40 forecast intervals through a dual-axis Chart.js temperature/humidity graph.",
      "Implemented rule-based weather recommendations and SVG/CSS indicators for cloud coverage, atmospheric pressure, and wind gusts.",
    ],
    featured: false,
    heroImage: ASSETS.WEATHER_NOW_HERO.path,
    heroImageAlt: ASSETS.WEATHER_NOW_HERO.alt,
    screenshots: [
      { path: ASSETS.WEATHER_NOW_CHARTS.path, alt: ASSETS.WEATHER_NOW_CHARTS.alt },
    ],
    githubUrl: links.WEATHER_NOW_GITHUB_URL,
    liveUrl: links.WEATHER_NOW_LIVE_URL,
  },
];

// ── Achievements & Participation ────────────────

export interface Achievement {
  metric: string;
  label: string;
  description: string;
}

export interface ParticipationEntry {
  title: string;
  organizers: string;
  type: string;
  description: string;
  imagePath: string;
}

export const achievements: Achievement[] = [
  {
    metric: "200+",
    label: "Problems Solved",
    description: "Programming problems solved across LeetCode, HackerRank & platforms",
  },
  {
    metric: "50 Days",
    label: "LeetCode Badge",
    description: "Consistency streak badge earned on LeetCode",
  },
  {
    metric: "Gold",
    label: "Python — HackerRank",
    description: "Gold badge in Python with 475 points",
  },
  {
    metric: "Silver",
    label: "C & SQL — HackerRank",
    description: "Silver badges in C (220 pts) and SQL (365 pts)",
  },
];

export const participation: ParticipationEntry = {
  title: "OpenxAI Hack Node Global",
  organizers: "BlockseBlock / Web3 Sabha",
  type: "Certificate of Participation",
  description: "Global AI & Web3 Hackathon participation milestone.",
  imagePath: ASSETS.CERT_OPENAI_HACK_NODE.path,
};

export const leetcodeBadges = [
  "Mathematical I",
  "Data Navigator",
  "Introduction to Pandas",
];

// ── Certifications (Grouped by Issuer) ─────────

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerGroup: "Saylor Academy" | "Infosys Springboard" | "iamneo / LPU" | "HackerRank";
  hours?: string;
  date: string;
  grade?: string;
  category: string;
  url?: string;
  imagePath: string;
}

export const certifications: Certification[] = [
  // Saylor Academy
  {
    id: "cs105-python",
    title: "CS105: Introduction to Python",
    issuer: "Saylor Academy",
    issuerGroup: "Saylor Academy",
    hours: "36 hours",
    grade: "100.00",
    date: "November 22, 2025",
    category: "Computer Science",
    url: links.CERT_PYTHON_SAYLOR_URL,
    imagePath: ASSETS.CERT_CS105_PYTHON.path,
  },
  {
    id: "cs403-dbms",
    title: "CS403: Introduction to Modern Database Systems",
    issuer: "Saylor Academy",
    issuerGroup: "Saylor Academy",
    hours: "29 hours",
    grade: "86.00%",
    date: "February 6, 2026",
    category: "Database Systems",
    imagePath: ASSETS.CERT_CS403_DBMS.path,
  },
  {
    id: "bus401-management",
    title: "BUS401: Management Leadership",
    issuer: "Saylor Academy",
    issuerGroup: "Saylor Academy",
    hours: "37 hours",
    grade: "92.00",
    date: "October 24, 2025",
    category: "Management Leadership",
    url: links.CERT_MANAGEMENT_LEADERSHIP_URL,
    imagePath: ASSETS.CERT_BUS401_MANAGEMENT.path,
  },
  {
    id: "prdv104-etiquette",
    title: "PRDV104: Professional Etiquette",
    issuer: "Saylor Academy",
    issuerGroup: "Saylor Academy",
    hours: "6 hours",
    grade: "90.48",
    date: "September 30, 2025",
    category: "Professional Development",
    url: links.CERT_PROFESSIONAL_ETIQUETTE_URL,
    imagePath: ASSETS.CERT_PRDV104_ETIQUETTE.path,
  },

  // Infosys Springboard
  {
    id: "python-part-1",
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    issuerGroup: "Infosys Springboard",
    date: "July 4, 2026",
    category: "Programming Fundamentals",
    imagePath: ASSETS.CERT_PYTHON_PART_1.path,
  },
  {
    id: "python-part-2",
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    issuerGroup: "Infosys Springboard",
    date: "July 12, 2026",
    category: "Programming Fundamentals",
    imagePath: ASSETS.CERT_PYTHON_PART_2.path,
  },

  // iamneo / LPU
  {
    id: "computer-programming",
    title: "Computer Programming",
    issuer: "iamneo / LPU",
    issuerGroup: "iamneo / LPU",
    hours: "150 hours",
    date: "May 21, 2026",
    category: "Computer Science",
    imagePath: ASSETS.CERT_COMPUTER_PROGRAMMING.path,
  },

  // HackerRank
  {
    id: "python-basic",
    title: "Python (Basic)",
    issuer: "HackerRank",
    issuerGroup: "HackerRank",
    date: "November 22, 2025",
    category: "Skill Certification",
    url: links.CERT_HACKERRANK_PYTHON_URL,
    imagePath: ASSETS.CERT_PYTHON_BASIC.path,
  },
];

// ── Online Profiles ──────────────────────────

export interface ProfileLink {
  platform: string;
  url: string;
  icon: string;
}

export const profiles: ProfileLink[] = [
  { platform: "GitHub", url: links.GITHUB_URL, icon: "github" },
  { platform: "LinkedIn", url: links.LINKEDIN_URL, icon: "linkedin" },
  { platform: "LeetCode", url: links.LEETCODE_URL, icon: "leetcode" },
  { platform: "HackerRank", url: links.HACKERRANK_URL, icon: "hackerrank" },
  { platform: "HackerEarth", url: links.HACKEREARTH_URL, icon: "hackerearth" },
  { platform: "GeeksforGeeks", url: links.GFG_URL, icon: "gfg" },
  { platform: "Stack Overflow", url: links.STACKOVERFLOW_URL, icon: "stackoverflow" },
  { platform: "CodeChef", url: links.CODECHEF_URL, icon: "codechef" },
  { platform: "Figma", url: links.FIGMA_URL, icon: "figma" },
];

// ── Navigation ───────────────────────────────

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
