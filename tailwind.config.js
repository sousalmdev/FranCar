/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: { bounceFast: "bounce 1s linear infinite" },
    },
  },
  plugins: [],
};
