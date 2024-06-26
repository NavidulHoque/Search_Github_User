/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, minmax(100px, 1fr))',
      }
    },
  },
  plugins: [],
}