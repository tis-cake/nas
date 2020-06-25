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

// slideUp/slideDown
let chronicleBtnArr = document.querySelectorAll('.chronicle__btn');
for (let chronicleBtn of chronicleBtnArr) {
  chronicleBtn.addEventListener('click', function (evt) {
    let chronicleBlock = this.closest('.chronicle__block');
    let chronicleHiddenBlock = chronicleBlock.querySelector('.chronicle__hidden-wrap');

    let chronicleTitleBlock = chronicleBlock.querySelector('.chronicle__title');
    if (chronicleTitleBlock) {
      chronicleTitleBlock.classList.toggle('active');
    }

    // если список пуст - выйти из функции
    if (chronicleHiddenBlock.children.length === 0) {
      return;      
    }

    this.classList.toggle('active');
    chronicleHiddenBlock.classList.toggle('active');

    // второй аргумент - время на исполнение setInterval
    if (chronicleHiddenBlock.classList.contains('active')) {
      slideUp(chronicleHiddenBlock, 15);
    } else {
      slideDown(chronicleHiddenBlock, 15);
    }

  });
}

  // let height = 0;
  // let interval = 0;
  // let counter = 0;

// скрыть элементы (элемент, время)
function slideUp(item, duration) {
  
  height = item.offsetHeight;
  counter = height;

  let subtractor = height/10;

  // сейчас это в css
  // item.style.overflow = "hidden";
  // item.style.cssText = "transition: height 500ms; -webkit-transition: height 500ms; -moz-transition: height 500ms; -o-transition: height 500ms";

  interval = setInterval(function () {
    
    // выполняем, пока счётчик не обнулится
    // высота элемента на каждой итерации приравнивается к значению счётчика
    counter -= subtractor;
    // console.log(counter); 
    if (counter > 0) {
      item.style.height = counter + "px";
    } else {
      item.style.height = 0;    // счётчик обнулился - высота = 0      
      clearInterval(interval);  // прекратить выполнение
    }
  }, duration);                 // выполнять в течение времени (переданный второй аргумент)
}

// показать элементы (элемент, время)
function slideDown(item, duration) {
  let adder = height/10;        

  // item.style.cssText = "transition: none; -webkit-transition: none; -moz-transition: none; -o-transition: none";
  
  interval = setInterval(function () {            
    counter += adder;
    // console.log(counter);
    if (counter < height) {
      item.style.height = counter + "px";
    } else {
      item.style.height = height + "px";
      clearInterval(interval);
    }
  }, duration); 
}

// $().fancybox({
//     selector : '.reviews-swiper__img-wrap',
//     backFocus: false
// });

// $().fancybox({
//         selector : '.swiper-slide-link',
//         loop: true,
//         animationEffect: "zoom-in-out",
//         buttons : [
//             'fullScreen',
//             'close'
//         ],
//         titleShow: true
//     });

$().fancybox({
  selector : '.reviews-swiper__img-wrap',
  loop: true,
  animationEffect: "zoom-in-out",
  buttons : ['fullScreen','close'],
  titleShow: true,
  backFocus: false
});