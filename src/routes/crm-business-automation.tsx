import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Workflow,
  Settings2,
  Filter,
  FormInput,
  MessagesSquare,
  BellRing,
  Headphones,
  BarChart3,
  DatabaseZap,
  GraduationCap,
} from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { Breadcrumbs, serviceBreadcrumbs } from "@/components/dravonix/Breadcrumbs";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "CRM & Business Automation in Kerala | Dravonix Media";
const description =
  "CRM and business automation services in Kerala — CRM setup, lead management, workflow automation and WhatsApp integration for growing businesses.";

const faqs = [
  {
    q: "What is a CRM?",
    a: "A CRM (customer relationship management system) is a central place to store leads, contacts and customer history, track the sales pipeline and manage follow-ups so nothing is lost across inboxes, spreadsheets and phones.",
  },
  {
    q: "Does a small business need a CRM?",
    a: "If you receive enquiries from more than one source, or more than one person handles follow-ups, a CRM usually pays for itself quickly. Even a lightweight setup prevents missed leads and gives visibility over what is actually converting.",
  },
  {
    q: "Can you connect website enquiries to a CRM?",
    a: "Yes. Contact forms, landing pages and estimator submissions can be connected so leads are created automatically with their source recorded, subject to what your chosen platform supports.",
  },
  {
    q: "Can you build a custom sales pipeline?",
    a: "Yes. We design lead and deal stages around your actual sales process, including custom fields, statuses, follow-up rules and lost-lead reasons.",
  },
  {
    q: "Can you migrate contacts from spreadsheets?",
    a: "Yes. We handle field mapping, duplicate review, import testing and validation. Migration quality depends on the accuracy and consistency of the source data.",
  },
  {
    q: "Can you automate lead follow-ups?",
    a: "Yes. Follow-up tasks, reminders, assignment rules and trigger-based messages can be automated within the capabilities of your chosen platform.",
  },
  {
    q: "Can you connect WhatsApp to a CRM?",
    a: "We provide independent technical assistance for integrating compatible WhatsApp Business Platform services with your CRM, including conversation logging, contact matching and routing, where your account and plan support it.",
  },
  {
    q: "Does WhatsApp automation require Meta approval?",
    a: "Yes. Business verification, account eligibility, message-template approval and policy compliance are controlled by Meta and the messaging provider. Dravonix Media does not control or guarantee those approvals or timelines.",
  },
  {
    q: "Can you connect email notifications?",
    a: "Yes. Enquiry confirmations, internal alerts, assignment notifications, reminders and trigger-based emails can be configured using compatible email and notification services.",
  },
  {
    q: "Can you create reports and dashboards?",
    a: "Yes. Lead dashboards, pipeline overviews, source and conversion reporting, team activity and export options can be set up where the platform supports them.",
  },
  {
    q: "Can multiple team members use the system?",
    a: "Yes. We configure users, roles and permissions so each team member sees and edits only what is appropriate to their role. Additional user licences are billed by the platform provider.",
  },
  {
    q: "Can the system be changed later?",
    a: "Yes. Pipelines, fields, automations and integrations can be adjusted as your process evolves, either by your admin or through an ongoing support arrangement with us.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Ongoing independent support covers configuration changes, new automations, troubleshooting, user onboarding and integration maintenance as a separate engagement.",
  },
  {
    q: "Are third-party subscription charges included?",
    a: "No. Platform subscriptions, licences, messaging charges, usage fees and renewals are purchased and paid for separately by the client unless specifically included in a written Dravonix Media proposal.",
  },
  {
    q: "Is Dravonix an official partner of the platforms mentioned?",
    a: "No. Unless explicitly confirmed otherwise in writing, Dravonix Media provides independent implementation, integration and configuration assistance and does not represent itself as an official partner, authorised reseller or endorsed provider of any third-party platform.",
  },
];

export const Route = createFileRoute("/crm-business-automation")({
  head: () =>
    buildHead("/crm-business-automation", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "CRM & Business Automation",
          description,
          path: "/crm-business-automation",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "CRM & Business Automation", path: "/crm-business-automation" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: CrmBusinessAutomationPage,
});

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const sections: Array<{
  icon: typeof Workflow;
  heading: string;
  intro: string;
  items: string[];
  note?: string;
}> = [
  {
    icon: Workflow,
    heading: "CRM Strategy and Planning",
    intro:
      "Before any tool is configured, we map how enquiries actually reach you and what happens to them afterwards. That map becomes the blueprint for the system.",
    items: [
      "Current workflow review",
      "Lead-source mapping",
      "Customer lifecycle planning",
      "Sales pipeline design",
      "User-role planning",
      "Data-field planning",
      "Follow-up process",
      "Reporting requirements",
      "Automation opportunities",
    ],
  },
  {
    icon: Settings2,
    heading: "CRM Setup and Configuration",
    intro:
      "Hands-on configuration of the CRM you choose, from modules and custom fields to stages, users and dashboards. Compatible third-party platforms — such as Zoho, HubSpot or Salesforce — are referenced only as examples of tools Dravonix Media can independently configure.",
    items: [
      "CRM account setup",
      "Module configuration",
      "Custom fields",
      "Lead stages",
      "Deal stages",
      "Contact management",
      "Company or account management",
      "User access",
      "Roles and permissions",
      "Basic dashboard setup",
    ],
    note: "The CRM account, administrator access, subscription and billing profile are created, owned and controlled by the client.",
  },
  {
    icon: Filter,
    heading: "Lead Management",
    intro:
      "A single, disciplined pipeline so every enquiry has an owner, a status and a next action.",
    items: [
      "Website enquiry capture",
      "Manual lead entry",
      "Lead-source tracking",
      "Lead assignment",
      "Lead status",
      "Follow-up dates",
      "Lead scoring where supported",
      "Sales pipeline",
      "Lost-lead reasons",
      "Conversion tracking",
    ],
  },
  {
    icon: FormInput,
    heading: "Website Form and CRM Integration",
    intro:
      "Connect the enquiry points you already have — contact forms, landing pages and the Dravonix Project Estimator — directly into the CRM.",
    items: [
      "Contact-form integration",
      "Project-estimator integration",
      "Landing-page lead capture",
      "Automatic lead creation",
      "Enquiry-source tracking",
      "Confirmation messages",
      "Internal notifications",
      "Duplicate-lead checks where supported",
    ],
  },
  {
    icon: MessagesSquare,
    heading: "WhatsApp and Communication Workflows",
    intro:
      "Independent technical assistance for integrating compatible messaging services with your CRM and support process.",
    items: [
      "WhatsApp Business Platform integrations",
      "Automated enquiry acknowledgement",
      "Lead routing",
      "Customer-support workflows",
      "Approved message templates",
      "Agent handover",
      "Conversation logging",
      "CRM contact matching",
      "Follow-up reminders",
      "Text and supported media workflows",
    ],
    note: "Dravonix Media is not an official Meta or WhatsApp partner. Business verification, account availability, message-template approval, policy compliance and messaging charges are controlled by Meta and your chosen messaging provider, not by Dravonix Media.",
  },
  {
    icon: BellRing,
    heading: "Email and Notification Automation",
    intro:
      "Timely, templated communication for customers and internal teams, triggered by what actually happens in the pipeline.",
    items: [
      "Enquiry-confirmation emails",
      "Lead-assignment notifications",
      "Follow-up reminders",
      "Internal task alerts",
      "Customer-status updates",
      "Appointment reminders",
      "Sales notifications",
      "Email templates",
      "Trigger-based messages",
      "Notification preferences",
    ],
  },
  {
    icon: DatabaseZap,
    heading: "Workflow Automation",
    intro:
      "Remove repetitive manual steps so your team spends time on conversations, not admin.",
    items: [
      "Automated task creation",
      "Lead assignment",
      "Follow-up scheduling",
      "Status-based triggers",
      "Approval workflows",
      "Internal notifications",
      "Data synchronisation",
      "Pipeline movement",
      "Reminder automation",
      "Customer onboarding workflows",
    ],
  },
  {
    icon: Headphones,
    heading: "Customer Support Systems",
    intro:
      "Structured handling of post-sale enquiries so issues are tracked to resolution rather than lost in an inbox.",
    items: [
      "Enquiry management",
      "Support-ticket workflows",
      "Team assignment",
      "Status tracking",
      "Customer response history",
      "Escalation rules",
      "Follow-up reminders",
      "Resolution tracking",
      "Basic reporting",
    ],
  },
  {
    icon: BarChart3,
    heading: "Dashboards and Reporting",
    intro:
      "Management visibility over where leads come from, where they stall and what the team is actually working on.",
    items: [
      "Lead dashboard",
      "Sales pipeline overview",
      "Enquiry sources",
      "Conversion status",
      "Team activity",
      "Follow-up status",
      "Sales reports",
      "Custom reports where supported",
      "Export options",
      "Management overview",
    ],
  },
  {
    icon: DatabaseZap,
    heading: "Data Migration and Cleanup",
    intro:
      "Move existing contacts and leads into the new system with mapping, review and validation at each step.",
    items: [
      "Spreadsheet import",
      "Contact migration",
      "Lead migration",
      "Customer-data mapping",
      "Duplicate review",
      "Field mapping",
      "Basic data cleanup",
      "Import testing",
      "Final validation",
    ],
    note: "Migration outcomes depend on the quality, structure and completeness of the source data provided by the client.",
  },
  {
    icon: GraduationCap,
    heading: "Team Onboarding and Basic Training",
    intro:
      "A system only works if the team uses it. We walk your people through the day-to-day workflow after handover.",
    items: [
      "User onboarding",
      "CRM navigation",
      "Lead updates",
      "Contact management",
      "Pipeline usage",
      "Task management",
      "Reporting basics",
      "Basic admin guidance",
      "Documentation where included",
    ],
  },
];

const steps = [
  "Workflow discovery",
  "Platform or system recommendation",
  "Client account ownership confirmation",
  "CRM architecture and pipeline planning",
  "User and permission setup",
  "Field and module configuration",
  "Lead-source integration",
  "Workflow automation",
  "Communication integration",
  "Data migration where required",
  "Testing",
  "Team onboarding and handover",
];

function CrmBusinessAutomationPage() {
  const buttons = (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
      >
        Plan Your Automation <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={ESTIMATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
      >
        Estimate Your CRM Setup
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Breadcrumbs items={serviceBreadcrumbs("CRM & Business Automation")} />
          </Reveal>

          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                CRM &amp; Business Automation
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                CRM and Business Automation Services
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Organise leads, customer communication and internal workflows through connected CRM
                and automation systems designed around your business process.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Dravonix Media provides independent CRM setup, workflow automation and
                communication-integration assistance using compatible third-party platforms and
                custom-built systems.
              </p>
              {buttons}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              What&rsquo;s Included
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]" />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.heading}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.intro}</p>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan-accent)]" />
                        <span className="text-sm leading-relaxed text-[var(--muted-text)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-[var(--muted-text)]">
                      {s.note}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Implementation Process
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s} delay={i * 45}>
                <div className="h-full rounded-xl border border-white/10 bg-[var(--card-dark)] p-6">
                  <span className="font-display text-3xl font-bold text-[var(--blue-brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-white">{s}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 30}>
                <details className="group rounded-xl border border-white/10 bg-[var(--card-dark)] p-5 open:border-[var(--blue-brand)]/50">
                  <summary className="cursor-pointer list-none font-display text-base font-bold text-white marker:hidden">
                    <h3 className="inline text-base font-bold">{f.q}</h3>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <aside
              aria-label="Third-party platform disclaimer"
              className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-xs leading-relaxed text-[var(--muted-text)]"
            >
              <h2 className="font-display text-sm font-bold text-white">
                Third-Party Platform Disclaimer
              </h2>
              <p className="mt-3">
                Dravonix Media is an independent technology service provider offering
                implementation, integration, configuration and technical assistance for compatible
                third-party CRM, communication, automation and cloud platforms.
              </p>
              <p className="mt-3">
                Unless explicitly confirmed otherwise in writing, Dravonix Media is not affiliated
                with, endorsed by, sponsored by, certified by, or an authorised partner or reseller
                of Meta, WhatsApp, Zoho, Google, Microsoft, HubSpot, Salesforce or any other
                third-party platform provider.
              </p>
              <p className="mt-3">
                All product names, trademarks and registered trademarks belong to their respective
                owners. References to third-party products are used only to describe compatibility
                or the type of independent technical assistance available.
              </p>
              <p className="mt-3">
                Third-party subscriptions, licences, usage charges, messaging charges, domain fees
                and renewal costs are purchased and paid for separately by the client unless
                specifically included in a written Dravonix Media proposal.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Related Services
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/custom-web-applications"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Build a custom web application around your workflow
            </Link>
            <Link
              to="/website-development"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Feed CRM leads from professional website development
            </Link>
            <Link
              to="/business-email-setup"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Set up branded business email and cloud communication
            </Link>
            <Link
              to="/project-estimator"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Estimate your automation project with the Project Estimator
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Contact Dravonix Media about CRM implementation
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Automate Your Business Workflow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Connect your enquiries, customer communication and internal processes through an
              organised CRM and automation system.
            </p>
            {buttons}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
