/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    fontFamily: {
      'sans': ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    '@headlessui/tailwindcss'
  ],
}
