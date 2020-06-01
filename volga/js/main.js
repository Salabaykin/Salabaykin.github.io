$(document).ready(function() {

$('.tariffs-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  swipe: false,
  prevArrow: '<div class="foundation-slider-prev"><svg class="foundation-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="foundation-slider-next"><svg class="foundation-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true
      }
    }
  ]
});

$('.tariffs-slider-tabs').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  asNavFor: '.tariffs-slider',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    }
  ]
});


$('.cases-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: '<div class="cases-slider__prev"><svg class="cases-slider__icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="cases-slider__next"><svg class="cases-slider__icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false
      }
    }
  ]
});

$('.calculator-form__slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  prevArrow: '<div class="calculator-form__slider-prev"><svg class="calculator-form__slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="calculator-form__slider-next"><svg class="calculator-form__slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
});

$('.stages-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  swipe: false,
  arrows: false,
  focusOnSelect: true
});

$('.stages-slider-tabs').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.stages-slider',
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
});

$('.feedback-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  prevArrow: '<div class="feedback-slider-prev"><svg class="feedback-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="feedback-slider-next"><svg class="feedback-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ]
});

$('.certificates-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  prevArrow: '<div class="certificates-slider-prev"><svg class="certificates-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="certificates-slider-next"><svg class="certificates-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ]
});

$('.foundation-slider').slick({
  slidesToShow: 3,
  prevArrow: '<div class="foundation-slider-prev"><svg class="foundation-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="foundation-slider-next"><svg class="foundation-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true 
      }
    }
  ]
});

$('.sale-slider').slick({
  slidesToShow: 3,
  prevArrow: '<div class="foundation-slider-prev"><svg class="foundation-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  nextArrow: '<div class="foundation-slider-next"><svg class="foundation-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true 
      }
    }
  ]
});

});

const burger = document.querySelector('.burger'),
      popupClose = document.querySelector('.popup-close'),
      menu = document.querySelector('.header__menu'),
      navigationLink = document.querySelectorAll('.navigation__link'),
      up = document.querySelector('.up');


const func = {
  toggleMenu: () => {
    menu.classList.toggle('menu-active');
    popupClose.classList.toggle('menu-active');
  },
  navLink: (el) => {
    el.addEventListener('click', () => {
      func.toggleMenu();
    });
  },
  close: (e) => {
    func.toggleMenu();
  },
  trackScroll: () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
  
    if (scrolled > coords) {
      up.classList.add('up-show');
    }
    if (scrolled < coords) {
      up.classList.remove('up-show');
    }
  },
  backToTop: () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(func.backToTop, 0);
    }
  }
};

burger.addEventListener('click', func.toggleMenu);
navigationLink.forEach(func.navLink);
popupClose.addEventListener('click', func.close);
window.addEventListener('scroll', func.trackScroll);
up.addEventListener('click', func.backToTop);