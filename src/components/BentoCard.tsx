import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  glass = false,
  hover = true,
  padding = true,
}: BentoCardProps) {
  const base = glass ? "glass-panel" : "card";
  const hoverClass = hover ? "" : "!shadow-none hover:!shadow-none hover:!transform-none";
  const paddingClass = padding ? "p-6" : "";

  return (
    <div className={`${base} ${hoverClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
