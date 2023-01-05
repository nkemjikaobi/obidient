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
        obiGray: {
          200: "#4F4F4F",
          250: "#FCFCFC",
          300: "#605B5B",
          400: "#353535",
        },
        obiGreen: {
          500: "#12791B",
        },
        gradient: {
          keyFeature: "rgba(0, 0, 0, 0.23) 0.07%, #000000 87.45%)",
        },
      },
      boxShadow: {
        "get-started-card": "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      width: {
        600: "600px",
        500: "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
