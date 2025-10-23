"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaVimeo, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Get in <span className="text-[#D4A514]">Touch</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-6">
              Ready to bring your vision to life? Connect with us through any of these channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Fiverr Account */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-6 border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaExternalLinkAlt className="text-black text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Fiverr Account
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm">
                Get professional video editing services with guaranteed quality and fast delivery.
              </p>
              <a
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A514] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#B8941F] transition-colors duration-300"
              >
                Visit Fiverr Profile
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-6 border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                WhatsApp
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm">
                Chat with us directly for quick inquiries and project discussions.
              </p>
              <a
                href="https://wa.me/8801743025398"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20B358] transition-colors duration-300"
              >
                Message on WhatsApp
                <FaWhatsapp className="text-sm" />
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[var(--bg-elevated)] rounded-2xl p-6 border border-[var(--border-subtle)] hover:border-[#D4A514]/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-[#D4A514] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-black text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Location
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm">
                Based in the heart of Bangladesh, serving clients worldwide.
              </p>
              <div className="bg-[var(--bg-primary)] rounded-xl p-4 border border-[var(--border-subtle)]">
                <p className="text-[var(--text-primary)] font-medium">
                  Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[var(--bg-elevated)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Follow Our Work
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Stay updated with our latest projects and behind-the-scenes content.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/emu-s-creation"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#0077B5] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#005885] transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@emuscreation1646"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#FF0000] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#CC0000] transition-colors duration-300"
              >
                <FaYoutube className="text-xl" />
                YouTube
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/emuscreation/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#1877F2] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#166FE5] transition-colors duration-300"
              >
                <FaFacebook className="text-xl" />
                Facebook
              </motion.a>

              {/* Vimeo */}
              <motion.a
                href="https://vimeo.com/user91230351"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#1AB7EA] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#17A3D1] transition-colors duration-300"
              >
                <FaVimeo className="text-xl" />
                Vimeo
              </motion.a>
            </div>
          </motion.div>
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
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Choose your preferred way to connect and let&apos;s bring your vision to life.
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