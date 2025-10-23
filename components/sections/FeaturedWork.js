"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaExternalLinkAlt, FaHeart, FaEye } from "react-icons/fa";
import Image from "next/image";

const featuredProjects = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding",
    category: "Wedding",
    description: "A romantic destination wedding captured in cinematic style with emotional storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/wedding.mp4",
    duration: "5:30",
    views: "2.3K",
    likes: "156",
    featured: true
  },
  {
    id: 2,
    title: "Documentary Film",
    category: "Documentary",
    description: "Documentary Film And Reunion,Its a Sweet past collage reunion documentary",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/documentary.mp4",
    duration: "8:45",
    views: "15.7K",
    likes: "892",
    featured: true
  },
  {
    id: 3,
    title: "Car Promo Video",
    category: "Reels",
    description: "Cinematic Car Reels for car lovers! With full cinematic vibes, trendy speed ramps and perfect beat sync",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/car.mp4",
    duration: "0:30",
    views: "45.2K",
    likes: "3.1K",
    featured: true
  },
  {
    id: 4,
    title: "App Promo Video",
    category: "Corporate",
    description: "This is an app promotional video that we've produced. With full cinematic vibes, trendy speed ramps and perfect beat sync. ",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/app.mp4",
    duration: "3:20",
    views: "8.9K",
    likes: "234",
    featured: false
  },
  {
    id: 5,
    title: "Short film trailer",
    category: "YouTube",
    description: "Diverse range of VFX,Sound mixing, music and storytelling techniques to dynamically shift the tone and atmosphere throughout the experience",
    thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/short-film.mp4",
    duration: "12:15",
    views: "67.3K",
    likes: "4.2K",
    featured: false
  },
  {
    id: 6,
    title: "Documentary Film",
    category: "YouTube",
    description: "This is a 1-minute movie trailer edit for 'Upcoming Challenges,' a short film about next-generation problems. I used AI to enhance the cinematic visuals.",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    videoUrl: "/documentary2.mp4",
    duration: "4:10",
    views: "23.8K",
    likes: "1.7K",
    featured: false
  }
];

const categories = ["All", "Wedding", "Documentary", "Reels", "Corporate", "YouTube", "Music"];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const videoRefs = useRef({});

  const filteredProjects = activeCategory === "All" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeCategory);

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
    <section className="mt-20 py-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Featured <span className="text-[#D4A514]">Work</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          Explore our portfolio of cinematic edits that have captivated audiences worldwide.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
              activeCategory === category
                ? "bg-[#D4A514] text-black"
                : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]/80 hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
          <motion.div
            key={`${project.id}-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.2,
                delay: index * 0.02
              }
            }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            onClick={() => {
              if (project.videoUrl && project.videoUrl !== "#") {
                window.open(project.videoUrl, '_blank');
              }
            }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-elevated)]/80 backdrop-blur-sm border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-200 hover:shadow-lg cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              {project.videoUrl && project.videoUrl !== "#" ? (
                <video
                  ref={(el) => videoRefs.current[project.id] = el}
                  src={project.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play Button */}
              {!(project.videoUrl && project.videoUrl !== "#") && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredProject === project.id ? 1 : 0,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4A514] flex items-center justify-center shadow-2xl">
                    <FaPlay className="text-black text-xl ml-1" />
                  </div>
                </motion.div>
              )}


              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-[#D4A514] text-black text-xs px-2 py-1 rounded font-semibold">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#D4A514] transition-colors duration-300">
                  {project.title}
                </h3>
                <motion.a
                  href={project.videoUrl}
                  whileHover={{ scale: 1.1 }}
                  className="text-[var(--text-secondary)] hover:text-[#D4A514] transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </motion.a>
              </div>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{project.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart />
                    <span>{project.likes}</span>
                  </div>
                </div>
                <span className="bg-[var(--bg-elevated)] px-2 py-1 rounded text-xs">
                  {project.category}
                </span>
              </div>
            </div>
          </motion.div>
        )) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full text-center py-12"
          >
            <div className="text-[var(--text-secondary)] text-lg">
              {/* No projects found for "{activeCategory}" category. */}
            </div>
            <motion.button
              onClick={() => setActiveCategory("All")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 rounded-full bg-[#D4A514] text-black font-semibold hover:bg-[#D4A514]/80 transition-colors"
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A514] to-[#D4A514]/80 text-black font-bold text-lg hover:shadow-lg transition-shadow duration-150"
        >
          View Full Portfolio
          <FaExternalLinkAlt />
        </a>
      </motion.div>
    </section>
  );
}

