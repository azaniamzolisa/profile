var swiper = new Swiper(".service-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:false,

  },
  breakpoints: {
      300: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
  },
});
