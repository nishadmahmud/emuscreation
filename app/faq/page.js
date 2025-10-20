export default function Page() {
return (
<main className="mx-auto w-full max-w-4xl px-4 py-12 sm:py-16">
<header className="mb-10 sm:mb-12">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">Frequently Asked Questions</h1>
<p className="mt-3 text-[var(--text-secondary)]">Answers to common questions about workflow, deliverables, revisions, privacy, and payments.</p>
</header>

<div className="space-y-4">
<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>What is the typical turnaround time?</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Turnaround depends on scope: reels/shorts are often <span className="text-[var(--text-primary)]">48–72 hours</span>, YouTube edits vary by length, and weddings are scheduled by project complexity. We’ll confirm an ETA after reviewing your brief and footage.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>What’s your revisions policy?</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Most packages include fair revisions focused on the agreed scope. We gather consolidated notes (timestamps welcome) and turn revisions quickly. Major creative pivots or out‑of‑scope changes may be quoted separately.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>How do I share footage and references?</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Share via <span className="text-[var(--text-primary)]">Google Drive</span>, <span className="text-[var(--text-primary)]">Dropbox</span>, or <span className="text-[var(--text-primary)]">Vimeo</span> links. Include frame rate, resolution, and any brand assets (logo/fonts/colors). Reference links (YouTube/Vimeo/Drive) are highly encouraged.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>Do you handle music licensing and sound design?</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Yes. We can cut to your provided tracks or source from licensed libraries (e.g., Musicbed/Envato). We also provide tight sound design and mix. Licensing fees (if any) are passed through transparently.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>Raw footage size limits and formats?</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
We support most camera/mobile codecs. For large projects, please upload proxies when possible. If total size exceeds your cloud limits, we can coordinate staged transfers.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>NDA and privacy</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
We respect confidentiality. We can sign an NDA upon request. Files are handled securely, used only for editing/delivery, and removed on request per our <a href="/legal/privacy" className="underline hover:text-[var(--text-primary)]">Privacy Policy</a>.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>Languages, subtitles, and captions</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Subtitles/captions are available as an add‑on. Provide language and style preferences. Multi‑language options can be arranged for weddings, YouTube, and corporate content.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>Payments and terms</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
International clients are welcome. We accept <span className="text-[var(--text-primary)]">Payoneer</span>/<span className="text-[var(--text-primary)]">Wise</span>. Typical terms: 50% to start, 50% on final export. Monthly or milestone billing available for ongoing YouTube work.
</div>
</details>

<details className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 p-5 transition-colors open:bg-[var(--bg-elevated)]">
<summary className="-m-5 flex items-center justify-between rounded-xl p-5 cursor-pointer select-none list-none text-[var(--text-primary)] font-medium">
<span>Rush and emergency edits</span>
<span aria-hidden className="ml-4 relative inline-flex h-6 w-6 items-center justify-center text-[var(--text-secondary)]">
<span className="absolute transition-all duration-200 opacity-100 scale-100 group-open:opacity-0 group-open:scale-75">+</span>
<span className="absolute transition-all duration-200 opacity-0 scale-75 group-open:opacity-100 group-open:scale-100">−</span>
</span>
</summary>
<div className="mt-3 text-[var(--text-secondary)]">
Need it ASAP? We offer rush options subject to availability. Share your deadline and timezone; we’ll confirm feasibility and any applicable rush fee before kickoff.
</div>
</details>
</div>

<footer className="mt-12 text-[var(--text-secondary)]">
Can’t find your answer? <a href="/contact" className="text-[var(--text-primary)] underline hover:opacity-80">Contact us</a> or <a href="/pricing" className="text-[var(--text-primary)] underline hover:opacity-80">view pricing</a>.
</footer>
</main>
);
}

