import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import BuyButton from "../../components/BuyButton";
import { handleCheckout } from "../../utils/checkout";
import data from "../../data/lesson/children-english.json";
import lang from "../../data/lang.json";
import metaData from "../../data/meta.json";

const prices = [
  {
    type: "12周",
    price: "140 美元/周",
    priceId: process.env.NEXT_PUBLIC_STRIPE_CHILDREN_LESSON_PRICE_ID_12_WEEKS,
  },
  {
    type: "24周",
    price: "120美元/周",
    priceId: process.env.NEXT_PUBLIC_STRIPE_CHILDREN_LESSON_PRICE_ID_24_WEEKS,
  },
  {
    type: "48周",
    price: "100美元/周",
    priceId: process.env.NEXT_PUBLIC_STRIPE_CHILDREN_LESSON_PRICE_ID_48_WEEKS,
  },
];

const meta = {
  "zh-cn": {
    "title": "点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练 | 少儿英语 | 早教英语",
    "description": "本课程是为那些有3至6岁孩子的家长而设计的，这些家长希望在家里参与孩子的英语学习，同时创造一个环境让孩子每天都能听到英语。",
  },
  "zh-tw": {
    "title": "點燃孩子英語潛能，讓TA終生受益 - 媽媽是打造最佳英語學習環境的超級教練 | 少兒英語 | 早教英語",
    "description": "本課程是為那些有3至6歲孩子的家長而設計的，這些家長希望在家裡參與孩子的英語學習，同時創造一個環境讓孩子每天都能聽到英語。",
  }
}

export default function DetailPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { locale } = useRouter();

  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <Head>
        <title>
          {meta[locale].title}
        </title>
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
          content={meta[locale].title}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/cover/children-english.jpg"
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
      <div className="flex flex-col lg:flex-row bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="w-full lg:w-[640px] lg:h-[360px] overflow-hidden bg-gray-200">
          <Image
            className="w-full h-full object-fill"
            src="/static/img/cover/children-english.jpg"
            alt="点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练"
            width="640"
            height="360"
            priority
          />
        </figure>

        <div className="flex-1 flex flex-col justify-between px-5 py-4">
          <div>
            <h1 className="text-slate-600 font-semibold text-xl">
              Spark Your Child's English Language Potential for Lifelong
              Benefits - Mom is the Super Coach for Creating the Best English
              Learning Environment!
            </h1>
            <h2 className="mt-2 text-slate-500 font-medium text-lg">
              {data[locale].title}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white p-4 shadow">
        <h2 className="text-slate-600 font-semibold text-xl">
          {lang[locale].buyLessons}
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-y-5 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-5">
          {prices.map((item, idx) => (
            <li
              key={idx}
              className={classNames(
                "rounded-lg border group text-center cursor-pointer hover:shadow-lg",
                {
                  "border-blue-600": idx === selectedIndex,
                  "borer-slate-400 hover:border-blue-600":
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
            locale={locale}
          />
        </div>
      </div>

      <div className="mt-10 rounded-md bg-white px-4 shadow">
        <h2 className="py-5 text-slate-600 font-semibold text-xl border-b border-gray-900/10">
          FAQ ({lang[locale].faq})
        </h2>

        <dl className="divide-y divide-gray-900/10">
          {data[locale].faqs.map((faq) => (
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
