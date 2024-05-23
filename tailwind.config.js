/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out',
      },
    colors: {
        "default":"#171717",
        },
    },backgroundImage:{
      'ford':'url(https://www.flexxmotorsport.com.au/cdn/shop/products/IMG_E8861_1_1200x.jpg?v=1679459071)',
      'chevy':'url(https://www.autoinfluence.com/wp-content/uploads/2023/08/used-Chevy-dealer-2019-Chevy-Blazer-Red.jpg)',
      'mitsu':'url(https://media.licdn.com/dms/image/C4D1BAQHCx40EaycVCQ/company-background_10000/0/1583752908979/kayomotors_cover?e=2147483647&v=beta&t=gcOyoUNGSzEAYiWvIgplT6ubzjtKViKNl-PevXlb50I)'
    }
  },
  plugins: [],
};
