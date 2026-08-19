import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/data-deletion")({
  head: () =>
    buildHead("/data-deletion", {
      title: "Data Deletion Instructions — Dravonix Media Private Limited",
      description:
        "Request deletion of your personal data, including WhatsApp Business conversation data, from Dravonix Media Private Limited.",
    }),
  component: DataDeletionPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-[var(--muted-text)]">{children}</div>
    </section>
  );
}

function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 md:p-12">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Data Deletion Instructions
          </h1>
          <div className="mt-2 text-sm text-[var(--muted-text)]">
            <p>Dravonix Media Private Limited · dravonixmedia.com</p>
          </div>

          <Section title="Your right to deletion">
            <p>
              Dravonix Media respects your right to control your personal data. If you would like us
              to delete any personal data we have collected about you (including data received
              through our WhatsApp Business integration), please follow the instructions below.
            </p>
          </Section>

          <Section title="How to Request Data Deletion">
            <p>
              To request deletion, email us at:{" "}
              <a
                href="mailto:admin@dravonixmedia.com"
                className="text-[var(--cyan-accent)] transition-colors hover:text-white"
              >
                admin@dravonixmedia.com
              </a>
            </p>
            <p>
              Please use the subject line: <strong className="text-white">Data Deletion Request</strong>
            </p>
            <p>Include the following information in your email:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your full name</li>
              <li>The phone number or WhatsApp number associated with the data</li>
              <li>A brief description of your deletion request</li>
            </ul>
          </Section>

          <Section title="What Happens Next">
            <ol className="list-decimal space-y-2 pl-5">
              <li>We verify your identity to protect against unauthorized deletion requests.</li>
              <li>We locate and delete all personal data associated with your account.</li>
              <li>We confirm completion via email, typically within 30 days.</li>
            </ol>
          </Section>

          <Section title="What Data We Delete">
            <ul className="list-disc space-y-2 pl-5">
              <li>Name and contact information (including phone number)</li>
              <li>Message history and conversation data</li>
              <li>Any other personal data collected through our WhatsApp Business services</li>
            </ul>
          </Section>

          <Section title="Questions">
            <p>
              If you have any questions about this policy or how we handle your data, please contact
              us at{" "}
              <a
                href="mailto:admin@dravonixmedia.com"
                className="text-[var(--cyan-accent)] transition-colors hover:text-white"
              >
                admin@dravonixmedia.com
              </a>
              .
            </p>
          </Section>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[var(--muted-text)]">
            <p>Last updated: August 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
