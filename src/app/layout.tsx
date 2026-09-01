import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishabh Kumar — Full-Stack & Software Developer",
  description:
    "Portfolio of Rishabh Kumar — Computer Science undergraduate and Full-Stack Developer. Building systems, interfaces, and useful digital experiences.",
  keywords: [
    "Rishabh Kumar",
    "Full-Stack Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Rishabh Kumar" }],
  openGraph: {
    title: "Rishabh Kumar — Full-Stack & Software Developer",
    description:
      "Building systems, interfaces, and useful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
