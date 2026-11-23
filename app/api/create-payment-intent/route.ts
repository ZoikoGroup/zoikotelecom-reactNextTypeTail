import Stripe from "stripe";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Create the Stripe client lazily so `next build` does not require the secret key.
let stripe: Stripe | null = null;
function getStripe() {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
    stripe = new Stripe(key);
  }
  return stripe;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      cart = [],
      billingAddress = {},
      shippingAddress = {},
      subtotal = 0,
      shippingFee = 0,
      discountAmount = 0,
      total,
    } = body;

    /* ------------------------------
       VALIDATION
    ------------------------------ */
    const amount = Number(total);

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid total amount" },
        { status: 400 }
      );
    }

    /* ------------------------------
       CREATE PAYMENT INTENT
    ------------------------------ */
    const paymentIntent = await getStripe().paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "gbp",

      automatic_payment_methods: {
        enabled: true,
      },

      metadata: {
        items: cart.length.toString(),
        subtotal: String(subtotal),
        shipping: String(shippingFee),
        discount: String(discountAmount),
      },
    });

    /* ------------------------------
       RESPONSE (SAFE)
    ------------------------------ */
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error("❌ Stripe PI Error:", err);

    return NextResponse.json(
      { error: "Payment initialization failed" },
      { status: 500 }
    );
  }
}