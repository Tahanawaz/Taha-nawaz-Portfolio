import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Syed Muhammad Fahad",
  alternateName: ["Syed Fahad", "Fahad Software Engineer"],
  url: "https://syedfahad22.vercel.app",
  image: "https://syedfahad22.vercel.app/images/fahad-profile.jpg",
  jobTitle: "Software Engineer & Full Stack Developer",
  description:
    "Software Engineer and Full Stack Developer specializing in MERN, Next.js, WebRTC, real-time systems, and AI integrations.",
  email: "syedfahad305171@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/smfahad19",
    "https://www.linkedin.com/in/syed-muhammad-fahad-472490285/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "WebRTC",
    "Artificial Intelligence",
    "REST APIs",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BackgroundVideo />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
