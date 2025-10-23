export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 ">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          About Us
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Cinematic post‑production for weddings, reels, YouTube, travel, and
          corporate stories - crafted with taste, speed, and clear
          communication.
        </p>
      </header>

      {/* Studio stats */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            7+
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              yrs
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Editing experience
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            250+
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              projects
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Delivered across niches
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            18+
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              countries
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Clients served worldwide
          </div>
        </div>
      </section>

      {/* Row 1: Who we are full width */}
      <section className="grid grid-cols-1 gap-6 lg:gap-8">
        <article className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Who we are
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Emu&apos;s Creation is a premium video editing studio serving global
            clients across platforms - Fiverr, Upwork, and direct. We specialize
            in emotion‑driven wedding edits, scroll‑stopping shorts,
            channel‑growing YouTube videos, and polished corporate pieces.
          </p>
          <p className="mt-3 text-[var(--text-secondary)]">
            Tools include Premiere Pro (2024/25), DaVinci Resolve, and After
            Effects where needed. We maintain subscriptions to Musicbed/Envato
            for music licensing. Our workflow emphasizes narrative clarity,
            tasteful pacing, color consistency, and tight sound design.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--text-secondary)]">
            <li className="list-disc list-inside">
              Wedding highlight + feature films
            </li>
            <li className="list-disc list-inside">
              Short‑form reels with captions
            </li>
            <li className="list-disc list-inside">YouTube edits for growth</li>
            <li className="list-disc list-inside">
              Corporate/promo edits with polish
            </li>
          </ul>
        </article>
        {/* Row 2: Values + Tools two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Studio values
            </h3>
            <ul className="mt-3 space-y-2 text-[var(--text-secondary)]">
              <li>Story first - edits that serve emotion and clarity</li>
              <li>Quality and consistency - color, rhythm, sound</li>
              <li>Speed with communication - dependable timelines</li>
              <li>Privacy - NDA on request, secure handling</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Tools
            </h3>
            <ul className="mt-3 space-y-2 text-[var(--text-secondary)]">
              <li>Premiere Pro, DaVinci Resolve, After Effects</li>
              <li>Plugins: Neat Video, RX, popular LUTs</li>
              <li>Music: Musicbed, Envato Elements</li>
              <li>Delivery: H.264/H.265, 4K/1080p, multiple ratios</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Weddings
          </h3>
          <p className="mt-2 text-[var(--text-secondary)]">
            Highlights, features, vows/speeches, licensed music options, color
            grade, audio mix.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Reels & Shorts
          </h3>
          <p className="mt-2 text-[var(--text-secondary)]">
            Fast cuts, captions, beat‑matched pacing, platform‑ready aspect
            ratios.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            YouTube & Corporate
          </h3>
          <p className="mt-2 text-[var(--text-secondary)]">
            Channel‑growth edits, polished promos, docs, brand‑consistent
            graphics and sound.
          </p>
        </div>
      </section>

      <footer className="mt-10 flex flex-wrap items-center gap-3 text-[var(--text-secondary)]">
        Looking to start a project?
        <a
          href="https://www.fiverr.com/users/mehediemu"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#D4A514] text-black px-3 py-1.5 font-medium"
        >
          Get a Quote
        </a>
        <a
          href="/portfolio"
          className="underline hover:text-[var(--text-primary)]"
        >
          View Portfolio
        </a>
      </footer>
    </main>
  );
}
