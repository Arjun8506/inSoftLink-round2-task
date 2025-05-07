/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5202",
        secondary: "#06091b"
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}