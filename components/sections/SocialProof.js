"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaGlobe, FaHeart } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote: "Emu's Creation transformed our wedding footage into a cinematic masterpiece. The storytelling and color grading were absolutely perfect. We couldn't be happier!",
    name: "Sarah & Michael",
    business: "Wedding Couple",
    country: "USA",
    rating: 5,
    service: "Wedding Editing"
  },
  {
    id: 2,
    quote: "Our YouTube channel exploded after working with Emu's Creation. The editing style perfectly matches our brand, and the turnaround time is incredible.",
    name: "Alex Chen",
    business: "Travel Vlogger",
    country: "Canada",
    rating: 5,
    service: "YouTube Editing"
  },
  {
    id: 3,
    quote: "Professional, creative, and reliable. Our corporate videos have never looked better. The team understands our vision and delivers beyond expectations.",
    name: "Maria Rodriguez",
    business: "Marketing Director",
    country: "Spain",
    rating: 5,
    service: "Corporate Editing"
  },
  {
    id: 4,
    quote: "The reels they created for us went viral! Perfect pacing, amazing transitions, and the captions were spot-on. Highly recommend!",
    name: "James Wilson",
    business: "Content Creator",
    country: "UK",
    rating: 5,
    service: "Reels Editing"
  },
  {
    id: 5,
    quote: "Working with Emu's Creation has been a game-changer for our travel content. Their cinematic approach brings our adventures to life beautifully.",
    name: "Emma Thompson",
    business: "Travel Blogger",
    country: "Australia",
    rating: 5,
    service: "Travel Vlog Editing"
  },
  {
    id: 6,
    quote: "Outstanding quality and communication throughout the entire process. They made our wedding video exactly how we envisioned it. Simply amazing!",
    name: "David & Lisa",
    business: "Wedding Couple",
    country: "Germany",
    rating: 5,
    service: "Wedding Editing"
  }
];

const stats = [
  { number: "350+", label: "Projects Completed", icon: FaHeart },
  { number: "50+", label: "Countries Served", icon: FaGlobe },
  { number: "98%", label: "Client Satisfaction", icon: FaStar },
  { number: "24h", label: "Average Turnaround", icon: FaStar }
];

export default function SocialProof() {
  return (
    <section className="mt-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Trusted by <span className="text-[#D4A514]">Creators Worldwide</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          Join hundreds of satisfied clients who&apos;ve transformed their content with our professional editing services.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={{ 
          hidden: { opacity: 0 }, 
          visible: { 
            opacity: 1, 
            transition: { 
              staggerChildren: 0.1,
              delayChildren: 0.2
            } 
          } 
        }} 
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            variants={{ 
              hidden: { opacity: 0, y: 20 }, 
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              } 
            }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-elevated)]/80 backdrop-blur-sm border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300"
          >
            <div className="text-[#D4A514] text-3xl mb-3">
              <stat.icon />
            </div>
            <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">{stat.number}</div>
            <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={{ 
          hidden: { opacity: 0 }, 
          visible: { 
            opacity: 1, 
            transition: { 
              staggerChildren: 0.08,
              delayChildren: 0.3
            } 
          } 
        }} 
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            variants={{ 
              hidden: { opacity: 0, y: 20 }, 
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              } 
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-elevated)]/80 backdrop-blur-sm border border-[var(--border-subtle)] hover:border-[#D4A514]/30 p-6 transition-all duration-300 hover:shadow-lg"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-[#D4A514]/30 text-2xl">
              <FaQuoteLeft />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#D4A514] text-sm" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 group-hover:text-[var(--text-primary)] transition-colors duration-200">
            &quot;{testimonial.quote}&quot;
            </blockquote>

            {/* Client Info */}
            <div className="border-t border-[var(--border-subtle)] pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm group-hover:text-[#D4A514] transition-colors duration-200">
                    {testimonial.name}
                  </div>
                  <div className="text-[var(--text-secondary)] text-xs">
                    {testimonial.business}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--text-secondary)] text-xs mb-1">
                    {testimonial.country}
                  </div>
                  <div className="text-[#D4A514] text-xs font-medium">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute top-4 left-4 w-1 h-1 rounded-full bg-white/20"
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
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A514]/20 to-[#D4A514]/10 border border-[#D4A514]/30 backdrop-blur-sm">
          <motion.span 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-[#D4A514] text-xl"
          >
            ⭐
          </motion.span>
          <span className="text-[var(--text-primary)] font-medium text-lg">Ready to join our satisfied clients?</span>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#D4A514] hover:text-[var(--text-primary)] transition-colors font-semibold text-lg"
          >
            Start Your Project →
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

