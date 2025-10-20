/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D2847',
        'accent': '#FFC72C',
        'background-light': '#F0F4F8',
        'text-dark': '#1A202C',
      }
    },
  },
  plugins: [],
}