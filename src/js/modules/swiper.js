 let mySwiper1 = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 1000,
    disableOnInteraction: true,
    autoplay: {
      delay: 3000,
    },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
  },
  },
  navigation: {
    nextEl: '.swiper__btn-next-link',
    prevEl: '.swiper__btn-prev-link',
  },
});

let mySwiper2 = new Swiper('.swiper-team', {
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    speed: 1000,
    disableOnInteraction: true,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      900: {
        slidesPerView: 3
      },
      1285: {
        slidesPerView: 4
      },
      2300: {
        slidesPerView: 5
      },
    }
});
export default swiper;