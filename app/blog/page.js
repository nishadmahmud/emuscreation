"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import { useState } from "react";

const blogPosts = [
  {
    id: "wedding-video-trends-2024",
    title: "Top Wedding Video Trends for 2024",
    excerpt:
      "Discover the latest trends shaping wedding videography this year, from drone shots to cinematic storytelling techniques.",
    content:
      "Wedding videography continues to evolve with new trends emerging each year. In 2024, we're seeing a shift towards more cinematic approaches, with couples opting for longer-form content that tells their complete love story. Drone shots have become standard, offering breathtaking aerial views of venues and ceremonies. The use of natural lighting and candid moments is more prominent than ever, creating authentic and emotional footage that resonates with couples and their families.",
    author: "Emu's Creation Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop&crop=center",
    tags: ["Wedding", "Trends", "Cinematography"],
  },
  {
    id: "reels-editing-tips",
    title: "5 Essential Tips for Instagram Reels Editing",
    excerpt:
      "Master the art of creating viral Instagram Reels with these professional editing techniques and best practices.",
    content:
      "Instagram Reels have revolutionized short-form content creation, and the editing techniques used can make or break your video's success. Key elements include perfect timing with music beats, engaging transitions, and maintaining viewer attention throughout the 15-30 second duration. Color grading plays a crucial role in creating cohesive and professional-looking content that stands out in the crowded social media landscape.",
    author: "Emu's Creation Team",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=center",
    tags: ["Instagram", "Reels", "Social Media", "Editing"],
  },
  {
    id: "youtube-growth-strategies",
    title: "How Video Editing Can Boost Your YouTube Channel Growth",
    excerpt:
      "Learn how professional video editing techniques can significantly increase your YouTube channel's engagement and subscriber count.",
    content:
      "YouTube success isn't just about great content—it's about how that content is presented. Professional video editing can transform good content into great content that keeps viewers watching until the end. Key strategies include maintaining consistent pacing, using engaging thumbnails, implementing proper color grading, and creating compelling intros and outros that encourage subscriptions and engagement.",
    author: "Emu's Creation Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "YouTube",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=400&fit=crop&crop=center",
    tags: ["YouTube", "Growth", "Strategy", "Content"],
  },
  {
    id: "color-grading-guide",
    title: "Complete Guide to Color Grading in Video Editing",
    excerpt:
      "Master the fundamentals of color grading to create cinematic and professional-looking videos that captivate your audience.",
    content:
      "Color grading is one of the most powerful tools in video editing, capable of transforming the mood and atmosphere of your footage. Understanding color theory, working with different color spaces, and knowing when to apply specific grading techniques can elevate your videos from amateur to professional quality. This comprehensive guide covers everything from basic color correction to advanced cinematic grading techniques.",
    author: "Emu's Creation Team",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop&crop=center",
    tags: ["Color Grading", "Tutorial", "Cinematography", "Post-Production"],
  },
  {
    id: "corporate-video-best-practices",
    title: "Best Practices for Corporate Video Production",
    excerpt:
      "Essential guidelines for creating effective corporate videos that communicate your brand message and engage your target audience.",
    content:
      "Corporate video production requires a different approach than creative content. The focus shifts to clear communication, brand consistency, and professional presentation. Key elements include maintaining brand guidelines, ensuring clear audio quality, using professional lighting, and creating content that aligns with business objectives. Understanding your target audience and their preferences is crucial for creating videos that drive results.",
    author: "Emu's Creation Team",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&crop=center",
    tags: ["Corporate", "Business", "Branding", "Marketing"],
  },
  {
    id: "travel-videography-tips",
    title: "Travel Videography: Capturing Adventures on Camera",
    excerpt:
      "Professional tips for creating stunning travel videos that tell compelling stories and inspire wanderlust in your audience.",
    content:
      "Travel videography combines storytelling with breathtaking visuals to create content that transports viewers to new destinations. Key techniques include planning your shots, capturing authentic moments, using natural lighting effectively, and creating a narrative arc that takes viewers on a journey. From drone shots of landscapes to intimate street scenes, travel videos require versatility and creativity to truly capture the essence of a place.",
    author: "Emu's Creation Team",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop&crop=center",
    tags: ["Travel", "Videography", "Adventure", "Storytelling"],
  },
  {
    id: "audio-editing-fundamentals",
    title: "Audio Editing Fundamentals for Video Creators",
    excerpt:
      "Learn the essential audio editing techniques that can dramatically improve the quality and impact of your video content.",
    content:
      "Great video content is only as good as its audio quality. Audio editing fundamentals include noise reduction, level balancing, EQ adjustments, and proper mixing techniques. Understanding how to work with different audio formats, implementing effective compression, and knowing when to use music versus dialogue can make the difference between amateur and professional-quality content.",
    author: "Emu's Creation Team",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop&crop=center",
    tags: ["Audio", "Sound Design", "Tutorial", "Post-Production"],
  },
  {
    id: "motion-graphics-basics",
    title: "Introduction to Motion Graphics in Video Editing",
    excerpt:
      "Discover how motion graphics can enhance your videos and learn the basics of creating engaging animated elements.",
    content:
      "Motion graphics add a dynamic element to video content, helping to convey information, create transitions, and maintain viewer engagement. From simple text animations to complex 3D elements, motion graphics can transform static content into engaging visual experiences. Understanding keyframe animation, easing functions, and design principles is essential for creating professional motion graphics that enhance rather than distract from your content.",
    author: "Emu's Creation Team",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center",
    tags: ["Motion Graphics", "Animation", "Design", "Tutorial"],
  },
];

const categories = [
  "All",
  "Wedding",
  "Social Media",
  "YouTube",
  "Tutorial",
  "Corporate",
  "Travel",
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-8">
      {/* Header */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6"
        >
          Blog & Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto"
        >
          Stay updated with the latest trends, tips, and techniques in video
          editing and content creation.
        </motion.p>
      </header>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              category === activeCategory
                ? "bg-[#D4A514] text-black"
                : "bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]/80 hover:text-[var(--text-primary)]"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href={`/blog/${post.id}`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4A514] text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#D4A514] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-[var(--text-secondary)] mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="text-xs" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-[#D4A514] font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>Read More</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-full text-center py-12"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              No posts found in this category
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Try selecting a different category or check back later for new
              content.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="bg-[#D4A514] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-300"
            >
              View All Posts
            </button>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 text-center bg-gradient-to-r from-[#D4A514]/10 to-[#B8941F]/10 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Ready to Create Amazing Videos?
        </h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Put these tips into practice with our professional video editing
          services. From wedding highlights to corporate content, we bring your
          vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://www.fiverr.com/users/mehediemu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A514] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.a>
          <motion.a
            href="/portfolio"
            className="border border-[var(--border-subtle)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--bg-elevated)]/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
