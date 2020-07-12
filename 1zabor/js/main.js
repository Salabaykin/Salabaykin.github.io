$('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="gallery-slider__prev"><svg class="gallery-slider__icon" width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#25588c" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></div>',
  nextArrow: '<div class="gallery-slider__next"><svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#25588c" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></div>',
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false
});

(function($) {
  $(function() {
    $('ul.section-tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.section-tabs').find('div.section-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });
})(jQuery);

$(function() {

  // открываем вкладку по умолчанию 
  $('.active__item .accordion__content').slideDown();

  $('#accordion .accordion__title').on('click', function(){
    $('#accordion .accordion__content').not( $(this).next() ).slideUp(299);

    $('.accordion__item').removeClass('active__item');
    $(this).next().slideDown(299).parent().addClass('active__item');
  });

});

$('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (___) ___-__-__" });

const up = document.querySelector('.up');

const func = {
  trackScroll: function() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
  
    if (scrolled > coords) {
      up.classList.add('up-show');
    }
    if (scrolled < coords) {
      up.classList.remove('up-show');
    }
  },
  backToTop: function() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(func.backToTop, 0);
    }
  }
};

window.addEventListener('scroll', func.trackScroll);
up.addEventListener('click', func.backToTop);

