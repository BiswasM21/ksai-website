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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const bookings = await getBookings();
    const booking = bookings.find((b) => b.id === id);
    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json({ booking });
  } catch {
    return NextResponse.json({ error: "Failed to fetch booking" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const bookings = await getBookings();
    const index = bookings.findIndex((b) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    bookings[index] = { ...bookings[index], ...body };
    await saveBookings(bookings);

    return NextResponse.json({ booking: bookings[index] });
  } catch {
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 });
  }
}
