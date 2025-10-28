const processSteps = [
  {
    id: 1,
    title: "Submit Brief & References",
    description:
      "Share your project details, goals, and any reference videos or styles you love. Include duration, aspect ratio, deadline, and specific requirements.",
    icon: "📝",
    details: [
      "Project type and scope",
      "Target duration and format",
      "Reference links (YouTube/Vimeo)",
      "Brand guidelines (if applicable)",
      "Deadline and timezone",
    ],
  },
  {
    id: 2,
    title: "Upload Footage",
    description:
      "Share your raw footage via Google Drive, Dropbox, or Vimeo. Include frame rate, resolution, and any additional assets like logos or fonts.",
    icon: "☁️",
    details: [
      "Google Drive / Dropbox links",
      "Frame rate and resolution info",
      "Brand assets (logos, fonts, colors)",
      "Music tracks (if provided)",
      "File organization tips",
    ],
  },
  {
    id: 3,
    title: "Editing & First Cut",
    description:
      "We create your first draft with professional editing, color grading, sound design, and pacing. Timeline varies by project scope.",
    icon: "✂️",
    details: [
      "Narrative structure and pacing",
      "Professional color grading",
      "Sound design and audio mix",
      "48-72h for shorts/reels",
      "5-7 days for weddings/YouTube",
    ],
  },
  {
    id: 4,
    title: "Review & Revisions",
    description:
      "You review the first cut and provide feedback. We make revisions based on your notes, ensuring everything meets your vision.",
    icon: "👀",
    details: [
      "Frame-accurate feedback welcome",
      "Consolidated revision notes",
      "Quick turnaround on changes",
      "Up to 2 rounds included",
      "Clear communication throughout",
    ],
  },
  {
    id: 5,
    title: "Final Delivery",
    description:
      "Receive your finished video in your preferred format and resolution. Project files available upon request.",
    icon: "🎬",
    details: [
      "H.264/H.265 export options",
      "4K/1080p delivery",
      "Multiple aspect ratios",
      "Project files (if included)",
      "Quick re-export service",
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:py-8">
      <header className="mb-10 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          How It Works
        </h1>
        <p className="mt-3 text-[var(--text-secondary)] max-w-2xl mx-auto">
          Our streamlined 5-step process ensures smooth collaboration and
          exceptional results. From brief to delivery, we keep you informed
          every step of the way.
        </p>
      </header>

      {/* Process Steps */}
      <section className="space-y-12">
        {processSteps.map((step, index) => (
          <div key={step.id}>
            <div className="flex items-start gap-6">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 flex items-center justify-center shadow-sm">
                  <div className="text-2xl">{step.icon}</div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs font-semibold text-[var(--text-primary)]">
                    STEP
                  </div>
                  <div className="text-lg font-bold text-[#D4A514]">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A514] flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="mt-16 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
          Typical Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A514] mb-2">48-72h</div>
            <div className="text-sm text-[var(--text-secondary)]">
              Reels & Short-form
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A514] mb-2">
              5-7 days
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              Wedding Highlights
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D4A514] mb-2">
              7-10 days
            </div>
            <div className="text-sm text-[var(--text-secondary)]">
              YouTube & Corporate
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-12 text-center">
        <p className="text-[var(--text-secondary)] mb-4">
          Ready to start your project?
        </p>
        <a
          href="/contact#quote"
          className="inline-block rounded-lg bg-[#D4A514] text-black px-6 py-2 font-medium hover:opacity-90"
        >
          Get Started Today
        </a>
      </footer>
    </main>
  );
}
