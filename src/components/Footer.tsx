export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}
    >
      <div
        className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <p className="font-mono text-xs text-text-tertiary">
          © {year} Rishabh Kumar. All rights reserved.
        </p>
        <p className="font-mono text-[0.65rem] text-text-tertiary tracking-widest uppercase">
          RISHABH // SYSTEM
        </p>
      </div>
    </footer>
  );
}
