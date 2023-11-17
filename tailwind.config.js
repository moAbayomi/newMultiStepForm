/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },

      colors: {
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": " hsl(229, 24%, 87%)",
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 70%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",

        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
      },
    },

    plugins: [],
  },
};
