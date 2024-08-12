/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-500": { max: "500px" },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%)",
      },
    },
  },
  plugins: [],
  exports: {
    prefix: "tw-",
    important: true,
  },
};
