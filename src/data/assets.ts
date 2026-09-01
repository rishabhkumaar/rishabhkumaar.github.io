// ─────────────────────────────────────────────
// Centralized Asset Placeholders
// ─────────────────────────────────────────────
// Every replaceable image has a clear placeholder ID.
// Replace files in public/images/ with real assets.
// See INSTRUCTIONS.md for full replacement guide.

export interface AssetPlaceholder {
  id: string;
  path: string;
  alt: string;
  purpose: string;
  required: boolean;
  dimensions: string;
}

export const ASSETS: Record<string, AssetPlaceholder> = {
  // ── Profile ────────────────────────────────
  PROFILE_PHOTO: {
    id: "PROFILE_PHOTO",
    path: "/images/profile/photo.webp",
    alt: "Rishabh Kumar — Profile Photo",
    purpose: "Hero/about profile photograph",
    required: false,
    dimensions: "400×400",
  },

  // ── Rishource ──────────────────────────────
  RISHOURCE_HERO: {
    id: "RISHOURCE_HERO",
    path: "/images/projects/rishource/hero.webp",
    alt: "Rishource — Discord Bot & Management Platform Hero",
    purpose: "Main featured project visual",
    required: true,
    dimensions: "1200×675",
  },
  RISHOURCE_DASHBOARD: {
    id: "RISHOURCE_DASHBOARD",
    path: "/images/projects/rishource/dashboard.webp",
    alt: "Rishource — Management Dashboard",
    purpose: "Management dashboard screenshot",
    required: true,
    dimensions: "1200×675",
  },

  // ── Courses Glance ─────────────────────────
  COURSES_GLANCE_HERO: {
    id: "COURSES_GLANCE_HERO",
    path: "/images/projects/courses-glance/hero.webp",
    alt: "Courses Glance — Course & PDF Study Platform",
    purpose: "Main project visual",
    required: true,
    dimensions: "1200×675",
  },
  COURSES_GLANCE_PDF_VIEWER: {
    id: "COURSES_GLANCE_PDF_VIEWER",
    path: "/images/projects/courses-glance/pdf-viewer.webp",
    alt: "Courses Glance — PDF Viewer",
    purpose: "PDF.js viewer screenshot",
    required: true,
    dimensions: "1200×675",
  },
  COURSES_GLANCE_ANNOTATIONS: {
    id: "COURSES_GLANCE_ANNOTATIONS",
    path: "/images/projects/courses-glance/annotations.webp",
    alt: "Courses Glance — Annotations Feature",
    purpose: "Annotation/highlight screenshot",
    required: true,
    dimensions: "1200×675",
  },

  // ── Portfolio 2.0 ──────────────────────────
  PORTFOLIO_OS_HERO: {
    id: "PORTFOLIO_OS_HERO",
    path: "/images/projects/portfolio-os/hero.webp",
    alt: "Portfolio 2.0 — UbuntuOS Web Environment Hero",
    purpose: "Main visual",
    required: true,
    dimensions: "1200×675",
  },
  PORTFOLIO_OS_DESKTOP: {
    id: "PORTFOLIO_OS_DESKTOP",
    path: "/images/projects/portfolio-os/desktop.webp",
    alt: "Portfolio 2.0 — Full Desktop Screenshot",
    purpose: "Desktop environment screenshot",
    required: true,
    dimensions: "1200×675",
  },

  // ── Weather Now ────────────────────────────
  WEATHER_NOW_HERO: {
    id: "WEATHER_NOW_HERO",
    path: "/images/projects/weather-now/hero.webp",
    alt: "Weather Now — Real-Time Weather Dashboard",
    purpose: "Main project visual",
    required: true,
    dimensions: "1200×675",
  },
  WEATHER_NOW_CHARTS: {
    id: "WEATHER_NOW_CHARTS",
    path: "/images/projects/weather-now/charts.webp",
    alt: "Weather Now — Forecast Charts",
    purpose: "Chart.js visualization screenshot",
    required: true,
    dimensions: "1200×675",
  },

  // ── Certificates ───────────────────────────
  CERT_BUS401_MANAGEMENT: {
    id: "CERT_BUS401_MANAGEMENT",
    path: "/images/certificates/bus401-management.png",
    alt: "BUS401: Management Leadership — Saylor Academy Certificate",
    purpose: "BUS401 Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_COMPUTER_PROGRAMMING: {
    id: "CERT_COMPUTER_PROGRAMMING",
    path: "/images/certificates/computer-programming.png",
    alt: "Computer Programming — iamneo / LPU Certificate",
    purpose: "Computer Programming Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_CS105_PYTHON: {
    id: "CERT_CS105_PYTHON",
    path: "/images/certificates/cs105-python.png",
    alt: "CS105: Introduction to Python — Saylor Academy Certificate",
    purpose: "CS105 Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_CS403_DBMS: {
    id: "CERT_CS403_DBMS",
    path: "/images/certificates/cs403-dbms.png",
    alt: "CS403: Introduction to Modern Database Systems — Saylor Academy Certificate",
    purpose: "CS403 Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_OPENAI_HACK_NODE: {
    id: "CERT_OPENAI_HACK_NODE",
    path: "/images/certificates/openai-hack-node.png",
    alt: "OpenxAI Hack Node Global — Certificate of Participation",
    purpose: "Participation Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_PRDV104_ETIQUETTE: {
    id: "CERT_PRDV104_ETIQUETTE",
    path: "/images/certificates/prdv104-etiquette.png",
    alt: "PRDV104: Professional Etiquette — Saylor Academy Certificate",
    purpose: "PRDV104 Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_PYTHON_BASIC: {
    id: "CERT_PYTHON_BASIC",
    path: "/images/certificates/python-basic.png",
    alt: "Python (Basic) — HackerRank Skill Certificate",
    purpose: "HackerRank Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_PYTHON_PART_1: {
    id: "CERT_PYTHON_PART_1",
    path: "/images/certificates/python-part-1.jpg",
    alt: "Programming Fundamentals using Python - Part 1 — Infosys Springboard Certificate",
    purpose: "Infosys Python Part 1 Certificate",
    required: true,
    dimensions: "Landscape",
  },
  CERT_PYTHON_PART_2: {
    id: "CERT_PYTHON_PART_2",
    path: "/images/certificates/python-part-2.jpg",
    alt: "Programming Fundamentals using Python - Part 2 — Infosys Springboard Certificate",
    purpose: "Infosys Python Part 2 Certificate",
    required: true,
    dimensions: "Landscape",
  },
};
