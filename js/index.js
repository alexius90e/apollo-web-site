const aboutUsSwiper = new Swiper('.about-us .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const designDepartmentSwiper = new Swiper('.design-department .swiper', {
  slidesPerView: 1,
  spaceBetween: 48,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
