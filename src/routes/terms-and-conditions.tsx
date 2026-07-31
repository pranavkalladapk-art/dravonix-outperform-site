import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    buildHead("/terms-and-conditions", {
      title: "Terms & Conditions — Dravonix Media Private Limited",
      description:
        "The terms governing use of dravonixmedia.com and all services provided by Dravonix Media Private Limited.",
    }),
  component: TermsAndConditions,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-[var(--muted-text)]">{children}</div>
    </section>
  );
}

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 md:p-12">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Terms & Conditions
          </h1>
          <div className="mt-2 space-y-1 text-sm text-[var(--muted-text)]">
            <p>Dravonix Media Private Limited · dravonixmedia.com</p>
            <p>Effective date: 1st January 2026</p>
            <p>Governed by the laws of India · Jurisdiction: Kerala, India</p>
          </div>

          <Section title="1. Introduction & Acceptance">
            <p>
              These Terms and Conditions govern the use of dravonixmedia.com and all services
              provided by Dravonix Media Private Limited. By accessing this website, submitting an
              enquiry, approving a proposal, or making a payment, you agree to these terms.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Dravonix Media Private Limited provides services including Website Design &
              Development, UI/UX Design, Branding & Brand Identity, Logo Design, Graphic Design,
              Motion Graphics, Video Editing, Commercial Video Production, Photography, Digital
              Marketing, Social Media Management, SEO, Performance Marketing, AI Content Solutions,
              CRM Integration, Website Maintenance, Hosting & Technical Support, Domain Management,
              and Consulting Services. Only services specifically mentioned in the approved
              quotation or proposal are included in any engagement.
            </p>
          </Section>

          <Section title="3. Project Workflow">
            <p>
              All projects follow a structured milestone-based workflow: Project Confirmation →
              Research & Planning → Design / Script / Strategy → Client Review → Development /
              Production → Client Approval → Testing & Quality Assurance → Final Payment → Project
              Handover → Support (if included).
            </p>
          </Section>

          <Section title="4. Payment Structure">
            <p>
              Unless otherwise agreed in writing, all projects follow this payment schedule:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>20% Advance — payable before work begins</li>
              <li>30% First Progress Payment — payable after initial milestone approval</li>
              <li>
                30% Second Progress Payment — payable after completed project approval before final
                delivery
              </li>
              <li>20% Final Payment — payable before project handover</li>
            </ul>
            <p>
              All payments must be made to the official company bank account or officially approved
              payment methods of Dravonix Media Private Limited. The company will never request
              payments to any personal account unless formally authorized in writing.
            </p>
          </Section>

          <Section title="5. Late Payment & Project Suspension">
            <p>
              If any scheduled payment is delayed, project work may be paused immediately, delivery
              timelines shall automatically extend, and project resources may be reassigned.
              Projects inactive for more than 60 days may be considered closed and reactivation may
              require a revised quotation.
            </p>
          </Section>

          <Section title="6. Revisions & Scope Changes">
            <p>
              The number of revisions included is as specified in the approved quotation. Any
              request outside the agreed scope — including additional pages, features, videos, or
              campaigns — shall be treated as additional work requiring a new quotation and written
              approval.
            </p>
          </Section>

          <Section title="7. Project Delivery">
            <p>
              Dravonix Media Private Limited reserves the right to withhold website launch, source
              files, design files, raw footage, admin access, hosting access, domain transfer, and
              all deliverables until all outstanding invoices have been fully paid.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              Until full payment has been received, all work produced by Dravonix Media Private
              Limited remains the intellectual property of the company. Upon receipt of all
              outstanding payments, ownership of the agreed deliverables transfers to the client,
              except licensed fonts, licensed software, licensed stock assets, proprietary
              frameworks, and reusable company assets.
            </p>
          </Section>

          <Section title="9. Confidentiality">
            <p>
              Both parties agree to maintain confidentiality regarding client information, business
              plans, pricing, source code, login credentials, marketing strategies, financial
              information, and internal documents. This obligation survives project completion or
              termination.
            </p>
          </Section>

          <Section title="10. Review Submissions">
            <p>
              By submitting a review through this website, you confirm the review is genuine and
              based on your experience. Dravonix Media Private Limited reserves the right to
              approve, reject, or remove any review submitted through the website.
            </p>
          </Section>

          <Section title="11. Warranty">
            <p>
              Technical issues directly caused by Dravonix Media Private Limited and reported within
              30 days of handover will be corrected without additional charges. This warranty does
              not cover new features, client modifications, third-party changes, hosting issues
              beyond our control, or security issues caused by external factors.
            </p>
          </Section>

          <Section title="12. Cancellation">
            <p>
              If the client cancels the project, payments already received are generally
              non-refundable except where required by law. Completed work shall be billed and the
              company may retain all work until outstanding payments are settled.
            </p>
          </Section>

          <Section title="13. Portfolio Rights">
            <p>
              Unless a separate confidentiality agreement states otherwise, Dravonix Media Private
              Limited may display completed work in the company website, portfolio, social media,
              presentations, and marketing materials. No confidential information shall be
              disclosed.
            </p>
          </Section>

          <Section title="14. Limitation of Liability">
            <p>
              Dravonix Media Private Limited shall not be liable for indirect, incidental,
              consequential, or special damages including loss of revenue, business interruption, or
              data loss, except where liability cannot legally be excluded.
            </p>
          </Section>

          <Section title="15. Governing Law & Dispute Resolution">
            <p>
              This agreement is governed by the laws of India. Disputes will first be resolved
              through good-faith discussions, then mediation, and if necessary arbitration or the
              competent courts in Kerala, India.
            </p>
          </Section>

          <Section title="16. Changes to Terms">
            <p>
              We may update these Terms & Conditions from time to time. The effective date will be
              updated accordingly. Continued use of the website constitutes acceptance of the
              updated terms.
            </p>
          </Section>

          <Section title="17. Contact">
            <p>
              For any legal queries or disputes:{" "}
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
