// [index page]
// главный слайдер
var mainSwiper = new Swiper('#main-swiper', {
  // effect: 'fade',
  // fadeEffect: { crossFade: true },

  autoHeight: true,

  pagination: {
    el: '.main-swiper__pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '0' + 
             '<span class="' + currentClass + '"></span>' +
             ' / ' +
             '0' +
             '<span class="' + totalClass + '"></span>';
    }
  },

  navigation: {
    nextEl: '.main-swiper__button-next',
    prevEl: '.main-swiper__button-prev',
  },
});

// главный слайдер
var projectsSwiper = new Swiper('#projects-swiper', {
  slidesPerView: 1,
  autoHeight: true,
  // spaceBetween: 100,

  navigation: {
    nextEl: '.projects-swiper__button-next',
    prevEl: '.projects-swiper__button-prev',
  },

  breakpoints: {
    1110: {
      slidesPerView: 2,
      spaceBetween: 100
    }
  }
});

var newsSwiper = new Swiper('#news-swiper', {
  slidesPerView: 2,
  autoHeight: true,
  // spaceBetween: 100,

  navigation: {
    nextEl: '.news-swiper__button-next',
    prevEl: '.news-swiper__button-prev',
  },

  // breakpoints: {
  //   1110: {
  //     slidesPerView: 2,
  //     spaceBetween: 100
  //   }
  // }
});