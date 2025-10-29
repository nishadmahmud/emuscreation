"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaMobileAlt, 
  FaPlay, 
  FaPlane, 
  FaBuilding 
} from "react-icons/fa";

const services = [
  { 
    href: "/services/wedding", 
    title: "Wedding Editing", 
    desc: "Emotion‑driven storytelling, vows & speeches mix.",
    icon: FaHeart,
    iconColor: "text-pink-400",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    gradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
    image: "https://cdn.pixabay.com/photo/2016/11/18/22/21/bride-1837148_1280.jpg",
    priority: true
  },
  { 
    href: "/services/reels", 
    title: "Reels & Short‑Form", 
    desc: "Snappy cuts, captions, and platform‑ready outputs.",
    icon: FaMobileAlt,
    iconColor: "text-blue-400",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    gradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
    image: "https://cdn.pixabay.com/photo/2023/05/16/10/25/car-7997201_1280.jpg",
    priority: true
  },
  { 
    href: "/services/youtube", 
    title: "YouTube Editing", 
    desc: "Long/short edits, pacing and retention‑focused.",
    icon: FaPlay,
    iconColor: "text-red-400",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    gradient: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
    image: "https://cdn.pixabay.com/photo/2022/02/21/06/42/tablet-7025900_1280.jpg",
    priority: false
  },
  { 
    href: "/services/travel", 
    title: "Travel Vlog Editing", 
    desc: "Cinematic sequences with color & sound polish.",
    icon: FaPlane,
    iconColor: "text-emerald-400",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    gradient: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    image: "https://cdn.pixabay.com/photo/2022/10/07/08/59/sky-7504583_1280.jpg",
    priority: false
  },
  { 
    href: "/services/corporate", 
    title: "Corporate/Documentary", 
    desc: "Promo, documentaries and internal communications.",
    icon: FaBuilding,
    iconColor: "text-slate-400",
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
    gradient: "bg-gradient-to-br from-slate-500/10 to-gray-500/10",
    image: "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg",
    priority: false
  },
];

export default function ServicesSnapshot() {
return (
<section className="mt-20">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
      Our <span className="text-[#D4A514]">Services</span>
    </h2>
    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
      From intimate weddings to viral reels, we bring your vision to life with professional editing expertise.
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
          staggerChildren: 0.04,
          delayChildren: 0.06
        } 
      } 
    }} 
    className="space-y-6"
  >
    {/* Priority Services - Full Width */}
    <div className="grid gap-6 sm:grid-cols-2">
      {services.filter(s => s.priority).map((service, index) => (
        <motion.div 
          key={service.href} 
          variants={{ 
            hidden: { 
              opacity: 0, 
              y: 20
            }, 
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1]
              }
            } 
          }}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.15 }
          }}
          className="group"
        >
          <Link 
            href={service.href} 
            className={`block relative overflow-hidden rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 min-h-[320px] dark:from-black/80 dark:via-black/40 dark:to-black/20`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300 dark:opacity-40 dark:group-hover:opacity-50"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent dark:from-black/80 dark:via-black/40 dark:to-black/20" />
            </div>
            
            {/* Animated background gradient */}
            <motion.div 
              className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className={`text-5xl ${service.iconColor} drop-shadow-lg`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.15 }
                    }}
                  >
                    <service.icon />
                  </motion.div>
                  <motion.span 
                    className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors text-3xl"
                    whileHover={{ x: 2, scale: 1.05 }}
                  >
                    →
                  </motion.span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4A514] transition-colors duration-200 drop-shadow-lg">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-base leading-relaxed group-hover:text-white transition-colors duration-200 drop-shadow-md">
                  {service.desc}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-base text-white/90 group-hover:text-white transition-colors font-medium">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 1.4, 
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
                duration: 1.1, 
                repeat: Infinity, 
                delay: index * 0.4 
              }}
            />
          </Link>
        </motion.div>
      ))}
    </div>

    {/* Secondary Services - 3 Cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.filter(s => !s.priority).map((service, index) => (
        <motion.div 
          key={service.href} 
          variants={{ 
            hidden: { 
              opacity: 0, 
              y: 20
            }, 
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1]
              }
            } 
          }}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.15 }
          }}
          className="group"
        >
          <Link 
            href={service.href} 
            className={`block relative overflow-hidden rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 min-h-[280px] dark:from-black/80 dark:via-black/40 dark:to-black/20`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300 dark:opacity-40 dark:group-hover:opacity-50"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent dark:from-black/80 dark:via-black/40 dark:to-black/20" />
            </div>
            
            {/* Animated background gradient */}
            <motion.div 
              className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`text-4xl ${service.iconColor} drop-shadow-lg`}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.15 }
                    }}
                  >
                    <service.icon />
                  </motion.div>
                  <motion.span 
                    className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors text-2xl"
                    whileHover={{ x: 2, scale: 1.05 }}
                  >
                    →
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A514] transition-colors duration-200 drop-shadow-lg">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-200 drop-shadow-md">
                  {service.desc}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-sm text-white/90 group-hover:text-white transition-colors font-medium">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
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
                delay: (index + 2) * 0.3 
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
                delay: (index + 2) * 0.4 
              }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* Bottom CTA */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.18, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="mt-12 text-center"
  >
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A514]/20 to-[#D4A514]/10 border border-[#D4A514]/30 backdrop-blur-sm">
      <motion.span 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="text-[#D4A514] text-lg"
      >
        🎬
      </motion.span>
      <span className="text-[var(--text-primary)] font-medium">Ready to start your project?</span>
      <motion.a 
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-[#D4A514] hover:text-[var(--text-primary)] transition-colors font-semibold"
      >
        Get Quote →
      </motion.a>
    </div>
  </motion.div>
</section>
);
}

