/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloudBlue: '#cceeff',
        cloudWhite: '#f0f9ff',
        cloudGray: '#dbe7f0',
        cloudHighlight: '#80c1ff', // for links/buttons
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

