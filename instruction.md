# Rishabh Kumar — Portfolio Build Instructions

## 1. Project Goal

Create a complete, production-quality personal portfolio website for **Rishabh Kumar**, a Computer Science undergraduate and Full-Stack / Software Developer.

The website must use a **light, clean, modern visual language**:

> **Light Minimalism + Bento Grid + Subtle Glassmorphism + Editorial Typography + Controlled Motion**

The result should feel:
- premium
- highly readable
- technically sophisticated
- calm rather than flashy
- visually memorable without being overwhelming
- suitable for recruiters, professors, developers, and general visitors

Do **not** make it look like a generic AI-generated developer portfolio.

---

# 2. Core Design Direction

## Visual Formula

Use approximately:

- 65% Light Minimalism
- 20% Bento Grid
- 10% subtle Glassmorphism
- 5% 3D / Aurora / kinetic accents

The interface should remain primarily **light mode**.

### Background
Use an off-white / very light neutral background such as:
- `#F8F9FB`
- `#FAFAF8`

Avoid a pure white page everywhere. Use very subtle tonal differences between sections.

### Typography
Use a strong modern sans-serif for headings/body and a monospace font for technical metadata.

Recommended:
- Primary: Geist / Inter / Manrope / Satoshi
- Technical: Geist Mono / JetBrains Mono / IBM Plex Mono

Use large, confident headings and generous whitespace.

### Accent
Use ONE main accent family.

Recommended:
- electric blue / modern blue

Optional:
- very subtle blue → violet gradient for special highlights

Do not use rainbow gradients.

### Cards
Use:
- white surfaces
- thin neutral borders
- subtle shadows
- 16–28px rounded corners
- occasional translucent glass panels

Glassmorphism must be restrained:
- high readability
- strong text contrast
- subtle backdrop blur
- no excessive transparency

---

# 3. Design Principles

Every section must follow these rules:

1. **One primary idea per visual area.**
2. Keep text concise.
3. Prioritize readability over decoration.
4. Use whitespace aggressively.
5. Use consistent spacing and alignment.
6. Avoid visual noise.
7. Avoid excessive animations.
8. Never use an effect merely because it looks cool.
9. Every interaction should communicate hierarchy or provide useful feedback.
10. The portfolio should feel like a carefully designed product, not a collection of UI tricks.

---

# 4. Brand / Identity

## Primary Identity

**RISHABH KUMAR**

Role:
**Computer Science Undergraduate | Full-Stack & Software Developer**

Suggested positioning:

> Building systems, interfaces, and useful digital experiences.

Alternative supporting phrases can be used, but do not invent major claims about Rishabh.

A recurring visual/brand concept may be:

`RISHABH // SYSTEM`

or

`RISHABH.OS`

Use these as design motifs, not as replacements for his real name.

---

# 5. Website Structure

Create the complete website with the following sections.

## 5.1 Navigation

Minimal sticky navigation.

Suggested:

- Home
- About
- Projects
- Skills
- Achievements
- Education
- Certifications
- Contact

Add:
- Resume button
- GitHub button if appropriate

On mobile, use a clean responsive menu.

Do not overcrowd the navbar.

---

# 6. HERO SECTION

The hero should immediately communicate who Rishabh is.

Suggested content:

**RISHABH KUMAR**

**Software Engineer / Full-Stack Developer**

Supporting copy:

> I build systems and interfaces that turn complex ideas into usable software.

Possible secondary metadata:

`CSE UNDERGRADUATE // FULL-STACK // SYSTEMS // APIs`

CTA:
- View Projects
- View Resume

Optional:
- GitHub

## Hero Visual

Create a subtle interactive visual on the right/background.

Possible concept:

A clean **system/network visualization** representing:

`INTERFACE → API → DATABASE → SYSTEM`

or a floating modular architecture.

Use:
- thin lines
- soft blue nodes
- subtle glass cards
- very light shadows
- slow motion

Do NOT create a giant distracting 3D object.

---

# 7. ABOUT SECTION

Create an editorial-style section.

Large statement:

> **I don't just write code. I design systems.**

Then a concise paragraph based strictly on the supplied source information.

Use a bento layout containing small facts such as:

- CSE Undergraduate
- CGPA: 9.89 / 10
- 200+ Programming Problems
- Full-Stack Development
- Python / TypeScript / Next.js
- APIs / Databases / Systems

Do not invent experience, employment, awards, or statistics not present in the source material.

---

# 8. PROJECTS SECTION

This is the most important section.

Use an asymmetric bento layout.

Do NOT make four identical project cards.

Projects:

## RISHOURCE
Discord Bot & Management Platform

Technologies:
Python · discord.py · Next.js · TypeScript · PostgreSQL · Prisma · OpenAI

Important facts:
- modular Discord platform
- moderation
- AI
- weather
- air quality
- games
- utilities
- ticketing
- leveling
- logging
- server management
- AutoShardedBot
- dynamic extension discovery
- asynchronous PostgreSQL connectivity
- Discord OAuth
- guild API
- Prisma
- Redux Toolkit
- caching / rate limiting
- interactive Discord workflows
- custom logging

Make Rishource the **featured project**.

Create a visual architecture interaction:

`RISHOURCE`
→ Moderation
→ AI
→ Weather
→ Games
→ Utilities
→ Ticketing
→ Leveling
→ Logging
→ Server Management

Hovering over modules may reveal short descriptions.

Include a project CTA:
- GitHub
- Live Demo, ONLY if an actual URL is supplied

---

## COURSES GLANCE
Course & PDF Study Platform

Technologies:
JavaScript · PDF.js · Firebase Authentication · Firebase Firestore

Highlight:
- 9 structured courses
- responsive dashboard
- PDF rendering
- page navigation
- zoom
- thumbnails
- text search
- lazy rendering
- bookmarks
- mobile viewing
- persistent annotations
- Firestore synchronization
- user-scoped access

---

## PORTFOLIO 2.0
UbuntuOS Web Environment

Technologies:
Next.js · React · Tailwind CSS · JavaScript · react-draggable

Highlight:
- Ubuntu-inspired desktop environment
- reusable window manager
- dragging
- minimize / maximize / restore / close
- focus and z-index management
- application registry
- Terminal
- Calculator
- Chrome
- VS Code
- Spotify
- Settings
- Trash

This project can visually connect to the portfolio's system/OS motif.

---

## WEATHER NOW
Real-Time Weather Dashboard

Technologies:
HTML · CSS · JavaScript · OpenWeatherMap · Chart.js

Highlight:
- current weather
- approximately 5-day / 3-hour forecasts
- 10+ environmental attributes
- Chart.js visualization
- temperature / humidity graph
- weather recommendations
- SVG/CSS indicators

---

# 9. PROJECT DETAIL INTERACTION

Use a project detail modal, expandable panel, or dedicated project route.

When a project is opened, show:

1. Project name
2. One-line description
3. Technologies
4. Problem / purpose
5. Key engineering work
6. Visual / screenshot
7. GitHub link
8. Live link if supplied

Do not fabricate project URLs.

If a URL is missing, use a placeholder and clearly mark it in `INSTRUCTIONS.md`.

---

# 10. SKILLS SECTION

Do NOT create dozens of colorful skill pills.

Use an organized bento/terminal-inspired presentation.

Example:

`$ rishabh --stack`

### LANGUAGES
Python · C · C++ · JavaScript · TypeScript · HTML · CSS

### FRONTEND
React · Next.js · Tailwind CSS · Redux Toolkit · Chart.js · PDF.js

### BACKEND / DATABASE
PostgreSQL · MySQL · MongoDB · Firebase Firestore · Prisma

### APIs / SERVICES
Discord API · OpenAI API · OpenWeatherMap API · Firebase Authentication · Discord OAuth · REST APIs

### ENGINEERING
OAuth · API caching · Rate limiting · Async programming · Connection pooling · Modular architecture

### TOOLS
Git · GitHub · VS Code · Vercel · Netlify

---

# 11. EDUCATION

Display as a clean timeline.

### Lovely Professional University — Phagwara, Punjab
B.Tech, Computer Science & Engineering
2025 – Present
CGPA: 9.89 / 10

### PM Shree Kendriya Vidyalaya No. 2 — Ambala Cantt
Higher Secondary Education
2023 – 2024
90.6%

### PM Shree Kendriya Vidyalaya No. 2 — Ambala Cantt
Secondary Education
2021 – 2022
87.6%

---

# 12. ACHIEVEMENTS

Use large-number cards.

### 200+
Programming problems solved

### 50 Days
LeetCode badge

### Gold
Python — HackerRank

### Silver
C and SQL — HackerRank

Also mention LeetCode skill badges:
- Mathematical I
- Data Navigator
- Introduction to Pandas

Do not exaggerate these achievements.

---

# 13. CERTIFICATIONS

Create clean certificate cards.

Known certifications:

- Complete Web Development Course — Udemy
  100 hrs · Feb 2026

- Computer Programming — LPU / iamneo
  150 hrs · Jan–May 2026

- Programming Fundamentals using Python — Infosys Springboard
  Jul 2026

- Introduction to Python — Saylor Academy
  36 hrs · Grade 100% · Nov 2025

- Introduction to Modern Database Systems — Saylor Academy
  29 hrs · Grade 86% · Feb 2026

Additional certificates visible in the CSE111 portfolio material:
- Introduction to Python — Saylor Academy
- Management Leadership — Saylor Academy
- Professional Etiquette — Saylor Academy
- Python (Basic) — HackerRank

Where certificates are displayed, use the actual certificate images listed in the asset placeholder section below.

---

# 14. CODING / ONLINE PROFILES

Create a clean "digital footprint" section.

Profiles available from the source material:

- Figma
- LeetCode
- Stack Overflow
- HackerRank
- HackerEarth
- GeeksforGeeks
- GitHub
- LinkedIn
- CodeChef

Do not create fake statistics.

Use profile links from the supplied source material.

If a link needs verification, put it in the placeholder list rather than inventing it.

---

# 15. RESUME

Add a prominent Resume section/button.

Use the supplied CV/resume as the source of truth.

The site should provide:
- View Resume
- Download Resume

Do not recreate the resume incorrectly if the actual PDF/document can be linked.

---

# 16. CONTACT

Keep it simple.

Heading:

**Let's build something useful.**

Show:
- Email
- GitHub
- LinkedIn

Do not expose any additional personal information not present in the source material.

---

# 17. MOTION

Motion should feel intentional.

Use:
- gentle fade/slide reveals
- card hover elevation
- subtle background movement
- smooth section transitions
- number count-up only where appropriate
- project architecture hover interactions
- subtle glass blur transitions

Avoid:
- excessive parallax
- constant floating elements
- bouncing UI
- aggressive scroll hijacking
- long loading animations
- animations that reduce readability

Respect `prefers-reduced-motion`.

---

# 18. RESPONSIVENESS

The site must be excellent on:

- desktop
- laptop
- tablet
- mobile

Desktop can use asymmetric bento layouts.

Mobile must collapse into a straightforward vertical hierarchy.

Never force horizontal scrolling.

---

# 19. ACCESSIBILITY

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient color contrast
- descriptive alt text
- reduced-motion support
- accessible buttons
- accessible dialogs/modals
- proper heading hierarchy

Do not sacrifice accessibility for aesthetics.

---

# 20. IMAGE PLACEHOLDER SYSTEM

Create a centralized placeholder configuration/file such as:

`src/data/assets.ts`

or

`src/data/portfolio.ts`

Every replaceable image must have a clear placeholder ID.

Use names like:

`[IMAGE: PROFILE_PHOTO]`

`[IMAGE: RISHOURCE_HERO]`

Do not silently use random stock images as final assets.

If a real asset is unavailable, use a tasteful neutral placeholder that clearly looks replaceable.

---

# 21. REQUIRED IMAGE PLACEHOLDERS

## A. Profile

### `PROFILE_PHOTO`
Purpose:
Hero/about profile photograph.

Expected asset:
A professional portrait of Rishabh.

Status:
**REPLACE REQUIRED**

---

## B. Rishource

### `RISHOURCE_HERO`
Purpose:
Main featured project visual.

Expected asset:
Rishource dashboard / product screenshot / polished project mockup.

Status:
**REPLACE REQUIRED**

### `RISHOURCE_ARCHITECTURE`
Purpose:
Architecture/system visualization.

Expected asset:
Can initially be generated as a UI diagram, but ideally replace with a real architecture screenshot/diagram.

Status:
**OPTIONAL REPLACE**

### `RISHOURCE_DASHBOARD_SCREENSHOT_01`
Purpose:
Project detail page.

Status:
**REPLACE REQUIRED**

### `RISHOURCE_DASHBOARD_SCREENSHOT_02`
Purpose:
Project detail gallery.

Status:
**OPTIONAL**

---

## C. Courses Glance

### `COURSES_GLANCE_HERO`
Purpose:
Main project visual.

Expected:
Dashboard screenshot.

Status:
**REPLACE REQUIRED**

### `COURSES_GLANCE_PDF_VIEWER`
Purpose:
PDF.js viewer screenshot.

Status:
**REPLACE REQUIRED**

### `COURSES_GLANCE_ANNOTATIONS`
Purpose:
Screenshot showing annotation/highlight functionality.

Status:
**OPTIONAL**

---

## D. Portfolio 2.0

### `PORTFOLIO_OS_HERO`
Purpose:
Main visual.

Expected:
UbuntuOS portfolio desktop screenshot.

Status:
**REPLACE REQUIRED**

### `PORTFOLIO_OS_TERMINAL`
Purpose:
Terminal application screenshot.

Status:
**OPTIONAL**

### `PORTFOLIO_OS_DESKTOP`
Purpose:
Full desktop environment screenshot.

Status:
**OPTIONAL**

---

## E. Weather Now

### `WEATHER_NOW_HERO`
Purpose:
Main project visual.

Expected:
Weather dashboard screenshot.

Status:
**REPLACE REQUIRED**

### `WEATHER_NOW_CHART`
Purpose:
Chart.js visualization screenshot.

Status:
**OPTIONAL**

---

## F. Certificates

### `CERTIFICATE_PYTHON_SAYLOR`
Purpose:
Introduction to Python certificate.

Status:
**REPLACE REQUIRED**

### `CERTIFICATE_MANAGEMENT_LEADERSHIP`
Purpose:
Management Leadership certificate.

Status:
**REPLACE REQUIRED**

### `CERTIFICATE_PROFESSIONAL_ETIQUETTE`
Purpose:
Professional Etiquette certificate.

Status:
**REPLACE REQUIRED**

### `CERTIFICATE_HACKERRANK_PYTHON`
Purpose:
Python Basic HackerRank certificate.

Status:
**REPLACE REQUIRED**

---

## G. Profile / Platform Screenshots

The original CSE111 portfolio contains screenshots for:

- Figma
- LeetCode
- Stack Overflow
- HackerRank
- HackerEarth
- GeeksforGeeks
- GitHub
- LinkedIn
- CodeChef
- Saylor course enrollment/profile
- certificates

If these screenshots are used in the website, create placeholders:

`PROFILE_FIGMA_SCREENSHOT`
`PROFILE_LEETCODE_SCREENSHOT`
`PROFILE_STACKOVERFLOW_SCREENSHOT`
`PROFILE_HACKERRANK_SCREENSHOT`
`PROFILE_HACKEREARTH_SCREENSHOT`
`PROFILE_GFG_SCREENSHOT`
`PROFILE_GITHUB_SCREENSHOT`
`PROFILE_LINKEDIN_SCREENSHOT`
`PROFILE_CODECHEF_SCREENSHOT`
`PROFILE_SAYLOR_SCREENSHOT`

These are optional because the site should prioritize a clean experience rather than dumping every screenshot onto the page.

---

# 22. PLACEHOLDER MANAGEMENT REQUIREMENT

Create an `INSTRUCTIONS.md` file in the generated project.

It must contain a table with:

| Placeholder | Location | What to replace it with | Required? |
|---|---|---|---|
| PROFILE_PHOTO | Hero/About | Professional portrait | Yes |
| RISHOURCE_HERO | Projects | Rishource screenshot | Yes |
| ... | ... | ... | ... |

Also document:
- exact filename expected
- recommended dimensions/aspect ratio
- where to put the asset
- what component uses it

Example:

`public/images/rishource/hero.webp`

Do not make me search through the code to discover what needs replacement.

---

# 23. LINKS / DATA PLACEHOLDERS

Create a centralized data file.

Use placeholders for any URL that is not explicitly available.

Examples:

`RESUME_URL`
`RISHOURCE_GITHUB_URL`
`COURSES_GLANCE_GITHUB_URL`
`PORTFOLIO_OS_GITHUB_URL`
`WEATHER_NOW_GITHUB_URL`

For profile links, use the URLs supplied in the source material.

Do NOT invent live demo URLs.

---

# 24. TECHNICAL IMPLEMENTATION

Prefer:

- Next.js
- TypeScript
- Tailwind CSS
- modern React architecture

Use reusable components.

Suggested structure:

`components/`
- Navbar
- Hero
- About
- BentoCard
- Projects
- ProjectCard
- ProjectDetail
- Skills
- Education
- Achievements
- Certifications
- Profiles
- Contact
- Footer

`data/`
- portfolio.ts
- assets.ts
- links.ts

`public/images/`
- profile/
- projects/
- certificates/
- profiles/

Keep content/data separate from presentation components.

---

# 25. IMPORTANT CONTENT RULE

The supplied CV and CSE111 portfolio document are the source of truth.

Do not:
- invent jobs
- invent internships
- invent awards
- invent project metrics
- invent users
- invent GitHub stars
- invent technologies
- invent live URLs
- invent testimonials

If information is missing, use a placeholder and document it in `INSTRUCTIONS.md`.

---

# 26. CSE111 PORTFOLIO MATERIAL

The CSE111 portfolio document contains:
- student identity information
- platform/profile links
- screenshots of online profiles
- CV
- MOOC information
- certificates

It should be treated as supporting source material for profile links, screenshots, and certificates.

The existing document identifies the student as Rishabh Kumar and associates the portfolio with CSE111 (Orientation to Computing-I), Computer Science and Engineering at Lovely Professional University.

Do not put sensitive academic identifiers such as registration/roll numbers into the public-facing portfolio unless explicitly requested.

---

# 27. FINAL QUALITY BAR

Before considering the project complete, verify:

### Visual
- light theme
- clean
- premium
- consistent
- not overwhelming
- readable at a glance
- no unnecessary visual effects

### Content
- all four major projects included
- skills included
- education included
- achievements included
- certifications included
- profiles included
- resume/contact included

### UX
- responsive
- fast
- keyboard accessible
- smooth but restrained motion
- clear navigation

### Engineering
- reusable components
- centralized content data
- centralized asset placeholders
- no hardcoded scattered URLs
- no broken images
- no console errors
- no fake data

### Final impression

The visitor should come away with:

> **"This is a serious software engineer who can also design and build polished interfaces."**

Not:

> "This is a website showing off animations."

The design should communicate **engineering maturity through restraint**.
