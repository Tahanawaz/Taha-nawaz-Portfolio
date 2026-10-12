"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Github, ExternalLink, Trophy, LockKeyhole } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string[];
  stack: string[];
  color: string;
  description: string;
  highlights: string[];
  role: string;
  challenge: string;
  outcome: string;
  featured?: boolean;
  status: "Ongoing" | "Completed";
  githubUrl?: string;
  secondaryGithubUrl?: string;
  liveUrl?: string;
  codeAccess?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "smart-track",
    title: "Smart Track",
    subtitle: "Multi-Institute Transport Management System",
    category: ["award", "full-stack"],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Google Maps",
      "JWT",
      "Tailwind CSS",
    ],
    color: "#56c5d8",
    liveUrl: "https://bus-frontend-rho.vercel.app",
    codeAccess: true,
    description:
      "Smart Track is a full-stack, multi-institute transport management system for administrators, students, and drivers. It supports live vehicle tracking, institute-based access, fleet and route management, student access periods, payments, and operational reporting. The project won the Tech Category in the ETTP Cycle Spring 2026 at SEE Pakistan 2026.",
    role: "Full-Stack Developer",
    challenge: "Keep location and transport data synchronized in real time while isolating each institute's users and operations.",
    outcome: "Built an award-winning working platform and won the ETTP Cycle Spring 2026 Tech Category at SEE Pakistan 2026.",
    featured: true,
    highlights: [
      "Live driver GPS updates through Socket.io with Google Maps and OpenStreetMap support",
      "Institute-scoped administrators, students, drivers, buses, and routes",
      "JWT authentication with account activation, suspension, and access expiry controls",
      "Payment records and downloadable PDF reports for operational data",
      "Winner of the ETTP Cycle Spring 2026 Tech Category at SEE Pakistan 2026",
    ],
    status: "Ongoing",
  },
  {
    id: "ali-public-school",
    title: "Ali Public School",
    subtitle: "Full-Stack School Website",
    category: ["full-stack", "business"],
    stack: ["React.js", "Node.js", "Express.js", "Vite", "CSS"],
    color: "#56c5d8",
    githubUrl: "https://github.com/Tahanawaz/Ali-public-school",
    liveUrl: "https://ali-public-school-nu.vercel.app",
    description:
      "A full-stack school website that presents academics, campus information, events, admissions, and inquiry services through a React frontend and Express API.",
    role: "Full-Stack Developer",
    challenge: "Connect public school content and inquiry flows with protected administrative access.",
    outcome: "Delivered one responsive platform for information, admissions, events, and administration.",
    highlights: [
      "Online admission and contact inquiry flows",
      "Academic programs, announcements, events, and faculty content",
      "Event RSVP functionality and backend-powered statistics",
      "Protected administrator access to admission records",
    ],
    status: "Completed",
  },
  {
    id: "toolora",
    title: "Toolora",
    subtitle: "Privacy-Conscious Online Tools Platform",
    category: ["tools"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PDF.js"],
    color: "#56c5d8",
    githubUrl: "https://github.com/Tahanawaz/Toolora",
    liveUrl: "https://toolora-weld.vercel.app",
    description:
      "An all-in-one online tools platform with 41 dedicated utilities for text, developer, image, document, and PDF workflows.",
    role: "Next.js Developer",
    challenge: "Support many file and text workflows while keeping processing fast and privacy-conscious in the browser.",
    outcome: "Combined 41 searchable utilities in one responsive light and dark interface.",
    highlights: [
      "Local browser-based image and PDF processing",
      "PDF merge, split, conversion, rotation, watermarking, and protection",
      "Image compression, conversion, resizing, cropping, and background removal",
      "Responsive light/dark interface with search across 41 tools",
    ],
    status: "Completed",
  },
  {
    id: "the-hair-club",
    title: "The Hair Club",
    subtitle: "Men's Salon Website & Booking Experience",
    category: ["business"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "#56c5d8",
    githubUrl: "https://github.com/Tahanawaz/The-Hair-Club",
    liveUrl: "https://the-hair-club.vercel.app",
    description:
      "A responsive business website for a men's salon, presenting its services, packages, pricing, gallery, reviews, and appointment options.",
    role: "Frontend Developer",
    challenge: "Turn a detailed service catalogue into a clear mobile-friendly booking journey.",
    outcome: "Delivered a responsive showcase with direct WhatsApp appointment booking.",
    highlights: [
      "Service catalogue with clear starting prices",
      "Curated grooming packages and promotional gallery",
      "Direct WhatsApp appointment booking",
      "Responsive navigation, image gallery filters, and testimonials",
    ],
    status: "Completed",
  },
  {
    id: "washpanda",
    title: "WashPanda",
    subtitle: "Full-Stack Service Booking Platform",
    category: ["full-stack", "business"],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    color: "#56c5d8",
    githubUrl: "https://github.com/Tahanawaz/washpanda-Frontend",
    secondaryGithubUrl: "https://github.com/Tahanawaz/washpanda-Backend",
    description:
      "A full-stack service booking platform with a React customer experience and an Express/MongoDB API for operations and administration.",
    role: "Full-Stack Developer",
    challenge: "Coordinate customer booking flows with service, content, and administrative operations.",
    outcome: "Built separate frontend and backend applications backed by a MongoDB API.",
    highlights: [
      "Customer authentication and service booking flows",
      "Catalog, packages, gallery, reviews, and contact management",
      "Administrative dashboard and application settings",
      "MongoDB-backed API with separate frontend and backend repositories",
    ],
    status: "Completed",
  },
  {
    id: "skin-care-store",
    title: "Skin Care Store",
    subtitle: "Inventory, Billing & Product Matching System",
    category: ["full-stack", "business"],
    stack: [],
    color: "#56c5d8",
    description:
      "A skincare store management system for maintaining products, billing customers, and keeping stock quantities updated. Customers can enter a reported skin condition, and the system shows relevant skincare products currently available in the store's inventory.",
    role: "Full-Stack Developer",
    challenge: "Connect product matching, billing, and live stock updates without recommending unavailable inventory.",
    outcome: "In progress: a single workflow for product management, billing, inventory, and stock-aware product matching.",
    highlights: [
      "Add, update, and delete skincare products",
      "Stock quantity management and inventory updates",
      "Customer billing integrated with available stock",
      "Product matching based on a customer's reported skin condition",
      "Only matching products available in current stock are displayed",
    ],
    status: "Completed",
  },
];

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "award", label: "Award Winner" },
  { id: "full-stack", label: "Full Stack" },
  { id: "tools", label: "Web Tools" },
  { id: "business", label: "Business Sites" },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [selectedProject]);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
  };

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
            A selection of my full-stack products, business websites, web tools, and award-winning work.
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
              aria-pressed={filter === f.id}
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
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={(event) => openProject(project, event.currentTarget)}
                className="glass-card p-6 cursor-pointer group text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56c5d8]"
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
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-amber-200">
                      <Trophy size={11} aria-hidden="true" /> Award Winner
                    </span>
                  )}
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
                <div className="flex items-center gap-1 text-xs font-semibold text-[#56c5d8] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  View Details <ChevronRight size={14} />
                </div>
              </motion.button>
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
            className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto p-3 pt-4 sm:p-4 sm:pt-6 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              aria-describedby="project-dialog-description"
              className="project-modal glass-card relative w-full max-w-5xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] p-5 pt-12 sm:p-7 sm:pt-12 lg:p-8"
            >
              {/* Close */}
              <button
                ref={closeButtonRef}
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 rounded-lg p-2 text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-5 flex flex-wrap items-center gap-3 pr-10">
                <div
                  className="h-1.5 w-16 rounded-full"
                  style={{ background: selectedProject.color }}
                />
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    color: selectedProject.status === "Ongoing" ? "#56c5d8" : "#8c9ba3",
                    background: selectedProject.status === "Ongoing"
                      ? "rgba(112,225,255,0.1)"
                      : "rgba(140,155,163,0.1)",
                    border: `1px solid ${selectedProject.status === "Ongoing"
                      ? "rgba(112,225,255,0.2)"
                      : "rgba(140,155,163,0.2)"}`,
                  }}
                >
                  {selectedProject.status === "Ongoing" ? "In Progress" : "Completed"}
                </span>
                {selectedProject.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                    <Trophy size={12} aria-hidden="true" /> Featured Award Winner
                  </span>
                )}
              </div>

              <h3 id="project-dialog-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400 mb-5">{selectedProject.subtitle}</p>

              <div className="mb-5 grid gap-2 sm:grid-cols-3">
                {[
                  ["My Role", selectedProject.role],
                  ["Challenge", selectedProject.challenge],
                  ["Outcome", selectedProject.outcome],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#56c5d8]">{label}</p>
                    <p className="text-xs leading-relaxed text-slate-300">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-8">
                <div>
                  <p id="project-dialog-description" className="text-sm text-slate-300 leading-relaxed mb-5">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-xs font-bold text-[#56c5d8] uppercase tracking-wider mb-3">
                    Key Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
                          style={{ background: selectedProject.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:border-l lg:border-white/10 lg:pl-8">
                  {selectedProject.stack.length > 0 && (
                    <>
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
                    </>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2 lg:flex-col">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#56c5d8] px-4 py-2.5 text-sm font-bold text-[#0e1726] transition-colors hover:bg-white"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-[#56c5d8] hover:text-[#56c5d8]"
                  >
                    <Github size={17} />
                    {selectedProject.secondaryGithubUrl ? "Frontend Code" : "View Code"}
                  </a>
                )}
                {selectedProject.secondaryGithubUrl && (
                  <a
                    href={selectedProject.secondaryGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-[#56c5d8] hover:text-[#56c5d8]"
                  >
                    <Github size={17} /> Backend Code
                  </a>
                )}
                {selectedProject.codeAccess && (
                  <a
                    href={`mailto:mt486045@gmail.com?subject=${encodeURIComponent(`${selectedProject.title} — Code Access Request`)}&body=${encodeURIComponent(`Hi Taha,\n\nI reviewed ${selectedProject.title} on your portfolio and would like to request access to the source code.\n\nRegards,`)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#56c5d8]/40 px-4 py-2.5 text-sm font-bold text-[#56c5d8] transition-colors hover:bg-[#56c5d8] hover:text-[#0e1726]"
                  >
                    <LockKeyhole size={15} /> Request Code Access
                  </a>
                )}
                {!selectedProject.liveUrl && !selectedProject.githubUrl && (
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#56c5d8]/40 px-4 py-2.5 text-sm font-bold text-[#56c5d8] transition-colors hover:bg-[#56c5d8] hover:text-[#0e1726]"
                  >
                    Ask about this project <ChevronRight size={15} />
                  </a>
                )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
