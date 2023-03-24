import Head from "next/head";
import { useRouter } from "next/router";
import data from "../data/about.json";

const meta = {
  "zh-cn": {
    title: "关于我",
    description:
      "我是Hannah Lin，2002年毕业于美国Biola 大学, 获得TESOL硕士学位。在中国某大学英语系执教十多年后，2011年与家人一起移民加拿大。定居加拿大后曾在当地大学教授ESL英文，并持续辅导留学生及新老移民的口语及写作。",
  },
  "zh-tw": {
    title: "關於我",
    description:
      "我是Hannah Lin，2002年畢業於美國Biola 大學, 獲得TESOL碩士學位。在中國某大學英語系执教十多年后，2011年与家人一起移民加拿大。定居加拿大后曾在當地大學教授ESL英文，并持續輔導留學生及新老移民的口語及寫作。",
  },
};
export default function AboutPage() {
  const { locale } = useRouter();
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>{meta[locale].title}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={meta[locale].description} />
        <meta
          name="keywords"
          content="Hannah Lin, English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content={meta[locale].title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta property="og:description" content={meta[locale].description} />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">
        About Hannah Lin
      </h1>

      <section className="rounded-md bg-white px-5 py-4 shadow space-y-3">
        {data[locale].profile.map((item, index) => (
          <p key={index} className="text-gray-700">
            {item}
          </p>
        ))}
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">Credentials</h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          <li className="list-disc">
            MA (Master of Arts) in TESOL (Teaching English to Speakers of Other
            Language)- Biola University, USA
          </li>
          <li className="list-disc">
            BA in International Trade and Economics, China
          </li>
        </ul>
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">
          Teaching history
        </h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          <li className="list-disc">
            ESL instructor and tutor at Trinity Western University in Canada
          </li>
          <li className="list-disc">
            Instructor at an Adult Language School in Vancouver
          </li>
          <li className="list-disc">
            Private English tutor for international students and Chinese
            immigrants
          </li>
          <li className="list-disc">
            YouTube content creator focused on English learning
          </li>
          <li className="list-disc">
            Kids' Sunday School teacher at a local church in Vancouver, Canada
          </li>
          <li className="list-disc">
            Associate Professor at a Chinese University with 10 years of
            teaching experience
          </li>
          <li className="list-disc">
            English teacher at an international preschool in China
          </li>
        </ul>
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">
          Languages I speak
        </h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          <li className="list-disc">English</li>
          <li className="list-disc">Chinese</li>
          <li className="list-disc">Korean</li>
        </ul>
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">
          Teaching fields that I’m passionate about
        </h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          {data[locale].fields.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">
          Family information
        </h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          {data[locale].family.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
