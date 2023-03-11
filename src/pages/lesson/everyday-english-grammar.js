import Image from "next/image";
import Head from "next/head";
import BuyButton from "../../components/BuyButton";

export default function DetailPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <Head>
        <title>揭秘日常英语语法：真实场景下的常用语法</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="谈到语法，大家可能就会想到枯燥的语法知识。与传统语法课程不同，这套付费课程通过大量的生活口语例句，帮助学生了解英语母语者在什么场景下使用这些语法点。"
        />
        <meta
          name="keywords"
          content="English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta
          property="og:title"
          content="揭秘日常英语语法：真实场景下的常用语法"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/cover/everyday-english.jpg"
        />
        <meta
          property="og:description"
          content="谈到语法，大家可能就会想到枯燥的语法知识。与传统语法课程不同，这套付费课程通过大量的生活口语例句，帮助学生了解英语母语者在什么场景下使用这些语法点。"
        />
      </Head>
      <h1 className="my-10 px-5 sm:px-0 text-2xl font-bold text-gray-800">
        付费课程
      </h1>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <Image
            className="w-full object-fill"
            src="/static/img/cover/everyday-english.jpg"
            alt="揭秘日常英语语法：真实场景下的常用语法"
            width="666"
            height="384"
            priority
          />
        </figure>
        <div className="flex-1 flex flex-col justify-between">
          <div className="px-5 lg:px-0 lg:mr-5">
            <h1 className="lg:mt-4 text-gray-800 font-semibold text-xl">
              Unlocking Everyday English Grammar: Real-Life Situations and
              Common Usage
            </h1>
            <h2 className="text-gray-700 font-semibold text-lg">
              揭秘日常英语语法：真实场景下的常用语法
            </h2>
          </div>
          <div className="mt-8 lg:mt-5 px-5 lg:px-0">
            <dl className="my-3 flex space-x-2 text-gray-600 text-base">
              <dt>课程更新频次：</dt>
              <dd>两期视频/月</dd>
            </dl>
            <dl className="my-3 flex space-x-2 text-gray-600 text-base">
              <dt>课程期限：</dt>
              <dd>6 个月</dd>
            </dl>
            <dl className="my-3 flex space-x-2 text-gray-700 text-base">
              <dt>价格：</dt>
              <dd className="text-lg">USD $90</dd>
            </dl>
            <div className="my-8 lg:my-4 sm:text-center lg:text-left">
              <BuyButton
                onClick={handleCheckout({
                  priceId: "price_1MjYmvEFSGuO3C4LL6frCwZC",
                  quantity: 1,
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-gray-800 font-semibold text-xl">课程描述</h2>
        <p className="my-5 text-gray-600 text-base">
          谈到语法，大家可能就会想到枯燥的语法知识。与传统语法课程不同，这套付费课程通过大量的生活口语例句，帮助学生了解英语母语者在什么场景下使用这些语法点。许多中国学生可能听过这些语法概念，知道怎么答题，但不知道如何在日常生活中自由使用。
        </p>
        <p className="my-5 text-gray-600 text-base">
          视频中的大部分例句是中国学生难以表达或极有可能容易说错的句子。每一期视频都会通过视频和音频形式呈现大量的例句，帮助学生“通过耳朵”熟悉每一句，在实际生活中能够真正使用到这些语法点。毕竟，学语法最终目的是有助于我们使用英语句子。
        </p>
        <p className="my-5 text-gray-600 text-base">
          相信学完这套课程后，这些语法点将不再停留在知识层面，大家可以真正运用到生活当中，将口语提高到一个全新的境界。
        </p>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-gray-800 font-semibold text-xl">课程目录</h2>
        <ul className="my-5 text-gray-600 text-base space-y-3">
          <li>第1期 - 英文母語者在生活中如何使用【Must have +PP 】</li>
          <li>第2期 - 英文母語者在生活中如何使用【WISH + 過去分詞】</li>
          <li>第3期 - 英文母語者在生活中如何使用 【Should have + PP】</li>
          <li>
            第4期 - 英文母語者特別喜歡用的【You wanna.../You don't wanna... 】
          </li>
          <li>第5期 - 英文母語者在生活中如何使用【Could have + PP】</li>
          <li>
            第6期 - 拟人式 语法【 Sth won't do sth】&【Something won't let me do
            sth】
          </li>
          <li>
            第7期 -  英文母語者在生活中超級喜歡用的幾種過去式【生活中的過去式】
          </li>
          <li>
            第8期 - 中國学生可能用得不太準確的【It's the first time that…】
          </li>
          <li>第9期 - 英文母語者在生活中如何使用【WOULD】</li>
          <li>
            第10期 - 英文母語者在生活中超級喜歡用的幾種現在進行式【現在進行式】
          </li>
          <li>第11期 - 英文母語者在生活中如何使用【Would have +PP】</li>
          <li>第12期 - 英文母語者超級喜歡用的 【Matter, Count】各種常用句式</li>
        </ul>
      </div>
    </div>
  );
}
