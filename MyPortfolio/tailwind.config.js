/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF8660',
        'custom-purple': '#9A33FF',
      },
      backgroundImage: theme => ({
        'gradient': `linear-gradient(to right, ${theme('colors.custom-orange')}, ${theme('colors.custom-purple')})`,
      }),
    },
  },
  plugins: [],
}

