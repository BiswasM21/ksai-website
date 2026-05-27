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

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function getBookings(): Promise<Booking[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(BOOKINGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveBookings(bookings: Booking[]): Promise<void> {
  await ensureDataDir();
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const booking: Booking = {
      id: `BK${Date.now()}`,
      service: body.service,
      clientType: body.clientType,
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
      callDuration: body.callDuration,
      totalAmount: body.totalAmount,
      currency: body.currency,
      status: body.totalAmount === 0 ? "confirmed" : "pending",
      createdAt: new Date().toISOString(),
    };

    const bookings = await getBookings();
    bookings.unshift(booking);
    await saveBookings(bookings);

    return NextResponse.json({ booking });
  } catch {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
