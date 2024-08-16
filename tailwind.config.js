/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('/background1.png')",
        'background-image2': "url('/background2.png')",
        'background-image3': "url('/background3.png')",
      }
    },
  },
  plugins: [],
}

