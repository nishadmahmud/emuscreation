"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaHeart, FaPlay, FaClock, FaCheck, FaStar, FaExternalLinkAlt, FaCalendarAlt, FaVideo, FaMusic, FaDownload, FaShare } from "react-icons/fa";
import Image from "next/image";

const weddingDeliverables = [
  {
    icon: FaVideo,
    title: "Wedding Highlight Reel",
    description: "3-8 minute cinematic highlight reel capturing the best moments of your special day",
    duration: "3-8 minutes",
    included: true
  },
  {
    icon: FaPlay,
    title: "Ceremony Full Video",
    description: "Complete ceremony recording with multiple camera angles and professional audio",
    duration: "30-60 minutes",
    included: true
  },
  {
    icon: FaHeart,
    title: "Reception Highlights",
    description: "Best moments from speeches, first dance, cake cutting, and celebration",
    duration: "5-10 minutes",
    included: true
  },
  {
    icon: FaMusic,
    title: "Music Licensing",
    description: "Licensed music from premium libraries to avoid copyright issues",
    duration: "As needed",
    included: true
  },
  {
    icon: FaDownload,
    title: "Multiple Formats",
    description: "HD (1080p) and 4K delivery in MP4, MOV, and social media optimized versions",
    duration: "All formats",
    included: true
  },
  {
    icon: FaShare,
    title: "Social Media Clips",
    description: "Instagram Reels, TikTok, and Facebook-ready clips for easy sharing",
    duration: "15-60 seconds",
    included: true
  }
];

const workflowSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your vision, timeline, and specific requirements for your wedding video",
    duration: "1-2 days",
    icon: FaCalendarAlt
  },
  {
    step: 2,
    title: "Footage Upload",
    description: "You upload your raw footage via Google Drive, Dropbox, or WeTransfer link",
    duration: "Same day",
    icon: FaDownload
  },
  {
    step: 3,
    title: "First Cut Review",
    description: "We deliver the first version for your review and feedback",
    duration: "5-7 days",
    icon: FaPlay
  },
  {
    step: 4,
    title: "Revisions & Refinements",
    description: "We incorporate your feedback and make necessary adjustments",
    duration: "2-3 days",
    icon: FaCheck
  },
  {
    step: 5,
    title: "Final Delivery",
    description: "You receive the final master files in all requested formats",
    duration: "1 day",
    icon: FaStar
  }
];

const weddingPortfolio = [
  {
    id: 1,
    title: "Sarah & Michael's Romantic Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
    duration: "8:45",
    views: "12.5K",
    likes: "847",
    description: "A romantic wedding highlight reel with cinematic storytelling and emotional music"
  },
  {
    id: 2,
    title: "Emma & James' Garden Wedding",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=center",
    duration: "6:30",
    views: "8.9K",
    likes: "623",
    description: "Beautiful outdoor wedding with natural lighting and intimate moments"
  },
  {
    id: 3,
    title: "Lisa & David's Destination Wedding",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop&crop=center",
    duration: "10:15",
    views: "15.2K",
    likes: "1.1K",
    description: "Stunning destination wedding with breathtaking scenery and cultural elements"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    quote: "The wedding video exceeded all our expectations! The editing was so beautiful and captured every emotion perfectly. We've watched it countless times.",
    service: "Wedding Highlight Reel"
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    quote: "Professional, creative, and delivered exactly what we wanted. The team understood our vision and brought it to life beautifully.",
    service: "Full Wedding Package"
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    quote: "Amazing work! The video quality is outstanding and the storytelling is incredible. Highly recommend for any couple's special day.",
    service: "Wedding Highlights"
  }
];

export default function WeddingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center">
                  <FaHeart className="text-black text-xl" />
                </div>
                <span className="text-[#D4A514] font-semibold text-lg">Wedding Editing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Capture Your <span className="text-[#D4A514]">Love Story</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Transform your wedding footage into a cinematic masterpiece that you&apos;ll treasure forever. 
                Our expert editors create emotional, beautiful wedding videos that capture every precious moment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.fiverr.com/users/mehediemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300 text-center"
                >
                  Get a Quote
                </a>
                <a
                  href="/portfolio"
                  className="border-2 border-[#D4A514] text-[#D4A514] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A514] hover:text-black transition-colors duration-300 text-center"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open('/wedding.mp4', '_blank')}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer">
                <video
                  ref={videoRef}
                  src="/wedding.mp4"
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Wedding Editing Packages
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Choose the perfect package for your wedding video needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-8 border border-[var(--border-subtle)] hover:border-[#D4A514]/50 transition-all duration-300 flex flex-col"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Basic Package
                </h3>
                <div className="text-4xl font-bold text-[#D4A514] mb-2">
                  $200
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Wedding Highlight 2-3 minutes
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">7-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 105 minutes of footage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 12 minutes running time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Color grading</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Sound design & mixing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Motion graphics</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Include source file</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </motion.div>

            {/* Package 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-8 border-2 border-[#D4A514] hover:border-[#D4A514]/80 transition-all duration-300 relative flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#D4A514] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Standard Package
                </h3>
                <div className="text-4xl font-bold text-[#D4A514] mb-2">
                  $350
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Wedding Highlight 10-15 minutes
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">7-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 180 minutes of footage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 25 minutes running time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Color grading</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Sound design & mixing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Motion graphics</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Include source file</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-8 border border-[var(--border-subtle)] hover:border-[#D4A514]/50 transition-all duration-300 flex flex-col"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Premium Package
                </h3>
                <div className="text-4xl font-bold text-[#D4A514] mb-2">
                  $550
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  1 min teaser, 3-5 min highlight & 20-30 min full body
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">21-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 180 minutes of footage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 40 minutes running time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Color grading</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Sound design & mixing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Motion graphics</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Include source file</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-[var(--text-secondary)] max-w-3xl mx-auto">
              Our comprehensive wedding editing package includes everything you need to preserve and share your special day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingDeliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-elevated)] rounded-2xl p-6 border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4A514]/20 rounded-full flex items-center justify-center">
                    <item.icon className="text-[#D4A514] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.duration}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">
                  {item.description}
                </p>
                {item.included && (
                  <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                    <FaCheck className="text-xs" />
                    <span>Included in package</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Our Process
            </h2>
            <p className="text-[var(--text-secondary)] max-w-3xl mx-auto">
              From consultation to final delivery, we ensure a smooth and transparent process
            </p>
          </motion.div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D4A514] rounded-full flex items-center justify-center">
                    <step.icon className="text-black text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <span className="text-sm text-[#D4A514] bg-[#D4A514]/20 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              What Couples Say
            </h2>
            <p className="text-[var(--text-secondary)]">
              Real testimonials from happy couples who trusted us with their special day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-elevated)] rounded-2xl p-6 border border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#D4A514] text-sm" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Create Your Perfect Wedding Video?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let&apos;s discuss your vision and create a wedding video that captures every precious moment of your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Get a Quote
              </a>
              <button className="border-2 border-[#D4A514] text-[#D4A514] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A514] hover:text-black transition-colors duration-300">
                View Full Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}