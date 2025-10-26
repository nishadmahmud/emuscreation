const testimonials = [
  {
    id: 1,
    rating: 5.0,
    quote:
      "Absolutely stunning wedding highlight! The color grading and pacing were perfect. Our guests couldn't stop talking about it. Delivered exactly on time.",
    name: "Sarah & Michael",
    service: "Wedding",
    country: "USA",
    year: "2024",
  },
  {
    id: 2,
    rating: 5.0,
    quote:
      "My Instagram reels engagement tripled after Emu's edits. The beat-matching and captions are spot-on. Highly recommend for content creators!",
    name: "Jessica Chen",
    service: "Reels",
    country: "Canada",
    year: "2024",
  },
  {
    id: 3,
    rating: 5.0,
    quote:
      "Professional YouTube editing that actually grows your channel. The storytelling and pacing keep viewers engaged. Worth every penny.",
    name: "Marcus Rodriguez",
    service: "YouTube",
    country: "UK",
    year: "2024",
  },
  {
    id: 4,
    rating: 5.0,
    quote:
      "Travel vlog editing that captures the essence of our adventures. The color grading makes every destination look magical.",
    name: "Emma & James",
    service: "Travel",
    country: "Australia",
    year: "2024",
  },
  {
    id: 5,
    rating: 5.0,
    quote:
      "Corporate video that exceeded our expectations. Clean, professional, and perfectly aligned with our brand guidelines.",
    name: "TechStart Inc.",
    service: "Corporate",
    country: "Germany",
    year: "2024",
  },
  {
    id: 6,
    rating: 5.0,
    quote:
      "Fast turnaround, excellent communication, and edits that make our content stand out. Been working together for 2+ years now.",
    name: "Alex Thompson",
    service: "YouTube",
    country: "USA",
    year: "2024",
  },
];

const renderStars = (rating) => {
  return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-8">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          Testimonials / Clients
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          What our clients say about our video editing services across weddings,
          reels, YouTube, and corporate projects.
        </p>
      </header>

      {/* Stats */}
      <section className="mb-12 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5 text-center">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            4.9
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              /5
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Average rating
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5 text-center">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            98%
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              +
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Client satisfaction
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5 text-center">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            85%
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              +
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">
            Repeat clients
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 p-5 text-center">
          <div className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
            24h
            <span className="ml-1 text-base align-top text-[var(--text-secondary)]">
              avg
            </span>
          </div>
          <div className="mt-1 text-[var(--text-secondary)]">Response time</div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-6"
          >
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#D4A514]">
                {renderStars(testimonial.rating)}
              </span>
              <span className="text-sm text-[var(--text-secondary)] ml-2">
                {testimonial.rating}
              </span>
            </div>
            <blockquote className="text-[var(--text-secondary)] italic mb-4">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-[var(--text-primary)]">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {testimonial.service} • {testimonial.country}
                </div>
              </div>
              <div className="text-xs text-[var(--text-secondary)]">
                {testimonial.year}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-12 text-center">
        <p className="text-[var(--text-secondary)] mb-4">
          Ready to join our satisfied clients?
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
