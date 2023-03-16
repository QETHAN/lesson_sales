import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>关于我</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="我是Hannah Lin，2002年毕业于美国Biola 大学,
          获得TESOL硕士学位。在中国某大学英语系执教十多年后，2011年与家人一起移民加拿大。定居加拿大后曾在当地大学教授ESL英文，并持续辅导留学生及新老移民的口语及写作。"
        />
        <meta
          name="keywords"
          content="English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="关于我" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="我是Hannah Lin，2002年毕业于美国Biola 大学,
          获得TESOL硕士学位。在中国某大学英语系执教十多年后，2011年与家人一起移民加拿大。定居加拿大后曾在当地大学教授ESL英文，并持续辅导留学生及新老移民的口语及写作。"
        />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">About Hannah Lin</h1>

      <section className="rounded-md bg-white px-5 py-4 shadow">
        <p className="mt-3 text-gray-700">
          我是Hannah Lin，2002年毕业于美国Biola 大学,
          获得TESOL硕士学位。在中国某大学英语系执教十多年后，2011年与家人一起移民加拿大。定居加拿大后曾在当地大学教授ESL英文，并持续辅导留学生及新老移民的口语及写作。
        </p>
        <p className="mt-3 text-gray-700">
          丰富的英语教学经验，多年海外求学及生活的经历，对东西方文化差异的独到见解，使我能够使用独特的英语教学模式，帮助学生找到最高效的学习方法，在最短时间内掌握原汁原味的实用英语。为了帮助到国内外更多的英语学习者，五年前开始在YouTube上制作并上传优质的英语学习视频。
        </p>
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
          <li className="list-disc">
            American English pronunciation 美式英语发音
          </li>
          <li className="list-disc">Pronunciation correction 纠音</li>
          <li className="list-disc">
            Spoken English/listening skills 英语口语/英语听力
          </li>
          <li className="list-disc">Children’s English 少儿英语</li>
          <li className="list-disc">Medical English 医疗英语</li>
          <li className="list-disc">News English 新闻英语</li>
        </ul>
      </section>

      <section className="mt-5 rounded-md bg-white px-5 py-4 shadow">
        <h2 className="text-gray-800 text-xl font-semibold">
          Family information
        </h2>
        <ul className="mt-3 ml-4 pl-0 sm:pl-4 space-y-2 text-gray-700">
          <li className="list-disc">
            A happy wife married to a loving, handy, hardworking husband with
            one precious son, 17, and one precious daughter, 13.
          </li>
          <li className="list-disc">
            幸福的妻子/妈妈。
            先生爱心洋溢、灵巧能干、勤劳踏实，育有一子17岁，一女13岁。
          </li>
        </ul>
      </section>
    </div>
  );
}
