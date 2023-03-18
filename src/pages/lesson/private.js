import React from "react";
import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Head from "next/head";
import BuyButton from "../../components/BuyButton";
import { handleCheckout } from "../../utils/checkout";

const prices = [
  {
    type: "1 lesson",
    price: "USD $100",
    priceId: process.env.NEXT_PUBLIC_STRIPE_ONE_ON_ONE_LESSON_PRICE_ID,
  },
  {
    type: "5 lessons",
    price: "USD $300",
    priceId: process.env.NEXT_PUBLIC_STRIPE_ONE_ON_ONE_LESSON_PRICE_ID_5,
  },
  {
    type: "10 lessons",
    price: "USD $500",
    priceId: process.env.NEXT_PUBLIC_STRIPE_ONE_ON_ONE_LESSON_PRICE_ID_10,
  },
];

const faqs = [
  {
    question: "Who are your private lessons for? 私教课为谁而设？",
    answer: [
      `They are for anyone who wants to level up their listening skills
      and be able to understand real-life fast conversations.`,
      `译：我的私教课程适合想要提高听力并能够听懂生活快速英语的学生。`,
    ],
    open: true,
  },
  {
    question: "How much does your course cost? 你的课程费用是多少?",
    answer: [
      "1 lesson: USD $100",
      "5 lessons: USD $300",
      "10 lessons: USD $500",
      "一节课程: 100美元",
      "五节课程: 300美元",
      "十节课程: 500美元",
    ],
    answerType: "list",
    open: true,
  },
  {
    question: "How long is each lesson? 一节课时长？",
    answer: ["Each session is 60 minutes long.", "译：一节课60分钟。"],
  },
  {
    question: "Will I be given homework? 课后会留作业吗？",
    answer: [
      "Yes, students will be given dictation exercises as homework.",
      "译：是的。我会给您布置听力作业。",
    ],
  },
  {
    question: "How is the lesson conducted? 课程如何进行？",
    answer: ["Lessons are conducted via Zoom.", "译：课程将通过Zoom进行。"],
  },
  {
    question: "How do I schedule my lessons? 如何预约课程？",
    answer: [
      `To schedule your lessons, please leave a message in the
      'Contact' section of my website.`,
      "译：请在我的网站“联系”部分留言以安排您的课程时间。",
    ],
  },
];

export default function DetailPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <Head>
        <title>一对一私教（提高听力技能和美国英语发音）</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="本课程适合想要提高听力并能够听懂生活快速英语的学生。"
        />
        <meta
          name="keywords"
          content="Hannah Lin, English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta
          property="og:title"
          content="一对一私教（提高听力技能和美国英语发音）"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/cover/children-english.jpg"
        />
        <meta
          property="og:description"
          content="本课程适合想要提高听力并能够听懂生活快速英语的学生。"
        />
      </Head>
      <h1 className="my-10 px-5 sm:px-0 text-2xl font-semibold text-slate-600">
        私教课
      </h1>
      <div className="flex flex-col lg:flex-row bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <Image
            className="w-full h-full object-fill"
            src="/static/img/cover/private.jpg"
            alt="一对一私教（提高听力技能和美国英语发音）"
            width="666"
            height="384"
            priority
          />
        </figure>

        <div className="flex-1 flex flex-col justify-between px-5 py-4">
          <div>
            <h1 className="text-slate-600 font-semibold text-xl">
              Private one-on-one coaching for improving listening skills and
              American English pronunciation.
            </h1>
            <h2 className="mt-2 text-slate-500 font-medium text-lg">
              一对一私教（提高听力技能和美国英语发音）
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-slate-600 font-semibold text-xl">购买课程</h2>
        <ul className="mt-5 grid grid-cols-1 gap-y-5 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-5">
          {prices.map((item, idx) => (
            <li
              key={idx}
              className={classNames(
                "rounded-lg border group text-center cursor-pointer",
                {
                  "border-2 border-blue-600 shadow-lg": idx === selectedIndex,
                  "borer-slate-400 hover:border-2 hover:border-blue-600 hover:shadow-lg":
                    idx !== selectedIndex,
                }
              )}
              onClick={() => setSelectedIndex(idx)}
            >
              <h3
                className={classNames("my-3 text-xl font-semibold", {
                  "text-blue-600": idx === selectedIndex,
                  "text-slate-500 group-hover:text-blue-600":
                    idx !== selectedIndex,
                })}
              >
                {item.type}
              </h3>
              <p
                className={classNames("my-3 text-base font-medium", {
                  "text-blue-600": idx === selectedIndex,
                  "text-slate-500 group-hover:text-blue-600":
                    idx !== selectedIndex,
                })}
              >
                {item.price}
              </p>
            </li>
          ))}
        </ul>
        <div className="sm:w-1/3 mx-auto mt-5 sm:text-center lg:text-left">
          <BuyButton
            onClick={handleCheckout({
              priceId: prices[selectedIndex].priceId,
              quantity: 1,
            })}
          />
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white px-4 shadow">
        <h2 className="py-5 text-slate-600 font-semibold text-xl border-b border-gray-900/10">
          FAQ (常见问题)
        </h2>
        <dl className="divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure
              as="div"
              key={faq.question}
              className="py-6"
              defaultOpen={faq.open}
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-600">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    {faq.answerType === "list" ? (
                      <ul className="mt-3 ml-4 space-y-2 text-sm text-slate-500 list-disc">
                        {faq.answer.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      faq.answer.map((item, index) => (
                        <p
                          key={index}
                          className="mt-2 text-sm leading-7 text-slate-500"
                        >
                          {item}
                        </p>
                      ))
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
