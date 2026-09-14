import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedfahad22.vercel.app"),
  title: {
    default: "Syed Muhammad Fahad | Software Engineer & Full Stack Developer",
    template: "%s | Syed Muhammad Fahad",
  },
  description:
    "Syed Muhammad Fahad is a Software Engineer and Full Stack Developer in Lahore, Pakistan, building production-ready MERN, Next.js, WebRTC, real-time, and AI-powered applications.",
  keywords: [
    "Syed Muhammad Fahad",
    "Syed Fahad",
    "Fahad Software Engineer",
    "Syed Muhammad Fahad Software Engineer",
    "Syed Muhammad Fahad Full Stack Developer",
    "Full Stack Developer Lahore",
    "Software Engineer Lahore Pakistan",
    "MERN Stack Developer Pakistan",
    "Next.js Developer Pakistan",
    "React Node.js Developer Lahore",
    "WebRTC Developer",
    "AI Integration Developer",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "WebRTC",
    "Socket.io",
    "Portfolio",
    "Syed Muhammad Fahad",
  ],
  authors: [{ name: "Syed Muhammad Fahad" }],
  creator: "Syed Muhammad Fahad",
  publisher: "Syed Muhammad Fahad",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Syed Muhammad Fahad | Software Engineer & Full Stack Developer",
    description:
      "Software Engineer from Lahore building scalable full-stack, real-time, and AI-powered products.",
    url: "https://syedfahad22.vercel.app",
    siteName: "Syed Muhammad Fahad Portfolio",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Muhammad Fahad | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in MERN, Next.js, WebRTC, and AI integrations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceMono.variable} dark`}>
      <body className="text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
