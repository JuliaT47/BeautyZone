const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    990: {
      slidesPerView: 2,
    },
    1225: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".slider.next",
    prevEl: ".slider.prev",
  },
});
