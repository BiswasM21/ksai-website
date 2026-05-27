import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

interface Booking {
  id: string;
  status: "pending" | "confirmed" | "paid" | "cancelled";
  paymentId?: string;
}

async function getBookings(): Promise<Booking[]> {
  try {
    const data = await fs.readFile(BOOKINGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveBookings(bookings: Booking[]): Promise<void> {
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

export async function POST(request: Request) {
  try {
    const { bookingId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = await request.json();

    // Verify signature
    if (RAZORPAY_KEY_SECRET) {
      const generatedSignature = crypto
        .createHmac("sha256", RAZORPAY_KEY_SECRET)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (generatedSignature !== razorpaySignature) {
        return NextResponse.json(
          { error: "Invalid payment signature" },
          { status: 400 }
        );
      }
    }

    // Update booking status
    const bookings = await getBookings();
    const bookingIndex = bookings.findIndex((b) => b.id === bookingId);

    if (bookingIndex !== -1) {
      bookings[bookingIndex].status = "paid";
      bookings[bookingIndex].paymentId = razorpayPaymentId;
      await saveBookings(bookings);
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Payment verified successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
