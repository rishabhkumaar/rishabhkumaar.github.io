import Reveal from "./Reveal";

const journeySteps = [
  {
    phase: "01 // STUDENT",
    title: "Computer Science Foundation",
    meta: "2021 – PRESENT",
    description:
      "Consistent academic record (9.89 CGPA) mastering algorithms, database architecture, network protocols, and object-oriented paradigms.",
  },
  {
    phase: "02 // BUILDER",
    title: "Full-Stack Development",
    meta: "2023 – 2024",
    description:
      "Engineered real-world applications including Courses Glance (PDF.js + Firebase) and Weather Now (Chart.js + OpenWeatherMap API).",
  },
  {
    phase: "03 // ENGINEER",
    title: "System Architecture & APIs",
    meta: "2025 – 2026",
    description:
      "Architected Rishource — a full-stack sharded Discord bot platform with PostgreSQL dynamic Cogs, REST APIs, OAuth, and dynamic web dashboards.",
  },
  {
    phase: "04 // SYSTEMS THINKER",
    title: "Interactive UX & Modern Stack",
    meta: "PRESENT",
    description:
      "Building Portfolio 2.0 (UbuntuOS Web Environment) with window management, draggable interfaces, terminal simulation, and modular app registries.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="watermark-text top-10 right-[2%] opacity-[0.03]">
        PROGRESSION // 02
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="section-meta-label">
            <span>02 // ENGINEERING JOURNEY</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-editorial-title text-text-primary mb-12">
            EVOLUTION OF A <span className="text-accent">SYSTEMS BUILDER</span>
          </h2>
        </Reveal>

        {/* Horizontal Visual Progression Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journeySteps.map((step, i) => (
            <Reveal key={i}>
              <div className="relative p-6 bg-card border border-border rounded-xl shadow-sm hover:border-accent/40 transition-colors h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="font-bold text-accent">{step.phase}</span>
                    <span className="text-text-tertiary">{step.meta}</span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between font-mono text-[0.65rem] text-text-tertiary">
                  <span>STEP 0{i + 1}</span>
                  <span>→ NEXT</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
