import { NextResponse } from "next/server";

const RAZORPAY_ME_USERNAME = process.env.RAZORPAY_ME_USERNAME || "kalingasovereignaiprivatelimi";

export async function POST(request: Request) {
  try {
    const { bookingId, amount, currency, clientType, service, name, email } = await request.json();

    // If amount is 0, skip payment
    if (amount === 0) {
      return NextResponse.json({
        free: true,
        message: "No payment required",
      });
    }

    // Build redirect URL for Razorpay
    const redirectUrl = `https://razorpay.me/@${RAZORPAY_ME_USERNAME}?amount=6zcPuaHTrIB8Jllw5habFw%3D%3D`;

    return NextResponse.json({
      success: true,
      paymentType: "razorpay_me",
      redirectUrl: redirectUrl,
      amount: amount,
      currency: currency,
      bookingId: bookingId,
      message: "Redirecting to Razorpay payment page",
      notes: {
        bookingId,
        service,
        clientName: name,
        clientEmail: email,
        clientType,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to initiate payment" },
      { status: 500 }
    );
  }
}
