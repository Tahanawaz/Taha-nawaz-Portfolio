"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    company: "ITSOLERA",
    role: "Full Stack Developer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Remote, Pakistan",
    color: "#56c5d8",
    bullets: [
      "Deployed production MERN e-commerce platform on Vercel with SSR & ISR strategies",
      "Engineered RESTful APIs & Webhooks for order lifecycle events and Stripe payment status",
      "Implemented WebSocket-based real-time notifications and live inventory state sync",
      "Followed Git branching standards, code reviews, and comprehensive API documentation",
    ],
  },
  {
    company: "EZITECH SOLUTIONS",
    role: "Full Stack Developer Intern",
    period: "Oct 2025 – Jan 2026",
    location: "Islamabad, Pakistan",
    color: "#56c5d8",
    bullets: [
      "Built Talent-for-HR enterprise assessment platform REST APIs from scratch",
      "Developed HR assessment creation module with optimized MySQL complex queries",
      "Implemented JWT-based authentication & Role-Based Access Control (RBAC)",
      "Collaborated with cross-functional teams using agile sprint methodology",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="relative z-10 section-padding"
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
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Professional <span className="text-accent">Journey</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            A timeline of my professional growth, detailing the hands-on experience and complex projects I have contributed to.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Beam */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[#56c5d8]/30" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[17px] sm:left-[25px] top-8 h-5 w-5 rounded-full border-[3px] z-10"
                  style={{
                    borderColor: exp.color,
                    background: "#050810",
                    boxShadow: `0 0 16px ${exp.color}40`,
                  }}
                />
                {/* Glow ring */}
                <div
                  className="absolute left-[13px] sm:left-[21px] top-[26px] h-7 w-7 rounded-full animate-ping-slow opacity-30"
                  style={{ background: exp.color }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 sm:p-8 group"
                >
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{
                        color: exp.color,
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase size={18} style={{ color: exp.color }} />
                    {exp.role}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.2 + bi * 0.08 + 0.3 }}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ background: exp.color }}
                        />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
