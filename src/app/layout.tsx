import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const siteDescription =
  "Rishabh Kumar is a Computer Science undergraduate and Full-Stack & Software Developer building systems, interfaces, and useful digital experiences.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishabhkumaar.vercel.app"),
  title: "Rishabh Kumar — Full-Stack & Software Developer",
  description: siteDescription,
  keywords: [
    "Rishabh Kumar",
    "Full-Stack Developer",
    "Software Developer",
    "Computer Science",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Web Development",
    "Software Engineering",
    "Rishource",
    "Portfolio",
  ],
  authors: [{ name: "Rishabh Kumar", url: "https://rishabhkumaar.vercel.app" }],
  creator: "Rishabh Kumar",
  publisher: "Rishabh Kumar",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://rishabhkumaar.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabhkumaar.vercel.app/",
    title: "Rishabh Kumar — Full-Stack & Software Developer",
    description: siteDescription,
    siteName: "Rishabh Kumar",
    images: [
      {
        url: "https://rishabhkumaar.vercel.app/images/projects/portfolio-os/hero.webp",
        width: 1200,
        height: 630,
        alt: "Rishabh Kumar — Portfolio 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Kumar — Full-Stack & Software Developer",
    description: siteDescription,
    images: [
      "https://rishabhkumaar.vercel.app/images/projects/portfolio-os/hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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

