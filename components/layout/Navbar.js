"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], display: "swap" });

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <nav className="h-16 flex items-center bg-black">
      <div className="relative flex w-full items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className={`${playfair.className} text-2xl leading-none text-white`}>
            Emu’s Creation
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm absolute left-1/2 -translate-x-1/2 rounded-full bg-white/5 backdrop-blur px-4 py-1.5 border border-white/10">
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
              className={`inline-flex items-center gap-1 ${isActive("/services") ? "text-white" : "text-white/80 hover:text-white"}`}
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
            <Link href="/portfolio" aria-current={isActive("/portfolio") ? "page" : undefined} className={isActive("/portfolio") ? "text-white" : "text-white/80 hover:text-white"}>Portfolio</Link>
            {isActive("/portfolio") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/pricing" aria-current={isActive("/pricing") ? "page" : undefined} className={isActive("/pricing") ? "text-white" : "text-white/80 hover:text-white"}>Pricing</Link>
            {isActive("/pricing") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/process" aria-current={isActive("/process") ? "page" : undefined} className={isActive("/process") ? "text-white" : "text-white/80 hover:text-white"}>Process</Link>
            {isActive("/process") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/about" aria-current={isActive("/about") ? "page" : undefined} className={isActive("/about") ? "text-white" : "text-white/80 hover:text-white"}>About</Link>
            {isActive("/about") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/testimonials" aria-current={isActive("/testimonials") ? "page" : undefined} className={isActive("/testimonials") ? "text-white" : "text-white/80 hover:text-white"}>Testimonials</Link>
            {isActive("/testimonials") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/faq" aria-current={isActive("/faq") ? "page" : undefined} className={isActive("/faq") ? "text-white" : "text-white/80 hover:text-white"}>FAQ</Link>
            {isActive("/faq") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
          <span className="relative pb-1">
            <Link href="/blog" aria-current={isActive("/blog") ? "page" : undefined} className={isActive("/blog") ? "text-white" : "text-white/80 hover:text-white"}>Blog</Link>
            {isActive("/blog") ? (
              <motion.div layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D4A514] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
            ) : null}
          </span>
        </div>
        <div className="ml-auto hidden md:block">
          <Link href="/contact" className="rounded bg-[#D4A514] text-black px-3 py-1.5 font-medium">
            Get a Quote
          </Link>
        </div>
        <button
          className="md:hidden ml-auto inline-flex items-center justify-center rounded border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="absolute left-0 right-0 top-16 md:hidden border-b border-white/10 bg-[#15171B]/80 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm">
            <Link href="/services" className={isActive("/services") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/portfolio" className={isActive("/portfolio") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="/pricing" className={isActive("/pricing") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/process" className={isActive("/process") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Process</Link>
            <Link href="/about" className={isActive("/about") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>About</Link>
            <Link href="/testimonials" className={isActive("/testimonials") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Testimonials</Link>
            <Link href="/faq" className={isActive("/faq") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/blog" className={isActive("/blog") ? "text-white font-semibold" : "text-white/80"} onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" className="rounded bg-[#D4A514] text-black px-3 py-2 font-medium" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

