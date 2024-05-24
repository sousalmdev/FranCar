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
      'volks':'url(https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-volkswagen-golf-r-2021-rt-hero-front.jpg?itok=5CiSsPbp)',
      'fiat':'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfoyn6ge86p3SsuOLAvGIk64U98oC1QMJmaGOBuc8D9tRadU8Zm8sDkbImAyAx8AgGNlPq97amdL3Ff6GVzCTEOyxGYCr1kpVWGDIEdu9N2szsCnVyEvIDwFRi1ZKId6wM0FbUg5lvZdKJ_KM08dtskrQCULqvZE4mjiIZalewmc31-YcZUavQiNqweLOG/s800/Fiat-Argo.jpg)',
      'classics':'url(https://www.motoroids.com/wp-content/uploads/2022/03/Classic-Cars-2.jpg)'
    }
  },
  plugins: [],
};
