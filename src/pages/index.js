import Head from "next/head";
import PaidLessons from "../components/PaidLessons";
import FreeLessons from "../components/FreeLessons";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Learn English with Hannah Lin</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Improve your American English pronunciation, listening skills, and spoken English with our comprehensive guide. Learn how to speak like a native and communicate effectively in any situation."
        />
        <meta
          name="keywords"
          content="English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta
          property="og:title"
          content="Learn English with Hannah Lin"
        />
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
      <PaidLessons />
      <div className="mt-10 bg-white">
        <FreeLessons />
      </div>
    </div>
  );
}

export default HomePage;
