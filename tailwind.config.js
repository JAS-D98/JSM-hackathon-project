/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBlueColor: "#0A8ED9",
        secondaryBlueColor: "#0A8ED9",
        tertiaryBlueColor: "#e7f4fb",
        emojiBlueColor: "#0078d7",
        primaryBlackColor: "#1E1E1E",
        blackGradient: "#00000080",
        secondaryBlackColor: "#1E1E1E",
        primaryWhiteColor: "#FFFFFF",
        primaryErrorMessage: "#ef4444",
        successColorCode: "#008000",
      },
    },
  },
  plugins: [],
};
