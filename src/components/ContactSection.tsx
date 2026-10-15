"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "+92 309 6733225",
    href: "tel:+923096733225",
    color: "#56c5d8",
  },
  {
    icon: Mail,
    label: "taha.dev001@gmail.com",
    href: "mailto:taha.dev001@gmail.com",
    color: "#56c5d8",
  },
  {
    icon: MapPin,
    label: "Lahore, Pakistan",
    href: "https://www.google.com/maps/search/?api=1&query=Lahore%2C%20Pakistan",
    color: "#56c5d8",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Tahanawaz",
    color: "#e2e8f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taha-nawaz-9a390a294",
    color: "#0077b5",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "Portfolio enquiry").trim();
    const message = String(form.get("message") ?? "").trim();
    const body = `Hi Taha,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

    setFormStatus("Opening your email app with the message ready to send.");
    window.location.href = `mailto:taha.dev001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section relative z-10 section-padding" ref={ref}>
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
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed mb-10">
            Have a project idea, job opportunity, or just want to say hello?
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* ── WhatsApp CTA Card ── */}
        <motion.a
          href="https://wa.me/923096733225?text=Hi%20Taha!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          whileHover={{ y: -4, scale: 1.01 }}
          className="block glass-card p-6 sm:p-8 mb-10 border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366]/25 transition-colors">
              <MessageCircle size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-0.5">
                Quick WhatsApp Connect
              </h3>
              <p className="text-sm text-slate-400">
                Tap to open a WhatsApp chat with me — fastest way to reach out!
              </p>
              <p className="text-xs text-[#25D366] font-semibold mt-1">
                +92 309 6733225
              </p>
            </div>
            <Send
              size={20}
              className="ml-auto text-slate-600 group-hover:text-[#25D366] transition-colors hidden sm:block"
            />
          </div>
        </motion.a>

        {/* ── Grid: Direct Contact + Info ── */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Direct Contact Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-3 glass-card p-6 sm:p-8"
          >
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Mail size={18} className="text-[#56c5d8]" />
              Send me a message
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-400">
              Share your project or opportunity below. Submit will open your email app with everything ready to send.
            </p>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="contact-field">
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label className="contact-field">
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                </label>
              </div>
              <label className="contact-field">
                <span>Subject</span>
                <input name="subject" type="text" required placeholder="Project or job opportunity" />
              </label>
              <label className="contact-field">
                <span>Message</span>
                <textarea name="message" rows={4} required placeholder="Tell me a little about your project or opportunity" />
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#56c5d8] px-5 py-3 text-sm font-bold text-[#0e1726] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Send size={16} />
                  Prepare Email
                </button>
                <a
                  href="mailto:taha.dev001@gmail.com"
                  className="text-xs font-semibold text-slate-400 transition-colors hover:text-[#56c5d8]"
                >
                  Or email directly
                </a>
              </div>
              <p aria-live="polite" className="min-h-4 text-xs text-[#56c5d8]">
                {formStatus}
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2 space-y-4"
          >
            {/* Info Cards */}
            {CONTACT_INFO.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3 }}
                className="glass-card p-5 flex items-center gap-4 group block"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                  style={{
                    background: `${item.color}12`,
                    color: item.color,
                  }}
                >
                  <item.icon size={18} />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium truncate">
                  {item.label}
                </span>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="glass-card p-5">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Social
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                    style={{ color: s.color }}
                    title={s.label}
                    aria-label={`Visit Taha on ${s.label}`}
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
                <motion.a
                  href="https://wa.me/923096733225"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] transition-all"
                  title="WhatsApp"
                  aria-label="Chat with Taha on WhatsApp"
                >
                  <MessageCircle size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
