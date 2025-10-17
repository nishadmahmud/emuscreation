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
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=500&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=500&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&crop=center",
    priority: false
  },
  { 
    href: "/services/corporate", 
    title: "Corporate/Docu", 
    desc: "Promo, docu, and internal communications.",
    icon: FaBuilding,
    iconColor: "text-slate-400",
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
    gradient: "bg-gradient-to-br from-slate-500/10 to-gray-500/10",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center",
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
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
      Our <span className="text-[#D4A514]">Services</span>
    </h2>
    <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
          staggerChildren: 0.12,
          delayChildren: 0.2
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
          className="group"
        >
          <Link 
            href={service.href} 
            className={`block relative overflow-hidden rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 min-h-[320px]`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </div>
            
            {/* Animated background gradient */}
            <motion.div 
              className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <service.icon />
                  </motion.div>
                  <motion.span 
                    className="text-white/60 group-hover:text-white transition-colors text-3xl"
                    whileHover={{ x: 4, scale: 1.1 }}
                  >
                    →
                  </motion.span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4A514] transition-colors duration-300 drop-shadow-md">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-base leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-sm">
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
          className="group"
        >
          <Link 
            href={service.href} 
            className={`block relative overflow-hidden rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 min-h-[280px]`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </div>
            
            {/* Animated background gradient */}
            <motion.div 
              className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <service.icon />
                  </motion.div>
                  <motion.span 
                    className="text-white/60 group-hover:text-white transition-colors text-2xl"
                    whileHover={{ x: 4, scale: 1.1 }}
                  >
                    →
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A514] transition-colors duration-300 drop-shadow-md">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-sm">
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
    transition={{ delay: 0.8, duration: 0.6 }}
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
      <span className="text-white font-medium">Ready to start your project?</span>
      <motion.a 
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-[#D4A514] hover:text-white transition-colors font-semibold"
      >
        Get Quote →
      </motion.a>
    </div>
  </motion.div>
</section>
);
}

