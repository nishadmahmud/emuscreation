import Link from "next/link";
import { FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaVimeo } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Footer() {
  return (
    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] backdrop-blur px-6 py-8 md:px-10 md:py-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 space-y-4">
          <div
            className={`${playfair.className} text-2xl font-semibold tracking-wide bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent`}
          >
            Emu’s Creation
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Professional video editing studio. Cinematic edits, crisp color,
            clean sound - delivered on time.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)] mb-3">
            Pages
          </div>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/pricing"
              >
                Pricing & Packages
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/process"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="https://www.fiverr.com/users/mehediemu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)] mb-3">
            Services
          </div>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/services/wedding"
              >
                Wedding Editing
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/services/reels"
              >
                Reels & Short-Form
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/services/youtube"
              >
                YouTube Editing
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/services/travel"
              >
                Travel Vlog Editing
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--text-primary)] hover:underline underline-offset-4"
                href="/services/corporate"
              >
                Corporate/Documentary
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)] mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a 
                  className="hover:text-[var(--text-primary)]" 
                  href="https://www.fiverr.com/users/mehediemu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fiverr Account
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/30 transition-all duration-300 font-medium"
                  href="https://wa.me/8801743025398"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>+8801743025398</span>
                </a>
              </li>
              <li>
                <span className="text-[var(--text-secondary)]">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)] mb-3">
              Follow
            </div>
            <ul className="flex gap-3">
              <li>
                <a
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]/50 text-[var(--text-secondary)] hover:text-[#0077B5]"
                  href="https://www.linkedin.com/company/emu-s-creation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin aria-hidden className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]/50 text-[var(--text-secondary)] hover:text-[#FF0000]"
                  href="https://www.youtube.com/@emuscreation1646"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube aria-hidden className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]/50 text-[var(--text-secondary)] hover:text-[#1877F2]"
                  href="https://www.facebook.com/emuscreation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook aria-hidden className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]/50 text-[var(--text-secondary)] hover:text-[#1AB7EA]"
                  href="https://vimeo.com/user91230351"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vimeo"
                >
                  <FaVimeo aria-hidden className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[var(--text-secondary)]">
        <div>
          © {new Date().getFullYear()} Emu’s Creation. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-[var(--text-primary)]" href="/legal/privacy">
            Privacy Policy
          </Link>
          <span className="text-[var(--text-secondary)]/50">•</span>
          <Link className="hover:text-[var(--text-primary)]" href="/legal/terms">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
