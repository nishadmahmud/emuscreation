"use client";
import { motion } from "framer-motion";
import { 
  FaFilm, 
  FaPalette, 
  FaVolumeUp, 
  FaBolt, 
  FaRedo, 
  FaGlobe 
} from "react-icons/fa";

const features = [
  {
    icon: FaFilm,
    iconColor: "text-purple-400",
    title: "Story-Driven Edits",
    description: "Every cut serves the narrative. We craft compelling stories that hook viewers from the first frame.",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    icon: FaPalette,
    iconColor: "text-cyan-400",
    title: "Cinematic Color Grading",
    description: "Professional color correction and grading that matches your brand aesthetic and elevates your content.",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: FaVolumeUp,
    iconColor: "text-green-400",
    title: "Audio Excellence",
    description: "Crystal-clear sound design, music synchronization, and audio mixing that brings your videos to life.",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    icon: FaBolt,
    iconColor: "text-yellow-400",
    title: "Lightning Fast Delivery",
    description: "Quick turnaround times without compromising quality. We respect your deadlines and deliver on time.",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30"
  },
  {
    icon: FaRedo,
    iconColor: "text-indigo-400",
    title: "Unlimited Revisions",
    description: "We&apos;re not satisfied until you are. Comprehensive revision policy ensures your vision comes to life.",
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30"
  },
  {
    icon: FaGlobe,
    iconColor: "text-teal-400",
    title: "Global Expertise",
    description: "Serving clients worldwide with deep understanding of different cultures, trends, and content styles.",
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30"
  }
];

export default function WhyChooseUs() {
return (
<section className="mt-20">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
      Why Choose <span className="text-[#D4A514]">Emu&apos;s Creation</span>?
    </h2>
    <p className="text-white/70 text-lg max-w-2xl mx-auto">
      We don&apos;t just edit videos – we craft cinematic experiences that tell your story with precision and passion.
    </p>
  </motion.div>

  <motion.div 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.1 }} 
    variants={{ 
      hidden: { opacity: 0 }, 
      visible: { 
        opacity: 1, 
        transition: { 
          staggerChildren: 0.15,
          delayChildren: 0.2
        } 
      } 
    }} 
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    {features.map((feature, index) => (
      <motion.div 
        key={index}
        variants={{ 
          hidden: { 
            opacity: 0, 
            y: 30, 
            scale: 0.9,
            rotateX: -10
          }, 
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotateX: 0,
            transition: { 
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          } 
        }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} backdrop-blur-sm p-6 hover:shadow-2xl transition-all duration-500`}
      >
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            className={`text-3xl ${feature.iconColor} mb-4`}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <feature.icon />
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A514] transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {feature.description}
          </p>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: index * 0.3 
          }}
        />
        
        <motion.div 
          className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white/30"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: index * 0.4 
          }}
        />
      </motion.div>
    ))}
  </motion.div>

  {/* Bottom CTA */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="mt-12 text-center"
  >
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A514]/20 to-[#D4A514]/10 border border-[#D4A514]/30 backdrop-blur-sm">
      <motion.span 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="text-[#D4A514] text-lg"
      >
        ✨
      </motion.span>
      <span className="text-white font-medium">Ready to elevate your content?</span>
      <motion.a 
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-[#D4A514] hover:text-white transition-colors font-semibold"
      >
        Get Started →
      </motion.a>
    </div>
  </motion.div>
</section>
);
}

