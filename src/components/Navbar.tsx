"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const ids = links.map((l) => l.href.slice(1));
      let found = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) found = id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-2xl border w-full max-w-6xl px-3 py-3 transition-all duration-300 ${scrolled
          ? "bg-[#0e1726]/95 border-[#56c5d8]/25 shadow-2xl shadow-black/30"
          : "bg-[#0e1726]/80 border-white/[0.12]"
          }`}
      >
        {/* ── Brand ── */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to the top"
          className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-[#56c5d8] text-[#0e1726] font-extrabold text-lg shadow-lg shadow-black/20"
        >
          TN
        </motion.button>

        {/* ── Desktop Links ── */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`relative px-4 py-2 text-[13px] font-semibold rounded-full transition-colors duration-300 ${active === l.href.slice(1)
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
                }`}
            >
              {active === l.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-[#56c5d8]/10 border border-[#56c5d8]/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </nav>

        {/* ── Right: CTA / Mobile Menu ── */}
        <div className="flex items-center gap-2">
          <motion.a
            href="https://wa.me/923096733225?text=Hi%20Taha!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 rounded-xl bg-[#56c5d8] px-5 py-2.5 text-[13px] font-bold text-[#0e1726] hover:bg-white transition-colors whitespace-nowrap"
          >
            <MessageCircle size={15} />
                Let&apos;s Talk
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="lg:hidden flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 z-40 lg:hidden overflow-hidden rounded-3xl bg-[#050810]/95 backdrop-blur-3xl border border-white/[0.08] shadow-2xl p-2 pointer-events-auto"
          >
            <div className="flex flex-col gap-1 p-2">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(l.href)}
                  className={`text-left rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${active === l.href.slice(1)
                      ? "bg-white/[0.08] text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/923096733225"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.04 }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white mt-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
