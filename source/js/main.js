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