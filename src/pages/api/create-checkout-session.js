import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { quantity, price, success_url, cancel_url } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "alipay"],
      line_items: [
        {
          price,
          quantity,
        },
      ],
      mode: "payment",
      success_url,
      cancel_url,
    });

    //TODO: check error
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
}
