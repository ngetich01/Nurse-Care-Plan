/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f8',
          500: '#0e8de9',
          600: '#026fc7',
          700: '#0359a1',
          800: '#074c85',
          900: '#0c406e',
          950: '#082949',
        },
        medical: {
          emerald: '#10b981',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
