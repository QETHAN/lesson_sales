import data from "../data/free_lessons.json";
import FreeLesson from "./freeLesson";

export default function FreeLessons() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0 pb-10">
      <h1 className="py-10 text-2xl font-bold text-gray-800">YouTube频道</h1>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
        {data.map((_, index) => {
          const showDivider =
            index % 2 === 0 &&
            index !== data.length - 1 &&
            index !== data.length - 2;

          if (index % 2 === 0) {
            const firstItem = data[index];
            const secondItem = data[index + 1];
            return (
              <>
                <FreeLesson key={index} data={firstItem} index={index} />
                <li
                  key={index}
                  className="lg:hidden w-full my-5 h-px bg-gray-200"
                ></li>
                {secondItem && (
                  <FreeLesson
                    key={index + 1}
                    data={secondItem}
                    index={index + 1}
                  />
                )}
                {showDivider && (
                  <li key={index} className="w-full my-5 h-px bg-gray-200"></li>
                )}
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}
