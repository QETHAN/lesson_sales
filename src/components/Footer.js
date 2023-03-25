import Link from "next/link";
import { useRouter } from "next/router";
import lang from "../data/lang.json";

export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer className="py-5 bg-[#f5f5f7]">
      <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-20">
          <section>
            <h2 className="font-medium text-base text-gray-600">
              HannahLin's English
            </h2>

            <div className="mt-3 text-gray-400 hover:text-gray-500 text-sm">
              <label>Email: </label>
              <a href="mailto:cjlin23@yahoo.com">cjlin23@yahoo.com</a>
            </div>
          </section>

          <section>
            <h2 className="font-medium text-base text-gray-600">
              {lang[locale].social}
            </h2>

            <div className="text-gray-400 hover:text-gray-500 text-sm mt-3 flex flex-col space-y-3">
              <a href="https://www.youtube.com/@HannahLinEnglish">YouTube</a>
            </div>
          </section>

          <section>
            <h2 className="font-medium text-base text-gray-600">
              {lang[locale].about}
            </h2>

            <div className="mt-3 text-gray-400 hover:text-gray-500 text-sm">
              <Link href="/about" locale={locale}>
                Hannah Lin
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-medium text-base text-gray-600">
              {lang[locale].contact}
            </h2>

            <div className="mt-3 text-gray-400 hover:text-gray-500 text-sm">
              <Link href="/contact" locale={locale}>
                Contact
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-medium text-base text-gray-600">FAQ</h2>

            <div className="mt-3 text-gray-400 hover:text-gray-500 text-sm">
              <Link href="/faq/necessary" locale={locale}>
                {lang[locale].buyNotice}
              </Link>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm">
          &copy;2023 HannahLin's English
        </p>
      </div>
    </footer>
  );
}
