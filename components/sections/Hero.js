"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
return (
<section className="relative overflow-hidden rounded-2xl border border-white/10 bg-transparent">
  {/* Background video */}
  <div className="absolute inset-0 -z-10">
    <video
      className="h-full w-full object-cover"
      src="https://cdn.pixabay.com/video/2023/11/21/189998-887067364_large.mp4"
      poster="https://cdn.pixabay.com/photo/2022/07/13/21/57/editing-7320125_1280.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0F12]" />
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E0F12] to-transparent" />
  </div>

  {/* Content */}
  <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:py-28 md:py-36">
    <motion.div 
      initial={{ opacity: 0, y: 24, scale: 0.95 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
      className="max-w-3xl"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
      >
        Professional Video Editing, Done Right.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl"
      >
        Weddings, Reels, YouTube & Travel — cinematic edits with crisp color and clean sound.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row gap-3"
      >
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(212, 165, 20, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          href="https://www.fiverr.com/users/mehediemu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#D4A514] text-black px-6 py-3 font-medium transition-all duration-300"
        >
          Get a Quote
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          whileTap={{ scale: 0.98 }}
          href="/portfolio" 
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition-all duration-300"
        >
          View Portfolio
        </motion.a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="mt-6 flex items-center gap-3 text-white/70 text-sm"
      >
        <motion.span 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex h-2 w-2 rounded-full bg-emerald-400"
        />
        <span>Trusted by global clients — on-time delivery</span>
      </motion.div>
    </motion.div>
  </div>
</section>
);
}

