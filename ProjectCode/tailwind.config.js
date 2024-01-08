/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin'),   require('preline/plugin'),], 
}

