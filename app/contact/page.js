export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:py-6">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          Get a Quote
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Tell us about your project. We typically reply within one business
          day.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2">
          <form action="#" method="post" className="space-y-6">
            <div id="quote" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  WhatsApp/Telegram
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Country / Time zone
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="USA / GMT-5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                >
                  <option>Wedding</option>
                  <option>Reels / Short-form</option>
                  <option>YouTube</option>
                  <option>Travel</option>
                  <option>Corporate / Docu</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Deadline (date / timezone)
                </label>
                <input
                  id="deadline"
                  name="deadline"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="Oct 30, 2025 / GMT+6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Duration / length
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                  placeholder="e.g., 45–60s, 8–12 min"
                />
              </div>
              <div>
                <label
                  htmlFor="aspect"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Aspect ratio
                </label>
                <select
                  id="aspect"
                  name="aspect"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                >
                  <option>9:16</option>
                  <option>16:9</option>
                  <option>1:1</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="references"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                References (links)
              </label>
              <input
                id="references"
                name="references"
                type="url"
                multiple
                className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                placeholder="https://... , https://..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="music"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Music
                </label>
                <select
                  id="music"
                  name="music"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                >
                  <option>I&apos;ll provide</option>
                  <option>Choose for me (Musicbed/Envato)</option>
                </select>
              </div>    
              <div>
                <label
                  htmlFor="subtitles"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Subtitles
                </label>
                <select
                  id="subtitles"
                  name="subtitles"
                  className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-3 py-2 text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-[#D4A514]/30 focus:border-[#D4A514]/50"
                placeholder="Goals, footage type, tools, turnaround, must-haves..."
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-lg bg-[#D4A514] text-black px-4 py-2 font-medium hover:opacity-90"
              >
                Submit
              </button>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                WhatsApp
              </a>
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Direct
            </h2>
            <ul className="mt-2 space-y-1 text-[var(--text-secondary)]">
              <li>
                Email:{" "}
                <span className="text-[var(--text-primary)]">
                  hello@emuscreation.com
                </span>
              </li>
              <li>
                WhatsApp:{" "}
                <span className="text-[var(--text-primary)]">
                  +000 0000 0000
                </span>
              </li>
              <li>
                Timezone:{" "}
                <span className="text-[var(--text-primary)]">
                  GMT+6 (Dhaka)
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Frequently requested
            </h2>
            <ul className="mt-2 list-disc list-inside text-[var(--text-secondary)]">
              <li>
                <a
                  className="underline hover:text-[var(--text-primary)]"
                  href="/pricing"
                >
                  Pricing & packages
                </a>
              </li>
              <li>
                <a
                  className="underline hover:text-[var(--text-primary)]"
                  href="/portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="underline hover:text-[var(--text-primary)]"
                  href="/process"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
