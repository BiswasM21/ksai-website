"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, Clock, Mail, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function SuccessContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("booking");
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookingId) {
      fetchBooking();
    }
  }, [bookingId]);

  const fetchBooking = async () => {
    try {
      const res = await fetch(`/api/bookings/${bookingId}`);
      if (res.ok) {
        const data = await res.json();
        setBooking(data.booking);
      }
    } catch {
      // Error handled silently
    }
    setLoading(false);
  };

  const sendConfirmationEmail = async () => {
    if (!booking) return;

    try {
      await fetch("/api/bookings/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id, email: booking.email }),
      });
      alert("Confirmation email sent!");
    } catch {
      // Error handled silently
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
          {booking?.totalAmount === 0 ? "Consultation Booked!" : "Payment Successful!"}
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          {booking?.totalAmount === 0
            ? "Your free consultation has been booked. We'll contact you shortly."
            : "Your consultation has been confirmed. We'll contact you shortly."}
        </p>

        {/* Booking Details */}
        {booking && (
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 text-left mb-8">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-muted)]">Booking ID</span>
              <span className="font-mono text-[var(--color-primary)]">{booking.id}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[var(--color-text-muted)]" />
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Service</div>
                  <div className="font-medium text-[var(--color-text)]">{booking.service}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--color-text-muted)]" />
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Duration</div>
                  <div className="font-medium text-[var(--color-text)]">{booking.callDuration} minutes</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-text-muted)]" />
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">Email</div>
                  <div className="font-medium text-[var(--color-text)]">{booking.email}</div>
                </div>
              </div>

              {booking.message && (
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[var(--color-text-muted)] mt-0.5" />
                  <div>
                    <div className="text-sm text-[var(--color-text-muted)]">Project Details</div>
                    <div className="font-medium text-[var(--color-text)]">{booking.message}</div>
                  </div>
                </div>
              )}

              {booking.totalAmount > 0 && (
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-secondary)]">Amount Paid</span>
                    <span className="text-2xl font-bold text-green-500">
                      {booking.currency === "INR" ? "₹" : "$"}{booking.totalAmount}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* What's Next */}
        <div className="bg-[var(--color-primary)]/10 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-[var(--color-text)] mb-3">What happens next?</h3>
          <ol className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs flex-shrink-0">1</span>
              <span>We'll send a confirmation email with meeting details</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs flex-shrink-0">2</span>
              <span>Our team will reach out via WhatsApp to schedule the call</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs flex-shrink-0">3</span>
              <span>Join the Google Meet/Zoom call at the scheduled time</span>
            </li>
          </ol>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1" onClick={sendConfirmationEmail}>
            Resend Confirmation Email
          </Button>
          <Link href="/" className="flex-1">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </div>

        {/* Contact */}
        <p className="text-sm text-[var(--color-text-muted)] mt-8">
          Questions? Contact us at{" "}
          <a href="mailto:contact@kalingasovereignai.com" className="text-[var(--color-primary)] hover:underline">
            contact@kalingasovereignai.com
          </a>{" "}
          or{" "}
          <a href="https://wa.me/919692000359" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
