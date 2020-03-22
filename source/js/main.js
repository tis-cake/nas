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

// слайдер отзывов
var reviewsSwiper = new Swiper('#reviews-swiper', {
  slidesPerView: 1,

  pagination: {
    el: '.reviews-swiper__pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      var reviewsSwiperArr = document.querySelectorAll('.reviews-swiper__slide');
      if (reviewsSwiperArr.length > 10) {
        // console.log('больше');
        return '<span class="swiper-pagination-current-zero">0</span>' + 
             '<span class="' + currentClass + '"></span>' +
             ' / ' +
             '<span class="' + totalClass + '"></span>';
      } else {

      return '<span class="swiper-pagination-current-zero">0</span>' + 
             '<span class="' + currentClass + '"></span>' +
             ' / ' +
             '0' +
             '<span class="' + totalClass + '"></span>';
           }
    }
  },

  navigation: {
    nextEl: '.reviews-swiper__button-next',
    prevEl: '.reviews-swiper__button-prev',
  },

  // breakpoints: {
  //   1110: {
  //     slidesPerView: 2,
  //     spaceBetween: 100
  //   }
  // }
});

reviewsSwiper.on('slideChange', function () {
  // console.log('slide changed');
  console.log(reviewsSwiper.activeIndex+1);
  if (this.activeIndex+1 >= 10) {
    // console.log('bleaaa');
    // renderFraction() {
      // return console.log('ssss');
    // }
  }
});

// function updateFraction (reviewsSwiper) {
//   console.log(this.activeIndex+1);
//   if (this.activeIndex+1 >= 10) {
//     console.log('bleaaa');
//   }
// }

// console.log(reviewsSwiper.activeIndex+1);
// var reviewsCurrent = reviewsSwiper.activeIndex+1;
// if (reviewsCurrent >= 10) {
//   console.log('bleaaa');
// }

// console.log(reviewsCurrent.length);

// var reviewsSwiperArr = document.querySelectorAll('.reviews-swiper__slide');
// console.log(reviewsSwiperArr.length);
// if (reviewsSwiperArr.length > 10) {
//   console.log('больше');
// }