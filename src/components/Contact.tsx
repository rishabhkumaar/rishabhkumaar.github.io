import Image from "next/image";
import { identity } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    identity.resumeUrl
  )}`;

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden border-t border-border"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="watermark-text bottom-6 right-[2%] opacity-[0.03]">
        CONTACT // 06
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <Reveal>
          <div className="section-meta-label justify-center">
            <span>06 // INITIATE COLLABORATION</span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-editorial-title text-text-primary mb-6 max-w-4xl mx-auto">
            LET&apos;S BUILD <span className="text-accent">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Open to full-stack engineering opportunities, software architecture roles, and technical collaborations.
          </p>
        </Reveal>

        {/* Contact CTAs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href={`mailto:${identity.email}`}
              className="btn-editorial btn-editorial-primary !text-sm !px-6 !py-3.5 shadow-lg"
            >
              <span>EMAIL: {identity.email}</span>
              <span className="arrow-icon">→</span>
            </a>

            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-5 !py-3.5"
            >
              <span>GITHUB</span>
              <span className="arrow-icon">↗</span>
            </a>

            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-5 !py-3.5"
            >
              <span>LINKEDIN</span>
              <span className="arrow-icon">↗</span>
            </a>

            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-5 !py-3.5"
            >
              <span>VIEW RESUME</span>
              <span className="arrow-icon">↗</span>
            </a>

            <a
              href={identity.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial !text-sm !px-5 !py-3.5"
            >
              <span>DOWNLOAD RESUME</span>
              <span className="arrow-icon">↓</span>
            </a>
          </div>
        </Reveal>

        {/* Resume QR Code Card */}
        <Reveal>
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-5 text-left">
            <div className="relative w-32 h-32 shrink-0 bg-white p-2 rounded-xl border border-border shadow-sm flex items-center justify-center">
              <Image
                src={qrCodeUrl}
                alt="Scan to View Rishabh Kumar's Resume"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <span className="text-[0.65rem] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded-full inline-block">
                RESUME QR CODE
              </span>
              <h3 className="font-bold text-text-primary text-sm">
                Scan to View CV on Mobile
              </h3>
              <p className="text-text-tertiary text-[0.7rem] leading-relaxed">
                Encodes official Google Drive Resume document for easy phone scanning.
              </p>
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:underline font-bold pt-1"
              >
                OPEN DRIVE RESUME →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
