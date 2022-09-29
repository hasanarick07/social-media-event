/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8456EC",

          secondary: "#E87BF8",

          accent: "#240D57",

          neutral: "#4F4F4F",

          "base-100": "#DDDDDD",

          info: "#2463EB",

          success: "#16A249",

          warning: "#DB7706",

          error: "#E61445",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
