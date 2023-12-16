/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        orange: "#ffa800",
        gainsboro: "#d9d9d9",
        lightsteelblue: "#a1aebf",
        darkorange: "#fa7c0b",
        gray: {
          "100": "#1a1d20",
          "200": "#1d1b1b",
          "300": "#0f0f0f",
          "400": "rgba(0, 0, 0, 0.84)",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(24, 26, 28, 0.84)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "abhaya-libre-semibold": "'Abhaya Libre SemiBold'",
      },
      borderRadius: {
        "48xl": "67px",
        "26xl": "45px",
        "61xl": "80px",
        "381xl": "400px",
        "10xl": "29px",
        "82xl": "101px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      mini: "15px",
      "45xl": "64px",
      xs: "12px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
