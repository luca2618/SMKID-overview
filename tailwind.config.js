/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          navy: '#1b2c4c',
          blue: '#0f88bf',
          slate: '#1f486c',
        }
      }
    },
  },
  plugins: [],
}