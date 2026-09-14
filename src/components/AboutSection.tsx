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
  Globe,
  Zap,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Building production-grade RESTful APIs with clean separation of concerns, efficient middleware, and robust error handling.",
  },
  {
    icon: Cpu,
    title: "Real-Time Systems",
    desc: "WebRTC video/audio, Socket.io live sync, WebHooks for event-driven flows — from telemedicine to live notifications.",
  },
  {
    icon: Globe,
    title: "AI-Powered Solutions",
    desc: "Integrating Google Gemini API for intelligent job matching, automated analysis, and next-gen user experiences.",
  },
  {
    icon: Zap,
    title: "End-to-End Delivery",
    desc: "From database design (PostgreSQL, MongoDB, Redis) to polished frontends — shipping features that users love.",
  },
];

const CERTIFICATIONS = [
  {
    title: "MERN Stack Development Certification",
    org: "ZerTech",
    icon: Award,
    color: "#56c5d8",
  },
  {
    title: "Full Stack Developer — Experience Letter",
    org: "Ezitech Solutions",
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
            Engineering <span className="text-accent">Philosophy</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
            I believe that great software is built at the intersection of
            elegant design and robust engineering. My approach focuses on writing
            clean, maintainable code while delivering exceptional user
            experiences.
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
                The Superior University, Lahore
              </p>
              <p className="text-xs text-slate-500">
                2024 – 2028 &nbsp;|&nbsp; 6th Semester &nbsp;|&nbsp; CGPA:{" "}
                <span className="text-[#56c5d8] font-bold">3.42</span>
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
                  <p className="text-xs text-slate-500">{cert.org}</p>
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
            Currently building a{" "}
            <span className="text-[#56c5d8] font-semibold">
              Telemedicine &amp; Video Consultation Platform
            </span>{" "}
            with WebRTC, Mediasoup/LiveKit, and Stripe integration. Passionate
            about turning complex real-world problems into elegant,
            production-ready software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
