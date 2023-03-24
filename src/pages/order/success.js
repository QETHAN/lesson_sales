import Stripe from "stripe";
import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "../../data/meta.json";
import lang from "../../data/lang.json";

export default function OrderSuccess({ session }) {
  const { locale } = useRouter();

  const data = {
    "zh-cn": {
      tip: "课程说明",
      content: [
        "1. 视频课程将会在您支付成功后的24小时内发送到您的邮箱。",
        "2. 一对一私教课程，预约上课时间后，通过Zoom视频软件进行上课。",
      ],
    },
    "zh-tw": {
      tip: "課程說明",
      content: [
        "1. 視頻課程將會在您支付成功後的24小時內發送到您的郵箱。",
        "2. 一對一私教課程，預約上課時間後，通過Zoom視頻軟件進行上課。",
      ],
    },
  };
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>{lang[locale].orderSuccess}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Improve your American English pronunciation, listening skills, and spoken English with Hannah Lin. Learn how to speak like a native and communicate effectively in any situation."
        />
        <meta name="keywords" content={metaData[locale].keywords} />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content={lang[locale].orderSuccess} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="Improve your American English pronunciation, listening skills, and spoken English with Hannah Lin. Learn how to speak like a native and communicate effectively in any situation."
        />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">
        {lang[locale].orderSuccess}
      </h1>

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
          <label className="flex-shrink-0">{data[locale].tip}：</label>
          <div className="mt-2 sm:mt-0 text-left space-y-2">
            {data[locale].content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
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
