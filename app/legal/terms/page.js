export const metadata = {
  title: "Terms & Conditions — Emu’s Creation",
  description:
    "Service terms, scope, payments, revisions, and legal conditions.",
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Terms & Conditions
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Effective date: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-8 text-white/80">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Scope of Services
          </h2>
          <p>
            We provide professional video editing services, including but not
            limited to wedding edits, reels/short-form content, YouTube edits,
            travel vlogs, and corporate/docu edits. Deliverables, formats,
            timelines, and add-ons will be outlined in your quote or order
            confirmation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Project Workflow</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Brief & references</li>
            <li>Footage upload (Drive/Dropbox/Vimeo)</li>
            <li>Editing & first cut</li>
            <li>Review & revisions</li>
            <li>Final delivery</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Provide clear brief, references, and assets (logos/fonts/colors)
            </li>
            <li>
              Supply licensed materials, or request licensed music where offered
            </li>
            <li>Ensure permissions for any third-party content provided</li>
            <li>Provide timely feedback within agreed review windows</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Revisions</h2>
          <p>
            Revisions included per the package or agreement. Additional
            revisions are billed at the stated rates. Substantial scope changes
            may require a new quote.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Payments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Payment terms vary by scope and client type; international
              payments accepted (e.g., Payoneer/Wise)
            </li>
            <li>Deposits may be required to start work</li>
            <li>
              Final deliverables are released upon receipt of final payment
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Turnaround & Rush
          </h2>
          <p>
            Estimated timelines depend on scope and asset readiness. Rush
            delivery may be available at additional cost.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Delivery & Formats
          </h2>
          <p>
            Standard delivery formats include H.264/H.265 at 4K/1080p unless
            otherwise specified. Source project files may be included if stated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Ownership & Licensing
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Client-provided assets remain client property</li>
            <li>
              Final deliverables are licensed to the client per agreement after
              full payment
            </li>
            <li>
              We may showcase non-confidential work in our portfolio unless an
              NDA applies
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Confidentiality & NDA
          </h2>
          <p>
            We treat client materials as confidential and can sign an NDA upon
            request.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Cancellation & Refunds
          </h2>
          <p>
            If a project is canceled after work begins, fees for work completed
            up to the cancellation date will apply. Deposits may be
            non-refundable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, we are not liable for
            indirect or consequential damages. Our total liability will not
            exceed the fees paid for the specific project.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Governing Law</h2>
          <p>
            These Terms are governed by applicable laws of your and our
            jurisdictions. Disputes will be resolved in good faith, and if
            necessary, via appropriate legal forums.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p>
            Questions about these Terms? Contact:{" "}
            <a
              className="underline underline-offset-4 hover:text-white"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
