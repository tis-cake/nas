const body = document.querySelector('body');
const header = document.querySelector('.header');
const anchors = document.querySelectorAll('a[href*="#"]'); // якоря

// мобильное меню
let mobileMenu = header.querySelector('.header__block-bottom');
let menuToggle = header.querySelector(".menu-toggle");
menuToggle.addEventListener('click', function(evt) {
  body.classList.toggle('noscroll');
  this.classList.toggle('active');
  header.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  searchToggle.classList.toggle('hidden');
  searchHeader.classList.toggle('active');
});

// мобильный поиск
let searchToggle = header.querySelector('.header__search-toggle');
let searchHeader = header.querySelector('.header__search');
searchToggle.addEventListener('click', function(evt) {
  this.classList.toggle('active');
})

// работа с якорями
for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// работа с нулём в пагинации слайдера
// индекс активного слайда >= 10 - скрыть "0", иначе если < 10 - показать
function updateFraction(slider) {
  
  let sliderActiveIndex = slider.activeIndex + 1;
  let sliderElement = slider.el;
  let fractionActiveZero = sliderElement.querySelector('.swiper-pagination-current-zero');

  if (sliderActiveIndex >= 10) {
    fractionActiveZero.classList.add('hidden');
  } else if (sliderActiveIndex < 10) {
    fractionActiveZero.classList.remove('hidden');
  }
}

// [index page]
// главный слайдер
let mainSwiperArr = document.querySelectorAll('.main-swiper__slide');
let mainSwiper = new Swiper('#main-swiper', {
  // effect: 'fade',
  // fadeEffect: { crossFade: true },
  pagination: {
    el: '.main-swiper__pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {

      // если слайдов >= 10 - рендерим пагинацию без "0" в totalClass
      //  иначе - рендерим с "0"
      if (mainSwiperArr.length >= 10) {
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
    nextEl: '.main-swiper__button-next',
    prevEl: '.main-swiper__button-prev',
  },
});

// если слайдов >= 10, то при изменении слайда проверяем индекс активного слайда,
//  далее - обновляем пагинацию при необходимости
if (mainSwiperArr.length >= 10) {
  mainSwiper.on('slideChange', function () {
    updateFraction(this);
  });
}

// слайдер проектов
let projectsSwiper = new Swiper('#projects-swiper', {
  slidesPerView: 1,

  navigation: {
    nextEl: '.projects-swiper__button-next',
    prevEl: '.projects-swiper__button-prev',
  },

  breakpoints: {
    950: {
      slidesPerView: 2,
      spaceBetween: 100
    },

    760: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});

// слайдер новостей/полезный статей
let twoArticlesSwiper = new Swiper('#two-articles-swiper', {
  slidesPerView: 1,
  autoHeight: true,

  navigation: {
    nextEl: '.two-articles-swiper__button-next',
    prevEl: '.two-articles-swiper__button-prev',
  },

  breakpoints: {
    950: {
      slidesPerView: 2,
      spaceBetween: 100
    },

    760: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});

// слайдер отзывов
let reviewsSwiperArr = document.querySelectorAll('.reviews-swiper__slide');
let reviewsSwiper = new Swiper('#reviews-swiper', {
  slidesPerView: 1,
  autoHeight: true,

  pagination: {
    el: '.reviews-swiper__pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {

      if (reviewsSwiperArr.length >= 10) {
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

  // при изменении слайда - проверяем, является ли текущий слайд 10+ по счёту,
  //  чтобы убрать/добавить ноль к пагинации 
  // on: {
  //   slideChange: function () {
  //     if (reviewsSwiperArr.length >= 10) {
  //       updateFraction(this);
  //     }
  //   },
  // },

  navigation: {
    nextEl: '.reviews-swiper__button-next',
    prevEl: '.reviews-swiper__button-prev',
  },
});

if (reviewsSwiperArr.length >= 10) {
  reviewsSwiper.on('slideChange', function () {
    updateFraction(this);
  });
}

// [project-detail page]
// слайдер фото
let gallerySwiper = new Swiper('#gallery-swiper', {
  slidesPerView: 1,
  autoHeight: true,

  navigation: {
    nextEl: '.gallery-swiper__button-next',
    prevEl: '.gallery-swiper__button-prev',
  },

  breakpoints: {
    950: {
      slidesPerView: 2,
      spaceBetween: 100
    },

    760: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});

// [about page]
// слайдер команды
let teamSwiper = new Swiper('#team-swiper-team', {
  slidesPerView: 4,
  spaceBetween: 67,

  navigation: {
    nextEl: '.team-swiper__button-next--team',
    prevEl: '.team-swiper__button-prev--team',
  },

  // breakpoints: {
  //   950: {
  //     slidesPerView: 2,
  //     spaceBetween: 100
  //   },

  //   755: {
  //     slidesPerView: 2,
  //     spaceBetween: 50
  //   }
  // }
});

// слайдер членов совета
let memberSwiper = new Swiper('#team-swiper-member', {
  slidesPerView: 4,
  spaceBetween: 67,

  navigation: {
    nextEl: '.team-swiper__button-next--member',
    prevEl: '.team-swiper__button-prev--member',
  },

  breakpoints: {
    // 1808: {
    //   spaceBetween: 50,
    // }

  //   950: {
  //     slidesPerView: 2,
  //     spaceBetween: 100
    },

  //   755: {
  //     slidesPerView: 2,
  //     spaceBetween: 50
  //   }
  // }
});
