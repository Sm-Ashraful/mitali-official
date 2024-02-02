/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Allerta: ["Allerta", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
      Work: ["Work Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
  },

   plugins: [require("daisyui")],
};
