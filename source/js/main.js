// [index page]
// главный слайдер
var mainSwiper = new Swiper('#main-swiper', {
  // effect: 'fade',
  // fadeEffect: { crossFade: true },

  // autoHeight: true,

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

// слайдер проектов
var projectsSwiper = new Swiper('#projects-swiper', {
  slidesPerView: 1,
  // autoHeight: true,
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

// слайдер новостей/полезный статей
var twoArticlesSwiper = new Swiper('#two-articles-swiper', {
  slidesPerView: 1,
  // autoHeight: true,

  navigation: {
    nextEl: '.two-articles-swiper__button-next',
    prevEl: '.two-articles-swiper__button-prev',
  },

  breakpoints: {
    1110: {
      slidesPerView: 2,
      spaceBetween: 100
    }
  }
});