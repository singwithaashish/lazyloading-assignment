/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4f46e5',
        'hover': '#4338ca',
        'text': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

