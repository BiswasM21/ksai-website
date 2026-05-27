"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string | null;
  const budget = formData.get("budget") as string | null;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  if (!email.includes("@")) {
    return { error: "Please provide a valid email address." };
  }

  // In production: Integrate with Resend, SendGrid, or email service
  // For now: Log the submission (can be viewed in server console)
  console.log("Contact form submission:", { name, email, company, budget, message });

  return {
    success: true,
    message: "Thank you! We'll be in touch within 24 hours.",
  };
}
