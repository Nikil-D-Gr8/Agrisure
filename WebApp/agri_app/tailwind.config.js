/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
      backdropBrightness: {
        90: '90%',
        75: '75%',
      },
      backdropContrast: {
        90: '90%',
        75: '75%',
      },
      backdropSaturate: {
        90: '90%',
        75: '75%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};
