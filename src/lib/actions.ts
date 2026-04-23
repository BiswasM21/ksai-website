"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const budget = formData.get("budget") as string;
  const message = formData.get("message") as string;

  // Validate
  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  if (!email.includes("@")) {
    return { error: "Please provide a valid email address." };
  }

  // Log for now — wire Resend / email service here
  console.log("Contact form submission:", {
    name,
    email,
    company,
    budget,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Thank you! We'll be in touch within 24 hours.",
  };
}
