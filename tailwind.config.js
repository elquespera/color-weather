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

      animation: {
        'spin-fast': 'spin 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) infinite',
      },      

      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-600)',
          light: 'var(--color-primary-300)',
          dark: 'var(--color-primary-800)',
          header: 'var(--color-primary-header)',
          'sub-header': 'var(--color-primary-subheader)',
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
        text: {
          DEFAULT: 'var(--color-text)',
          disabled: 'var(--color-text-disabled)',
          secondary: 'var(--color-text-secondary)',
          contrast: 'var(--color-text-contrast)',
        },

        background: {
          DEFAULT: 'var(--color-background)',
        },

        switch: {
          DEFAULT: 'var(--color-checked)',
          unchecked: 'var(--color-unchecked)',
          knob: 'var(--color-switch-knob)',
        },
      }
    },
  },
  plugins: [],
}
