/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'port-dark': '#040404',
        'port-light': '#D8D9CF',
      }
    },
    screens: {
      '2xl-m': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl-m': {'max': '1-m279px'},
      // => @media (max-width: 1279px) { ... }

      'lg-m': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-m': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm-m': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      '2xl-s': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }

      'xl-s': {'min': '1-m279px'},
      // => @media (inx-width: 1279px) { ... }

      'lg-s': {'min': '1023px'},
      // => @media (inx-width: 1023px) { ... }

      'md-s': {'min': '767px'},
      // => @media (inx-width: 767px) { ... }

      'sm-s': {'min': '639px'},
      // => @media (inx-width: 639px) { ... }
    }
  },
  plugins: [],
}