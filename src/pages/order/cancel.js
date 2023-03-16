import Stripe from "stripe";
import Head from "next/head";

export default function OrderCancel({ session }) {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>购买取消</title>
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
          content="English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="购买取消" />
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

      <h1 className="my-10 text-2xl font-bold text-slate-600">购买取消</h1>

      <div className="relative flex flex-col justify-center items-center px-5 py-20 bg-white rounded-lg">
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl text-center font-bold text-slate-600">
            您取消了这次购买
          </h2>
          <div className="my-10 text-center">
            <a
              href="/"
              className="w-full px-10 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base transition ease-in-out duration-150"
            >
              返回首页
            </a>
          </div>
        </div>
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
