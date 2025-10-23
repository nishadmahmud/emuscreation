"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl border border-[#D4A514]/30 bg-gradient-to-br from-[#D4A514]/10 to-[#D4A514]/5 p-8 sm:p-12 backdrop-blur-sm"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-24 opacity-20 blur-3xl" style={{ background: "radial-gradient(600px circle at 20% 0%, #D4A514 0, transparent 50%)" }} />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Ready to Elevate Your Content?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[var(--text-secondary)] text-lg mb-8"
          >
            Get a fast, professional edit with cinematic polish — on time, every time.
          </motion.p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="https://www.fiverr.com/users/mehediemu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A514] text-black font-semibold hover:shadow-lg transition-all duration-200"
            >
              Get a Quote
            </a>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[#D4A514]/40 transition-all duration-200">
              View Portfolio
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

