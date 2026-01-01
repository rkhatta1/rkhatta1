/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
