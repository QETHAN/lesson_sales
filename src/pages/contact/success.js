import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "../../data/meta.json";
import lang from "../../data/lang.json";

export default function ContactSuccessPage() {
  const { locale } = useRouter();

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>{lang[locale].contactMe}</title>
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
        <meta property="og:title" content={lang[locale].contactMe} />
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

      <h1 className="my-10 text-2xl font-bold text-slate-600">{lang[locale].contactMe}</h1>

      <div className="flex flex-col justify-center items-center px-5 py-20 bg-white rounded-lg">
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
          <h2 className="text-xl text-center font-bold text-slate-600">Thank you</h2>
          <p className="mt-5 text-base text-center text-gray-500">Your message has been sent.</p>
        </div>
      </div>
    </div>
  );
}
