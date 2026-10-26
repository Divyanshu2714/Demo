import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, Microscope, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/school-layout";
import courtyard from "@/assets/school-courtyard.jpg";
import library from "@/assets/library-collaboration.jpg";
import science from "@/assets/science-presentation.jpg";
import play from "@/assets/schoolyard-play.jpg";
import cello from "@/assets/student-cello.jpg";
import robotics from "@/assets/robotics-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABC School — Curiosity, Character, Community" },
      {
        name: "description",
        content: "Discover ABC School, an inspiring learning community for ages 4–18.",
      },
      { property: "og:title", content: "ABC School" },
      {
        property: "og:description",
        content: "A place where curiosity is taught, not just tested.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const events = [
  ["14", "Mar", "Spring Open Day", "Tours at 9:00 & 11:00 · Main Hall"],
  ["28", "Mar", "Mid-term examinations begin", "Years 7–13 · Timetables on the portal"],
  ["09", "Apr", "Science & Innovation Fair", "Open to families · 14:00–17:00"],
];

function HomePage() {
  return (
    <PageShell>
      <main>
        <div className="mx-auto mt-3 max-w-7xl px-4 lg:px-6">
          <Link
            to="/news-events"
            className="glass flex items-center gap-2.5 rounded-md border border-border px-4 py-2.5 text-xs font-medium"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            <span>Autumn Open Day · Saturday 10 October — tours at 9:00 & 11:00</span>
            <span className="ml-auto hidden font-semibold text-primary sm:block">
              Discover more →
            </span>
          </Link>
        </div>
        <section className="mx-auto mt-5 max-w-7xl px-4 lg:px-6">
          <div className="relative min-h-[650px] overflow-hidden rounded-lg border border-border sm:min-h-[680px] lg:min-h-[640px]">
            <img
              src={courtyard}
              alt="ABC students walking through the leafy school courtyard"
              width={1280}
              height={960}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 lg:max-w-3xl lg:p-10">
              <div className="glass rounded-lg border border-border p-5 shadow-lg sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Est. 1962 · Ages 4–18
                </p>
                <h1 className="reveal mt-3 font-display text-4xl font-medium leading-[1.05] text-brand-deep sm:text-5xl lg:text-6xl">
                  A place where curiosity is taught, not just tested.
                </h1>
                <p className="reveal mt-4 max-w-2xl text-sm leading-6 text-foreground/70 sm:text-base">
                  A warm, ambitious community where every child is known by name and encouraged to
                  ask the next question.
                </p>
                <div className="reveal mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="editorial" size="lg">
                    <Link to="/admission">Begin your application</Link>
                  </Button>
                  <Button asChild variant="soft" size="lg">
                    <Link to="/about">Book a tour</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Academics
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-brand-deep sm:text-4xl">
                Rigour with room to wander
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Strong foundations meet specialist teaching, independent thought and the confidence
                to explore.
              </p>
              <Button asChild variant="link" className="mt-4 px-0">
                <Link to="/academics">
                  Explore our approach <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["12", "Specialist studios"],
                ["8:1", "Student–teacher ratio"],
                ["94%", "First-choice university"],
                ["40+", "Clubs and ensembles"],
              ].map(([n, t], i) => (
                <div key={n} className="glass rounded-lg border border-border p-5">
                  <span
                    className={`font-display text-4xl font-medium ${i === 1 ? "text-accent" : "text-primary"}`}
                  >
                    {n}
                  </span>
                  <p className="mt-3 text-xs font-semibold leading-5 text-foreground/65">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-brand-deep py-16 text-primary-foreground lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Campus life
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
                  Days that feel like home
                </h2>
              </div>
              <Button asChild variant="inverse" className="hidden sm:inline-flex">
                <Link to="/gallery">View gallery</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <img
                src={library}
                alt="Students collaborating in the school library"
                loading="lazy"
                width={768}
                height={1024}
                className="row-span-2 h-full min-h-80 w-full rounded-lg object-cover lg:col-span-2"
              />
              <img
                src={science}
                alt="Student presenting a science project"
                loading="lazy"
                width={816}
                height={816}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <img
                src={play}
                alt="Pupils playing on the school field"
                loading="lazy"
                width={816}
                height={816}
                className="aspect-square w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl font-medium text-brand-deep">
                Academic calendar
              </h2>
              <Link to="/academic-calendar" className="text-xs font-bold text-primary">
                Full calendar
              </Link>
            </div>
            <div className="glass mt-6 divide-y divide-border rounded-lg border border-border">
              {events.map(([day, month, title, detail]) => (
                <div key={title} className="flex items-center gap-4 p-4 sm:p-5">
                  <div className="grid size-14 shrink-0 place-items-center rounded-md bg-secondary text-center leading-none">
                    <span className="font-display text-xl font-semibold text-primary">{day}</span>
                    <span className="text-[9px] font-bold uppercase text-primary/70">{month}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-deep">News & events</h2>
            <div className="mt-6 space-y-3">
              {[
                [cello, "Music", "School orchestra earns a place at the national festival"],
                [robotics, "STEM", "New robotics wing opens with industry partners"],
              ].map(([img, tag, title]) => (
                <Link
                  key={String(title)}
                  to="/news-events"
                  className="glass flex gap-4 rounded-lg border border-border p-4"
                >
                  <img
                    src={String(img)}
                    alt=""
                    loading="lazy"
                    width={816}
                    height={816}
                    className="size-20 shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                      {tag}
                    </p>
                    <p className="mt-1 font-semibold leading-snug">{title}</p>
                    <p className="mt-2 text-xs text-muted-foreground">September 2026</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-lg bg-brand-deep p-7 text-primary-foreground sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Admissions</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-5xl">
              Applications for 2027–28 are now open.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-primary-foreground/70">
              Visit our campus, meet our teachers and discover whether ABC is the right fit for your
              family.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="warm" size="lg">
                <Link to="/admission">Start an application</Link>
              </Button>
              <Button asChild variant="inverse" size="lg">
                <Link to="/admission">Download prospectus</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
