// [index page]
// главный слайдер
var mySwiper = new Swiper('#main-swiper', {
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

var mySwiper = new Swiper('#projects-swiper', {
  // effect: 'fade',
  // fadeEffect: { crossFade: true },

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