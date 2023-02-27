export default function AboutPage() {
  return (
    <div className="mt-10 container lg:max-w-screen-lg mx-auto">
      <div className="rounded-md bg-white mx-5 lg:mx-0 px-5 py-4 shadow">
        <h2 className="text-xl font-bold">关于我</h2>
        <ul className="mt-3 pl-4 space-y-2">
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
        </ul>
      </div>

      <div className="mt-5 rounded-md bg-white mx-5 lg:mx-0 px-5 py-4 shadow">
        <h2 className="text-xl font-bold">关注我</h2>
        <ul className="mt-3 pl-4 space-y-2">
          <li className="list-disc list-inside indent-1">
            <a className="text-blue-500" href="">
              Twitter
            </a>
          </li>
          <li className="list-disc list-inside indent-1">
            <a className="text-blue-500" href="">
              微博
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-5 rounded-md bg-white mx-5 lg:mx-0 px-5 py-4 shadow">
        <h2 className="text-xl font-bold">其他</h2>
        <ul className="mt-3 pl-4 space-y-2">
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
          <li className="list-disc list-inside indent-1">
            我是一个在美国的中国人
          </li>
        </ul>
      </div>
    </div>
  );
}
