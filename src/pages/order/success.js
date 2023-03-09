import { useEffect } from "react"
import Stripe from 'stripe';

export default function OrderSuccess({ session }) {
  // useEffect(() => {
  //   console.log(session)
  // }, [])
  return <div>
      <h1 className="mt-20 mb-10 text-center text-2xl text-gray-700 font-bold">Order Success!</h1>
      { session && <p className="my-10 text-center text-xl text-gray-600 font-semibold">{ session.data?.[0].description }</p> }
    </div>
}

export async function getServerSideProps({ query }) {
  if (!query.session_id) {
    return {
      session: null
    }
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
  const sessionId = query.session_id
  const session = await stripe.checkout.sessions.listLineItems(sessionId, { limit: 5 })
  // console.log(JSON.stringify(session, null, 2))
  
  return {
    props: {
      session
    },
  };
}