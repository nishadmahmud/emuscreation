"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <nav className="h-16 flex items-center bg-[var(--bg-elevated)]">
      <div className="relative flex w-full items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className={`${playfair.className} text-2xl leading-none text-[var(--text-primary)]`}>
            Emu&apos;s Creation
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm absolute left-1/2 -translate-x-1/2 rounded-full bg-[var(--bg-elevated)]/50 backdrop-blur px-4 py-1.5 border border-[var(--border-subtle)]">
          <div
            className="relative pb-1"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen ? "true" : "false"}
              onClick={() => setServicesOpen((v) => !v)}
              className={`inline-flex items-center gap-1 ${isActive("/services") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              Services
              <span className={`transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}>▾</span>
            </button>
            {isActive("/services") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
            {servicesOpen ? (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-50">
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="min-w-[220px] rounded-xl bg-[#15171B]/90 backdrop-blur border border-white/10 pt-3 pb-3 px-3 shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <Link href="/services/wedding" className="px-3 py-2 rounded hover:bg-white/5">Wedding Editing</Link>
                    <Link href="/services/reels" className="px-3 py-2 rounded hover:bg-white/5">Reels & Short-Form</Link>
                    <Link href="/services/youtube" className="px-3 py-2 rounded hover:bg-white/5">YouTube Editing</Link>
                    <Link href="/services/travel" className="px-3 py-2 rounded hover:bg-white/5">Travel Vlog Editing</Link>
                    <Link href="/services/corporate" className="px-3 py-2 rounded hover:bg-white/5">Corporate/Docu</Link>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </div>
          <span className="relative pb-1">
            <Link href="/portfolio" aria-current={isActive("/portfolio") ? "page" : undefined} className={isActive("/portfolio") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Portfolio</Link>
            {isActive("/portfolio") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/pricing" aria-current={isActive("/pricing") ? "page" : undefined} className={isActive("/pricing") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Pricing</Link>
            {isActive("/pricing") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/process" aria-current={isActive("/process") ? "page" : undefined} className={isActive("/process") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Process</Link>
            {isActive("/process") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/about" aria-current={isActive("/about") ? "page" : undefined} className={isActive("/about") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>About</Link>
            {isActive("/about") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/testimonials" aria-current={isActive("/testimonials") ? "page" : undefined} className={isActive("/testimonials") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Testimonials</Link>
            {isActive("/testimonials") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/faq" aria-current={isActive("/faq") ? "page" : undefined} className={isActive("/faq") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>FAQ</Link>
            {isActive("/faq") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          {/* <span className="relative pb-1">
            <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined} className={isActive("/contact") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Contact</Link>
            {isActive("/contact") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span> */}
          <span className="relative pb-1">
            <Link href="/blog" aria-current={isActive("/blog") ? "page" : undefined} className={isActive("/blog") ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}>Blog</Link>
            {isActive("/blog") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center transition-all duration-300 hover:bg-[var(--bg-elevated)]/80 cursor-pointer"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-[#D4A514] flex items-center justify-center"
              animate={{ x: isDark ? 0 : 24 }}
              transition={{ type: "spring", stiffness: 1000, damping: 25, duration: 0.15 }}
            >
              {isDark ? (
                <FaMoon className="text-black text-xs" />
              ) : (
                <FaSun className="text-black text-xs" />
              )}
            </motion.div>
          </button>
          
          <Link href="/contact" className="rounded bg-[#D4A514] text-black px-3 py-1.5 font-medium">
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden ml-auto inline-flex items-center justify-center rounded border border-[var(--border-subtle)] px-3 py-2 text-sm hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]"
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="absolute left-0 right-0 top-16 md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm">
            <Link href="/services" className={isActive("/services") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/portfolio" className={isActive("/portfolio") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="/pricing" className={isActive("/pricing") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/process" className={isActive("/process") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Process</Link>
            <Link href="/about" className={isActive("/about") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>About</Link>
            <Link href="/testimonials" className={isActive("/testimonials") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Testimonials</Link>
            <Link href="/contact" className={isActive("/contact") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/faq" className={isActive("/faq") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/blog" className={isActive("/blog") ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)]"} onClick={() => setOpen(false)}>Blog</Link>
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between py-2">
              <span className="text-[var(--text-secondary)]">Theme</span>
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center transition-all duration-300 hover:bg-[var(--bg-elevated)]/80 cursor-pointer"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-[#D4A514] flex items-center justify-center"
                  animate={{ x: isDark ? 0 : 24 }}
                  transition={{ type: "spring", stiffness: 1000, damping: 25, duration: 0.15 }}
                >
                  {isDark ? (
                    <FaMoon className="text-black text-xs" />
                  ) : (
                    <FaSun className="text-black text-xs" />
                  )}
                </motion.div>
              </button>
            </div>
            
            <Link href="/contact" className="rounded bg-[#D4A514] text-black px-3 py-2 font-medium" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

