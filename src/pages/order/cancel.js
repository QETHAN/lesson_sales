import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "../../data/meta.json";
import lang from "../../data/lang.json";

export default function OrderCancel() {
  const { locale } = useRouter();

  const data = {
    "zh-cn": {
      "tip": "您取消了这次购买",
      "back": "返回首页",
    },
    "zh-tw": {
      "tip": "您取消了這次購買",
      "back": "返回首頁",
    }
  }

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>{lang[locale].orderCancel}</title>
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
        <meta
          name="keywords"
          content={metaData[locale].keywords}
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content={lang[locale].orderCancel} />
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
        <link rel="apple-touch-icon" sizes="180x180" href="/static/img/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/icons/favicon-16x16.png" />
        <link rel="manifest" href="/static/img/icons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">{lang[locale].orderCancel}</h1>

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
            {data[locale].tip}
          </h2>
          <div className="my-10 text-center">
            <a
              href="/"
              className="w-full px-10 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base transition ease-in-out duration-150"
            >
              {data[locale].back}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}