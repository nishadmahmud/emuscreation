"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaExternalLinkAlt, FaCalendarAlt, FaClock, FaTag, FaHeart, FaEye, FaThumbsUp } from "react-icons/fa";
import Image from "next/image";

const portfolioData = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456789",
    duration: "8:45",
    views: "12.5K",
    likes: "847",
    date: "2024-01-15",
    description: "A romantic wedding highlight reel capturing the couple's special day with cinematic storytelling and emotional music.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
    musicSource: "Licensed from Artlist",
    turnaround: "5 days",
    featured: true,
    caseStudy: {
      goal: "Create an emotional wedding highlight reel that captures the essence of Sarah and Michael's special day",
      approach: "Used cinematic color grading, slow-motion sequences, and carefully selected music to tell their love story",
      result: "Client was overwhelmed with emotion and received countless compliments from guests. Video went viral on social media."
    }
  },
  {
    id: 2,
    title: "Bali Adventure Travel Vlog",
    category: "Travel",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456790",
    duration: "12:30",
    views: "8.2K",
    likes: "523",
    date: "2024-01-10",
    description: "Epic travel vlog showcasing Bali's beauty with dynamic editing and adventure storytelling.",
    tools: ["Final Cut Pro", "DaVinci Resolve", "Motion"],
    musicSource: "Epidemic Sound",
    turnaround: "7 days",
    featured: true,
    caseStudy: {
      goal: "Create an engaging travel vlog that showcases Bali's natural beauty and adventure activities",
      approach: "Combined drone footage, GoPro action shots, and cinematic transitions with upbeat music",
      result: "Video gained 8K+ views and helped the client grow their travel channel by 40%."
    }
  },
  {
    id: 3,
    title: "Fashion Reel Series",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456791",
    duration: "0:30",
    views: "25.3K",
    likes: "1.2K",
    date: "2024-01-08",
    description: "Trendy fashion reels with quick cuts and modern transitions for Instagram.",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "Instagram Music Library",
    turnaround: "2 days",
    featured: true,
    caseStudy: {
      goal: "Create viral-worthy fashion reels that showcase clothing collections effectively",
      approach: "Used trending transitions, perfect timing with music beats, and strategic color grading",
      result: "Reels averaged 25K+ views and significantly increased brand engagement and sales."
    }
  },
  {
    id: 4,
    title: "Corporate Brand Story",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456792",
    duration: "3:15",
    views: "5.7K",
    likes: "234",
    date: "2024-01-05",
    description: "Professional corporate video showcasing company values and team culture.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
    musicSource: "Premium Beat",
    turnaround: "6 days",
    featured: false,
    caseStudy: {
      goal: "Create a professional corporate video that communicates company values and attracts talent",
      approach: "Used clean, modern editing with professional color grading and corporate-friendly music",
      result: "Video was used in recruitment campaigns and helped increase job applications by 60%."
    }
  },
  {
    id: 5,
    title: "Tech Review Channel",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456793",
    duration: "15:20",
    views: "18.9K",
    likes: "892",
    date: "2024-01-03",
    description: "Comprehensive tech review with detailed analysis and engaging presentation.",
    tools: ["Final Cut Pro", "Motion", "Compressor"],
    musicSource: "AudioJungle",
    turnaround: "8 days",
    featured: false,
    caseStudy: {
      goal: "Create engaging tech review content that keeps viewers watching until the end",
      approach: "Used dynamic editing, clear graphics, and strategic pacing to maintain viewer engagement",
      result: "Video achieved 85% watch-through rate and became the channel's most popular review."
    }
  },
  {
    id: 6,
    title: "Music Video Production",
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456794",
    duration: "4:12",
    views: "32.1K",
    likes: "1.8K",
    date: "2024-01-01",
    description: "Creative music video with artistic editing and visual storytelling.",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    musicSource: "Original Track",
    turnaround: "10 days",
    featured: false,
    caseStudy: {
      goal: "Create a visually stunning music video that complements the artist's creative vision",
      approach: "Used artistic color grading, creative transitions, and synchronized editing with the music",
      result: "Music video gained 32K+ views and helped the artist reach new audiences."
    }
  },
  {
    id: 7,
    title: "Product Launch Campaign",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456795",
    duration: "2:45",
    views: "7.4K",
    likes: "456",
    date: "2023-12-28",
    description: "Dynamic product launch video with modern editing and compelling storytelling.",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "Premium Beat",
    turnaround: "5 days",
    featured: false,
    caseStudy: {
      goal: "Create an exciting product launch video that generates buzz and drives sales",
      approach: "Used dynamic editing, product showcases, and compelling storytelling techniques",
      result: "Video contributed to 40% increase in pre-orders and strong social media engagement."
    }
  },
  {
    id: 8,
    title: "Lifestyle Reels Collection",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop&crop=center",
    videoUrl: "https://player.vimeo.com/video/123456796",
    duration: "0:45",
    views: "19.7K",
    likes: "1.1K",
    date: "2023-12-25",
    description: "Collection of lifestyle reels showcasing daily routines and wellness content.",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "Instagram Music Library",
    turnaround: "3 days",
    featured: false,
    caseStudy: {
      goal: "Create relatable lifestyle content that resonates with target audience",
      approach: "Used authentic storytelling, natural lighting, and trending audio to maximize engagement",
      result: "Reels averaged 19K+ views and significantly increased follower engagement rate."
    }
  }
];

const categories = ["All", "Wedding", "Travel", "Reels", "Corporate", "YouTube", "Music"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  const featuredProjects = portfolioData.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Our <span className="text-[#D4A514]">Portfolio</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
              Explore our diverse collection of video editing projects across weddings, travel, reels, corporate, and more. 
              Each project tells a unique story crafted with precision and creativity.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-4"
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

      {/* Featured Projects */}
      {activeCategory === "All" && (
        <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Featured Work
              </h2>
              <p className="text-[var(--text-secondary)]">
                Our most popular and impactful projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-[#D4A514] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: hoveredProject === project.id ? 1 : 0.8, 
                            opacity: hoveredProject === project.id ? 1 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-16 h-16 bg-[#D4A514] rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <FaPlay className="text-black text-xl ml-1" />
                        </motion.div>
                      </div>

                      {/* Duration */}
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {project.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {project.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#D4A514] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Stats */}
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
      )}

      {/* All Projects Grid */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeCategory !== "All" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                {activeCategory} Projects
              </h2>
              <p className="text-[var(--text-secondary)]">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
            </motion.div>
          )}

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: hoveredProject === project.id ? 1 : 0.8, 
                            opacity: hoveredProject === project.id ? 1 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center shadow-xl"
                        >
                          <FaPlay className="text-black text-sm ml-0.5" />
                        </motion.div>
                      </div>

                      {/* Duration */}
                      <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {project.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#D4A514] transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                        <div className="flex items-center gap-3">
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
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                No projects found
              </h3>
              <p className="text-[var(--text-secondary)] mb-8">
                We don't have any {activeCategory.toLowerCase()} projects yet, but we're always working on new content!
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Case Studies
            </h2>
            <p className="text-[var(--text-secondary)]">
              Deep dive into our creative process and results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[var(--bg-elevated)] rounded-2xl p-8 border border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center">
                    <FaPlay className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {project.category} • {project.turnaround} turnaround
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#D4A514] rounded-full"></span>
                      Goal
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {project.caseStudy.goal}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#D4A514] rounded-full"></span>
                      Approach
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {project.caseStudy.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#D4A514] rounded-full"></span>
                      Result
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaThumbsUp className="text-xs" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                    <button className="bg-[#D4A514] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#B8941F] transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Let's bring your vision to life with professional video editing that tells your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4A514] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300">
                Get a Quote
              </button>
              <button className="border-2 border-[#D4A514] text-[#D4A514] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A514] hover:text-black transition-colors duration-300">
                View Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}