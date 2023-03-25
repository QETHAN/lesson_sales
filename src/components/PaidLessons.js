import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import data from "../data/paid_lessons.json";

export default function PaidLessons() {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      {data[locale].map((block, idx) => {
        return (
          <section key={idx}>
            <h1 className="my-10 text-2xl font-bold text-slate-600">
              {block.header}
            </h1>
            <ul className="flex flex-col sm:flex-row space-y-5 flex-wrap justify-between">
              {block.content.map((item, index) => {
                if (item.uiType === "single") {
                  return (
                    <li
                      key={index}
                      className="rounded-2xl overflow-hidden bg-white basis-[100%] shadow rotate-0"
                    >
                      <Link
                        className="flex flex-col lg:flex-row"
                        href={item.link}
                        aria-label={item.subTitle}
                        locale={locale}
                      >
                        <figure
                          className="w-full lg:w-[640px] lg:h-[360px] overflow-hidden"
                          aria-hidden={true}
                        >
                          <Image
                            className="image w-full object-cover hover:scale-[1.03]"
                            alt={item.title}
                            src={item.image}
                            width="640"
                            height="360"
                            priority
                          />
                        </figure>
                        <div className="flex-1 px-5">
                          <h2 className="my-4 text-xl text-slate-600 hover:text-slate-500 font-semibold line-clamp-6">
                            {item.title}
                          </h2>
                          <h3 className="my-4 text-xl text-slate-500 font-medium">
                            {item.subTitle}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="basis-[calc(50%-10px)] rounded-2xl overflow-hidden bg-white shadow rotate-0"
                    >
                      <Link
                        className="flex flex-col"
                        href={item.link}
                        aria-label={item.subTitle}
                        locale={locale}
                      >
                        <figure className="overflow-hidden" aria-hidden={true}>
                          <Image
                            className="image object-cover hover:scale-[1.03]"
                            alt={item.title}
                            src={item.image}
                            width="502"
                            height="282"
                            priority
                          />
                        </figure>
                        <div className="flex-1 px-5">
                          <h2 className="my-4 text-xl text-slate-600 hover:text-slate-500 font-semibold line-clamp-6">
                            {item.title}
                          </h2>
                          <h3 className="my-4 text-xl text-slate-500 font-medium">
                            {item.subTitle}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
