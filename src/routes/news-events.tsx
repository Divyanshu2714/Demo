import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PageShell } from "@/components/school-layout";
import cello from "@/assets/student-cello.jpg";
import robotics from "@/assets/robotics-workshop.jpg";
import science from "@/assets/science-presentation.jpg";
const stories = [
  [
    cello,
    "Music",
    "Orchestra earns a place at the national festival",
    "Our musicians will perform alongside schools from across the country this November.",
  ],
  [
    robotics,
    "STEM",
    "Robotics team wins regional challenge",
    "A student-designed rescue rover impressed judges with its thoughtful engineering.",
  ],
  [
    science,
    "Community",
    "Innovation Fair returns this autumn",
    "Families are invited to explore more than 60 student-led experiments and inventions.",
  ],
];
export const Route = createFileRoute("/news-events")({
  head: () => ({
    meta: [
      { title: "News & Events — ABC School" },
      { name: "description", content: "The latest stories and upcoming events from ABC School." },
      { property: "og:title", content: "News & Events — ABC School" },
      {
        property: "og:description",
        content: "Stories, achievements and events from our community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: News,
});
function News() {
  return (
    <PageShell>
      <main>
        <PageIntro
          eyebrow="News & Events"
          title="Stories from across our community."
          description="Celebrate student achievement, discover new ideas and find your next opportunity to join us on campus."
        />
        <section className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3 lg:px-6">
          {stories.map(([img, tag, title, copy]) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                width={816}
                height={816}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  {tag}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-tight text-brand-deep">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
