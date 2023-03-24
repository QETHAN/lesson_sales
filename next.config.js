/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  // images: {
  //   unoptimized: true,
  // },
  poweredByHeader: false,

  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["zh-cn", "zh-tw"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "zh-cn",
  },
};

module.exports = nextConfig;
