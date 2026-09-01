import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function BrowserMockup({
  src,
  alt,
  url = "https://rishource.app",
  className = "",
  priority = false,
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card shadow-lg overflow-hidden flex flex-col group transition-all duration-300 ${className}`}
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-secondary/80 border-b border-border select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" aria-hidden="true" />
        </div>

        {/* Mock URL bar */}
        <div className="flex-1 max-w-sm mx-4 bg-background/80 border border-border px-3 py-0.5 rounded text-[0.65rem] font-mono text-text-tertiary text-center truncate">
          <span className="text-accent/60 mr-1">🔒</span>
          {url}
        </div>

        <div className="w-8" aria-hidden="true" />
      </div>

      {/* Screenshot Content */}
      <div className="relative w-full overflow-hidden bg-zinc-950/5">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          priority={priority}
          className="w-full h-auto object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
          unoptimized
        />
      </div>
    </div>
  );
}
