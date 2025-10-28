/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: { brand: { DEFAULT: "#0ea5e9", dark: "#0284c7" } },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.06)" },
      borderRadius: { '2xl': "1rem" }
    },
    fontFamily: { iran: ["Vazirmatn", "IRANSans", "Segoe UI", "Tahoma", "Arial", "sans-serif"] },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: { preflight: true },
};
