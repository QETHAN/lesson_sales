import classNames from "classnames";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import data from "../data/nav.json";

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

export default function Navbar({ children }) {
  const { locale, asPath } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={classNames("bg-white px-5 py-4 sticky top-0 z-[1000]", {
          "fixed top-0 inset-x-0": isMenuOpen,
        })}
      >
        <nav className="container lg:max-w-screen-lg mx-auto">
          <div className="flex justify-between items-center">
            <a href="/">
              <Image
                src="/static/img/logo.png"
                alt="HannahLinEnglish"
                width="188"
                height="40"
                priority
              />
            </a>
            <div className="flex space-x-6 items-center">
              <div className="hidden sm:flex items-center space-x-6">
                {data[locale].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-base text-slate-600 hover:text-slate-500"
                    locale={locale}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <div className="flex space-x-1 items-center text-base text-slate-600 hover:text-slate-500">
                      <span className="hidden sm:inline-block">
                        {locale === "zh-cn" ? "简体中文" : "繁體中文"}
                      </span>
                      <span className="sm:hidden">
                        {locale === "zh-cn" ? "简体" : "繁體"}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-[100px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 text-center">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className="w-full text-sm text-slate-600 hover:text-slate-500"
                            activeClassName={active && locale === "zh-cn"}
                            href={asPath}
                            locale="zh-cn"
                          >
                            简体中文
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1 text-center">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className="w-full text-sm text-slate-600 hover:text-slate-500"
                            activeClassName={active && locale === "zh-tw"}
                            href={asPath}
                            locale="zh-tw"
                          >
                            繁體中文
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div
                className="sm:hidden text-slate-500 hover:bg-gray-100 p-1 rounded"
                onClick={handleToggleMenu}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* mobile menus */}
      {isMenuOpen && (
        <>
          <div
            className="sm:hidden fixed inset-0 bg-black opacity-25 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <nav className="sm:hidden fixed top-[72px] inset-x-0 z-50 py-2 bg-white border-t border-gray-100">
            {data[locale].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-base text-slate-600 hover:text-slate-500 hover:bg-gray-100"
                locale={locale}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
