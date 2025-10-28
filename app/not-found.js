"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl font-bold text-[var(--text-primary)] mb-4">
              404
            </h1>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The page you&apos;re looking for seems to have vanished into the
            editing room. Don&apos;t worry, even the best videos need a few
            takes!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#D4A514] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-300"
            >
              <FaHome className="text-lg" />
              <span>Go Home</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-[var(--border-subtle)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--bg-elevated)]/50 transition-all duration-300"
            >
              <FaArrowLeft className="text-lg" />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[var(--bg-elevated)]/40 rounded-2xl p-8 border border-[var(--border-subtle)]"
        >
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
            Maybe you were looking for:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/portfolio",
                label: "Our Portfolio",
                desc: "View our work",
              },
              { href: "/services", label: "Services", desc: "What we offer" },
              { href: "/pricing", label: "Pricing", desc: "Get a quote" },
              { href: "/contact", label: "Contact", desc: "Get in touch" },
              { href: "/blog", label: "Blog", desc: "Latest tips" },
              { href: "/about", label: "About Us", desc: "Our story" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)]/80 hover:border-[#D4A514]/30 transition-all duration-300 group"
                >
                  <div className="text-[var(--text-primary)] font-semibold group-hover:text-[#D4A514] transition-colors duration-300">
                    {link.label}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {link.desc}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <div className="text-[var(--text-secondary)] text-sm">
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎬 Even the best editors need a second take! 🎬
            </motion.span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
