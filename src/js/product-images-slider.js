// import Swiper bundle with all modules installed
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Lazy,
  Scrollbar,
  Zoom,
  Mousewheel,
  Keyboard,
} from 'swiper';

import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.image-slider', {
  modules: [
    Navigation,
    Pagination,
    Zoom,
    Lazy,
    Autoplay,
    Scrollbar,
    Mousewheel,
    Keyboard,
  ],

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
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.image-slider',
  },
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
    // dynamicBullets: true,
    // type: 'fraction',
    // renderFraction: function (currentClass, totalClass) {
    //   return (
    //     'Фото <span class="' +
    //     currentClass +
    //     '"></span>' +
    //     ' из ' +
    //     '<span class="' +
    //     totalClass +
    //     '"></span>'
    //   );
    // },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper.init();
swiper.on('init', function () {
  swiper.autoplay.start();
});
