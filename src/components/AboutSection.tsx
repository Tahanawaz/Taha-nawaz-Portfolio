"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  Target,
  Layers,
  Cpu,
  ExternalLink,
  Zap,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "MERN Stack Development",
    desc: "Working with MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.",
  },
  {
    icon: Cpu,
    title: "React.js Development",
    desc: "Building web interfaces and frontend functionality with React.js.",
  },
  {
    icon: Zap,
    title: "Backend Development",
    desc: "Working on backend development and server-side functionality with Node.js.",
  },
  {
    icon: Cpu,
    title: "Real-Time Systems",
    desc: "Building and learning real-time system functionality for modern web applications.",
  },
];

const CERTIFICATIONS = [
  {
    title: "ETTP Cycle Spring 2026 — Tech Category Winner",
    meta: "SEE Pakistan 2026 · Smart Track project",
    href: "",
    icon: Award,
    color: "#56c5d8",
  },
  {
    title: "AI Fundamentals",
    meta: "Google · Coursera · September 17, 2026",
    href: "https://www.coursera.org/verify/9J0UHJYKGHV",
    icon: Award,
    color: "#56c5d8",
  },
  {
    title: "Introduction to SQL",
    meta: "SQL fundamentals, queries, filtering, joins, and data handling",
    href: "",
    icon: Award,
    color: "#56c5d8",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section id="about" className="relative z-10 section-padding" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-14"
        >
          <span className="inline-block mb-4 rounded-full bg-white/[0.04] border border-white/[0.1] px-4 py-1.5 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            How I <span className="text-accent">Build</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            I enjoy turning real product requirements into clear, maintainable
            software. My work combines thoughtful interfaces with reliable APIs,
            practical database design, and close attention to the user journey.
          </p>
        </motion.div>

        {/* ── Highlights Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#56c5d8]/10 text-[#56c5d8] group-hover:bg-[#56c5d8]/20 transition-colors">
                <h.icon size={22} />
              </div>
              <h3 className="mb-2 text-sm font-bold text-white">{h.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Education + Certifications ── */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileHover={{ y: -4 }}
            className="glass-card p-7 flex items-start gap-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#56c5d8]/15 text-[#56c5d8]">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#56c5d8] uppercase tracking-wider mb-1">
                Education
              </p>
              <h3 className="text-base font-bold text-white mb-1">
                BS Software Engineering
              </h3>
              <p className="text-sm text-slate-300 mb-1">
                 Superior University Gold Campus, Lahore
              </p>
              <p className="text-xs text-slate-500">
                2024 – 2028 &nbsp;|&nbsp; 6th Semester &nbsp;|&nbsp; CGPA:{" "}
                <span className="text-[#56c5d8] font-bold">3.70</span>
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -3 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${cert.color}15`, color: cert.color }}
                >
                  <cert.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-500">{cert.meta}</p>
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#56c5d8] hover:text-white transition-colors"
                    >
                      Verify credential <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Quick Intro ── */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 glass-card p-6 sm:p-8 text-center shimmer-bg"
        >
          <Target
            size={28}
            className="mx-auto mb-4 text-[#56c5d8]"
          />
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Currently open to job opportunities as a{" "}
            <span className="text-[#56c5d8] font-semibold">
              MERN Stack Developer and Software Engineer
            </span>{" "}
            in Lahore, Pakistan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
