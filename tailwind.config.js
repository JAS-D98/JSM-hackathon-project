/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlueColor: "#0A8ED9",
        secondaryBlueColor: "#0A8ED9",
        primaryBlackColor: "#1E1E1E",
        secondaryBlackColor: "#1E1E1E",
        primaryWhiteColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
