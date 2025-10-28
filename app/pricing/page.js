"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

// Pricing data from all service pages
const pricingData = {
  Wedding: [
    {
      id: "wedding-basic",
      name: "Basic Package",
      price: "$200",
      description: "Cinematic Highlight Film Editing",
      duration: "Wedding Highlight 2-3 minutes",
      features: [
        "7-day delivery",
        "2 Revisions",
        "Up to 105 minutes of footage provided",
        "Up to 12 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
      ],
      link: "https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718",
      popular: false,
    },
    {
      id: "wedding-standard",
      name: "Standard Package",
      price: "$350",
      description: "Cinematic Wedding Documentary",
      duration: "Wedding Highlight Maximum 10-15 minutes",
      features: [
        "7-day delivery",
        "2 Revisions",
        "Up to 180 minutes of footage provided",
        "Up to 25 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
      ],
      link: "https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718",
      popular: true,
    },
    {
      id: "wedding-premium",
      name: "Premium Package",
      price: "$550",
      description: "Teaser, Highlight and Full Body",
      duration: "1 min teaser, 3-5 min highlight and 20-30 min full body",
      features: [
        "21-day delivery",
        "2 Revisions",
        "Up to 180 minutes of footage provided",
        "Up to 40 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
      ],
      link: "https://www.fiverr.com/mehediemu/do-professional-full-wedding-video-editing?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=2&imp_id=8f477a21-5573-4d90-a8f0-02eb3eff5718",
      popular: false,
    },
  ],
  Reels: [
    {
      id: "reels-basic",
      name: "Basic Package",
      price: "$60",
      description: "1 short reel or TikTok edit with trendy cuts",
      duration: "1 short reel or TikTok edit",
      features: [
        "3-day delivery",
        "2 Revisions",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "1 Commercially licensed music track",
        "1 Commercially licensed video clip",
        "1 Commercially licensed image",
      ],
      link: "https://www.fiverr.com/users/mehediemu",
      popular: false,
    },
    {
      id: "reels-standard",
      name: "Standard Package",
      price: "$150",
      description: "Up to 3 reels or TikToks with smooth transitions",
      duration: "Up to 3 reels or TikToks",
      features: [
        "5-day delivery",
        "3 Revisions",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "2 Commercially licensed music tracks",
        "2 Commercially licensed video clips",
        "3 Commercially licensed images",
      ],
      link: "https://www.fiverr.com/users/mehediemu",
      popular: true,
    },
    {
      id: "reels-premium",
      name: "Premium Package",
      price: "$250",
      description: "5 reels or TikToks with viral edits",
      duration: "5 reels or TikToks with viral edits",
      features: [
        "5-day delivery",
        "5 Revisions",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "Include source file",
        "2 Commercially licensed music tracks",
        "2 Commercially licensed video clips",
        "3 Commercially licensed images",
      ],
      link: "https://www.fiverr.com/users/mehediemu",
      popular: false,
    },
  ],
  YouTube: [
    {
      id: "youtube-basic",
      name: "Basic Package",
      price: "$175",
      description: "1 min Long + 2 short reel edits",
      duration: "1 min Long + 2 short reel edits",
      features: [
        "2-day delivery",
        "2 Revisions",
        "Up to 60 minutes of footage provided",
        "Up to 30 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
        "3 Commercially licensed music tracks",
        "2 Commercially licensed video clips",
        "2 Commercially licensed images",
      ],
      link: "https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409",
      popular: false,
    },
    {
      id: "youtube-standard",
      name: "Standard Package",
      price: "$320",
      description: "1 Min Long to 5 reels editing",
      duration: "1 Min Long to 5 reels editing",
      features: [
        "4-day delivery",
        "2 Revisions",
        "Up to 75 minutes of footage provided",
        "Up to 5 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
        "1 Commercially licensed music track",
        "2 Commercially licensed video clips",
        "3 Commercially licensed images",
      ],
      link: "https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409",
      popular: true,
    },
    {
      id: "youtube-premium",
      name: "Premium Package",
      price: "$445",
      description: "1 min long + 10 reels editing",
      duration: "1 min long + 10 reels editing",
      features: [
        "7-day delivery",
        "2 Revisions",
        "Up to 300 minutes of footage provided",
        "Up to 15 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "Thumbnail included",
        "Include source file",
        "5 Commercially licensed music tracks",
        "3 Commercially licensed video clips",
        "5 Commercially licensed images",
      ],
      link: "https://www.fiverr.com/mehediemu/professionally-editing-your-wedding-videos?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=7&imp_id=000fdc89-61e8-4432-b9bf-d4a8ee6ce409",
      popular: false,
    },
  ],
  Travel: [
    {
      id: "travel-package",
      name: "Social Media Video Editing",
      price: "$530",
      description: "Feature + Highlight Film",
      duration: "Up to 20-30 min Feature film + Up to 5-min Highlight Film",
      features: [
        "10-day delivery",
        "2 Revisions",
        "Up to 120 minutes of footage provided",
        "Up to 30 minutes running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Include source file",
        "10 Commercially licensed music tracks",
      ],
      link: "https://www.fiverr.com/mehediemu/edit-your-full-wedding-movie?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=6&imp_id=07b59ad4-d747-4fd6-b7fb-ecd6a3241a35",
      popular: true,
    },
  ],
  Corporate: [
    {
      id: "corporate-basic",
      name: "Basic Package",
      price: "$505",
      description: "1 Min Film edit - Short Teaser (1-2 min)",
      duration: "1 Min Film edit",
      features: [
        "7-day delivery",
        "2 Revisions",
        "Up to 45 minutes of footage provided",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "Thumbnail included",
        "Include source file",
        "1 Commercially licensed music track",
      ],
      link: "https://www.fiverr.com/mehediemu/do-documentary-video-editing-and-short-film?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=9&imp_id=70d18daa-f789-4afc-ba62-facb65cd8e74",
      popular: false,
    },
    {
      id: "corporate-standard",
      name: "Standard Package",
      price: "$700",
      description: "5 Min film edit - Highlight (3-5 min)",
      duration: "5 Min film edit",
      features: [
        "10-day delivery",
        "3 Revisions",
        "Up to 300 minutes of footage provided",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "Thumbnail included",
        "Include source file",
        "3 Commercially licensed music tracks",
      ],
      link: "https://www.fiverr.com/mehediemu/do-documentary-video-editing-and-short-film?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=9&imp_id=70d18daa-f789-4afc-ba62-facb65cd8e74",
      popular: true,
    },
    {
      id: "corporate-premium",
      name: "Premium Package",
      price: "$1,510",
      description: "10 Min film edit - Full Film (up to 60 min)",
      duration: "10 Min film edit",
      features: [
        "10-day delivery",
        "4 Revisions",
        "Unlimited minutes of footage provided",
        "Up to 1 minute running time",
        "Color grading",
        "Sound design & mixing",
        "Motion graphics",
        "Subtitles",
        "Thumbnail included",
        "Include source file",
        "6 Commercially licensed music tracks",
      ],
      link: "https://www.fiverr.com/mehediemu/do-documentary-video-editing-and-short-film?context_referrer=seller_page&ref_ctx_id=19c1255f9bbd40899c37d71793e77bf8&pckg_id=1&pos=9&imp_id=70d18daa-f789-4afc-ba62-facb65cd8e74",
      popular: false,
    },
  ],
};

const categories = [
  "All",
  "Wedding",
  "Reels",
  "YouTube",
  "Travel",
  "Corporate",
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get all plans or filtered by category
  const getFilteredPlans = () => {
    if (activeCategory === "All") {
      return Object.entries(pricingData).flatMap(([category, plans]) =>
        plans.map((plan) => ({ ...plan, category }))
      );
    }
    return pricingData[activeCategory].map((plan) => ({
      ...plan,
      category: activeCategory,
    }));
  };

  const filteredPlans = getFilteredPlans();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      {/* Header */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-6"
        >
          Pricing & Packages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto"
        >
          Transparent pricing for premium video editing services. Choose the
          plan that fits your project needs.
        </motion.p>
      </header>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
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

      {/* Pricing Cards */}
      <section
        className={`grid gap-8 mb-20 ${
          filteredPlans.length === 1
            ? "grid-cols-1 max-w-md mx-auto"
            : filteredPlans.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-3xl border-2 ${
              plan.popular
                ? "border-[#D4A514] bg-[var(--bg-elevated)]/80 shadow-2xl"
                : "border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40"
            } p-8 transition-all duration-300 hover:shadow-xl md:hover:scale-105 flex flex-col`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#D4A514] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}

            {/* Category Badge */}
            {activeCategory === "All" && (
              <div className="absolute top-4 right-4">
                <div className="bg-[var(--bg-elevated)] text-[var(--text-secondary)] px-3 py-1 rounded-full text-xs font-semibold border border-[var(--border-subtle)]">
                  {plan.category}
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {plan.name}
              </h3>
              <p className="text-[var(--text-secondary)] mb-2 text-sm">
                {plan.description}
              </p>
              <p className="text-[var(--text-secondary)] mb-4 text-xs italic">
                {plan.duration}
              </p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--text-primary)]">
                  {plan.price}
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 flex-grow mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + featureIndex * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <FaCheck className="text-[#D4A514] mt-1 flex-shrink-0 text-sm" />
                  <span className="text-[var(--text-secondary)] text-sm">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-[#D4A514] text-black hover:bg-[#B8941F]"
                  : "bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Order Now
            </motion.a>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center bg-gradient-to-r from-[#D4A514]/10 to-[#B8941F]/10 rounded-3xl p-12"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Get a custom quote for your specific project needs. We&apos;re here to
          help bring your vision to life.
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
            Get Custom Quote
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
