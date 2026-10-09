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
import { SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taha Nawaz",
  alternateName: ["Taha", "Taha Nawaz MERN Stack Developer"],
  url: SITE_URL,
  image: `${SITE_URL}/images/Taha-profile.jpg`,
  jobTitle: "MERN Stack Developer & Software Engineer",
  description:
    "Software Engineering student and MERN Stack Developer with experience in React.js, Node.js, backend development, and real-time systems.",
  email: "mt486045@gmail.com",
  telephone: "+923096733225",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/Tahanawaz",
    "https://www.linkedin.com/in/taha-nawaz-9a390a294",
  ],
  knowsAbout: [
    "Software Engineering",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Socket.io",
    "Python",
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
