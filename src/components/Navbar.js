export default function Navbar({ children }) {
  return (
    <header className="bg-white px-5 py-4">
      <nav className="container lg:max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="text-gray-800 text-2xl font-semibold">
            <img src="/static/img/logo.png" alt="HannahLin's English" className="h-10" />
          </a>
          <div className="flex items-center space-x-6">
            <a
              href="/about"
              className="text-base text-gray-600 hover:text-gray-800"
            >
              关于
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
