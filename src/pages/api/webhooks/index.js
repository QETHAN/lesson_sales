import Cors from "micro-cors";

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const webhookSecret = "xxx";

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const webhookHandler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log("✅ Success:", event.id);

    // Handle the event
    switch (event.type) {
      case "charge.succeeded":
        const chargeSucceeded = event.data.object;
        // Then define and call a function to handle the event charge.succeeded
        const { email, name } = chargeSucceeded.billing_details;
        const receipt_url = chargeSucceeded.receipt_url;

        console.log("---->", email, name, receipt_url);

        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
};

export default cors(webhookHandler);
