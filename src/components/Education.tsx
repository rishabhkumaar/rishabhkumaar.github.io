import { education } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section">
        <Reveal>
          <p className="section-label">{`// academic education`}</p>
          <h2 className="section-title">Academic Background</h2>
        </Reveal>

        <div className="relative mt-8">
          {/* Timeline line */}
          <div
            className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-[2px]"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {education.map((entry, i) => (
              <Reveal key={i}>
                <div className="relative flex gap-5 sm:gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0 mt-2">
                    <div
                      className={`w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full border-2 ${
                        i === 0
                          ? "bg-accent border-accent ring-4 ring-accent/20"
                          : "bg-card border-border"
                      }`}
                      style={{ marginLeft: "5px" }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="card flex-1 p-6 sm:p-7 hover:border-accent/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {entry.institution}
                        </h3>
                        <p className="text-sm font-medium text-text-secondary">
                          {entry.location}
                        </p>
                      </div>

                      {/* Prominent Grade Badge */}
                      <div className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
                        <span className="text-xs font-mono font-bold text-text-tertiary uppercase">
                          {entry.gradeLabel}:
                        </span>
                        <span className="font-mono text-sm sm:text-base font-extrabold text-accent">
                          {entry.grade}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-text-primary mt-1">
                      {entry.degree}
                    </p>
                    <p className="font-mono text-xs text-text-tertiary mt-1.5 font-medium">
                      {entry.period}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
