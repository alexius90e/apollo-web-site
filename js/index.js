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

/// main nav

const mainNav = document.querySelector('.main-nav');
const headerBurgerButton = document.querySelector('.header__burger-button');

if (mainNav && headerBurgerButton) {
  headerBurgerButton.addEventListener('click', () => {
    mainNav.classList.add('active');
  });

  mainNav.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isCloseButton = event.target.classList.contains('main-nav__body-top-close-button');
    const isLink = event.target.classList.contains('main-nav__menu-item-link');

    if (isLayout || isCloseButton || isLink) {
      event.currentTarget.classList.remove('active');
    }
  });
}

//// main-nav__menu-item

const mainNavMenuTogglers = document.querySelectorAll('.main-nav__menu-title');

mainNavMenuTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (event) => {
    const togglerParentElement = toggler.parentElement;
    const isMenuItem = togglerParentElement.classList.contains('main-nav__menu-item');

    if (isMenuItem) {
      togglerParentElement.classList.toggle('active');
    }
  });
});
