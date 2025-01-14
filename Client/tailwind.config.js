/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        holtwood: ['"Holtwood One SC"', 'serif'], // Define the custom font
        cambay: ['Cambay', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
