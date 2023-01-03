module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-/,
      variants: ["hover"],
    },
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      mobile375: "375px",
      mobile: "640px",
      mobileBelow: { max: "640px" },
      tablet: "768px",
      tabletBelow: { max: "768px" },
      smallLaptop: "1024px",
      desktop: "1280px",
      bigLaptop: "1440px",
      television: "1536px",
    },
    extend: {
      fontSize: {
        8: ["0.5rem", "0.688rem"],
        10: ["0.625rem", "0.938rem"],
        12: ["0.75rem", "1rem"],
        13: ["0.813rem", "1.125rem"],
        14: ["0.875rem", "1.118rem"],
        16: ["1rem", "1.313rem"],
        18: ["1.125rem", "2rem"],
        20: ["1.25rem", "1.688rem"],
        24: ["1.5rem", "2.063rem"],
        40: ["2.5rem", "3.375rem"],
        64: ["4rem", "4.375rem"],
      },
      colors: {
        obiRed: {
          500: "#C30913",
        },
      },
      width: {
        600: "600px",
        500: "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
