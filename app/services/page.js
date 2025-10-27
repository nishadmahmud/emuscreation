"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaExternalLinkAlt, FaHeart, FaEye, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Wedding Video Editing",
    category: "Wedding",
    description: "Transform your wedding footage into cinematic masterpieces that capture every precious moment with emotional storytelling and professional color grading.",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/wedding.mp4",
    duration: "5:30",
    views: "2.3K",
    likes: "156",
    features: [
      "Cinematic color grading",
      "Emotional storytelling",
      "Slow-motion sequences",
      "Professional audio mixing",
      "Multiple format delivery"
    ],
    pricing: "Starting from $150",
    turnaround: "5-7 days",
    link: "/services/wedding"
  },
  {
    id: 2,
    title: "Documentary Editing",
    category: "Documentary",
    description: "Create compelling documentaries that tell powerful stories with professional editing, archival footage integration, and cinematic transitions.",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/documentary.mp4",
    duration: "8:45",
    views: "15.7K",
    likes: "892",
    features: [
      "Archival footage integration",
      "Interview editing",
      "Cinematic storytelling",
      "Professional color correction",
      "Multiple format delivery"
    ],
    pricing: "Starting from $200",
    turnaround: "7-10 days",
    link: "/services/corporate"
  },
  {
    id: 3,
    title: "Reels & Short-Form Content",
    category: "Reels",
    description: "Create viral-worthy reels and short-form content with trending transitions, perfect beat sync, and engaging visual effects for maximum social media impact.",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/car.mp4",
    duration: "0:30",
    views: "45.2K",
    likes: "3.1K",
    features: [
      "Trending transitions",
      "Perfect beat sync",
      "Speed ramps",
      "Visual effects",
      "Social media optimization"
    ],
    pricing: "Starting from $50",
    turnaround: "2-3 days",
    link: "/services/reels"
  },
  {
    id: 4,
    title: "Corporate & App Promos",
    category: "Corporate",
    description: "Professional corporate videos and app promotional content with clean editing, modern transitions, and compelling storytelling for business growth.",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/app.mp4",
    duration: "3:20",
    views: "8.9K",
    likes: "234",
    features: [
      "Professional editing",
      "Modern transitions",
      "Corporate branding",
      "Clean audio mixing",
      "Multiple format delivery"
    ],
    pricing: "Starting from $100",
    turnaround: "5-7 days",
    link: "/services/corporate"
  },
  {
    id: 5,
    title: "YouTube Content",
    category: "YouTube",
    description: "Engaging YouTube videos with dynamic editing, clear graphics, strategic pacing, and professional VFX to maintain viewer engagement throughout.",
    thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/short-film.mp4",
    duration: "12:15",
    views: "67.3K",
    likes: "4.2K",
    features: [
      "Dynamic editing",
      "Professional VFX",
      "Strategic pacing",
      "Clear graphics",
      "Engagement optimization"
    ],
    pricing: "Starting from $120",
    turnaround: "7-10 days",
    link: "/services/youtube"
  },
  {
    id: 6,
    title: "Travel Vlog Editing",
    category: "Travel",
    description: "Epic travel vlogs with drone footage integration, adventure storytelling, and cinematic transitions that showcase destinations beautifully.",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/documentary2.mp4",
    duration: "4:10",
    views: "23.8K",
    likes: "1.7K",
    features: [
      "Drone footage integration",
      "Adventure storytelling",
      "Cinematic transitions",
      "Location showcasing",
      "Travel optimization"
    ],
    pricing: "Starting from $180",
    turnaround: "6-8 days",
    link: "/services/travel"
  }
];

const categories = ["All", "Wedding", "Documentary", "Reels", "Corporate", "YouTube", "Travel"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const videoRefs = useRef({});

  const filteredServices = activeCategory === "All" 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  useEffect(() => {
    Object.keys(videoRefs.current).forEach(key => {
      const video = videoRefs.current[key];
      if (video) {
        if (hoveredProject === parseInt(key)) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [hoveredProject]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <section className="pt-16 pb-8 px-4 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Our <span className="text-[#D4A514]">Services</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
              Professional video editing services tailored to your needs. From wedding highlights to corporate promos, we bring your vision to life with cinematic quality.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#D4A514] text-black"
                    : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredProject(service.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  if (service.videoUrl && service.videoUrl !== "#") {
                    window.open(service.videoUrl, '_blank');
                  }
                }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    {service.videoUrl && service.videoUrl !== "#" ? (
                      <video
                        ref={(el) => videoRefs.current[service.id] = el}
                        src={service.videoUrl}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={service.thumbnail}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Button */}
                    {!(service.videoUrl && service.videoUrl !== "#") && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: hoveredProject === service.id ? 1 : 0.8,
                            opacity: hoveredProject === service.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-16 h-16 bg-[#D4A514] rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <FaPlay className="text-black text-xl ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Duration */}
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {service.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#D4A514] text-black px-2 py-1 rounded text-xs font-semibold">
                      {service.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[#D4A514] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Key Features:</h4>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-[#D4A514] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Turnaround */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="text-[#D4A514] font-semibold">
                        {service.pricing}
                      </div>
                      <div className="text-[var(--text-secondary)]">
                        {service.turnaround}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FaEye />
                          <span>{service.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaHeart />
                          <span>{service.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#D4A514] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors duration-300"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Choose your preferred service and let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300"
              >
                Get Started on Fiverr
              </a>
              <a
                href="https://wa.me/8801743025398"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#D4A514] text-[#D4A514] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A514] hover:text-black transition-colors duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

