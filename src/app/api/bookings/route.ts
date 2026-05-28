import { NextResponse } from "next/server";

const BOOKINGS: any[] = [];

export async function GET() {
  return NextResponse.json({ bookings: BOOKINGS });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const booking = {
      id: `BK${Date.now()}`,
      service: body.service,
      serviceName: body.serviceName,
      clientType: body.clientType,
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
      callDuration: body.callDuration,
      totalAmount: body.totalAmount,
      currency: body.currency,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Store in memory (for Netlify serverless)
    BOOKINGS.push(booking);

    // Log for admin to see in Netlify dashboard
    console.log("New Booking:", JSON.stringify(booking, null, 2));

    return NextResponse.json({
      success: true,
      booking: booking,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
