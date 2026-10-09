"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp">
      {/* Ping ring */}
      <span className="pulse-ring" />
      <span
        className="pulse-ring"
        style={{ animationDelay: "0.6s" }}
      />

      <motion.a
        href="https://wa.me/923096733225?text=Hi%20Taha!%20I%20visited%20your%20portfolio.%20Let%27s%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12, rotate: -8 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow z-10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2.2} />
      </motion.a>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-[70px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#111a30] px-3 py-1.5 text-xs font-semibold text-white border border-white/[0.06] shadow-xl pointer-events-none"
      >
        Chat with Taha
      </motion.div>
    </div>
  );
}
