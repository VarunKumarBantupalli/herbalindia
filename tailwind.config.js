/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#228B22',
        'lime-green': '#32CD32',
        'sea-green': '#2E8B57',
        'olive-green': '#556B2F',
        'light-green': '#9ACD32',
        'medium-sea-green': '#3CB371',
      },
      gradientColorStops: {
        'green-start': '#228B22',
        'green-mid': '#2E8B57',
        'green-end': '#32CD32',
        'olive-light': '#556B2F',
        'light-sea': '#9ACD32',
      },
    },
  },
  plugins: [],
}
