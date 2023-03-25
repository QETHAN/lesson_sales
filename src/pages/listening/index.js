import Head from "next/head";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import listeningData from "../../data/listening.json";
import metaData from "../../data/meta.json";
import data from "../../data/listening.json";

export default function ListeningPage() {
  const { locale } = useRouter();

  const meta = {
    "zh-cn": {
      title: "英语听力练习",
      description: "英语听力练习｜给那些真正想提高英语听力的人",
    },
    "zh-tw": {
      title: "英語聽力練習",
      description: "英語聽力練習｜給那些真正想提高英語聽力的人",
    },
  };

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0 pb-1">
      <Head>
        <title>{meta[locale].title}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={meta[locale].description} />
        <meta name="keywords" content={metaData[locale].keywords} />
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

      <article>
        <h1 className="my-10 text-2xl font-bold text-slate-600">
          {data[locale].longTitle}
        </h1>

        <section className="mt-5 rounded-md bg-white px-5 shadow">
          <dl className="divide-y divide-gray-900/10">
            {listeningData[locale].long.reverse().map((item, index) => (
              <Disclosure
                as="div"
                key={index}
                className="py-6"
                defaultOpen={item.open}
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-600">
                        <span className="text-base font-semibold leading-7">
                          {item.title}
                        </span>

                        <div className="flex-shrink-0 ml-2 flex items-center space-x-2">
                          <a
                            href={item.url}
                            target="_blank"
                            className="flex-shrink-0 p-1 rounded hover:bg-gray-100"
                          >
                            <img
                              src="/static/img/icons/headphones.png"
                              className="w-4 h-4"
                            />
                          </a>
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
                        </div>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {item.answer.reverse().map((ans, idx) => (
                        <div
                          key={idx}
                          className="mt-2 text-base leading-7 text-slate-500"
                          dangerouslySetInnerHTML={{ __html: ans }}
                        ></div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </section>
      </article>

      <article>
        <h1 className="my-10 text-2xl font-bold text-slate-600">
          {data[locale].shortTitle}
        </h1>

        <section className="mt-5 rounded-md bg-white px-5 shadow">
          <dl className="divide-y divide-gray-900/10">
            {listeningData[locale].short.reverse().map((item, index) => {
              return (
                <Disclosure
                  as="div"
                  key={index}
                  className="py-6"
                  defaultOpen={item.open}
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-600">
                          <span className="text-base font-semibold leading-7">
                            {item.title}
                          </span>
                          <div className="flex-shrink-0 ml-2 flex items-center space-x-2">
                            <a
                              href={item.url}
                              target="_blank"
                              className="flex-shrink-0 p-1 rounded hover:bg-gray-100"
                            >
                              <img
                                src="/static/img/icons/headphones.png"
                                className="w-4 h-4"
                              />
                            </a>
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
                          </div>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {item.answer.map((ans, idx) => (
                          <div
                            key={idx}
                            className="mt-2 text-base leading-7 text-slate-500"
                            dangerouslySetInnerHTML={{ __html: ans }}
                          ></div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </dl>
        </section>
      </article>
    </div>
  );
}
