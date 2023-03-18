import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "会怎么收到视频？",
    answer:
      "支付成功后，24-48小时内，您将会从您购买时提供的邮箱里收到课程视频链接。如果您没有收到邮件，请检查您的邮件垃圾箱。",
    open: true,
  },
  {
    question: "能否下载付费视频？",
    answer: "目前不支持下载付费视频。",
  },
];

export default function AboutPage() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>购买须知</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="关于购买后，如何收到和使用HannahLin English的视频课程"
        />
        <meta
          name="keywords"
          content="Hannah Lin, 购买须知，常见问题，视频课程，HannahLin English"
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content="购买须知" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="关于购买后，如何收到和使用HannahLin English的视频课程"
        />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">购买须知</h1>

      <div className="rounded-md bg-white px-5 shadow">
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
                    <p className="text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
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
