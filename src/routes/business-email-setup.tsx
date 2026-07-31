import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AtSign,
  Check,
  Cloud,
  
  Server,
  ShieldCheck,
  Smartphone,
  PenLine,
  Users,
  LifeBuoy,
  MoveRight,
} from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { Breadcrumbs, serviceBreadcrumbs } from "@/components/dravonix/Breadcrumbs";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Business Email Setup Services in Kerala | Dravonix Media";
const description =
  "Independent business email setup, domain authentication, email migration, DNS configuration and cloud communication support from Dravonix Media.";

const faqs = [
  {
    q: "What is a branded business email address?",
    a: "A branded business email address uses your own company domain — for example name@company.com instead of a free public mailbox. It keeps your communication consistent with your brand and looks more credible to customers, suppliers and partners.",
  },
  {
    q: "Which business email platform should we choose?",
    a: "It depends on your team size, budget, storage needs, collaboration tools and existing systems. We compare suitable third-party platforms against your requirements and give an independent recommendation — you then create and own the account with that provider.",
  },
  {
    q: "Can Dravonix help us configure Zoho Mail?",
    a: "Yes. We provide independent setup and configuration assistance for Zoho Mail, including domain verification, DNS records, mailbox creation and device configuration. The Zoho account, subscription and administrator access remain owned and controlled by you.",
  },
  {
    q: "Can Dravonix help us configure Google Workspace?",
    a: "Yes. We provide independent setup and configuration assistance for Google Workspace — domain verification, MX and authentication records, user and group creation and client configuration. You own the account, licences and billing profile directly with the provider.",
  },
  {
    q: "Can Dravonix help us configure Microsoft 365 or Outlook?",
    a: "Yes, as independent configuration assistance. Microsoft 365 or Exchange Online typically provides the hosted mailbox service, while Outlook is commonly used as the email application on desktop and mobile. We can assist with both the hosted mailbox configuration and the Outlook application setup.",
  },
  {
    q: "Can you configure Apple Mail and other email applications?",
    a: "We can assist with configuring Apple Mail, Android mail clients, Windows and macOS mail applications and other common clients. What is possible depends on the platform, subscription plan and device compatibility, including whether IMAP, SMTP or Exchange access is supported.",
  },
  {
    q: "Is Dravonix an official partner or authorised reseller of these platforms?",
    a: "No. Unless explicitly stated otherwise in writing, Dravonix Media provides independent technical setup and configuration assistance and does not represent itself as an official partner, authorised reseller or endorsed provider of any third-party email platform.",
  },
  {
    q: "Who owns the business email account?",
    a: "You do. The client should own and control the main platform account, the administrator access, the recovery email and phone, the domain and DNS account, the billing profile and all mailbox data.",
  },
  {
    q: "Who pays the subscription and licence fees?",
    a: "The client normally pays the platform provider directly. Dravonix Media charges separately for setup, migration, configuration, administration and support work.",
  },
  {
    q: "Can you create accounts for multiple employees?",
    a: "Yes. We plan mailbox structure around your team size and create individual employee accounts, set permissions, configure passwords and recovery details and document the setup for your administrator.",
  },
  {
    q: "Can you create department email addresses?",
    a: "Yes — addresses such as sales@, support@ or accounts@, along with group addresses, shared mailboxes and aliases where your chosen provider and plan support them.",
  },
  {
    q: "Can you migrate our existing emails?",
    a: "In most cases, yes. Migration availability, data compatibility, duration and limitations depend on the source platform, destination platform, subscription plan, mailbox size and the migration tools available.",
  },
  {
    q: "Do you configure SPF, DKIM and DMARC?",
    a: "Yes. We configure SPF, DKIM and a suitable DMARC policy stage, validate the records and run authentication tests. These measures support sender verification and deliverability but cannot guarantee inbox placement.",
  },
  {
    q: "Can you configure email on mobile and desktop devices?",
    a: "Yes. We assist with webmail, mobile applications, desktop clients and IMAP, SMTP or Exchange settings where supported, followed by sending and receiving tests.",
  },
  {
    q: "Can you help when the domain is managed through Cloudflare?",
    a: "Yes. We can configure MX, TXT, CNAME and verification records in Cloudflare DNS, review nameservers and troubleshoot mail-related DNS issues.",
  },
  {
    q: "Can you configure DNS through another domain or hosting provider?",
    a: "Yes. We work with most registrars and hosting control panels to add and validate the email-related DNS records your platform requires.",
  },
  {
    q: "Do you provide branded email signatures?",
    a: "Yes. We design mobile-friendly HTML signatures with your logo, name, designation, contact details and links. Appearance may vary between email applications because different clients render HTML differently.",
  },
  {
    q: "Is business email setup included with website development?",
    a: "Inclusion depends on the approved project proposal. It is often bundled with a website project, but it is scoped and confirmed in writing rather than assumed.",
  },
  {
    q: "Are third-party subscription charges included?",
    a: "Third-party subscriptions, licences, renewals, domain costs and provider charges are separate unless specifically included in a written Dravonix Media proposal.",
  },
  {
    q: "Do you provide ongoing technical support?",
    a: "Yes — independent technical support covering user creation and removal, password-reset assistance, alias and group management, DNS and delivery troubleshooting and device reconfiguration. Account, billing, outage and product issues controlled by the platform provider are handled through that provider's own official support channels.",
  },
];

export const Route = createFileRoute("/business-email-setup")({
  head: () =>
    buildHead("/business-email-setup", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Business Email & Cloud Setup",
          description,
          path: "/business-email-setup",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Business Email & Cloud Setup", path: "/business-email-setup" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: BusinessEmailSetupPage,
});

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const sections: Array<{ icon: typeof AtSign; heading: string; intro: string; items: string[]; note?: string }> = [
  {
    icon: AtSign,
    heading: "Branded Business Email Addresses",
    intro:
      "Email addresses on your own company domain — such as name@company.com, sales@company.com, support@company.com or accounts@company.com — reinforce professionalism, build trust with customers and keep every message consistent with your brand.",
    items: [
      "Individual employee email accounts",
      "Department-based email addresses",
      "Shared or group addresses where supported",
      "Email aliases",
      "Professional email naming structure",
      "Mailbox planning based on team size",
    ],
  },
  {
    icon: Cloud,
    heading: "Independent Email Platform Setup Assistance",
    intro:
      "Dravonix Media assists clients with selecting and setting up suitable third-party business email platforms: setup and configuration assistance for Zoho Mail, setup and configuration assistance for Google Workspace, and setup and configuration assistance for Microsoft 365 and Exchange Online, as well as other compatible business email providers.",
    items: [
      "Platform comparison based on client requirements",
      "Domain verification",
      "Account configuration",
      "Mailbox setup",
      "User configuration",
      "Basic administration settings",
      "Security configuration",
      "Recovery settings",
      "Initial testing",
    ],
    note: "The platform account is created and owned by the client. Dravonix Media does not own or operate the underlying email platform.",
  },
  {
    icon: Users,
    heading: "Email User Creation",
    intro:
      "We plan and build out your mailbox structure so every person and function has the right address and the right level of access from day one.",
    items: [
      "Employee mailbox creation",
      "Department email accounts",
      "Group addresses where supported",
      "Shared mailboxes where supported",
      "Email aliases",
      "User permissions",
      "Password configuration",
      "Recovery information",
      "Two-factor authentication guidance",
      "Basic account-security settings",
    ],
    note: "The exact features available depend on the selected provider and subscription plan.",
  },
  {
    icon: Server,
    heading: "Domain and MX Record Configuration",
    intro:
      "Correct DNS records are what make business email actually route, authenticate and arrive. We configure and validate them against your chosen platform's published requirements.",
    items: [
      "Domain verification",
      "MX record configuration",
      "TXT record configuration",
      "CNAME record configuration",
      "Mail routing",
      "Nameserver review",
      "Email-related DNS troubleshooting",
      "Domain ownership verification",
      "Email delivery testing",
    ],
  },
  {
    icon: ShieldCheck,
    heading: "SPF, DKIM and DMARC Setup",
    intro:
      "Email authentication supports domain security, sender verification and deliverability, and helps reduce unauthorised spoofing of your domain.",
    items: [
      "SPF record configuration",
      "DKIM authentication",
      "DMARC policy setup",
      "Domain verification",
      "Email authentication testing",
      "DNS record validation",
      "Basic deliverability review",
      "Guidance on appropriate DMARC policy stages",
    ],
    note: "Authentication improves sender trust signals. It cannot guarantee that every message reaches the inbox, that nothing is filtered as spam, that all security risk is removed, or that domain reputation improves immediately.",
  },
  {
    icon: MoveRight,
    heading: "Email Migration",
    intro:
      "Moving from an existing provider is planned in advance, mapped account by account and tested afterwards so your team keeps working through the change.",
    items: [
      "Migration from an existing email provider",
      "Mailbox migration",
      "Email data transfer",
      "Folder migration where supported",
      "Contact migration where supported",
      "Calendar migration where supported",
      "Migration planning",
      "Source and destination account mapping",
      "Reduced-disruption migration planning",
      "Post-migration testing",
    ],
    note: "Migration availability, data compatibility, duration and limitations depend on the source platform, destination platform, subscription plan, mailbox size and available migration tools.",
  },
  {
    icon: Cloud,
    heading: "Cloudflare and Other DNS Assistance",
    intro:
      "Whether your domain sits with Cloudflare, a hosting company or a registrar control panel, we handle the mail-related DNS work end to end.",
    items: [
      "Cloudflare DNS configuration",
      "DNS assistance for other hosting companies",
      "DNS assistance for domain registrars",
      "MX records",
      "TXT records",
      "CNAME records",
      "Nameserver review",
      "Domain verification",
      "Email-platform verification records",
      "Mail-related DNS troubleshooting",
    ],
    note: "This is email-related DNS work only. Website hosting, deployment, SSL, maintenance and website-related DNS configuration sit under our website development service.",
  },
  {
    icon: PenLine,
    heading: "Professional Email Signatures",
    intro:
      "A consistent signature turns every outgoing message into a small brand touchpoint across your whole team.",
    items: [
      "Branded HTML email signatures",
      "Employee name and job designation",
      "Company logo",
      "Phone number, website and email address",
      "Social-media links",
      "Legal or confidentiality line where supplied by the client",
      "Mobile-friendly signature layout",
      "Basic installation assistance",
    ],
    note: "Signature appearance may vary between email applications because different clients render HTML differently.",
  },
  {
    icon: Smartphone,
    heading: "Mobile and Desktop Configuration",
    intro:
      "Independent configuration assistance so every device your team uses sends and receives reliably.",
    items: [
      "Webmail access",
      "Mobile email applications",
      "Desktop email applications",
      "Gmail application",
      "Microsoft Outlook",
      "Apple Mail",
      "Android mail clients",
      "iPhone and iPad mail configuration",
      "Windows and macOS mail applications",
      "IMAP, SMTP and Exchange settings where supported",
      "Basic synchronisation assistance",
      "Sending and receiving tests",
    ],
    note: "Dravonix Media provides independent configuration assistance and does not operate, own or control these third-party applications.",
  },
  {
    icon: LifeBuoy,
    heading: "Administration and Technical Support",
    intro:
      "Ongoing independent support for the day-to-day running of your email system as your team changes.",
    items: [
      "New user creation and user removal",
      "Password-reset assistance",
      "Alias management",
      "Group email configuration",
      "Shared mailbox assistance where supported",
      "Basic account administration",
      "DNS troubleshooting",
      "Email-delivery troubleshooting",
      "Device reconfiguration",
      "Employee onboarding and offboarding support",
      "Ongoing technical-support options",
    ],
    note: "Dravonix Media's independent technical support is separate from the platform provider's official account, billing, outage and product support. Where an issue is controlled by the third-party platform, we direct you to that provider's official support channels.",
  },
];

const steps = [
  "Business, team and domain review",
  "Email-platform comparison and recommendation",
  "Client account creation and ownership confirmation",
  "Platform subscription purchased directly by the client",
  "Domain verification",
  "DNS and MX configuration",
  "User, group, shared mailbox and alias creation where supported",
  "SPF, DKIM and DMARC setup",
  "Email migration where required",
  "Mobile and desktop configuration",
  "Sending, receiving and authentication testing",
  "Final handover, documentation and support",
];

const ownership = [
  "Domain and DNS account",
  "Platform account",
  "Administrator credentials",
  "Billing profile and subscription",
  "User and mailbox data",
  "Recovery email and recovery phone",
];

function BusinessEmailSetupPage() {
  const buttons = (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
      >
        Request Your Setup <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={ESTIMATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
      >
        Estimate Your Email Setup
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Breadcrumbs items={serviceBreadcrumbs("Business Email & Cloud Setup")} />
          </Reveal>

          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                Business Email &amp; Cloud Setup
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Professional Business Email and Cloud Setup
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Build a professional and secure communication system with branded business email
                addresses, properly configured domain records and reliable access across desktop and
                mobile devices.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Dravonix Media provides independent technical setup, migration and configuration
                assistance for suitable third-party business email platforms, including Zoho Mail,
                Google Workspace, Microsoft 365 and other compatible services.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-text)]">
                The platform account must be owned by the client. Subscription plans, licences,
                renewals and third-party charges are purchased directly from the respective platform
                provider unless specifically agreed otherwise in a written proposal.
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
              Our Setup Process
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

          <Reveal>
            <div className="mt-12 rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 md:p-10">
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                You Stay in Control of Your Account
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                Throughout the engagement the client creates or owns the main platform account,
                accepts the third-party provider&rsquo;s terms and pays platform subscriptions
                directly. Dravonix Media charges separately for setup, migration, configuration,
                administration and support. Platform availability, pricing, features, uptime and
                policy decisions are controlled by the respective provider and cannot be guaranteed
                by Dravonix Media. The client retains ownership of:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ownership.map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--blue-brand)]" />
                    <span className="text-sm leading-relaxed text-[var(--muted-text)]">{o}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-[var(--muted-text)]">
                We do not register your main platform account under Dravonix Media&rsquo;s ownership
                unless an explicitly approved managed-service agreement requires it.
              </p>
            </div>
          </Reveal>
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
                Dravonix Media is an independent technology service provider offering setup,
                migration, configuration and technical assistance for compatible third-party
                business email platforms and applications.
              </p>
              <p className="mt-3">
                Unless explicitly stated otherwise in writing, Dravonix Media is not affiliated
                with, endorsed by, sponsored by, certified by, or an authorised partner or reseller
                of Zoho, Google, Microsoft, Apple, or any other third-party platform provider.
              </p>
              <p className="mt-3">
                Zoho, Zoho Mail, Google, Gmail, Google Workspace, Microsoft, Microsoft 365, Exchange
                Online, Outlook, Apple, Apple Mail and all other product names, trademarks and
                registered trademarks belong to their respective owners.
              </p>
              <p className="mt-3">
                References to third-party products are used only to describe compatibility or the
                type of independent setup assistance available.
              </p>
              <p className="mt-3">
                Third-party subscriptions, licences, domain charges, renewal costs and provider fees
                are purchased and paid for separately by the client unless specifically included in
                a written proposal.
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
              to="/website-development"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Connect business email with your website project
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Browse all Dravonix Media services
            </Link>
            <Link
              to="/project-estimator"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Estimate your project with the Project Estimator
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Request business email configuration support
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Set Up Your Professional Business Email
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Create secure branded email accounts for your team with professional configuration,
              domain authentication, migration assistance and reliable independent technical
              support.
            </p>
            {buttons}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
