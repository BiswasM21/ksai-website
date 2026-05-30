import { NextResponse } from "next/server";

const RAZORPAY_ME_USERNAME = process.env.RAZORPAY_ME_USERNAME || "kalingasovereignaiprivatelimi";

export async function POST(request: Request) {
  try {
    const { productId, productName, amount, currency, customerName, customerEmail, customerPhone, country } = await request.json();

    if (!productId || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const orderId = `PRD${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Log order for admin to see
    console.log("New Product Order:", {
      orderId,
      productId,
      productName,
      amount,
      currency,
      customerName,
      customerEmail,
      customerPhone,
      country,
      createdAt: new Date().toISOString(),
    });

    // Build Razorpay link with encoded amount
    const redirectUrl = `https://razorpay.me/@${RAZORPAY_ME_USERNAME}?amount=6zcPuaHTrIB8Jllw5habFw%3D%3D`;

    return NextResponse.json({
      success: true,
      orderId,
      redirectUrl,
      amount,
      currency,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
