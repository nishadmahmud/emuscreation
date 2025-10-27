import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../components/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emu’s Creation",
  description:
    "Professional video editing studio — Weddings, Reels, YouTube & more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 backdrop-blur-sm">
              <div className="mx-auto w-full max-w-7xl px-4">
                <Navbar />
              </div>
            </header>
            <main className="flex-1">
              <div className="mx-auto w-full max-w-7xl px-4 py-4">{children}</div>
            </main>
            <footer className="mt-12 border-t border-[var(--border-subtle)]">
              <div className="mx-auto w-full max-w-7xl px-4 py-8">
                <Footer />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
