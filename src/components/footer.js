export default function Footer({ children }) {
  return (
    <footer className="mt-10 mb-20 bg-[#f5f5f7]">
      <div className="container lg:max-w-screen-lg mx-auto px-5 sm:px-0">
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-20">
          <div>
            <h4 className="font-semibold text-lg text-gray-800">HannahLin's English</h4>

            <div className="mt-3 text-gray-400 text-sm">
              <label>Email: </label>
              <a href="mailto:HannahLin@gmail.com">HannahLin@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800">社媒</h4>

            <div className="text-gray-400 text-sm mt-3 flex flex-col space-y-3">
              <a href="">Twitter</a>
              <a href="">Weibo</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800">关于</h4>

            <div className="mt-3 text-gray-400 text-sm">
              <label>Email</label>
              <a href="mailto:HannahLin@gmail.com">HannahLin@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
