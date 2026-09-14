"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Rocket,
  Code2,
} from "lucide-react";

const ROLES = [
  "Full Stack MERN Developer",
  "Next.js 14 Specialist",
  "WebRTC & Real-time Architect",
  "Gemini AI Integrator",
  "RESTful API Engineer",
];

const STATS = [
  { label: "Key Projects", value: "5+", icon: Rocket },
  { label: "Internships", value: "2", icon: Briefcase },
  { label: "CGPA", value: "3.42", icon: GraduationCap },
  { label: "Production Ready", value: "100%", icon: Code2 },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 50);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center section-padding pt-32 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center max-w-7xl mx-auto"
        >
          {/* ── Left: Text Content ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-3 border-l-2 border-[#56c5d8] pl-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#56c5d8]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56c5d8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#56c5d8]"></span>
                </span>
                Available for New Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[6.5rem] font-extrabold tracking-[-0.06em] leading-[0.9] mb-8 text-white"
            >
              Syed Muhammad
              <br />
              <span className="text-accent">Fahad<span className="text-[#56c5d8]">.</span></span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div variants={fadeUp} className="mb-6 h-8 sm:h-10">
              <span className="font-mono text-base sm:text-lg font-bold uppercase tracking-wider text-[#b3becb]">
                {displayText}
                <span
                  className="inline-block w-[3px] h-[1.1em] bg-[#56c5d8] ml-1 align-middle"
                  style={{ animation: "typing-cursor 0.8s step-end infinite" }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10"
            >
              Syed Muhammad Fahad is a Software Engineer and Full Stack Developer
              from Lahore, building scalable Next.js and MERN applications,
              real-time WebRTC systems, and practical AI-powered products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-sm bg-[#56c5d8] text-[#0e1726] px-6 py-3 text-sm font-extrabold hover:bg-white transition-colors shadow-[5px_5px_0_#367d88]"
              >
                View My Work
              </motion.button>

              <motion.a
                href="https://wa.me/923454565755?text=Hi%20Fahad!%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-sm border border-white/[0.2] px-6 py-3 text-sm font-bold text-[#f3f0e8] hover:border-[#56c5d8] hover:text-[#56c5d8] transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp Me
              </motion.a>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="border-t border-white/[0.18] pt-3 group"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-[#f4f1e8] mb-1">
                    {s.value}
                  </p>
                  <p className="text-[10px] font-bold text-[#83928e] uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual Profile ── */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-10"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] lg:rotate-2">
              {/* Decorative Glow */}
              <div className="absolute -inset-3 rounded-[1.75rem] border border-[#56c5d8]/20" />
              
              <motion.div
                whileHover={{ y: -5, rotateY: 5 }}
                className="relative h-full w-full rounded-[1.5rem] overflow-hidden border border-white/20 bg-[#152238] shadow-2xl shadow-black/40"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/images/fahad-profile.jpg"
                  alt="Syed Muhammad Fahad"
                  fill
                  className="object-cover object-top grayscale-[25%] contrast-110 opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
                  priority
                />
                
                {/* Floating overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#0e1726]/90 backdrop-blur-md border border-white/15 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#56c5d8] flex items-center justify-center">
                      <Code2 size={16} className="text-[#0e1726]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Full Stack Dev</p>
                      <p className="text-[11px] text-slate-400">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium text-slate-600 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
