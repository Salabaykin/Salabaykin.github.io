$(document).ready(function(){
  $('.progress-slider').slick({
    arrows: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.progress-slider__dots',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false
  });

  $('.progress-slider__dots').slick({
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.progress-slider',
    focusOnSelect: true
  });

  
  $('.problem-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});