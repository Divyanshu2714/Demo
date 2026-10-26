import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Gallery", "/gallery"],
  ["Academic Calendar", "/academic-calendar"],
  ["Admission", "/admission"],
  ["News & Events", "/news-events"],
] as const;

export function SchoolHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 lg:px-6 lg:pt-5">
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-border px-3 py-2.5 shadow-sm lg:px-5">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid size-9 place-items-center rounded-md bg-brand-deep font-display text-lg font-semibold text-cream">
              A
            </span>
            <span className="leading-none">
              <span className="block font-display text-base font-semibold text-brand-deep">
                ABC
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                School
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="rounded-full px-3 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:bg-secondary hover:text-brand-deep"
                activeProps={{ className: "bg-secondary text-brand-deep" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="editorial" size="sm" className="hidden sm:inline-flex">
              <Link to="/admission">Apply now</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav
            className="glass mx-auto mt-2 grid max-w-7xl rounded-lg border border-border p-2 shadow-lg xl:hidden"
            aria-label="Mobile navigation"
          >
            {links.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold text-foreground/75 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-brand-deep" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export function SchoolFooter() {
  return (
    <footer className="mx-auto mt-20 max-w-7xl px-4 pb-6 lg:px-6">
      <div className="grid overflow-hidden rounded-lg border border-border bg-brand-deep text-primary-foreground lg:grid-cols-[1fr_1.25fr]">
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-cream font-display text-lg font-semibold text-brand-deep">
              A
            </span>
            <span className="font-display text-xl font-semibold">ABC School</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/70">
            A warm, ambitious community where every student is known, challenged and inspired.
          </p>
          <div className="mt-7 space-y-3 text-sm">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              14 ABC Lane, Greenfield
            </p>
            <a className="flex gap-3" href="tel:+441632960440">
              <Phone className="size-4 text-accent" />
              1111111111
            </a>
            <a className="flex gap-3" href="mailto:hello@aldermoor.example">
              <Mail className="size-4 text-accent" />
              hello@ABC.example
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 text-xs text-primary-foreground/65">
            {links.slice(1).map(([label, to]) => (
              <Link key={to} to={to} className="py-1 hover:text-primary-foreground">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <iframe
          title="Map showing Aldermoor School"
          className="min-h-72 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Greenfield%20England&output=embed"
        />
      </div>
      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        © 2026 ABC School. Demo contact details.
      </p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SchoolHeader />
      {children}
      <SchoolFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 lg:px-6 lg:pb-16 lg:pt-20">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-tight text-brand-deep sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </section>
  );
}
