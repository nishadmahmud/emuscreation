"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaClock,
  FaCheck,
  FaStar,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaVideo,
  FaMusic,
  FaDownload,
  FaShare,
  FaUsers,
  FaChartBar,
  FaHandshake,
  FaBriefcase,
} from "react-icons/fa";
import Image from "next/image";

const corporateDeliverables = [
  {
    icon: FaVideo,
    title: "Corporate Video",
    description:
      "Professional corporate videos with clean editing, brand consistency, and executive presentations",
    duration: "2-10 minutes",
    included: true,
  },
  {
    icon: FaUsers,
    title: "Team & Culture Videos",
    description:
      "Employee spotlight videos, company culture showcases, and team building content",
    duration: "3-8 minutes",
    included: true,
  },
  {
    icon: FaChartBar,
    title: "Product Demos",
    description:
      "Professional product demonstrations with clear explanations and call-to-actions",
    duration: "1-5 minutes",
    included: true,
  },
  {
    icon: FaHandshake,
    title: "Client Testimonials",
    description:
      "Polished client testimonial videos that build trust and credibility",
    duration: "1-3 minutes",
    included: true,
  },
  {
    icon: FaDownload,
    title: "Multiple Formats",
    description:
      "HD (1080p) and 4K delivery optimized for presentations, websites, and social media",
    duration: "All formats",
    included: true,
  },
  {
    icon: FaShare,
    title: "Social Media Versions",
    description:
      "LinkedIn, Facebook, and Instagram optimized versions for corporate social media",
    duration: "15-60 seconds",
    included: true,
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Brand Consultation",
    description:
      "We understand your brand guidelines, messaging, and corporate communication goals",
    duration: "1-2 days",
    icon: FaCalendarAlt,
  },
  {
    step: 2,
    title: "Content Planning",
    description:
      "We create a detailed content strategy and storyboard for your corporate video",
    duration: "2-3 days",
    icon: FaBriefcase,
  },
  {
    step: 3,
    title: "Footage Upload",
    description:
      "You upload your corporate footage via secure Google Drive, Dropbox, or WeTransfer link",
    duration: "Same day",
    icon: FaDownload,
  },
  {
    step: 4,
    title: "Professional Editing",
    description:
      "We deliver the first version with professional corporate editing and brand consistency",
    duration: "5-7 days",
    icon: FaVideo,
  },
  {
    step: 5,
    title: "Final Delivery",
    description:
      "You receive the complete corporate video package ready for presentations and marketing",
    duration: "1 day",
    icon: FaStar,
  },
];

const corporatePortfolio = [
  {
    id: 1,
    title: "Corporate Brand Story",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    duration: "3:15",
    views: "5.7K",
    likes: "234",
    description:
      "Professional corporate video showcasing company values and team culture",
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    duration: "2:45",
    views: "7.4K",
    likes: "456",
    description:
      "Dynamic product launch video with modern editing and compelling storytelling",
  },
  {
    id: 3,
    title: "Executive Interview Series",
    thumbnail:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center",
    duration: "4:30",
    views: "3.2K",
    likes: "189",
    description:
      "Professional executive interviews with clean editing and corporate branding",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    quote:
      "The corporate video they created perfectly captured our company culture and values. It&apos;s been used in presentations, on our website, and in recruitment campaigns with excellent results.",
    service: "Corporate Brand Video",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    quote:
      "Professional, reliable, and delivered exactly what we needed. The product demo video helped increase our sales by 40% and the quality exceeded our expectations.",
    service: "Product Demo Video",
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    quote:
      "They understand corporate communication better than any other video editing service. Our client testimonial videos have significantly improved our credibility and trust.",
    service: "Client Testimonials",
  },
];

export default function CorporatePage() {
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
    window.open("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/d0369548999c4f00742a1d9acaa0669c-1743532436130/0328", '_blank');
  };

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
                  <FaBuilding className="text-black text-xl" />
                </div>
                <span className="text-[#D4A514] font-semibold text-lg">
                  Corporate/Documentary
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Professional{" "}
                <span className="text-[#D4A514]">Corporate Videos</span>
              </h1>

              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Elevate your corporate communications with professional video
                editing that builds trust, showcases your brand, and delivers
                your message with impact. Perfect for presentations, marketing,
                and internal communications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.fiverr.com/mehediemu/do-documentary-video-editing-and-short-film?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=9&imp_id=70d18daa-f789-4afc-ba62-facb65cd8e74"
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
                  src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/d0369548999c4f00742a1d9acaa0669c-1743532436130/0328"
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
              Corporate Video Packages
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Choose the perfect package for your corporate film editing needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package 1 - Basic */}
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
                  $505
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  1 Min Film edit - Short Teaser (1-2 min)
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
                  <span className="text-[var(--text-primary)]">Up to 45 minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 1 minute running time</span>
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
                  <span className="text-[var(--text-primary)]">1 Commercially licensed music track</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </motion.div>

            {/* Package 2 - Standard */}
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
                  $700
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  5 Min film edit - Highlight (3-5 min)
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">10-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">3 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 300 minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 1 minute running time</span>
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
                  <span className="text-[var(--text-primary)]">3 Commercially licensed music tracks</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
              >
                Order Now
              </a>
            </motion.div>

            {/* Package 3 - Premium */}
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
                  $1,510
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  10 Min film edit - Full Film (up to 60 min)
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">10-day delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">4 Revisions</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Unlimited minutes of footage provided</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">Up to 1 minute running time</span>
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
                  <span className="text-[var(--text-primary)]">6 Commercially licensed music tracks</span>
                </div>
              </div>
              
              <a
                href="https://www.fiverr.com/users/mehediemu"
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
              Complete corporate video package designed for professional
              business communications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateDeliverables.map((item, index) => (
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
              Professional workflow designed for corporate excellence and brand
              consistency
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
              Corporate Success Stories
            </h2>
            <p className="text-[var(--text-secondary)]">
              See the professional quality and business impact of our corporate
              videos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporatePortfolio.map((project, index) => (
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
                        <FaVideo className="text-black text-xl" />
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
                          <FaUsers className="text-xs" />
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
              What Business Leaders Say
            </h2>
            <p className="text-[var(--text-secondary)]">
              Real testimonials from corporate clients and business executives
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
              Ready to Elevate Your Corporate Communications?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let&apos;s create professional corporate videos that build trust,
              showcase your brand, and deliver your message with maximum impact.
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
