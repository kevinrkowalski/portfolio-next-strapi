/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'project-pattern': "url('/img/dots.svg')"
      },
      colors: {
        brand: {
          gray: "#333",
          blue: "#88bbbc"
        }
      }
    },
  },
  plugins: [],
}