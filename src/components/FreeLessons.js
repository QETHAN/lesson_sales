import React from "react";
import { useRouter } from "next/router";
import data from "../data/free_lessons.json";
import FreeLesson from "./FreeLesson";

export default function FreeLessons() {
  const { locale, locales, defaultLocale } = useRouter();
  const { header, content } = data[locale][0];

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0 pb-10">
      <h1 className="py-10 text-2xl font-bold text-slate-600">{header}</h1>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
        {content.map((_, index) => {
          const showDivider =
            index % 2 === 0 &&
            index !== data.length - 1 &&
            index !== data.length - 2;

          if (index % 2 === 0) {
            const firstItem = content[index];
            const secondItem = content[index + 1];
            return (
              <React.Fragment key={index}>
                <FreeLesson data={firstItem} index={index} />
                <li className="lg:hidden w-full my-5 h-px bg-gray-200"></li>
                {secondItem && (
                  <FreeLesson
                    key={index + 1}
                    data={secondItem}
                    index={index + 1}
                  />
                )}
                {showDivider && (
                  <li className="w-full my-5 h-px bg-gray-200"></li>
                )}
              </React.Fragment>
            );
          }
        })}
      </ul>
    </div>
  );
}
