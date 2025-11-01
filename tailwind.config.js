/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-main": "#ff4b45", // your custom red color
        "gray-dark-second": "#1c1c1c", // used in .form-container form
      },
    },
  },
  plugins: [],
}

