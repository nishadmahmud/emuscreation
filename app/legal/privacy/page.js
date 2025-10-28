export const metadata = {
  title: "Privacy Policy — Emu’s Creation",
  description:
    "How Emu’s Creation collects, uses, and protects your information.",
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Effective date: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-8 text-white/80">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Introduction</h2>
          <p>
            Emu&apos;s Creation is committed to protecting your privacy. This Policy
            explains what information we collect, how we use it, and your
            rights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Contact details: name, email, phone/WhatsApp, country/time zone
            </li>
            <li>
              Project details: references, footage links, specifications,
              deadlines
            </li>
            <li>
              Files you share: video/audio/assets via Drive/Dropbox/Vimeo links
            </li>
            <li>
              Usage data: analytics events (page views, CTA clicks) via GA4/Meta
              Pixel
            </li>
            <li>
              Technical data: device, browser, IP (for security and analytics)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve editing services</li>
            <li>Respond to inquiries and send quotes</li>
            <li>Project management, delivery, and support</li>
            <li>Security, fraud prevention, and legal compliance</li>
            <li>Analytics to improve site experience and performance</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Legal Bases (EEA/UK)
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Contract performance (when you request or purchase services)
            </li>
            <li>
              Legitimate interests (site functionality, analytics, security)
            </li>
            <li>
              Consent (optional marketing/communications, where applicable)
            </li>
            <li>Legal obligation (records and compliance)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Retention</h2>
          <p>
            We retain information for as long as necessary to fulfill the
            purposes above, comply with legal obligations, resolve disputes, and
            enforce agreements. Footage/files may be deleted after project
            completion per our workflow and storage limits unless otherwise
            agreed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Sharing Your Information
          </h2>
          <p>
            We may share information with trusted providers who help us operate
            (e.g., hosting, analytics, communications). We require them to
            protect your data and use it only for specified purposes. We do not
            sell your personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            International Transfers
          </h2>
          <p>
            Your information may be processed in countries outside your own.
            Where required, we use appropriate safeguards (e.g., standard
            contractual clauses).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or restrict processing of your personal data, and to data
            portability and objection. To exercise these rights, contact us at
            the email below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            information. No method of transmission or storage is 100% secure; we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Cookies & Similar Technologies
          </h2>
          <p>
            We use cookies/trackers for essential functionality and analytics.
            You can manage preferences via your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Third-Party Links & Embeds
          </h2>
          <p>
            Our site may link to or embed content from third parties (e.g.,
            YouTube, Vimeo). Their privacy practices are governed by their own
            policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Children’s Privacy
          </h2>
          <p>
            Our services are not directed to children under 13 (or relevant
            local age). We do not knowingly collect children’s personal
            information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Changes to This Policy
          </h2>
          <p>
            We may update this Policy periodically. We will post the updated
            version with an effective date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p>
            For privacy inquiries or requests, contact:{" "}
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
