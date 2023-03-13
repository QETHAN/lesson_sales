export default function Navbar({ children }) {
  return (
    <header className="bg-white px-5 py-4">
      <nav className="container lg:max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              src="/static/img/logo.png"
              alt="Logo of HannahLin's English"
              className="h-10"
            />
          </a>
          <div className="flex items-center space-x-6">
            <a
              href="/about"
              className="text-base text-slate-600 hover:text-slate-500"
            >
              关于
            </a>
            <a
              href="/faq/necessary"
              className="text-base text-slate-600 hover:text-slate-500"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
