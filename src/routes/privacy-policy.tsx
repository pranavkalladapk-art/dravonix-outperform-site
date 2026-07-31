import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    buildHead("/privacy-policy", {
      title: "Privacy Policy — Dravonix Media Private Limited",
      description:
        "Learn how Dravonix Media Private Limited collects, uses, stores, and protects your personal information.",
    }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 md:p-12">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--muted-text)]">
            Effective date: 1st January 2026
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              We collect information you voluntarily provide when you interact with our website,
              including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted-text)]">
              <li>Name and email address</li>
              <li>Business or company details</li>
              <li>Project requirements and enquiry messages</li>
              <li>Review submissions, including any personal details you choose to include</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              We use the information we collect to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted-text)]">
              <li>Respond to your enquiries and project requests</li>
              <li>Improve our services, website experience, and communications</li>
              <li>Display approved client reviews on our website</li>
              <li>Send relevant updates about Dravonix services, only when you have opted in</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              3. Data Storage and Security
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              Your data is stored securely in our Supabase database. We apply industry-standard
              security measures, including Row-Level Security (RLS) policies, encrypted
              connections, and access controls, to protect your personal information from
              unauthorised access or disclosure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              4. Cookies and Analytics
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              We use cookies and similar technologies to understand how visitors interact with our
              website. Google Analytics helps us analyse traffic, page performance, and user
              behaviour. These tools may collect anonymous data such as device type, browser,
              pages visited, and approximate location. You can manage cookie preferences through
              your browser settings.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              5. Third-Party Services
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              We rely on trusted third-party services to operate our website and business:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted-text)]">
              <li>
                <strong className="text-white/90">Supabase</strong> — database hosting and secure
                data storage
              </li>
              <li>
                <strong className="text-white/90">Google Analytics</strong> — website analytics and
                performance insights
              </li>
              <li>
                <strong className="text-white/90">Meta Pixel</strong> — marketing analytics and ad
                performance measurement
              </li>
            </ul>
            <p className="mt-3 text-[var(--muted-text)]">
              These services have their own privacy policies and may process data in accordance with
              their terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              6. Your Rights
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              You have the right to request access to, correction of, or deletion of your personal
              data. If you would like your information removed from our systems, including an
              approved review, please contact us using the details below. We will respond to your
              request within a reasonable timeframe.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-white">
              7. Contact Information
            </h2>
            <p className="mt-3 text-[var(--muted-text)]">
              For any privacy-related questions, requests, or concerns, please contact:
            </p>
            <div className="mt-3 space-y-1 text-[var(--muted-text)]">
              <p>
                <strong className="text-white/90">Dravonix Media Private Limited</strong>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://dravonixmedia.com"
                  className="text-[var(--cyan-accent)] transition-colors hover:text-white"
                >
                  dravonixmedia.com
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@dravonixmedia.com"
                  className="text-[var(--cyan-accent)] transition-colors hover:text-white"
                >
                  admin@dravonixmedia.com
                </a>
              </p>
            </div>
          </section>

          <p className="mt-10 text-sm text-[var(--muted-text)]">
            By using our website, you consent to the practices described in this Privacy Policy. We
            may update this policy from time to time, and any changes will be posted on this page
            with an updated effective date.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
