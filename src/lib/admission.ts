import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const admissionClassOptions = [
  "Nursery",
  "LKG",
  "UKG",
  ...Array.from({ length: 12 }, (_, index) => `Class ${index + 1}`),
] as const;

const admissionEnquirySchema = z.object({
  studentName: z.string().trim().min(2).max(100),
  classApplyingFor: z.enum(admissionClassOptions),
  phone: z
    .string()
    .trim()
    .regex(/^[\d+()\s-]{7,20}$/),
});

export const submitAdmissionEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => admissionEnquirySchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("Admission enquiry email is not configured: RESEND_API_KEY is missing.");
      return { success: false as const, reason: "email_not_configured" as const };
    }

    let response: Response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env["RESEND_FROM_EMAIL"] ?? "ABC School Admissions <onboarding@resend.dev>",
          to: [process.env["RESEND_TO_EMAIL"] ?? "mishradivyanshu0005@gmail.com"],
          subject: "New school admission enquiry",
          text: [
            `Student name: ${data.studentName}`,
            `Class applying for: ${data.classApplyingFor}`,
            `Phone number: ${data.phone}`,
          ].join("\n"),
        }),
      });
    } catch {
      console.error("Admission enquiry email provider request failed.");
      return { success: false as const, reason: "email_delivery_failed" as const };
    }

    if (!response.ok) {
      console.error(`Admission enquiry email provider returned HTTP ${response.status}.`);
      return { success: false as const, reason: "email_delivery_failed" as const };
    }

    return { success: true };
  });
