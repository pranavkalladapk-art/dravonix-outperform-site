import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    buildHead("/privacy-policy", {
      title: "Privacy & Policy — Dravonix Media Private Limited",
      description:
        "Learn how Dravonix Media Private Limited collects, uses, stores, and protects your personal information.",
    }),
  component: PrivacyPolicy,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-[var(--muted-text)]">{children}</div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 md:p-12">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">Privacy & Policy</h1>
          <div className="mt-2 space-y-1 text-sm text-[var(--muted-text)]">
            <p>Dravonix Media Private Limited · dravonixmedia.com</p>
            <p>Effective date: 1st January 2026</p>
          </div>

          <Section title="1. Introduction">
            <p>
              Dravonix Media Private Limited ("Dravonix", "we", "our", or "us") is a creative
              technology and media company specializing in branding, digital transformation, website
              development, software solutions, digital marketing, and media production. Dravonix is
              committed to protecting your privacy and handling your personal information
              responsibly.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Name, email address, phone number, and business details submitted through our
                contact and enquiry forms
              </li>
              <li>Reviews and testimonials submitted through our website</li>
              <li>Usage data and analytics collected through cookies and third-party tools</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to your enquiries and service requests</li>
              <li>To process project engagements and communications</li>
              <li>To display approved client reviews on our website</li>
              <li>To improve our website and services</li>
              <li>To send relevant updates (only where you have consented)</li>
            </ul>
          </Section>

          <Section title="4. DRAIVA Connect & WhatsApp Business Data">
            <p>
              Where a business connects a WhatsApp Business account (or another supported channel)
              to DRAIVA Connect, we process the data required to operate that service on the
              business's behalf. This may include the connected business phone number and account
              profile details, customer messages and message metadata (sender number, timestamps,
              delivery status), media shared in a conversation, AI-generated replies and
              conversation summaries, and lead or enquiry details captured during a conversation.
            </p>
            <p>
              For these conversations, the connecting business is the data controller and Dravonix
              Media Private Limited acts as a data processor, handling the data solely to deliver
              the service. We do not sell conversation data, do not use it for advertising, and do
              not share it with third parties except the infrastructure and messaging providers
              needed to deliver messages.
            </p>
            <p>
              Use of WhatsApp is additionally governed by WhatsApp's and Meta's own terms and
              privacy policies. If you are a customer messaging a business that uses DRAIVA, please
              contact that business directly regarding your conversation data.
            </p>
          </Section>

          <Section title="5. Data Storage & Security">
            <p>
              Your data is stored securely using Supabase (a secure cloud database platform). We
              implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, loss, or disclosure.
            </p>
          </Section>

          <Section title="6. Cookies & Analytics">
            <p>
              Our website may use cookies and analytics tools including Google Analytics to
              understand how visitors interact with our site. You may disable cookies through your
              browser settings.
            </p>
          </Section>

          <Section title="7. Third-Party Services">
            <p>
              We use the following third-party services: Google Analytics (website analytics),
              Supabase (data storage), and — for DRAIVA Connect — the WhatsApp Business Platform
              (Meta) for message delivery. These services have their own privacy policies and we
              recommend reviewing them.
            </p>
          </Section>

          <Section title="8. Data Retention">
            <p>
              We retain your personal data only as long as necessary to fulfil the purposes outlined
              in this policy or as required by law. DRAIVA conversation data is retained for the
              duration of the business's active engagement and deleted on request as described in
              Section 10.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              data held by us. To exercise these rights, contact us at{" "}
              <a
                href="mailto:admin@dravonixmedia.com"
                className="text-[var(--cyan-accent)] transition-colors hover:text-white"
              >
                admin@dravonixmedia.com
              </a>
              .
            </p>
          </Section>

          <Section title="10. Data Deletion / Disconnecting DRAIVA">
            <p>
              A business can disconnect DRAIVA at any time by removing the integration from its
              WhatsApp Business (or other channel) account, or by emailing us at{" "}
              <a
                href="mailto:admin@dravonixmedia.com"
                className="text-[var(--cyan-accent)] transition-colors hover:text-white"
              >
                admin@dravonixmedia.com
              </a>
              . On disconnection, DRAIVA stops receiving and processing new messages for that
              account immediately.
            </p>
            <p>
              To request deletion of stored data, email us from the registered business email with
              the subject "Data Deletion Request" and include the connected business name and phone
              number. We will confirm the request and delete the associated conversation data,
              media, and AI-generated records within 30 days, except where retention is required by
              law. Backup copies are purged within the normal backup rotation cycle.
            </p>
          </Section>

          <Section title="11. Portfolio & Case Studies">
            <p>
              Unless a separate confidentiality agreement exists, Dravonix Media Private Limited may
              reference completed work in our portfolio, website, social media, and marketing
              materials. No confidential client information will be disclosed.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy & Policy from time to time. The effective date will be
              updated accordingly. Continued use of the website constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For any privacy-related concerns:{" "}
              <a
                href="mailto:admin@dravonixmedia.com"
                className="text-[var(--cyan-accent)] transition-colors hover:text-white"
              >
                admin@dravonixmedia.com
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
