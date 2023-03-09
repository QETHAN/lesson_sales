import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

let stripePromise = null;

export const getStripe = (secret = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) => {
  if (!stripePromise) {
    stripePromise = loadStripe(secret);
  }
  return stripePromise;
};

export const handleCheckout = ({ priceId, quantity = 1 }) => {
  return async () => {
    try {
      const stripe = await getStripe();

      const checkoutSession = await axios.post("/api/create-checkout-session", {
        price: priceId,
        quantity,
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/order/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/order/cancel`,
      });

      // success_url: `${req.headers.origin}?status=success&session_id={CHECKOUT_SESSION_ID}`,
      // cancel_url: `${req.headers.origin}?status=cancelled`

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      // const session = await stripe.checkout.sessions.retrieve(
      //   checkoutSession.data.id,
      //   { expand: ["line-items"] }
      // );

      // alert(JSON.stringify(session, null, 2))

      if (result.error) {
        console.log(result.error.message);
      }

      // return { result, session }
    } catch (error) {
      console.log(error);
    }
  };
};
