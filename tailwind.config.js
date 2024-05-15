/** @type {import('tailwindcss').Config} */
import vanillaRTL from "tailwindcss-vanilla-rtl";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [vanillaRTL],
  corePlugins: {
    ...vanillaRTL.disabledCorePlugins,
  },
};
