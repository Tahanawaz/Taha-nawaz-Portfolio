"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  stack: string[];
  color: string;
  description: string;
  highlights: string[];
  status: "Ongoing" | "Completed";
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "telemedicine",
    title: "Telemedicine & Video Consultation",
    subtitle: "Real-Time Healthcare Platform",
    category: ["real-time"],
    stack: [
      "Next.js",
      "WebRTC",
      "Socket.io",
      "Mediasoup/LiveKit",
      "Prisma",
      "Redis",
      "Stripe",
      "Cloudinary",
    ],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19/telemedicine_appointment",
    description:
      "A comprehensive telemedicine platform enabling patients to book video consultations with doctors, featuring real-time video/audio through WebRTC with SFU architecture, appointment scheduling, prescription management, and Stripe payment processing.",
    highlights: [
      "WebRTC peer-to-peer & SFU video architecture with Mediasoup/LiveKit",
      "Real-time chat, notifications, and presence via Socket.io",
      "Stripe payment integration for consultation fees",
      "Redis caching for session management and rate limiting",
      "Cloudinary for medical document and prescription storage",
    ],
    status: "Ongoing",
  },
  {
    id: "jobportal",
    title: "JobPortal — AI-Powered Platform",
    subtitle: "Gemini AI Job Matching Engine",
    category: ["ai"],
    stack: [
      "Next.js",
      "PostgreSQL",
      "Gemini API",
      "Prisma",
      "Tailwind CSS",
    ],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19?tab=repositories",
    description:
      "An intelligent job platform that leverages Google Gemini AI for smart job-candidate matching, resume analysis, and automated job recommendations based on skills and preferences.",
    highlights: [
      "Google Gemini API integration for AI-powered job matching",
      "Automated resume parsing and skill extraction",
      "PostgreSQL with Prisma ORM for complex relational queries",
      "Server-side rendering with Next.js App Router",
      "Advanced filtering, search, and recommendation engine",
    ],
    status: "Completed",
  },
  {
    id: "swc",
    title: "Syed Watch Company (SWC)",
    subtitle: "Full-Featured E-Commerce Platform",
    category: ["ecommerce"],
    stack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Supabase",
      "OAuth 2.0",
    ],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19/SWC-Syed-Watch-Company-",
    description:
      "A complete e-commerce platform for luxury watches with secure payment processing, OAuth authentication, inventory management, and a sleek product browsing experience.",
    highlights: [
      "Stripe checkout integration with webhook order confirmation",
      "OAuth 2.0 social login (Google, GitHub)",
      "Supabase for real-time database and file storage",
      "Product catalog with advanced filtering and search",
      "Admin dashboard for inventory and order management",
    ],
    status: "Completed",
  },
  {
    id: "lms",
    title: "LMS — Learning Management System",
    subtitle: "Real-Time Collaborative Learning",
    category: ["real-time"],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets", "Socket.io"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19/LMS",
    description:
      "A feature-rich learning management system with real-time class interactions, course management, progress tracking, and live collaboration features powered by WebSockets.",
    highlights: [
      "MERN stack architecture with modular design patterns",
      "Real-time class interactions and live Q&A via Socket.io",
      "Course creation, enrollment, and progress tracking",
      "File upload and media management for course materials",
      "Role-based dashboards for students, instructors, and admins",
    ],
    status: "Completed",
  },
  {
    id: "talent-hr",
    title: "Talent-for-HR — Assessment Module",
    subtitle: "Enterprise HR Tech Solution",
    category: ["enterprise"],
    stack: ["React.js", "Express.js", "MySQL", "JWT", "RBAC"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19/Itsolera_MERN_Project",
    description:
      "An enterprise-grade HR assessment platform built during the Ezitech internship, enabling organizations to create, manage, and evaluate candidate assessments with role-based access control.",
    highlights: [
      "Complex MySQL queries for assessment analytics and reporting",
      "JWT authentication with refresh token rotation",
      "Role-Based Access Control (RBAC) — HR, Manager, Candidate roles",
      "Assessment builder with multiple question types",
      "Performance analytics dashboard with data visualization",
    ],
    status: "Completed",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking System",
    subtitle: "Comprehensive Reservation Platform",
    category: ["ecommerce", "enterprise"],
    stack: ["Node.js", "Express.js", "PostgreSQL", "React", "Prisma"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19/Hotal_Booking_System-MERN-",
    description:
      "A complete hotel booking platform allowing users to search for rooms, view availability in real-time, and make secure reservations with integrated payment processing.",
    highlights: [
      "Real-time room availability and inventory management",
      "Secure payment processing integration",
      "PostgreSQL database for reliable transaction handling",
      "Admin dashboard for booking management",
      "Advanced search with filtering by amenities, price, and dates",
    ],
    status: "Completed",
  },
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    subtitle: "Interactive & Animated Web Experience",
    category: ["all"],
    stack: ["Next.js 14", "Framer Motion", "Tailwind CSS", "React"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19?tab=repositories",
    description:
      "A highly interactive, performance-optimized personal portfolio designed to showcase my engineering skills and projects with a premium, dynamic user interface.",
    highlights: [
      "Custom canvas-based particle network background",
      "Complex scroll animations and page transitions using Framer Motion",
      "Modern glassmorphism UI design with Tailwind CSS v4",
      "Fully responsive and mobile-optimized layout",
      "Component-based architecture for scalability",
    ],
    status: "Completed",
  },
  {
    id: "pitchnest",
    title: "Pitchnest",
    subtitle: "Startup & Idea Pitching Platform",
    category: ["enterprise"],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Mongoose"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19?tab=repositories",
    description:
      "A specialized platform connecting entrepreneurs with investors, allowing users to create detailed pitches, upload pitch decks, and facilitate secure communications.",
    highlights: [
      "Full MERN stack implementation with Mongoose ODM",
      "Secure user authentication and role management (Founder/Investor)",
      "Document upload and processing for pitch decks",
      "Interactive dashboard for tracking pitch engagement",
      "RESTful API architecture for scalable data operations",
    ],
    status: "Ongoing",
  },
  {
    id: "axorvian",
    title: "Axorvian Company Website",
    subtitle: "Corporate Web Presence",
    category: ["enterprise"],
    stack: ["Python", "Flask", "SQL", "HTML/CSS", "JavaScript"],
    color: "#56c5d8",
    githubUrl: "https://github.com/smfahad19?tab=repositories",
    description:
      "A professional corporate website developed for Axorvian, featuring dynamic content management, service showcases, and client lead generation forms.",
    highlights: [
      "Robust backend developed with Python and Flask",
      "SQL database integration for content and lead storage",
      "Custom CMS for easy content updates by the marketing team",
      "Optimized for SEO and fast page load speeds",
      "Responsive front-end design",
    ],
    status: "Completed",
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "real-time", label: "Real-Time & WebRTC" },
  { id: "ai", label: "AI Powered" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "enterprise", label: "Enterprise" },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(filter));

  return (
    <section
      id="projects"
      className={`relative ${selectedProject ? "z-[100]" : "z-10"} section-padding`}
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="inline-block mb-4 rounded-full bg-white/[0.04] border border-white/[0.1] px-4 py-1.5 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            A selection of my best work, ranging from AI-powered platforms to real-time communication apps.
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === f.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {filter === f.id && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.1]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ── */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card p-6 cursor-pointer group"
              >
                {/* Color accent */}
                <div
                  className="h-1 w-12 rounded-full mb-5"
                  style={{ background: project.color }}
                />

                {/* Status badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      color: project.status === "Ongoing" ? "#56c5d8" : "#8c9ba3",
                      background:
                        project.status === "Ongoing"
                          ? "rgba(245,158,11,0.1)"
                          : "rgba(112,225,255,0.1)",
                      border: `1px solid ${
                        project.status === "Ongoing"
                          ? "rgba(245,158,11,0.2)"
                          : "rgba(112,225,255,0.2)"
                      }`,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#56c5d8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  {project.subtitle}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="rounded-md px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-white/[0.03]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* View detail */}
                <div className="flex items-center gap-1 text-xs font-semibold text-[#56c5d8] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 pt-14 sm:p-8 sm:pt-14"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-lg p-2 text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X size={18} />
              </button>

              {/* Accent bar */}
              <div
                className="h-1.5 w-16 rounded-full mb-6"
                style={{ background: selectedProject.color }}
              />

              {/* Status */}
              <span
                className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                style={{
                  color:
                    selectedProject.status === "Ongoing"
                      ? "#56c5d8"
                      : "#8c9ba3",
                  background:
                    selectedProject.status === "Ongoing"
                      ? "rgba(112,225,255,0.1)"
                      : "rgba(140,155,163,0.1)",
                  border: `1px solid ${
                    selectedProject.status === "Ongoing"
                      ? "rgba(112,225,255,0.2)"
                      : "rgba(140,155,163,0.2)"
                  }`,
                }}
              >
                {selectedProject.status}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400 mb-5">
                {selectedProject.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <h4 className="text-xs font-bold text-[#56c5d8] uppercase tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2.5 mb-6">
                {selectedProject.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full"
                      style={{ background: selectedProject.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <h4 className="text-xs font-bold text-[#56c5d8] uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 border"
                    style={{
                      background: `${selectedProject.color}08`,
                      borderColor: `${selectedProject.color}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#56c5d8] px-5 py-3 text-sm font-bold text-[#0e1726] transition-colors hover:bg-white"
              >
                <Github size={17} />
                Visit Code
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
