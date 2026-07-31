import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-text)] sm:tracking-[0.18em]">
        {items.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 && <li aria-hidden>/</li>}
            <li className={item.current ? "text-[var(--cyan-accent)]" : undefined}>
              {item.current || !item.href ? (
                <span aria-current={item.current ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="rounded-sm transition-colors hover:text-[var(--cyan-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan-accent)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

/** Standard Home / Services / <current> trail for service pages. */
export function serviceBreadcrumbs(label: string): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label, current: true },
  ];
}
