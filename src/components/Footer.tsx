"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-white/[0.04] bg-[#050810]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* ── Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-[#56c5d8] flex items-center justify-center text-[#0e1726] font-extrabold text-sm">
                F
              </div>
              <div>
                <span className="block text-sm font-bold text-white">
                  Syed Muhammad Fahad
                </span>
                <span className="block text-[11px] text-slate-500">
                  Full Stack Developer
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Building scalable, production-ready applications with the MERN
              stack, Next.js, WebRTC & AI integration.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-[#56c5d8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Get in Touch ── */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="mailto:syedfahad305171@gmail.com"
                    className="hover:text-[#56c5d8] transition-colors"
                >
                  syedfahad305171@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923454565755"
                  className="hover:text-[#56c5d8] transition-colors"
                >
                  +92 345 4565755
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/923454565755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a] transition-colors font-medium"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {new Date().getFullYear()} Syed Muhammad Fahad. Built with{" "}
            <Heart size={12} className="text-[#56c5d8]" /> using Next.js &
            Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-500 hover:text-white hover:border-white/[0.12] transition-all"
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
