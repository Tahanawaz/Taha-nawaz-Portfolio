"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#56c5d8",
    skills: [
      "React.js",
      "Next.js 14",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    id: "backend",
    label: "Backend & Real-Time",
    color: "#56c5d8",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "RESTful APIs",
      "WebSockets (Socket.io)",
      "WebRTC",
      "Webhooks",
      "JWT Authentication",
      "RBAC (Role-Based Access)",
    ],
  },
  {
    id: "database",
    label: "Databases & ORM",
    color: "#56c5d8",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "Redis",
      "Supabase",
      "Prisma",
      "Mongoose",
    ],
  },
  {
    id: "tools",
    label: "Tools & Integration",
    color: "#56c5d8",
    skills: [
      "Google Gemini API",
      "Stripe Payments",
      "Cloudinary",
      "OAuth 2.0",
      "Vercel",
      "DigitalOcean",
      "Git & GitHub",
      "Postman",
    ],
  },
  {
    id: "core",
    label: "Core CS",
    color: "#56c5d8",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "C++",
      "Java",
      "Database Design",
      "System Design Basics",
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const activeCat = CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative z-10 section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="inline-block mb-4 rounded-full bg-white/[0.04] border border-white/[0.1] px-4 py-1.5 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            I&apos;ve spent years mastering the tools that power the modern web. Here&apos;s a breakdown of my technical stack and core proficiencies.
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-300 bg-transparent"
              }`}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-xl border"
                  style={{
                    background: `${cat.color}12`,
                    borderColor: `${cat.color}30`,
                    boxShadow: `0 0 20px ${cat.color}15`,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Skill Pills ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-8"
          >
            {/* Category accent bar */}
            <div
              className="h-1 w-16 rounded-full mb-6"
              style={{ background: activeCat.color }}
            />

            <div className="flex flex-wrap gap-3">
              {activeCat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="skill-pill cursor-default"
                  style={{
                    borderColor: `${activeCat.color}20`,
                    background: `${activeCat.color}10`,
                  }}
                >
                  <span
                    className="mr-2 inline-block h-2 w-2 rounded-full"
                    style={{ background: activeCat.color }}
                  />
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Skill count */}
            <p className="mt-6 text-xs text-slate-600 text-right">
              {activeCat.skills.length} technologies
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
