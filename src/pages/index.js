import Head from "next/head";
import PaidLessons from "../components/PaidLessons";
import FreeLessons from "../components/FreeLessons";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Learn English with Hannah Lin</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Improve your American English pronunciation, listening skills, and spoken English with Hannah Lin. Learn how to speak like a native and communicate effectively in any situation."
        />
        <meta
          name="keywords"
          content="Hannah Lin, English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="Learn English with Hannah Lin" />
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/img/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/img/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/img/icons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <PaidLessons />
      <div className="mt-10 bg-white">
        <FreeLessons />
      </div>
    </div>
  );
}

export default HomePage;
