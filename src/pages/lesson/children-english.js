import React from "react";
import classNames from "classnames";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script'
import BuyButton from "../../components/BuyButton";
import { handleCheckout } from "../../utils/checkout";

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

const faqs = [
  {
    question: "Who is this course for? 本课程为谁而设？",
    answer: [
      `This course is designed for parents who have children between
      the ages of 3 and 6 and want to participate in their children's
      English language learning at home while creating an environment
      where their children can hear English every day.`,
      "译：本课程是为那些有3至6岁孩子的家长而设计的，这些家长希望在家里参与孩子的英语学习，同时创造一个环境让孩子每天都能听到英语。",
    ],
    open: true,
  },
  {
    question:
      "Why should I teach my child English at home? My child will learn English as a foreign language once they start school.",
    answer: [
      `Research has shown that the ages between 3 and 6 are the golden
      years for children to learn a language. During this time,
      children are like sponges and absorb everything they hear,
      including long sentences. These critical years provide an
      opportunity to help them learn English quickly. You don’t want
      to miss out on this window of opportunity as a parent.`,
      `译：研究表明，3-6岁是儿童学习语言的黄金时期。在这段时间里，孩子们就像海绵一样，吸收他们听到的一切，包括长句子。
      这些关键时期提供了一个帮助他们快速学习英语的机会。作为父母的你，肯定不希望错过这段绝佳时期。`,
    ],
    open: true,
  },
  {
    question: `I take my child to a language school once a week where he/she
    can learn 60 minutes of English. Why should I take the time to
    help my child with his English at home?
    我每周带孩子去一次语言学校，他/她可以学习60分钟的英语。为什么我还要花时间在家里帮助我的孩子学习英语？`,
    answer: [
      `Children at these ages indeed learn quickly, but they also
      forget quickly if they are not regularly exposed to the
      language. Research shows that daily language learning, even for
      just 10 minutes, is more effective than learning for 60 minutes
      all at once.`,
      `译：这些年龄段的孩子确实学得很快，但如果不经常接触语言，他们也会很快忘记。研究表明，每天的语言学习，即使只有10分钟，也比一下子学习60分钟更有效。`,
    ],
  },
  {
    question: `My English may not be good enough to speak to my child in
    English, and I don't want my child to learn my poor
    pronunciation.
    我的英语可能不够好，无法用英语和我的孩子说话，我不想让我的孩子学习我糟糕的发音。`,
    answer: [
      `That's why I'm here to support you with all the tools you need.
      I will provide you with my voice recordings that you can click
      on and let your child hear. As you become more comfortable with
      the phrases, you can start speaking to your child in English
      yourself if you want to.`,
      `译：这就是为什么我在这里为你提供所有你需要的工具。我会提供我的录音，你可以点击让你的孩子听到。当你对这些句子越来越熟悉时，如果你愿意，就可以开始自己用英语和你的孩子说话。`,
    ],
  },
  {
    question: `How much does your course cost? 你的课程费用是多少?`,
    answer: [
      "12-Week Course: USD $140/week",
      "24-Week Course: USD $120/week",
      "48 -Week Course: USD $100/week",
      "12周课程: 140 美元/周",
      "24周课程: 120美元/周",
      "48周课程: 100美元/周",
    ],
    answerType: "list",
  },
  {
    question: `What does your course include?`,
    answer: [
      `A 50-minute coaching session once a week via Zoom.`,
      `译：每周通过Zoom进行50分钟的视频指导`,
      `Carefully selected weekly English video clips for your child to
      watch with you every day for at least 30 minutes.`,
      `译：每周提供精心准备的视频，供您与孩子一同观看。`,
      `A list of key language points from the video clips, as well as
      their Chinese translations.`,
      `译：视频片段中的关键语言点，以及其中文翻译。`,
      `A weekly list of daily routine phrases that your child will hear
      every day.`,
      `译：每周提供孩子每天需要听到的日常表达（诸如：该睡觉了，该吃饭了，该刷牙了，该起床了等等。）`,
      `My voice recordings of the daily routine phrases, with each
      phrase recorded separately. This will allow the parent to click
      on the appropriate sentence for the specific scenario. For
      example, when it's time for bed, the parent can click on the
      phrase 'It's time for bed,' so that the child is naturally
      exposed to the correct English equivalent of what the parent
      would say in Chinese.`,
      `译：常语句都是单独录音，家长可以根据具体情境点击相应的语句。例如，妈妈要提醒孩子"该睡觉了。"妈妈可以先用中文讲这句话，然后点击
      我的录音，"It's time for bed"，以便孩子在生活当中自然地接触到地道的英文。`,
    ],
  },
  {
    question: `What makes your course unique?`,
    answer: [
      `My course is specifically tailored to each individual child and their parents. Unlike other English lessons where only the child gets to meet the teacher, my course actively involves parents in their child's learning process. Parents are up-to-date on their child's progress and any difficulties they may be experiencing, and they can talk to me during the weekly Zoom session and ask questions.`,
      `译：我的课程是专门为每个孩子和他们的父母量身定做的。不像其他英语课程，只有孩子才能见到老师，我的课程积极鼓励家长参与到孩子的学习过程中。家长非常了解孩子正在学什么，遇到了什么困难。他们可以在每周的Zoom会议上与我交谈并提出问题。`,
      `I offer pronunciation correction for your child. My knowledge of both Chinese and English enables me to understand students' struggles with specific sounds, allowing me to provide effective guidance. "The earlier bad pronunciation habits are broken, the earlier your child's pronunciation will become more native-like.`,
      `译：我会为您的孩子提供发音纠正。由于我精通中英两种语言，我更容易理解学生在特定发音方面的困难，并提供有效的指导。越早打破错误的发音习惯，孩子的发音就会越早变得更地道。`,
      `Your child will not only be learning English in zoom sessions with me, but also through carefully designed daily English input at home. This immersive learning approach allows your child to absorb English naturally, without even realizing it. At this age, children have a remarkable ability to learn multiple languages simultaneously.`,
      `译：您的孩子不仅可以通过Zoom跟我学习英语，还可以在家里通过精心设计的日常英语输入来学习英语。这种沉浸式学习方法可以让你的孩子在不知不觉中自然地吸收英语。在这个年龄段，孩子们具有非凡的能力同时学习多种语言。`,
    ],
  },
];

export default function DetailPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="container lg:max-w-screen-lg mx-auto sm:px-5 lg:px-0">
      <Head>
        <title>
          点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练
          | 少儿英语 | 早教英语
        </title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="本课程是为那些有3至6岁孩子的家长而设计的，这些家长希望在家里参与孩子的英语学习，同时创造一个环境让孩子每天都能听到英语。"
        />
        <meta
          name="keywords"
          content="Hannah Lin, English lessons, online learning, grammar, vocabulary, pronunciation, 美式英语/英文听力, 美式英语口语, 美式英语发音技巧, 医学英语常用短语, 医学英语, 看病英语, 看医生英语"
        />
        <meta name="author" content="Hannah Lin" />
        <meta
          property="og:title"
          content="点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练 | 少儿英语"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/cover/children-english.jpg"
        />
        <meta
          property="og:description"
          content="本课程是为那些有3至6岁孩子的家长而设计的，这些家长希望在家里参与孩子的英语学习，同时创造一个环境让孩子每天都能听到英语。"
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
        付费课程
      </h1>
      <div className="flex flex-col lg:flex-row bg-white sm:rounded-2xl shadow overflow-hidden">
        <figure className="lg:max-w-[65%] overflow-hidden">
          <Image
            className="w-full h-full object-fill"
            src="/static/img/cover/children-english.jpg"
            alt="点燃孩子英语潜能，让TA终生受益 - 妈妈是打造最佳英语学习环境的超级教练"
            width="666"
            height="384"
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
              点燃孩子英语潜能，让TA终生受益 -
              妈妈是打造最佳英语学习环境的超级教练
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
