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
          swipe: true,
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
          swipe: true,
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
      },
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 1,
          infinite: false,
          prevArrow: '<div class="foundation-slider-prev"><svg class="foundation-slider-icon-prev"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
          nextArrow: '<div class="foundation-slider-next"><svg class="foundation-slider-icon-next"><use xlink:href="img/sprite.svg#prev"></use></svg></div>',
          slidesToScroll: 1,
          arrows: true
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
    responsive: [
      {
        breakpoint: 1050,
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

  $("body").on('click', '[href*="#"]', function(e){
    var fixedOffset = 150;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
  });

  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "Телефон" });
  
});