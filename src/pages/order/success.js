import Stripe from "stripe";
import Head from "next/head";

export default function OrderSuccess({ session }) {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>购买成功</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Improve your American English pronunciation, listening skills, and spoken English with our comprehensive guide. Learn how to speak like a native and communicate effectively in any situation."
        />
        <meta
          name="keywords"
          content="Hannah Lin, English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="购买成功" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="Improve your American English pronunciation, listening skills, and spoken English with our comprehensive guide. Learn how to speak like a native and communicate effectively in any situation."
        />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">购买成功</h1>

      <div className="relative flex flex-col justify-center items-center px-5 pt-20 bg-white rounded-lg">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <div className="mt-2">
          <h2 className="text-xl text-center font-bold text-slate-600">
            Thank you
          </h2>
          <p className="mt-10 mb-20 text-center text-xl sm:text-2xl text-slate-500 font-semibold">
            {session?.data?.[0].description}
          </p>
        </div>

        <p className="self-start flex flex-col sm:flex-row mb-5 text-base text-slate-500">
          <label className="flex-shrink-0">课程说明：</label>
          <div className="mt-2 sm:mt-0 text-left space-y-2">
            <p>1. 视频课程将会在您支付成功后的24小时内发送到您的邮箱。</p>
            <p>2. 一对一私教课程，预约上课时间后，通过Zoom视频软件进行上课。</p>
          </div>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  if (!query.session_id) {
    return {
      props: {
        session: null,
      },
    };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const sessionId = query.session_id;
  const session = await stripe.checkout.sessions.listLineItems(sessionId, {
    limit: 5,
  });

  return {
    props: {
      session,
    },
  };
}
