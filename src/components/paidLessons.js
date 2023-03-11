import Image from "next/image";
import data from "../data/paid_lessons.json";

export default function PaidLessons() {
  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <h1 className="my-10 text-2xl font-bold text-gray-800">最新课程</h1>
      <ul className="flex flex-col sm:flex-row space-y-5 flex-wrap justify-between">
        {data.map((item, index) => {
          if (index === 0) {
            return <li key={index} className="rounded-2xl overflow-hidden bg-white basis-[100%] shadow rotate-0">
            <a
              className="flex flex-col lg:flex-row"
              href={item.link}
              aria-label={item.subTitle}
            >
              <div className="sm:basis-[65%] overflow-hidden" aria-hidden={true}>
                <Image
                  className="image w-full object-cover hover:scale-[1.03]"
                  alt={item.title}
                  src={item.image}
                  width="666"
                  height="374"
                />
              </div>
              <div className="flex-1 px-6">
                <h2 className="my-4 text-xl text-gray-800 hover:text-blue-800 font-semibold line-clamp-6">
                  {item.title}
                </h2>
                <h3 className="my-4 text-xl text-gray-700 font-semibold">
                  {item.subTitle}
                </h3>
              </div>
            </a>
          </li>
          } else {
            return <li key={index} className="basis-[calc(50%-10px)] rounded-2xl overflow-hidden bg-white shadow rotate-0">
            <a
              className="flex flex-col"
              href={item.link}
              aria-label={item.subTitle}
            >
              <div className="basis-[65%] overflow-hidden" aria-hidden={true}>
                <Image
                  className="image object-cover hover:scale-[1.03]"
                  alt={item.title}
                  src={item.image}
                  width="502"
                  height="282"
                />
              </div>
              <div className="flex-1 px-6">
                <h2 className="my-4 text-xl text-gray-800 hover:text-blue-800 font-semibold line-clamp-6">
                  {item.title}
                </h2>
                <h3 className="my-4 text-xl text-gray-700 font-semibold">
                  {item.subTitle}
                </h3>
              </div>
            </a>
          </li>
          }
        })}
      </ul>
    </div>
  );
}
