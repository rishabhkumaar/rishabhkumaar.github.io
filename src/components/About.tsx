import Reveal from "./Reveal";

const metrics = [
  { value: "9.89 / 10", label: "CGPA (ACADEMIC STANDING)" },
  { value: "200+", label: "PROGRAMMING PROBLEMS SOLVED" },
  { value: "FULL-STACK", label: "DEVELOPMENT & ARCHITECTURE" },
];

export default function About() {
  return (
    <section
      id="about-intro"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="watermark-text top-6 left-[2%] opacity-[0.03]">
        ARCH // DESIGN
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="section-meta-label">
            <span>01.1 // PHILOSOPHY &amp; METRICS</span>
          </div>
        </Reveal>

        {/* Large Editorial Statement */}
        <Reveal>
          <h2 className="section-editorial-title text-text-primary mb-8 max-w-4xl">
            I DON&apos;T JUST WRITE CODE.{" "}
            <span className="text-accent">I DESIGN SYSTEMS.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-base sm:text-xl text-text-secondary leading-relaxed font-normal mb-6">
                I&apos;m a Computer Science undergraduate at Lovely Professional University,
                building full-stack applications with a focus on clean architecture,
                scalable APIs, and polished user interfaces.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                From modular Discord platforms with real-time management dashboards to
                authenticated study platforms with persistent annotations — I design systems that
                are as thoughtful under the surface as they are on screen.
              </p>
            </Reveal>
          </div>

          {/* Typography-Driven Metrics Grid */}
          <div className="lg:col-span-5 border-l-2 border-accent/20 pl-6 sm:pl-8 space-y-8">
            {metrics.map((m, i) => (
              <Reveal key={i}>
                <div>
                  <p className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                    {m.value}
                  </p>
                  <p className="font-mono text-xs text-accent font-bold uppercase tracking-widest mt-1">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
