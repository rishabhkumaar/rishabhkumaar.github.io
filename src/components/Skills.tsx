import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="systems"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="watermark-text top-10 left-[2%] opacity-[0.03]">
        STACK // 03
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="section-meta-label">
            <span>03 // TECHNICAL STACK &amp; CAPABILITIES</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-editorial-title text-text-primary mb-10">
            SYSTEMS &amp; <span className="text-accent">ENGINEERING STACK</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="card bg-zinc-950 text-white rounded-2xl shadow-xl overflow-hidden border border-zinc-800">
            <div className="p-6 sm:p-10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/90" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/90" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-green-500/90" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    rishabh@portfolio ~
                  </span>
                </div>
                <span className="font-mono text-[0.65rem] text-zinc-500">
                  BASH // SYSTEM INVENTORY
                </span>
              </div>

              {/* Command */}
              <div className="font-mono text-base text-green-400 mb-8">
                <span className="text-zinc-500">$</span> rishabh --stack
              </div>

              {/* Technical Stack Grid Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((cat) => (
                  <div key={cat.category} className="space-y-2">
                    <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest border-b border-zinc-800/80 pb-2">
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="mt-10 pt-6 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">$</span>
                  <span className="inline-block w-2.5 h-4 bg-green-400 animate-pulse" aria-hidden="true" />
                </div>
                <span className="text-[0.65rem] text-zinc-500">
                  STATUS: ALL MODULES LOADED SUCCESSFULLY
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
