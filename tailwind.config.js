/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      width: {
        "max-app": '768px'
      },
      height: {
        "header": '6rem'
      },
      padding: {
        "header": '6rem'
      }
    },
  },
  plugins: [],
}
