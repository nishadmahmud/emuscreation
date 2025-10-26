"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaTag,
  FaClock,
} from "react-icons/fa";

// Blog data (same as in main blog page)
const blogPosts = [
  {
    id: "wedding-video-trends-2024",
    title: "Top Wedding Video Trends for 2024",
    excerpt:
      "Discover the latest trends shaping wedding videography this year, from drone shots to cinematic storytelling techniques.",
    content:
      "Wedding videography continues to evolve with new trends emerging each year. In 2024, we're seeing a shift towards more cinematic approaches, with couples opting for longer-form content that tells their complete love story. Drone shots have become standard, offering breathtaking aerial views of venues and ceremonies. The use of natural lighting and candid moments is more prominent than ever, creating authentic and emotional footage that resonates with couples and their families.\n\n## Key Trends Shaping 2024\n\n### 1. Cinematic Storytelling\nModern couples want their wedding videos to feel like movies. This means longer-form content, narrative structure, and emotional depth that goes beyond traditional highlight reels.\n\n### 2. Drone Integration\nAerial shots are no longer optional—they're expected. From venue reveals to ceremony overviews, drone footage adds cinematic value and helps tell the complete story.\n\n### 3. Natural Lighting Focus\nGone are the days of harsh artificial lighting. Today's trend emphasizes natural, soft lighting that enhances the romantic atmosphere without overwhelming the moment.\n\n### 4. Candid Moments\nAuthentic, unposed moments are taking center stage. Couples want to see genuine emotions and reactions, not just staged poses.\n\n## Technical Considerations\n\nWhen implementing these trends, it's important to balance creativity with technical excellence. Proper color grading, audio quality, and pacing remain crucial elements that separate professional work from amateur content.",
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
      "Instagram Reels have revolutionized short-form content creation, and the editing techniques used can make or break your video's success. Key elements include perfect timing with music beats, engaging transitions, and maintaining viewer attention throughout the 15-30 second duration.\n\n## The 5 Essential Tips\n\n### 1. Perfect Music Sync\nTiming your cuts to the beat of your music is crucial. This creates a rhythm that keeps viewers engaged and makes your content feel professional.\n\n### 2. Hook Your Audience Fast\nThe first 3 seconds are everything. Use attention-grabbing visuals, text overlays, or quick cuts to immediately capture interest.\n\n### 3. Maintain Visual Consistency\nConsistent color grading and visual style help build your brand identity and make your content instantly recognizable.\n\n### 4. Use Dynamic Transitions\nCreative transitions between clips keep the content flowing smoothly and add visual interest without being distracting.\n\n### 5. Optimize for Mobile\nRemember that most viewers watch Reels on mobile devices. Ensure your text is readable and your visuals work well on small screens.\n\n## Advanced Techniques\n\nFor creators looking to take their Reels to the next level, consider implementing advanced color grading techniques, custom motion graphics, and strategic use of trending audio to maximize reach and engagement.",
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
      "YouTube success isn't just about great content—it's about how that content is presented. Professional video editing can transform good content into great content that keeps viewers watching until the end.\n\n## Key Strategies for Growth\n\n### 1. Consistent Pacing\nMaintaining consistent pacing throughout your videos helps retain viewer attention and reduces bounce rates.\n\n### 2. Engaging Thumbnails\nYour thumbnail is often the first impression viewers have of your content. Professional thumbnail design can significantly increase click-through rates.\n\n### 3. Proper Color Grading\nConsistent color grading across your channel creates a professional look and helps establish your brand identity.\n\n### 4. Compelling Intros and Outros\nWell-crafted intros hook viewers immediately, while effective outros encourage subscriptions and engagement.\n\n## Technical Excellence\n\nProfessional video editing involves more than just cutting clips together. It requires understanding of pacing, audio mixing, color theory, and audience psychology to create content that not only looks great but also performs well on the platform.",
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
      "Color grading is one of the most powerful tools in video editing, capable of transforming the mood and atmosphere of your footage. Understanding color theory, working with different color spaces, and knowing when to apply specific grading techniques can elevate your videos from amateur to professional quality.\n\n## Understanding Color Theory\n\n### Primary Colors\nRed, blue, and yellow form the foundation of color theory. Understanding how these colors interact is crucial for effective color grading.\n\n### Complementary Colors\nColors opposite each other on the color wheel create visual contrast and can be used to make elements pop.\n\n### Color Temperature\nWarm colors (reds, oranges) create cozy, intimate feelings, while cool colors (blues, greens) evoke calmness and professionalism.\n\n## Practical Applications\n\n### Skin Tone Correction\nProper skin tone correction ensures your subjects look natural and healthy, which is especially important for portrait and interview content.\n\n### Mood Setting\nColor grading can completely change the mood of a scene. Warm tones for romance, cool tones for mystery, and desaturated colors for drama.\n\n### Brand Consistency\nMaintaining consistent color grading across all your content helps establish your brand identity and creates a cohesive viewing experience.\n\n## Advanced Techniques\n\nFor those looking to master color grading, consider learning about LUTs (Look-Up Tables), working with RAW footage, and understanding the technical aspects of color spaces and bit depth.",
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
      "Corporate video production requires a different approach than creative content. The focus shifts to clear communication, brand consistency, and professional presentation.\n\n## Key Elements of Corporate Videos\n\n### 1. Brand Guidelines\nMaintaining consistent brand colors, fonts, and messaging across all corporate content is essential for building brand recognition.\n\n### 2. Clear Audio Quality\nProfessional audio quality is non-negotiable in corporate settings. Poor audio can undermine your message and damage your professional image.\n\n### 3. Professional Lighting\nProper lighting ensures your subjects look professional and your content maintains high production value.\n\n### 4. Business Objectives\nEvery corporate video should align with specific business objectives, whether that's increasing sales, improving employee engagement, or enhancing brand awareness.\n\n## Content Types\n\n### Training Videos\nClear, concise training content that helps employees learn new skills or processes.\n\n### Marketing Videos\nContent designed to promote products, services, or brand awareness to potential customers.\n\n### Internal Communications\nVideos for internal use, such as company updates, announcements, or team building content.\n\n## Best Practices\n\nUnderstanding your target audience, maintaining professional standards, and ensuring clear communication are the cornerstones of effective corporate video production.",
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
      "Travel videography combines storytelling with breathtaking visuals to create content that transports viewers to new destinations.\n\n## Essential Techniques\n\n### 1. Planning Your Shots\nBefore you travel, research your destination and plan the types of shots you want to capture. This helps ensure you don't miss important moments.\n\n### 2. Capturing Authentic Moments\nAuthentic moments often make the most compelling travel content. Look for local interactions, cultural experiences, and genuine emotions.\n\n### 3. Using Natural Lighting\nTravel videography often relies on natural lighting. Understanding golden hour, blue hour, and how to work with different lighting conditions is crucial.\n\n### 4. Creating Narrative Arc\nStructure your travel video with a clear beginning, middle, and end to create a compelling story that takes viewers on a journey.\n\n## Equipment Considerations\n\n### Portable Setup\nTravel videography requires equipment that's both high-quality and portable. Consider lightweight cameras, stabilizers, and audio equipment.\n\n### Backup Solutions\nAlways have backup storage and battery solutions when traveling, as opportunities to recharge or replace equipment may be limited.\n\n## Storytelling Elements\n\nFrom drone shots of landscapes to intimate street scenes, travel videos require versatility and creativity to truly capture the essence of a place and inspire others to explore.",
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
      "Great video content is only as good as its audio quality. Audio editing fundamentals include noise reduction, level balancing, EQ adjustments, and proper mixing techniques.\n\n## Core Audio Concepts\n\n### 1. Noise Reduction\nRemoving background noise, hums, and unwanted audio artifacts is essential for professional-quality content.\n\n### 2. Level Balancing\nEnsuring consistent audio levels throughout your content prevents jarring volume changes that can distract viewers.\n\n### 3. EQ Adjustments\nEqualization helps shape the tonal characteristics of your audio, making dialogue clearer and music more impactful.\n\n### 4. Compression\nAudio compression helps control dynamic range and ensures consistent levels, especially important for dialogue and music.\n\n## Technical Considerations\n\n### Audio Formats\nUnderstanding different audio formats and their appropriate uses helps ensure compatibility and quality across different platforms.\n\n### Mixing Techniques\nProper mixing balances dialogue, music, and sound effects to create a cohesive audio experience that supports your visual content.\n\n## Best Practices\n\nUnderstanding how to work with different audio formats, implementing effective compression, and knowing when to use music versus dialogue can make the difference between amateur and professional-quality content.",
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
      "Motion graphics add a dynamic element to video content, helping to convey information, create transitions, and maintain viewer engagement.\n\n## What Are Motion Graphics?\n\nMotion graphics are animated graphic elements that can include text, shapes, icons, and illustrations. They're used to enhance storytelling, convey information, and create visual interest.\n\n## Key Applications\n\n### 1. Text Animation\nAnimated text can draw attention to important information, create emphasis, and add visual interest to otherwise static content.\n\n### 2. Transitions\nCreative transitions between scenes help maintain flow and can reinforce your brand identity through consistent visual language.\n\n### 3. Data Visualization\nMotion graphics excel at making complex data and statistics more engaging and easier to understand.\n\n### 4. Brand Elements\nAnimated logos, icons, and brand elements help reinforce brand identity and create memorable visual experiences.\n\n## Technical Fundamentals\n\n### Keyframe Animation\nUnderstanding keyframe animation is the foundation of motion graphics. Keyframes define the start and end points of animations.\n\n### Easing Functions\nEasing functions control the acceleration and deceleration of animations, making them feel more natural and polished.\n\n### Design Principles\nGood motion graphics follow the same design principles as static graphics: balance, contrast, hierarchy, and consistency.\n\n## Getting Started\n\nFrom simple text animations to complex 3D elements, motion graphics can transform static content into engaging visual experiences that captivate your audience.",
    author: "Emu's Creation Team",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center",
    tags: ["Motion Graphics", "Animation", "Design", "Tutorial"],
  },
];

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Post Not Found
          </h1>
          <p className="text-[var(--text-secondary)] mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="bg-[#D4A514] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#D4A514] transition-colors duration-300"
        >
          <FaArrowLeft className="text-sm" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <div className="mb-6">
          <span className="bg-[#D4A514] text-black px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-[var(--text-secondary)] mb-8">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-xs" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-xs" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-xs" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </motion.header>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-12"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          unoptimized
        />
      </motion.div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="prose prose-lg max-w-none"
      >
        <div className="text-[var(--text-secondary)] leading-relaxed">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-[var(--text-primary)] mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            return (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>
      </motion.article>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 pt-8 border-t border-[var(--border-subtle)]"
      >
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Related Posts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
          Related Posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts
            .filter((p) => p.id !== post.id && p.category === post.category)
            .slice(0, 2)
            .map((relatedPost, index) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[#D4A514] transition-colors duration-300 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center bg-gradient-to-r from-[#D4A514]/10 to-[#B8941F]/10 rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          Ready to Create Amazing Videos?
        </h3>
        <p className="text-[var(--text-secondary)] mb-6">
          Let us help you bring your vision to life with professional video
          editing services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.fiverr.com/users/mehediemu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A514] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#B8941F] transition-all duration-300"
          >
            Get a Quote
          </a>
          <Link
            href="/portfolio"
            className="border border-[var(--border-subtle)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--bg-elevated)]/50 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
