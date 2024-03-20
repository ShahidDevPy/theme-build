/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //We define our color variable here to be assigned a value on the stylesheet

      colors: {
        accent: {
          1: "var(--accent1)",
        },
        baseOne: "var(--baseOne)",
        baseTwo: "var(--baseTwo)",
        baseThree: "var(--baseThree)",
        baseFour: "var(--baseFour)",
      },
    },
  },
  plugins: [],
}

