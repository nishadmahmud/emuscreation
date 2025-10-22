"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaPlay, FaClock, FaCheck, FaStar, FaExternalLinkAlt, FaCalendarAlt, FaVideo, FaMusic, FaDownload, FaShare, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const reelsDeliverables = [
  {
    icon: FaInstagram,
    title: "Instagram Reels",
    description: "Perfectly formatted 9:16 vertical videos optimized for Instagram Reels with trending audio",
    duration: "15-90 seconds",
    included: true
  },
  {
    icon: FaTiktok,
    title: "TikTok Videos",
    description: "High-energy TikTok content with viral transitions and trending sounds",
    duration: "15-60 seconds",
    included: true
  },
  {
    icon: FaYoutube,
    title: "YouTube Shorts",
    description: "YouTube Shorts optimized for maximum engagement and algorithm visibility",
    duration: "15-60 seconds",
    included: true
  },
  {
    icon: FaMusic,
    title: "Trending Audio",
    description: "Licensed trending music and sounds that boost discoverability",
    duration: "As needed",
    included: true
  },
  {
    icon: FaDownload,
    title: "Multiple Formats",
    description: "All platforms optimized - vertical, square, and horizontal formats",
    duration: "All formats",
    included: true
  },
  {
    icon: FaShare,
    title: "Caption & Hashtags",
    description: "Engaging captions and trending hashtags to maximize reach",
    duration: "Included",
    included: true
  }
];

const workflowSteps = [
  {
    step: 1,
    title: "Content Strategy",
    description: "We analyze your brand and create a content strategy tailored for maximum engagement",
    duration: "1 day",
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
    description: "We deliver the first version with trending transitions and effects",
    duration: "2-3 days",
    icon: FaPlay
  },
  {
    step: 4,
    title: "Revisions & Optimization",
    description: "We refine based on your feedback and optimize for each platform",
    duration: "1-2 days",
    icon: FaCheck
  },
  {
    step: 5,
    title: "Final Delivery",
    description: "You receive all formats ready for immediate posting across platforms",
    duration: "Same day",
    icon: FaStar
  }
];

const reelsPortfolio = [
  {
    id: 1,
    title: "Fashion Reel Series",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    duration: "0:30",
    views: "25.3K",
    likes: "1.2K",
    description: "Trendy fashion reels with quick cuts and modern transitions for Instagram"
  },
  {
    id: 2,
    title: "Lifestyle Reels Collection",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop&crop=center",
    duration: "0:45",
    views: "19.7K",
    likes: "1.1K",
    description: "Collection of lifestyle reels showcasing daily routines and wellness content"
  },
  {
    id: 3,
    title: "Food & Recipe Reels",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",
    duration: "0:60",
    views: "32.1K",
    likes: "2.1K",
    description: "Mouth-watering food content with perfect timing and appetizing visuals"
  }
];

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Los Angeles, USA",
    rating: 5,
    quote: "My Instagram engagement skyrocketed after working with them! The reels are so engaging and perfectly timed. My follower count doubled in just 2 months.",
    service: "Instagram Reels Package"
  },
  {
    name: "Alex Chen",
    location: "Toronto, Canada",
    rating: 5,
    quote: "The TikTok videos they created went viral! The transitions are smooth, the audio is perfect, and the content is exactly what my audience loves.",
    service: "TikTok Content Series"
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    quote: "Professional quality with a personal touch. They understand social media trends and create content that actually performs. Highly recommend!",
    service: "Multi-Platform Reels"
  }
];

export default function ReelsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center">
                  <FaMobileAlt className="text-black text-xl" />
                </div>
                <span className="text-[#D4A514] font-semibold text-lg">Reels & Short-Form</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Go <span className="text-[#D4A514]">Viral</span> on Social Media
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Create engaging short-form content that stops the scroll and drives massive engagement. 
                Our expert editors specialize in Instagram Reels, TikTok, and YouTube Shorts that actually perform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300">
                  Get a Quote
                </button>
                <button className="border-2 border-[#D4A514] text-[#D4A514] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A514] hover:text-black transition-colors duration-300">
                  View Portfolio
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
                  alt="Social Media Reels Editing"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#D4A514] rounded-full flex items-center justify-center shadow-2xl">
                    <FaPlay className="text-black text-2xl ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
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
              Our comprehensive reels package includes everything you need to dominate social media
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reelsDeliverables.map((item, index) => (
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
              Fast turnaround process designed for social media success
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

      {/* Portfolio Showcase */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Viral Reels Portfolio
            </h2>
            <p className="text-[var(--text-secondary)]">
              See the engagement and performance of our reels editing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reelsPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#D4A514] rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaPlay className="text-black text-xl ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {project.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#D4A514] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FaPlay className="text-xs" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-xs" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                      <FaExternalLinkAlt className="text-xs group-hover:text-[#D4A514] transition-colors duration-300" />
                    </div>
                  </div>
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
              What Creators Say
            </h2>
            <p className="text-[var(--text-secondary)]">
              Real testimonials from content creators who achieved viral success
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

      {/* Pricing Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Reels Editing Packages
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Choose the perfect package for your social media content needs
            </p>
            
            <div className="bg-[var(--bg-elevated)] rounded-2xl p-8 border border-[#D4A514]/30">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center">
                  <FaMobileAlt className="text-black text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Professional Reels Package
                </h3>
              </div>
              
              <div className="text-4xl font-bold text-[#D4A514] mb-4">
                ৳25,000
              </div>
              
              <p className="text-[var(--text-secondary)] mb-6">
                Perfect for content creators who want to maximize their social media engagement
              </p>
              
              <div className="text-left space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">Up to 10 reels per package</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">All platform formats (Instagram, TikTok, YouTube)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">Trending transitions & effects</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">2 revisions included</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">HD delivery (1080p)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">3-day turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">Trending audio & music</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-green-400 text-sm" />
                  <span className="text-[var(--text-primary)]">Captions & hashtags included</span>
                </div>
              </div>
              
              <button className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300 w-full">
                Get Started
              </button>
            </div>
          </motion.div>
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
              Ready to Go Viral?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let&apos;s create engaging reels that stop the scroll and drive massive engagement for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300">
                Get a Quote
              </button>
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