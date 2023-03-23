import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import BuyButton from "../../components/BuyButton";
import { handleCheckout } from "../../utils/checkout";
import lang from "../../data/lang.json";
import metaData from "../../data/meta.json";
import data from "../../data/lesson/multi-meaning-phrasal-verbs-in-english.json";

const meta = {
  "zh-cn": {
    "description": "你是否正在为了用英语沟通而苦恼？你是否想知道母语人士是如何自然地表达自己的？你是否想讲出地道自然的英文口语，而不是生硬的中式英语？",
  },
  "zh-tw": {
    "description": "你是否正在為了用英語溝通而苦惱？你是否想知道母語人士是如何自然地表達自己的？你是否想講出地道自然的英文口語，而不是生硬的中式英語？",
  }
}

export default function DetailPage() {
  const { locale } = useRouter();
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <Head>
        <title>{data[locale].title}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content={meta[locale].description}
        />
        <meta
          name="keywords"
          content={metaData[locale].keywords}
        />
        <meta name="author" content="Hannah Lin" />
        <meta
          property="og:title"
          content={data[locale].title}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/cover/everyday-english.jpg"
        />
        <meta
          property="og:description"
          content={meta[locale].description}
        />
      </Head>
      <Script id="no-safari-cache" strategy="afterInteractive">
        {`(function () {
        window.onpageshow = function(event) {
          if (event.persisted) {
            window.location.reload();
          }
        };
      })();`}
      </Script>
      <h1 className="my-10 px-5 sm:px-0 text-2xl font-semibold text-slate-600">
        {lang[locale].paidCourse}
      </h1>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <Image
            className="w-full h-full object-fill"
            src="/static/img/cover/phrasal-verbs.jpg"
            alt={data[locale].title}
            width="666"
            height="384"
            priority
          />
        </figure>
        <div className="flex-1 flex flex-col justify-between px-5">
          <div>
            <h1 className="lg:mt-4 text-slate-600 font-semibold text-xl">
              Unlocking the Power of Multi-Meaning Phrasal Verbs in spoken
              English: Mastering Common Usage
            </h1>
            <h2 className="mt-2 text-slate-500 font-medium text-lg">
              {data[locale].title}
            </h2>
          </div>
          <div className="mt-8 lg:mt-5">
            <dl className="my-3 flex space-x-2 text-slate-500 text-base">
              <dt>{data[locale].frequencyTitle}：</dt>
              <dd>{data[locale].frequency}</dd>
            </dl>
            <dl className="my-3 flex space-x-2 text-slate-500 text-base">
              <dt>{data[locale].durationTitle}：</dt>
              <dd>{data[locale].duration}</dd>
            </dl>
            <dl className="my-3 flex items-center space-x-2 text-slate-600 font-medium text-base">
              <dt>{lang[locale].price}：</dt>
              <dd className="text-lg">USD $90</dd>
            </dl>
            <div className="my-8 lg:my-4 sm:w-2/3 lg:w-full mx-auto lg:text-left">
              <BuyButton
                onClick={handleCheckout({
                  priceId:
                    process.env
                      .NEXT_PUBLIC_STRIPE_PHRASAL_VERBS_LESSON_PRICE_ID,
                  quantity: 1,
                })}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white shadow">
        <h2 className="p-4 text-slate-600 font-semibold text-xl border-b border-gray-200">
          {lang[locale].lessonDesc}
        </h2>
        <div className="p-4 space-y-4">
          {data[locale].description.map((item, index) => (
            <p key={index} className="text-gray-500 text-base">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white shadow">
        <h2 className="px-4 py-5 text-slate-600 font-semibold text-xl border-b border-gray-200">
          {lang[locale].lessonCatalog}
        </h2>

        <ul
          role="list"
          className="px-4 divide-y divide-gray-200 text-slate-500"
        >
          {data[locale].catalog.map((item, index) => (
            <li key={index} className="py-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
