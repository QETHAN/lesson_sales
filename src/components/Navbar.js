import classNames from "classnames";
import React from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const links = [
  { name: "首页", href: "/" },
  { name: "私教课", href: "/lesson/private" },
  { name: "听力", href: "/listening" },
  { name: "关于", href: "/about" },
  { name: "FAQ", href: "/faq/necessary" },
];

export default function Navbar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={classNames("bg-white px-5 py-4 z-50 sticky top-0", {
          "fixed top-0 inset-x-0": isMenuOpen,
        })}
      >
        <nav className="container lg:max-w-screen-lg mx-auto">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src="/static/img/logo.png"
                alt="Logo of HannahLin's English"
                className="h-10"
              />
            </a>
            <div className="hidden sm:flex items-center space-x-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-base text-slate-600 hover:text-slate-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div
              className="sm:hidden text-slate-500 hover:bg-gray-100 p-1 rounded"
              onClick={handleToggleMenu}
            >
              <MenuIcon />
            </div>
          </div>
        </nav>
      </header>
      {/* mobile menus */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <nav className="sm:hidden fixed top-[72px] inset-x-0 z-50 py-2 bg-white border-t border-gray-100">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-4 py-2 text-base text-slate-600 hover:text-slate-500 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
