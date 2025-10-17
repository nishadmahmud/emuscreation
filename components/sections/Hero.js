export default function Hero() {
return (
<section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
  {/* Background video */}
  <div className="absolute inset-0 -z-10">
    <video
      className="h-full w-full object-cover"
      src="/videos/showreel.mp4"
      poster="/images/showreel-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0F12]" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0F12] to-transparent" />
  </div>

  {/* Content */}
  <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:py-28 md:py-36">
    <div className="max-w-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
        Professional Video Editing, Done Right.
      </h1>
      <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
        Weddings, Reels, YouTube & Travel — cinematic edits with crisp color and clean sound.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#D4A514] text-black px-6 py-3 font-medium">
          Get a Quote
        </a>
        <a href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white hover:bg-white/15">
          View Portfolio
        </a>
      </div>
      <div className="mt-6 flex items-center gap-3 text-white/70 text-sm">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        <span>Trusted by global clients — on-time delivery</span>
      </div>
    </div>
  </div>
</section>
);
}

