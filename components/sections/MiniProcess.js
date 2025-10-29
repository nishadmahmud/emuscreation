"use client";
import { motion } from "framer-motion";
import { 
  FaClipboardList,
  FaCloudUploadAlt,
  FaMagic,
  FaComments,
  FaCheckCircle
} from "react-icons/fa";

const steps = [
  {
    icon: FaClipboardList,
    title: "Share Your Brief",
    description: "Tell us about your project, references, timeline, and goals.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Upload Footage",
    description: "Send files via Drive/Dropbox/Vimeo links — we handle proxies.",
  },
  {
    icon: FaMagic,
    title: "Editing & First Cut",
    description: "We craft your story with clean pacing, color, and sound polish.",
  },
  {
    icon: FaComments,
    title: "Review & Revisions",
    description: "Frame-accurate feedback welcome — we refine fast and clearly.",
  },
  {
    icon: FaCheckCircle,
    title: "Final Delivery",
    description: "Master exports to your specs — plus source project if included.",
  },
];

export default function MiniProcess() {
  return (
    <section className="mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Our <span className="text-[#D4A514]">Process</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          Share your brief → Upload footage → First cut in days → Revisions → Final master.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.ol 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={{ 
          hidden: { opacity: 0 }, 
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.05, delayChildren: 0.08 } 
          } 
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        {steps.map((step, index) => (
          <motion.li 
            key={index}
            variants={{ 
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }
            }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-elevated)]/80 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-[#D4A514]/30"
          >
            {/* Index badge */}
            <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-[#D4A514]/20 border border-[#D4A514]/40 flex items-center justify-center text-[#D4A514] font-bold">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="text-3xl text-[#D4A514] mb-4">
              <step.icon />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#D4A514] transition-colors duration-200">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

