import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageIntro, PageShell } from "@/components/school-layout";
import { admissionClassOptions, submitAdmissionEnquiry } from "@/lib/admission";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admissions — ABC School" },
      { name: "description", content: "Begin your family's journey to ABC School." },
      { property: "og:title", content: "Admissions — ABC School" },
      { property: "og:description", content: "Visit, apply and join the ABC community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admission,
});

function Admission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const studentName = String(formData.get("studentName") ?? "").trim();
    const classApplyingFor = String(formData.get("classApplyingFor") ?? "");
    const phone = String(formData.get("phone") ?? "");

    try {
      const result = await submitAdmissionEnquiry({
        data: { studentName, classApplyingFor, phone },
      });
      if (!result.success) {
        setErrorMessage(
          result.reason === "email_not_configured"
            ? "The school's email service isn't configured yet. Please contact the school office."
            : "We couldn't send your request right now. Please try again, or contact the school office.",
        );
        return;
      }
      form.reset();
      setIsConfirmationOpen(true);
    } catch {
      setErrorMessage(
        "We couldn't send your request right now. Please try again, or contact the school office.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageShell>
      <main>
        <PageIntro
          eyebrow="Admissions"
          title="Your ABC journey starts here."
          description="Choosing a school is personal. Tell us a little about your child and our admissions team will be in touch."
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_.8fr] lg:px-6">
          <div id="admission-form" className="glass rounded-lg border border-border p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Admission enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl text-brand-deep">
              Tell us about your child.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Fill in the form and our admissions team will contact you soon.
            </p>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="studentName">Student name</Label>
                <Input
                  id="studentName"
                  name="studentName"
                  autoComplete="name"
                  placeholder="Enter the student's full name"
                  minLength={2}
                  maxLength={100}
                  required
                />
                <p className="text-xs text-muted-foreground">Please enter at least 2 characters.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="classApplyingFor">Standard applying for</Label>
                <select
                  id="classApplyingFor"
                  name="classApplyingFor"
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a standard
                  </option>
                  {admissionClassOptions.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Enter your contact number"
                  pattern="(?:[0-9]|\+|\(|\)|\s|-){7,20}"
                  title="Enter a phone number using 7 to 20 digits, spaces, or + ( ) - characters."
                  maxLength={20}
                  required
                />
              </div>

              {errorMessage && (
                <p role="alert" className="text-sm text-destructive">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                variant="editorial"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending enquiry..." : "Submit admission enquiry"}
              </Button>
              <p className="text-xs leading-5 text-muted-foreground">
                Your details will be sent to our admissions team so they can follow up with you.
              </p>
            </form>
          </div>

          <aside className="rounded-lg bg-brand-deep p-7 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              2027–28 entry
            </p>
            <h2 className="mt-3 font-display text-3xl">Come and see us.</h2>
            <p className="mt-4 leading-7 text-primary-foreground/70">
              Campus tours run every Tuesday and Thursday during term time.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Personal tour with a senior pupil",
                "Meet a member of the admissions team",
                "Explore classrooms and outdoor spaces",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="warm" size="lg" className="mt-7 w-full">
              <a href="#admission-form">Request a visit</a>
            </Button>
          </aside>
        </section>
      </main>

      <Dialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Thank you for your enquiry</DialogTitle>
            <DialogDescription className="text-base leading-7">
              We will contact you regarding admission soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
