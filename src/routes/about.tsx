import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PageShell } from "@/components/school-layout";
import courtyard from "@/assets/school-courtyard.jpg";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ABC School" },
      { name: "description", content: "Our story, values and educational community." },
      { property: "og:title", content: "About ABC School" },
      { property: "og:description", content: "Meet the community behind ABC School." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});
function About() {
  return (
    <PageShell>
      <main>
        <PageIntro
          eyebrow="About ABC"
          title="Small enough to know every child. Ambitious enough to expand every horizon."
          description="Founded in 1962, ABC brings together thoughtful teaching, enduring values and a genuinely close community."
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-6">
          <img
            src={courtyard}
            alt="ABC School courtyard"
            width={1280}
            height={960}
            className="h-full min-h-96 w-full rounded-lg object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Our purpose", "To nurture curiosity, courage and consideration in every student."],
              [
                "Our community",
                "A diverse school family built on trust, kindness and shared endeavour.",
              ],
              [
                "Our campus",
                "Light-filled classrooms, specialist studios and generous green spaces.",
              ],
              [
                "Our future",
                "An education that prepares young people to shape change with confidence.",
              ],
            ].map(([h, p]) => (
              <article key={h} className="glass rounded-lg border border-border p-6">
                <h2 className="font-display text-2xl text-brand-deep">{h}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{p}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
