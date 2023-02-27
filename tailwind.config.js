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
        "tab": '8em', 
      },
      height: {
        "header": '6rem'
      },
      padding: {
        "header": '6rem'
      },
      translate: {
        "tab-offset": "var(--wapp-tab-offset)"
      },

      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-600)',
          light: 'var(--color-primary-300)',
          dark: 'var(--color-primary-800)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      }
    },
  },
  plugins: [],
}
