/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#635FC7",
        "primary-300": "#A8A4FF",
        "secondary-200": "#F4F7FD",
        "secondary-500": "#828FA3",
        "secondary-700": "#2B2C37",
        "secondary-800": "#20212C",
        "secondary-900": "#000112",
        "lines-dark": "#3E3F4E",
        "lines-light": "#E4EBFA",
        "accent-dark": "#EA5555",
        "accent-light": "#FF9898",
      },
    },
  },
  plugins: [],
};
