"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    company: "DeepQuery",
    role: "MERN Stack Developer Intern",
    period: "Apr 2026 – Sep 2026",
    location: "Johar Town, Lahore · On-site",
    color: "#56c5d8",
    bullets: [
      "Contributed to SRS and Tutor Scene, working across both frontend and backend development",
      "Built and maintained features using the MongoDB, Express.js, React.js, and Node.js stack",
      "Worked on real-time project functionality and connected frontend flows with backend APIs",
      "Handled full-stack debugging, feature updates, and database-driven application workflows",
    ],
  },
  {
    company: "Smart Tech",
    role: "Frontend Developer Intern",
    period: "Jan 2026 – Apr 2026",
    location: "Raiwind, Lahore · On-site",
    color: "#56c5d8",
    bullets: [
      "Developed responsive web interfaces using React.js, HTML, CSS, and Tailwind CSS",
      "Created reusable frontend components for consistent page layouts and styling",
      "Improved mobile, tablet, and desktop responsiveness across web pages",
      "Resolved frontend issues and enhanced the visual consistency and usability of interfaces",
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
