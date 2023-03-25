import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Head from "next/head";
import countries from "../../data/country.json";
import lang from "../../data/lang.json";
import metaData from "../../data/meta.json";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      //   console.log("Response received");
      if (res.status === 200) {
        // console.log("Response succeeded!");
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountry("");
        setMessage("");

        router.push("/contact/success");
      } else {
        setSubmitted(false);
        setFailed(true);
      }
    });
  };

  return (
    <div className="container lg:max-w-screen-lg mx-auto px-5 lg:px-0">
      <Head>
        <title>{lang[router.locale].contactMe}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Improve your American English pronunciation, listening skills, and spoken English with Hannah Lin. Learn how to speak like a native and communicate effectively in any situation."
        />
        <meta
          name="keywords"
          content={metaData[router.locale].keywords}
        />
        <meta name="author" content="Hannah Lin" />
        <meta property="og:title" content={lang[router.locale].contactMe} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hannahlinenglish.com" />
        <meta
          property="og:image"
          content="https://hannahlinenglish.com/static/img/logo.png"
        />
        <meta
          property="og:description"
          content="Improve your American English pronunciation, listening skills, and spoken English with Hannah Lin. Learn how to speak like a native and communicate effectively in any situation."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/img/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/icons/favicon-16x16.png" />
        <link rel="manifest" href="/static/img/icons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <h1 className="my-10 text-2xl font-bold text-slate-600">
        {lang[router.locale].contactMe}
      </h1>

      <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8 rounded-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Hannah
          </h2>
        </div>
        <form
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="relative mt-2.5">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={handleChange}
                  required
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                >
                  <option value={""}>Select Country</option>
                  {countries.map((c, idx) => (
                    <option key={idx} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className={classNames(
                "flex justify-center items-center w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition ease-in-out duration-150",
                {
                  "cursor-not-allowed": submitted,
                }
              )}
              disabled={submitted}
            >
              {submitted && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Send Message
            </button>
          </div>
          {failed && (
            <p className="mt-2 text-red-400 text-center">
              Try again, something went wrong.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
