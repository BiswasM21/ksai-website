import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

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

export async function GET() {
  try {
    const bookings = await getBookings();
    return NextResponse.json({ bookings });
  } catch {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
