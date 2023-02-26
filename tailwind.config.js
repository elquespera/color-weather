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
        "max-app": '768px',
        "tab": '6rem', 
      },
      height: {
        "header": '6rem'
      },
      padding: {
        "header": '6rem'
      },
      translate: {
        "tab-offset": "var(--wapp-tab-offset)"
      }
    },
  },
  plugins: [],
}
