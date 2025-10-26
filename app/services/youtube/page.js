"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaClock, FaCheck, FaStar, FaExternalLinkAlt, FaCalendarAlt, FaVideo, FaMusic, FaDownload, FaShare, FaYoutube, FaThumbsUp, FaEye, FaChartLine } from "react-icons/fa";
import Image from "next/image";

const youtubeDeliverables = [
  {
    icon: FaVideo,
    title: "Full YouTube Video",
    description: "Complete video editing with professional transitions, color grading, and audio mixing",
    duration: "5-60 minutes",
    included: true
  },
  {
    icon: FaPlay,
    title: "Thumbnail Design",
    description: "Eye-catching custom thumbnails designed to maximize click-through rates",
    duration: "Custom designs",
    included: true
  },
  {
    icon: FaMusic,
    title: "Audio Enhancement",
    description: "Professional audio mixing, noise reduction, and background music integration",
    duration: "Full video",
    included: true
  },
  {
    icon: FaChartLine,
    title: "SEO Optimization",
    description: "Title, description, and tags optimized for maximum discoverability",
    duration: "Complete package",
    included: true
  },
  {
    icon: FaDownload,
    title: "Multiple Formats",
    description: "HD (1080p) and 4K delivery with YouTube-optimized compression",
    duration: "All formats",
    included: true
  },
  {
    icon: FaShare,
    title: "Social Media Clips",
    description: "Short clips extracted for Instagram, TikTok, and other platforms",
    duration: "15-60 seconds",
    included: true
  }
];

const workflowSteps = [
  {
    step: 1,
    title: "Content Strategy",
    description: "We analyze your channel and create a strategy for maximum engagement and growth",
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
    description: "We deliver the first version with professional editing and transitions",
    duration: "5-7 days",
    icon: FaPlay
  },
  {
    step: 4,
    title: "Revisions & Refinements",
    description: "We incorporate your feedback and optimize for YouTube algorithm",
    duration: "2-3 days",
    icon: FaCheck
  },
  {
    step: 5,
    title: "Final Delivery",
    description: "You receive the final video, thumbnail, and SEO package ready for upload",
    duration: "1 day",
    icon: FaStar
  }
];

const youtubePortfolio = [
  {
    id: 1,
    title: "Tech Review Channel",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    duration: "15:20",
    views: "18.9K",
    likes: "892",
    description: "Comprehensive tech review with detailed analysis and engaging presentation"
  },
  {
    id: 2,
    title: "Educational Content Series",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
    duration: "12:45",
    views: "25.3K",
    likes: "1.2K",
    description: "Educational videos with clear explanations and visual aids for better learning"
  },
  {
    id: 3,
    title: "Gaming Channel Highlights",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&crop=center",
    duration: "8:30",
    views: "32.1K",
    likes: "1.8K",
    description: "Gaming highlights with dynamic editing and engaging commentary"
  }
];

const testimonials = [
  {
    name: "David Kim",
    location: "Seoul, South Korea",
    rating: 5,
    quote: "My YouTube channel grew from 1K to 50K subscribers in just 6 months! The editing quality is incredible and the SEO optimization really works.",
    service: "YouTube Channel Growth"
  },
  {
    name: "Maria Santos",
    location: "São Paulo, Brazil",
    rating: 5,
    quote: "The attention to detail in their editing is amazing. My videos look so professional now and my audience engagement has tripled.",
    service: "Professional YouTube Editing"
  },
  {
    name: "James Wilson",
    location: "London, UK",
    rating: 5,
    quote: "They understand YouTube algorithm better than anyone. My videos consistently perform well and get recommended to new viewers.",
    service: "YouTube Optimization"
  }
];

export default function YouTubePage() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isHovered) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [isHovered]);

  const handleVideoClick = () => {
    window.open("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/ww7jfos5qq6fh6stmd0t", '_blank');
  };

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
                  <FaPlay className="text-black text-xl" />
                </div>
                <span className="text-[#D4A514] font-semibold text-lg">YouTube Editing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Grow Your <span className="text-[#D4A514]">YouTube Channel</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Professional YouTube video editing that maximizes engagement, retention, and growth. 
                Our expert editors understand the YouTube algorithm and create content that performs.
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
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleVideoClick}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/ww7jfos5qq6fh6stmd0t"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              YouTube Editing Packages
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Choose the perfect package for your YouTube channel needs
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
                  $175
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  1 min Long + 2 short reel edits
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 60 minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 30 minutes running time</span>
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
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">3 Commercially licensed music tracks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Commercially licensed video clips</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Commercially licensed images</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409"
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
                  $320
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  1 Min Long to 5 reels editing
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">4-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 75 minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 5 minutes running time</span>
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
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">1 Commercially licensed music track</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">2 Commercially licensed video clips</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">3 Commercially licensed images</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409"
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
                  $445
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  1 min long + 10 reels editing
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
                  <span className="text-[var(--text-primary)]">Up to 300 minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 15 minutes running time</span>
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
                  <span className="text-[var(--text-primary)]">Subtitles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Thumbnail included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Include source file</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">5 Commercially licensed music tracks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">3 Commercially licensed video clips</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">5 Commercially licensed images</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409"
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
              Complete YouTube package designed for maximum engagement and channel growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeDeliverables.map((item, index) => (
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
              Comprehensive workflow designed for YouTube success and channel growth
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
              YouTube Success Stories
            </h2>
            <p className="text-[var(--text-secondary)]">
              See the performance and engagement of our YouTube editing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubePortfolio.map((project, index) => (
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
                          <FaEye className="text-xs" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaThumbsUp className="text-xs" />
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
              What YouTubers Say
            </h2>
            <p className="text-[var(--text-secondary)]">
              Real testimonials from successful YouTube creators
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
              Ready to Grow Your YouTube Channel?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let&apos;s create professional YouTube content that engages your audience and grows your subscriber base.
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