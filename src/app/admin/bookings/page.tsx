"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, Mail, Phone, DollarSign, CheckCircle2, XCircle, RefreshCw, Filter } from "lucide-react";

interface Booking {
  id: string;
  service: string;
  clientType: "india" | "global";
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  callDuration: string;
  totalAmount: number;
  currency: string;
  status: "pending" | "confirmed" | "paid" | "cancelled";
  createdAt: string;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "paid">("all");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      if (data.bookings) {
        setBookings(data.bookings);
      }
    } catch {
      // Error handled silently
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchBookings();
    } catch {
      // Error handled silently
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (filter === "all") return true;
    if (filter === "pending") return b.status === "pending";
    if (filter === "confirmed") return b.status === "confirmed" || b.status === "paid";
    return false;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed" || b.status === "paid").length,
    revenue: bookings
      .filter((b) => b.status === "paid")
      .reduce((sum, b) => sum + b.totalAmount, 0),
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-6 h-6 animate-spin text-[var(--color-primary)]" />
        <span className="ml-2 text-[var(--color-text-secondary)]">Loading bookings...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Consultation Bookings</h1>
          <p className="text-[var(--color-text-secondary)]">Manage consultation appointments</p>
        </div>
        <button onClick={fetchBookings} className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface)]">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4">
          <div className="text-2xl font-bold text-[var(--color-text)]">{stats.total}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Total Bookings</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4">
          <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Pending</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4">
          <div className="text-2xl font-bold text-green-500">{stats.confirmed}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Confirmed</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4">
          <div className="text-2xl font-bold text-[var(--color-primary)]">₹{stats.revenue}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Revenue</div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {(["all", "pending", "confirmed"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)]"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-12 text-center">
            <Calendar className="w-12 h-12 text-[var(--color-text-muted)] mx-auto mb-4" />
            <p className="text-[var(--color-text-secondary)]">No bookings found</p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-[var(--color-primary)]">{booking.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === "paid" || booking.status === "confirmed"
                        ? "bg-green-500/10 text-green-500"
                        : booking.status === "pending"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-red-500/10 text-red-500"
                    }`}>
                      {booking.status}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {booking.clientType === "india" ? "🇮🇳 India" : "🌍 Global"}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{booking.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{booking.service}</p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                      <Mail className="w-4 h-4" />
                      {booking.email}
                    </div>
                    <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                      <Phone className="w-4 h-4" />
                      {booking.phone}
                    </div>
                    <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                      <Clock className="w-4 h-4" />
                      {booking.callDuration} min
                    </div>
                    {booking.company && (
                      <div className="text-[var(--color-text-secondary)]">{booking.company}</div>
                    )}
                  </div>

                  {booking.message && (
                    <p className="mt-3 text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg)] p-3 rounded-lg">
                      {booking.message}
                    </p>
                  )}
                </div>

                <div className="flex md:flex-col items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl font-bold text-[var(--color-text)]">
                      {booking.currency === "INR" ? "₹" : "$"}{booking.totalAmount}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {booking.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(booking.id, "confirmed")}
                          className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20"
                          title="Confirm"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => updateStatus(booking.id, "cancelled")}
                          className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20"
                          title="Cancel"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    <a
                      href={`https://wa.me/${booking.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      title="Contact via WhatsApp"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
