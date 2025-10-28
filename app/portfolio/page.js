"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaHeart,
  FaEye,
  FaThumbsUp,
} from "react-icons/fa";
import Image from "next/image";

const portfolioData = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding",
    category: "Wedding",
    thumbnail:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/ffa9c0e4189229ae327971065afe5be8-1758403289721/Promo%20ECP",
    description:
      "A romantic destination wedding captured in cinematic style with emotional storytelling.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
    musicSource: "Licensed from Artlist",
    turnaround: "5 days",
    featured: true,
    caseStudy: {
      goal: "Create an emotional wedding highlight reel that captures the essence of Sarah and Michael's special day",
      approach:
        "Used cinematic color grading, slow-motion sequences, and carefully selected music to tell their love story",
      result:
        "Client was overwhelmed with emotion and received countless compliments from guests. Video went viral on social media.",
    },
  },
  {
    id: 2,
    title: "Documentary Film",
    category: "Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rziq7wpgnwplyue72msk",
    description:
      "Documentary Film And Reunion,Its a Sweet past collage reunion documentary",
    tools: ["Final Cut Pro", "DaVinci Resolve", "Motion"],
    musicSource: "Epidemic Sound",
    turnaround: "7 days",
    featured: true,
    caseStudy: {
      goal: "Create an engaging documentary that showcases reunion stories and emotional connections",
      approach:
        "Combined archival footage, interviews, and cinematic storytelling with emotional music",
      result:
        "Documentary gained 15K+ views and helped preserve precious family memories.",
    },
  },
  {
    id: 3,
    title: "Car Promo Video",
    category: "Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/0227b73948fc938c4138c1b899db4140-1744410116710/car",
    description:
      "Cinematic Car Reels for car lovers! With full cinematic vibes, trendy speed ramps and perfect beat sync",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "Instagram Music Library",
    turnaround: "2 days",
    featured: true,
    caseStudy: {
      goal: "Create viral-worthy car reels that showcase automotive beauty effectively",
      approach:
        "Used trending transitions, perfect timing with music beats, and strategic color grading",
      result:
        "Reels averaged 45K+ views and significantly increased brand engagement and sales.",
    },
  },
  {
    id: 4,
    title: "App Promo Video",
    category: "Corporate",
    thumbnail:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/i6b9fcdtlvpwvwo53hem",
    description:
      "This is an app promotional video that we've produced. With full cinematic vibes, trendy speed ramps and perfect beat sync.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
    musicSource: "Premium Beat",
    turnaround: "6 days",
    featured: false,
    caseStudy: {
      goal: "Create a professional app promo video that communicates features and attracts users",
      approach:
        "Used clean, modern editing with professional color grading and corporate-friendly music",
      result:
        "Video was used in marketing campaigns and helped increase app downloads by 60%.",
    },
  },
  {
    id: 5,
    title: "Short film trailer",
    category: "YouTube",
    thumbnail:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/ww7jfos5qq6fh6stmd0t",
    description:
      "Diverse range of VFX,Sound mixing, music and storytelling techniques to dynamically shift the tone and atmosphere throughout the experience",
    tools: ["Final Cut Pro", "Motion", "Compressor"],
    musicSource: "AudioJungle",
    turnaround: "8 days",
    featured: false,
    caseStudy: {
      goal: "Create engaging short film trailer that keeps viewers watching until the end",
      approach:
        "Used dynamic editing, clear graphics, and strategic pacing to maintain viewer engagement",
      result:
        "Trailer achieved 85% watch-through rate and became the film's most popular promotional content.",
    },
  },
  {
    id: 6,
    title: "Documentary Film",
    category: "YouTube",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/d0369548999c4f00742a1d9acaa0669c-1743532436130/0328",
    description:
      "This is a 1-minute movie trailer edit for 'Upcoming Challenges,' a short film about next-generation problems. I used AI to enhance the cinematic visuals.",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    musicSource: "Original Track",
    turnaround: "10 days",
    featured: false,
    caseStudy: {
      goal: "Create a visually stunning documentary trailer that complements the film's creative vision",
      approach:
        "Used artistic color grading, creative transitions, and synchronized editing with AI-enhanced visuals",
      result:
        "Trailer gained 23K+ views and helped the film reach new audiences.",
    },
  },
  {
    id: 7,
    title: "Motivational Reel Video Edit",
    category: "Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/99c7fa23546bc01bdac2dbf76134f5ee-1744791368136/Fiverr%20sample%20reel",
    description:
      "I did this as a test project to showcase how I edit motivational content, so you can get a clear idea of my editing skills.",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "Licensed Motivational Track",
    turnaround: "2 days",
    featured: false,
    caseStudy: {
      goal: "Create an inspiring motivational reel that demonstrates professional editing capabilities",
      approach:
        "Used dynamic cuts, impactful typography, and emotionally resonant music to create an inspiring narrative",
      result:
        "Successfully showcased editing style and attracted new clients seeking motivational content.",
    },
  },
  {
    id: 8,
    title: "Sports Reel Video Edit",
    category: "Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&crop=center",
    videoUrl:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/project_item/attachment/dbac47ac335f465985a925456540b1b8-1747646984877/MOJO-%2050%20-%20%202",
    description:
      "It's a sports reel that highlights the intensity of the game and players' performance — enhanced with professional cuts, beat-synced music, and dynamic transitions to keep it fast-paced and engaging.",
    tools: ["Adobe Premiere Pro", "After Effects"],
    musicSource: "High-Energy Sports Track",
    turnaround: "3 days",
    featured: false,
    caseStudy: {
      goal: "Create an adrenaline-pumping sports reel that captures the intensity and excitement of the game",
      approach:
        "Used fast-paced editing, beat-synced transitions, and dynamic effects to match the energy of sports action",
      result:
        "Reel effectively showcased the game's intensity and received positive feedback for its engaging pace.",
    },
  },
];

const categories = [
  "All",
  "Wedding",
  "Documentary",
  "Reels",
  "Corporate",
  "YouTube",
  "Music",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    console.log("hoveredProject changed to:", hoveredProject);
    console.log("Available video refs:", Object.keys(videoRefs.current));

    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        if (hoveredProject === parseInt(key)) {
          console.log(`Playing video for project ${key}`);
          video
            .play()
            .catch((err) => console.log(`Video ${key} play failed:`, err));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [hoveredProject]);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeCategory);

  const featuredProjects = portfolioData.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <section className="pt-4 pb-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Our <span className="text-[#D4A514]">Portfolio</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-12">
              Explore our diverse collection of video editing projects across
              weddings, travel, reels, corporate, and more. Each project tells a
              unique story crafted with precision and creativity.
            </p>
          </motion.div>

          {/* Category Filter */}
          {/* <motion.div
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
          {/* </motion.div> */}
        </div>
      </section>

      {/* Featured Projects */}
      {activeCategory === "All" && (
        <section className="pt-1 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              {/* <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                Featured Work
              </h2> */}
              {/* <p className="text-[var(--text-secondary)]">
                Our most popular and impactful projects
              </p> */}
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
                  onClick={() => {
                    if (project.videoUrl && project.videoUrl !== "#") {
                      window.open(project.videoUrl, "_blank");
                    }
                  }}
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
                      {project.videoUrl &&
                      project.videoUrl !== "#" &&
                      !project.videoUrl.includes("vimeo") ? (
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[project.id] = el;
                              console.log(
                                `Featured video ref set for project ${project.id}:`,
                                project.videoUrl
                              );
                            }
                          }}
                          src={project.videoUrl}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onLoadedMetadata={() =>
                            console.log(
                              `Featured video ${project.id} metadata loaded`
                            )
                          }
                          onError={(e) =>
                            console.error(
                              `Featured video ${project.id} error:`,
                              e
                            )
                          }
                        />
                      ) : (
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button */}
                      {!(
                        project.videoUrl &&
                        project.videoUrl !== "#" &&
                        !project.videoUrl.includes("vimeo")
                      ) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                              scale: hoveredProject === project.id ? 1 : 0.8,
                              opacity: hoveredProject === project.id ? 1 : 0,
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
                        {/* {project.duration} */}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {/* {project.date} */}
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
                            {/* <FaEye className="text-xs" /> */}
                            <span>{/* {project.views} */}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {/* <FaThumbsUp className="text-xs" /> */}
                            <span>{/* {project.likes} */}</span>
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
                {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""} found
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
                  onClick={() => {
                    if (project.videoUrl && project.videoUrl !== "#") {
                      window.open(project.videoUrl, "_blank");
                    }
                  }}
                >
                  <div className="relative rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      {project.videoUrl &&
                      project.videoUrl !== "#" &&
                      !project.videoUrl.includes("vimeo") ? (
                        <video
                          ref={(el) => (videoRefs.current[project.id] = el)}
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
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button */}
                      {!(
                        project.videoUrl &&
                        project.videoUrl !== "#" &&
                        !project.videoUrl.includes("vimeo")
                      ) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                              scale: hoveredProject === project.id ? 1 : 0.8,
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center shadow-xl"
                          >
                            <FaPlay className="text-black text-sm ml-0.5" />
                          </motion.div>
                        </div>
                      )}

                      {/* Duration */}
                      <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {/* {project.duration} */}
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
                            {/* <FaEye className="text-xs" /> */}
                            <span>{/* {project.views} */}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {/* <FaThumbsUp className="text-xs" /> */}
                            <span>{/* {project.likes} */}</span>
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
                We don&apos;t have any {activeCategory.toLowerCase()} projects
                yet, but we&apos;re always working on new content!
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
                        {/* <FaEye className="text-xs" /> */}
                        <span>{/* {project.views} */}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* <FaThumbsUp className="text-xs" /> */}
                        <span>{/* {project.likes} */}</span>
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
              Let&apos;s bring your vision to life with professional video
              editing that tells your story.
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
                View Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
