import Image from "next/image";

export default function FreeLesson({ data, index }) {
  return (
    <li key={index} className="lg:basis-[calc(50%-10px)]">
      <a className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 items-center" href={data.link} aria-label={data.title}>
        <div className="w-full sm:w-[235px] sm:h-[132px] rounded-lg overflow-hidden" aria-hidden={true}>
          <Image
            className="image object-cover w-full h-full hover:scale-[1.03]"
            src={data.image}
            alt={data.title}
            width="235"
            height="135"
          />
        </div>
        <div className="flex-1 my-5 px-0 sm:px-4 lg:px-6">
          <h2 className="text-lg md:text-xl text-gray-600 hover:text-blue-600 font-semibold line-clamp-6">
            {data.title}
          </h2>
        </div>
      </a>
    </li>
  );
}
