// import Swiper bundle with all modules installed
import Swiper, { Navigation, Pagination, Autoplay, Lazy, Scrollbar, Zoom, Mousewheel, Keyboard } from 'swiper';

import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.image-slider', {
  modules: [Navigation, Pagination, Zoom, Lazy, Autoplay, Scrollbar, Mousewheel, Keyboard],

  // Optional parameters
  // autoHeight: true,
  observer: true,
  loop: true,
  grabCursor: true,
  watchOverflow: true,
  spaceBetween: 3,
  //Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //mouseWheel
  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: '.image-slider',
  // },
  //zoom
  zoom: {
    maxRatio: 2,
    // toggle: false,
  },

  //autoPLay
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-custom',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper.init();
// swiper.on('init', function () {
//   swiper.autoplay.start();
// });

//service-about-swiper instance
const swiperService = new Swiper('.service__about-swiper', {
  modules: [Navigation, Pagination, Zoom, Lazy, Autoplay, Scrollbar, Mousewheel, Keyboard],

  // Optional parameters
  // autoHeight: true,
  observer: true,
  loop: true,
  grabCursor: true,
  watchOverflow: true,
  spaceBetween: 3,
  //Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // autoPLay
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.service__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },

    // Navigation arrows
  },
});

//landing-new-drop-swiper instance
const swiperLandingInstance = new Swiper('.landing-new-drop__swiper', {
  modules: [Navigation, Pagination, Zoom, Lazy, Autoplay, Scrollbar, Mousewheel, Keyboard],

  // Optional parameters
  // autoHeight: true,
  observer: true,
  loop: true,
  grabCursor: true,
  watchOverflow: true,
  spaceBetween: 3,
  autoHeight: true,
  //Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // autoPLay
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
    },
  },
});

//landing-catalog-swiper instance

let swiperLandingCatalogInstance;
let init = false;

/* Which media query
 **************************************************************/
function swiperMode() {
  let desktop = window.matchMedia('(min-width: 768px)');

  // Enable (for desktop)
  if (desktop.matches) {
    if (!init) {
      init = true;
      swiperLandingCatalogInstance = new Swiper('.landing-catalog__swiper', {
        modules: [Navigation, Pagination, Zoom, Lazy, Autoplay, Scrollbar, Mousewheel, Keyboard],
        // Optional parameters
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        observer: true,
        loop: true,
        grabCursor: true,
        watchOverflow: true,
        spaceBetween: 30,
        slidesPerView: 4,
        // autoHeight: true,
        // calculateHeight: true,
        //Keyboard
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
        // autoPLay
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.catalog-button-next',
          prevEl: '.catalog-button-prev',
        },
      });
    }
  }

  // Disable (for every other resolution)
  else if (swiperLandingCatalogInstance) {
    swiperLandingCatalogInstance.destroy();
    init = false;
  }
}

/* On Load
 **************************************************************/
window.addEventListener('load', function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener('resize', function () {
  swiperMode();
});
