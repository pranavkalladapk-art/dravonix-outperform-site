import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  AppWindow,
  Users,
  CalendarClock,
  Calculator,
  GraduationCap,
  Database,
  MonitorSmartphone,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { Breadcrumbs, serviceBreadcrumbs } from "@/components/dravonix/Breadcrumbs";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Custom Web Application Development Kerala | Dravonix";
const description =
  "Custom web applications, SaaS platforms, client portals, dashboards and business systems designed and developed by Dravonix Media.";

const faqs = [
  {
    q: "What is a custom web application?",
    a: "A custom web application is a browser-based system built specifically around your business workflow — with its own logic, user roles, data structure and screens — rather than a generic template or off-the-shelf product.",
  },
  {
    q: "How is a web application different from a normal website?",
    a: "A website mainly presents information. A web application lets users log in, enter and process data, complete tasks and interact with business logic — for example a portal, dashboard, booking system or internal management tool.",
  },
  {
    q: "What is a SaaS platform?",
    a: "A SaaS platform is a web application delivered as a subscription service, where multiple users or organisations access the same product through their own accounts, usually with plan-based features and usage limits.",
  },
  {
    q: "Can you build an admin dashboard?",
    a: "Yes. We build admin dashboards with user management, content and enquiry management, statistics, role-based access, reports and exports and system settings, scoped to what your team actually needs.",
  },
  {
    q: "Can you build a client portal?",
    a: "Yes. Client and customer portals typically include secure login, document access, project or service status, enquiry tracking, downloads, account settings and notifications where supported.",
  },
  {
    q: "Can you build a booking or availability system?",
    a: "Yes. We develop appointment, class and service booking systems with time-slot management, capacity controls, confirmations, cancellation workflows and admin-side booking management.",
  },
  {
    q: "Can you integrate online payments?",
    a: "Yes, where a suitable payment gateway is available for your business and region. The gateway account, verification and settlement remain with you and the provider; we handle the technical integration.",
  },
  {
    q: "Can you connect the system to a CRM or email platform?",
    a: "Yes. We can integrate compatible CRM, email, notification and business tools through their published APIs and webhooks, subject to what each platform technically supports on your plan.",
  },
  {
    q: "Can the platform support multiple users?",
    a: "Yes. Multi-user access with roles and permissions is a standard part of our application architecture, and multi-tenant structures can be built where the project genuinely requires them.",
  },
  {
    q: "Can we add more features later?",
    a: "Yes. We plan the architecture so additional modules, integrations and screens can be added in later phases without rebuilding the system from scratch.",
  },
  {
    q: "Will the application work on mobile devices?",
    a: "Yes. Applications are built responsively for desktop, tablet and mobile, with layouts and forms adjusted for smaller screens.",
  },
  {
    q: "Do you provide hosting and deployment?",
    a: "We handle deployment and can advise on suitable hosting. Hosting accounts, domains and third-party service subscriptions are normally owned and paid for by the client unless included in a written proposal.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. Maintenance, monitoring, improvement and support options are available as a separate ongoing engagement after handover.",
  },
  {
    q: "How is the project cost calculated?",
    a: "Cost depends on the number of modules, user roles, integrations, data complexity and design scope. You can get an indicative range through the Dravonix Project Estimator, followed by a detailed written proposal.",
  },
];

export const Route = createFileRoute("/custom-web-applications")({
  head: () =>
    buildHead("/custom-web-applications", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Custom Web Applications & SaaS Development",
          description,
          path: "/custom-web-applications",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Custom Web Applications & SaaS", path: "/custom-web-applications" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: CustomWebApplicationsPage,
});

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const sections: Array<{
  icon: typeof AppWindow;
  heading: string;
  intro: string;
  items: string[];
  note?: string;
}> = [
  {
    icon: AppWindow,
    heading: "Custom Business Web Applications",
    intro:
      "Every system we build is designed around your actual workflow and operational requirements — not forced into a generic template. We map how your team works first, then translate that into screens, roles and logic.",
    items: [
      "Tailored web-based systems",
      "Business workflow applications",
      "Internal management tools",
      "Operational dashboards",
      "Customer-facing applications",
      "Role-based user access",
      "Secure login systems",
      "Custom business logic",
    ],
  },
  {
    icon: Boxes,
    heading: "SaaS Platform Development",
    intro:
      "Subscription products need more than features — they need accounts, plans, permissions and administration built in from the first release.",
    items: [
      "Multi-user SaaS platforms",
      "Subscription-based platforms",
      "Multi-tenant systems where required",
      "User onboarding",
      "Account management",
      "Role and permission systems",
      "Subscription-plan structure",
      "Usage limits",
      "Platform administration",
      "Scalable architecture",
    ],
    note: "Architecture is planned for growth within a defined and tested scope. We do not claim unlimited scalability or enterprise readiness unless it has been technically verified for your specific workload.",
  },
  {
    icon: Users,
    heading: "Client and Customer Portals",
    intro:
      "Give customers a secure place to see their information, track progress and communicate without back-and-forth emails.",
    items: [
      "Client login portals",
      "Customer dashboards",
      "Document access",
      "Project-status tracking",
      "Enquiry tracking",
      "Service-request management",
      "Customer communication",
      "Downloadable files",
      "Account settings",
      "Notifications where supported",
    ],
  },
  {
    icon: LayoutDashboard,
    heading: "Admin Dashboards",
    intro:
      "A control centre for your team, with the right visibility and the right restrictions for each role.",
    items: [
      "User management",
      "Content management",
      "Enquiry management",
      "Product or service management",
      "Dashboard statistics",
      "Role-based access",
      "Activity overview",
      "Reports and exports",
      "System settings",
      "Basic audit history where required",
    ],
  },
  {
    icon: CalendarClock,
    heading: "Booking and Reservation Systems",
    intro:
      "Scheduling systems built around real availability rules, capacity limits and confirmation workflows.",
    items: [
      "Appointment booking",
      "Class booking",
      "Seat availability",
      "Service scheduling",
      "Time-slot management",
      "Booking confirmation",
      "Admin booking management",
      "Capacity controls",
      "Payment integration where required",
      "Cancellation workflows",
    ],
  },
  {
    icon: Calculator,
    heading: "Estimation and Quotation Tools",
    intro:
      "Interactive pricing tools that qualify enquiries before a sales conversation begins. The Dravonix Project Estimator is a working example of this build type, developed and operated by our own team.",
    items: [
      "Project cost estimators",
      "Dynamic pricing logic",
      "Multi-step forms",
      "Package comparison",
      "Instant budget ranges",
      "Quotation generation",
      "Lead capture",
      "Enquiry submission",
      "Admin-controlled pricing where required",
    ],
  },
  {
    icon: GraduationCap,
    heading: "E-Learning and Membership Systems",
    intro:
      "Structured content delivery with access control, progress visibility and paid membership where the project requires it.",
    items: [
      "Course access",
      "Student dashboards",
      "Membership areas",
      "Digital content delivery",
      "Lesson management",
      "Progress tracking",
      "Paid access",
      "Notes and digital-product sales",
      "Doubt-submission systems",
      "Instructor or admin responses",
    ],
    note: "Scope is confirmed feature by feature so that only functionality we can genuinely develop and support is included in the proposal.",
  },
  {
    icon: Database,
    heading: "Database and API Integrations",
    intro:
      "Applications rarely stand alone. We connect your system to the tools your business already uses through their published interfaces.",
    items: [
      "Secure database architecture",
      "Third-party API integration",
      "Payment gateway integration",
      "Email integration",
      "CRM integration",
      "Authentication services",
      "Cloud storage integration",
      "Webhook integration where technically supported",
      "External business-tool integration",
    ],
    note: "Integrations are implemented independently using publicly available APIs. Dravonix Media does not claim official partnership with any API or platform provider, and integration availability depends on the provider's own terms and plan limits.",
  },
  {
    icon: MonitorSmartphone,
    heading: "Responsive UI and User Experience",
    intro:
      "Business software should feel as considered as a consumer product — clear, fast and predictable on every screen size.",
    items: [
      "Desktop experience",
      "Tablet experience",
      "Mobile responsiveness",
      "Clear navigation",
      "Accessible forms",
      "User-friendly dashboards",
      "Consistent design system",
      "Loading and error states",
      "Empty states",
      "User feedback and notifications",
    ],
  },
  {
    icon: ShieldCheck,
    heading: "Security and Access Control",
    intro:
      "Security is designed into the data model and the routing layer, not added at the end.",
    items: [
      "Secure authentication",
      "Role-based permissions",
      "Protected routes",
      "Input validation",
      "Secure environment variables",
      "Basic rate limiting where relevant",
      "Data-access controls",
      "Session management",
      "Backup planning",
      "Security testing",
    ],
    note: "These measures substantially reduce risk and follow current good practice. No provider, including Dravonix Media, can promise complete protection against every possible cyber threat.",
  },
];

const steps = [
  "Business requirement discovery",
  "Workflow and feature planning",
  "Technical architecture",
  "UI and UX planning",
  "Database design",
  "Development",
  "Integration",
  "Testing and quality assurance",
  "Deployment",
  "Documentation and handover",
  "Maintenance and improvement options",
];

function CustomWebApplicationsPage() {
  const buttons = (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
      >
        Discuss Your Application <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={ESTIMATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
      >
        Estimate Your Application
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Breadcrumbs items={serviceBreadcrumbs("Custom Web Applications & SaaS")} />
          </Reveal>

          <div className="mt-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                Custom Web Applications &amp; SaaS
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                Custom Web Applications and SaaS Development
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Transform business processes into efficient digital platforms with custom web
                applications designed around real operational requirements.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Dravonix Media develops tailored web applications, SaaS platforms, client portals,
                dashboards and connected digital systems for startups, growing companies and
                established businesses.
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
              Our Development Process
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
              Pair your platform with professional website development
            </Link>
            <Link
              to="/ecommerce-development"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Explore e-commerce development for online selling
            </Link>
            <Link
              to="/crm-business-automation"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Connect your application to CRM and business automation
            </Link>
            <Link
              to="/project-estimator"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Estimate your application with the Project Estimator
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
            >
              Contact Dravonix Media about your platform idea
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Build Your Custom Digital Platform
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">
              Turn your workflow, service or software idea into a secure, scalable and user-friendly
              web application.
            </p>
            {buttons}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
