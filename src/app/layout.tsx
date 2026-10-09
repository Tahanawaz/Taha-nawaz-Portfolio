import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Taha Nawaz | MERN Stack Developer & Software Engineer",
    template: "%s | Taha Nawaz",
  },
  description:
    "Taha Nawaz is a Software Engineering student and MERN Stack Developer in Lahore, Pakistan, with experience in React.js, Node.js, backend development, and real-time systems.",
  keywords: [
    "Taha Nawaz",
    "Taha Nawaz Software Engineer",
    "Taha Nawaz MERN Stack Developer",
    "MERN Stack Developer Lahore",
    "Software Engineer Lahore Pakistan",
    "MERN Stack Developer Pakistan",
    "React Node.js Developer Lahore",
    "Backend Developer Lahore",
    "Real-Time Systems Developer",
    "MERN Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Socket.io",
    "Portfolio",
    "Taha Nawaz",
  ],
  authors: [{ name: "Taha Nawaz" }],
  creator: "Taha Nawaz",
  publisher: "Taha Nawaz",
  icons: {
    icon: "/images/Taha-profile.jpg",
    shortcut: "/images/Taha-profile.jpg",
    apple: "/images/Taha-profile.jpg",
  },
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
    title: "Taha Nawaz | MERN Stack Developer & Software Engineer",
    description:
      "Software Engineering student and MERN Stack Developer from Lahore with nine months of development experience.",
    url: SITE_URL,
    siteName: "Taha Nawaz Portfolio",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/images/Taha-profile.jpg",
        width: 916,
        height: 1600,
        alt: "Taha Nawaz — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Nawaz | MERN Stack Developer & Software Engineer",
    description:
      "Software Engineering student and MERN Stack Developer based in Lahore, Pakistan.",
    images: ["/images/Taha-profile.jpg"],
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
