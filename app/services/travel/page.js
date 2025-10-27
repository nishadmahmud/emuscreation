"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaClock,
  FaCheck,
  FaStar,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaVideo,
  FaMusic,
  FaDownload,
  FaShare,
  FaMapMarkerAlt,
  FaCamera,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";

const travelDeliverables = [
  {
    icon: FaVideo,
    title: "Travel Vlog",
    description:
      "Complete travel vlog with cinematic storytelling, drone footage integration, and adventure sequences",
    duration: "8-20 minutes",
    included: true,
  },
  {
    icon: FaCamera,
    title: "Drone Footage Integration",
    description:
      "Seamless integration of aerial shots and drone footage for breathtaking landscape views",
    duration: "Throughout video",
    included: true,
  },
  {
    icon: FaMusic,
    title: "Adventure Music",
    description:
      "Epic and uplifting music that captures the spirit of travel and adventure",
    duration: "Full video",
    included: true,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location Graphics",
    description:
      "Custom location markers, travel routes, and destination graphics",
    duration: "As needed",
    included: true,
  },
  {
    icon: FaDownload,
    title: "Multiple Formats",
    description:
      "HD (1080p) and 4K delivery optimized for YouTube, Instagram, and TikTok",
    duration: "All formats",
    included: true,
  },
  {
    icon: FaShare,
    title: "Social Media Clips",
    description:
      "Instagram Stories, TikTok clips, and YouTube Shorts from your travel content",
    duration: "15-60 seconds",
    included: true,
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Travel Story Planning",
    description:
      "We analyze your footage and create a compelling narrative structure for your travel story",
    duration: "1-2 days",
    icon: FaCalendarAlt,
  },
  {
    step: 2,
    title: "Footage Upload",
    description:
      "You upload your travel footage via Google Drive, Dropbox, or WeTransfer link",
    duration: "Same day",
    icon: FaDownload,
  },
  {
    step: 3,
    title: "First Cut Review",
    description:
      "We deliver the first version with cinematic editing and adventure storytelling",
    duration: "6-8 days",
    icon: FaVideo,
  },
  {
    step: 4,
    title: "Revisions & Enhancement",
    description:
      "We refine the story, enhance drone footage, and perfect the adventure narrative",
    duration: "2-3 days",
    icon: FaCheck,
  },
  {
    step: 5,
    title: "Final Delivery",
    description:
      "You receive the complete travel vlog ready for publishing across all platforms",
    duration: "1 day",
    icon: FaStar,
  },
];

const travelPortfolio = [
  {
    id: 1,
    title: "Bali Adventure Travel Vlog",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    duration: "12:30",
    views: "8.2K",
    likes: "523",
    description:
      "Epic travel vlog showcasing Bali's beauty with dynamic editing and adventure storytelling",
  },
  {
    id: 2,
    title: "European Backpacking Journey",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center",
    duration: "15:45",
    views: "12.7K",
    likes: "891",
    description:
      "Multi-country backpacking adventure with stunning landscapes and cultural experiences",
  },
  {
    id: 3,
    title: "Mountain Adventure Series",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    duration: "18:20",
    views: "15.3K",
    likes: "1.2K",
    description:
      "Thrilling mountain climbing and hiking adventure with breathtaking aerial shots",
  },
];

const testimonials = [
  {
    name: "Alex Thompson",
    location: "Sydney, Australia",
    rating: 5,
    quote:
      "The travel vlog they created for my Bali trip was absolutely stunning! The drone footage integration was seamless and the storytelling captured every emotion perfectly.",
    service: "Bali Travel Vlog",
  },
  {
    name: "Sophie Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    quote:
      "My European backpacking video went viral! The editing perfectly captured the adventure and wanderlust. My travel channel grew by 300% after this video.",
    service: "European Travel Series",
  },
  {
    name: "James Wilson",
    location: "Vancouver, Canada",
    rating: 5,
    quote:
      "The mountain adventure video they created is incredible. The aerial shots and adventure sequences are movie-quality. Highly recommend for any travel content!",
    service: "Mountain Adventure",
  },
];

export default function TravelPage() {
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
    window.open("https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rziq7wpgnwplyue72msk", '_blank');
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
                  <FaPlane className="text-black text-xl" />
                </div>
                <span className="text-[#D4A514] font-semibold text-lg">
                  Travel Vlog Editing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Capture Your <span className="text-[#D4A514]">Adventure</span>
              </h1>

              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Transform your travel footage into cinematic adventures that
                inspire wanderlust. Our expert editors specialize in travel
                vlogs with drone footage, adventure storytelling, and
                breathtaking landscapes.
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
                  src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rziq7wpgnwplyue72msk"
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Travel Vlog Packages
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Social Media Video Editing + Highlight Film
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-elevated)] rounded-2xl p-8 border-2 border-[#D4A514] hover:border-[#D4A514]/80 transition-all duration-300 flex flex-col"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Social Media Video Editing Feature + Highlight Film
              </h3>
              <div className="text-4xl font-bold text-[#D4A514] mb-2">
                $530
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Up to 20-30 min Feature film + Up to 5-min Highlight Film
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-center gap-2 text-sm">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span className="text-[var(--text-primary)]">10-day delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span className="text-[var(--text-primary)]">2 Revisions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span className="text-[var(--text-primary)]">Up to 120 minutes of footage provided</span>
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
                <span className="text-[var(--text-primary)]">10 Commercially licensed music tracks</span>
              </div>
            </div>

            <a
              href="https://www.fiverr.com/mehediemu/edit-your-full-wedding-movie?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=6&imp_id=07b59ad4-d747-4fd6-b7fb-ecd6a3241a35"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300 text-center"
            >
              Order Now
            </a>
          </motion.div>
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
              Complete travel vlog package designed to capture the essence of
              your adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelDeliverables.map((item, index) => (
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
              Comprehensive workflow designed to bring your travel stories to
              life
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
              What Travelers Say
            </h2>
            <p className="text-[var(--text-secondary)]">
              Real testimonials from adventure seekers and travel content
              creators
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
              Ready to Share Your Adventure?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let&apos;s create a cinematic travel vlog that captures the magic
              of your journey and inspires others to explore.
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
