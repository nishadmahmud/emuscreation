"use client";

import { motion } from "framer-motion";
import { FaCheck, FaStar, FaCrown, FaRocket } from "react-icons/fa";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    icon: FaRocket,
    price: "৳15,000",
    period: "per project",
    description: "Perfect for small projects and quick edits",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    features: [
      "Up to 5 minutes final video",
      "Basic color correction",
      "Simple transitions",
      "1 revision included",
      "HD delivery (1080p)",
      "3-day turnaround",
      "Email support",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    icon: FaStar,
    price: "৳35,000",
    period: "per project",
    description: "Most popular for wedding highlights and reels",
    color: "from-[#D4A514] to-[#B8941F]",
    borderColor: "border-[#D4A514]/30",
    bgColor: "bg-[#D4A514]/5",
    features: [
      "Up to 15 minutes final video",
      "Advanced color grading",
      "Custom transitions & effects",
      "3 revisions included",
      "4K delivery available",
      "5-day turnaround",
      "Music licensing included",
      "Priority support",
      "Motion graphics",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    icon: FaCrown,
    price: "৳65,000",
    period: "per project",
    description: "Complete production for corporate and YouTube",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
    features: [
      "Unlimited video length",
      "Cinematic color grading",
      "Advanced motion graphics",
      "5 revisions included",
      "4K/8K delivery",
      "7-day turnaround",
      "Premium music licensing",
      "Dedicated project manager",
      "After Effects animations",
      "Custom graphics & titles",
      "Audio mastering",
    ],
    popular: false,
  },
];

const addOnServices = [
  {
    name: "Rush Delivery",
    description: "24-48 hour turnaround",
    price: "৳5,000",
  },
  {
    name: "Additional Revisions",
    description: "Extra rounds of changes",
    price: "৳2,500",
  },
  {
    name: "Raw Footage Organization",
    description: "Professional file structure",
    price: "৳3,000",
  },
  {
    name: "Social Media Versions",
    description: "Multiple aspect ratios",
    price: "৳4,000",
  },
];

export default function Page() {
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
          className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto"
        >
          Transparent pricing for premium video editing services. Choose the
          plan that fits your project needs.
        </motion.p>
      </header>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative rounded-3xl border-2 ${
              plan.popular
                ? "border-[#D4A514] bg-[var(--bg-elevated)]/80 shadow-2xl scale-105"
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

            {/* Plan Header */}
            <div className="text-center mb-8">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}
              >
                <plan.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {plan.name}
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                {plan.description}
              </p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[var(--text-primary)]">
                  {plan.price}
                </span>
                <span className="text-[var(--text-secondary)] ml-2">
                  {plan.period}
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 flex-grow">
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
                  <FaCheck className="text-[#D4A514] mt-1 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="/contact#quote"
              className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 mt-8 ${
                plan.popular
                  ? "bg-[#D4A514] text-black hover:bg-[#B8941F]"
                  : "bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        ))}
      </section>

      {/* Add-on Services */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Add-on Services
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Enhance your project with these additional services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {service.name}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-[#D4A514]">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "What payment methods do you accept?",
              a: "We accept PayPal, bank transfers, and major credit cards. Payment is typically 50% upfront and 50% upon delivery.",
            },
            {
              q: "Do you offer discounts for bulk projects?",
              a: "Yes! We offer 10% discount for 3+ projects and 15% discount for 5+ projects booked together.",
            },
            {
              q: "What if I need changes after delivery?",
              a: "Each plan includes a specific number of revisions. Additional revisions can be purchased as add-on services.",
            },
            {
              q: "How do you handle project files?",
              a: "We provide secure file transfer links and maintain project files for 30 days after delivery. Extended storage available upon request.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                {faq.q}
              </h3>
              <p className="text-[var(--text-secondary)]">{faq.a}</p>
            </motion.div>
          ))}
        </div>
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
            href="/contact#quote"
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
