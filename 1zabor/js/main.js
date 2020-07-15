$(document).ready(function() { 

  var openModal = $('.open_modal'); 
  var close = $('.modal__close'); 
  var modal = $('.modal'); 
  
  openModal.click( function(event){
  
  event.preventDefault(); 
  
  var div = $(this).attr('href'); 
    function open(){ 
      $(div).addClass('open');
      document.body.classList.add('hidden');
    }
    open();
    
    if (this.dataset.modalid) {
      document.querySelector(`#${this.dataset.modalid}`).classList.toggle('open');
    }
  });
  
  close.click( function(){
    function hide() { 
      modal.removeClass('open');
      document.body.classList.remove('hidden');
    }
    hide();
  });

  $(document).mouseup(function (e){
    var modalctr = $(".modal__body");
    var modalcontent = $(".modal__content");
    if (!modalcontent.is(e.target) && modalcontent.has(e.target).length === 0){
      modal.removeClass('open');
      document.body.classList.remove('hidden');
    }
  });

  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (___) ___-__-__" });

  $('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="gallery-slider__prev"><svg class="gallery-slider__icon" width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#25588c" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></div>',
    nextArrow: '<div class="gallery-slider__next"><svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#25588c" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></div>',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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

  (function() {
  
    const hamburger = {
      navToggle: document.querySelector('.burger'),
      nav: document.querySelector('.mob-nav__ul'),
      doToggle: function() {
        this.nav.classList.toggle('active');
      }
    };
  
    document.addEventListener('click', e => {
      if (e.target != hamburger.navToggle && e.target != hamburger.nav && e.target != document.querySelector('.mob-nav')) {
        hamburger.nav.classList.remove('active');
      } else {
        hamburger.doToggle();
      }
    });
    
  }());

  $(function() {

    $('#accordion .accordion__title').on('click', function(){
      if($(".accordion__item").hasClass("active__item")) {
        $('#accordion .accordion__content').slideUp(299);
        $('.accordion__item').removeClass('active__item');
      } else {
        $('#accordion .accordion__content').not( $(this).next() ).slideUp(299);
        $('.accordion__item').removeClass('active__item');
        $(this).next().slideDown(299).parent().addClass('active__item');
      }
    });

  });

  var up = document.querySelector('.up');

  var func = {
    trackScroll: function() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
    
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

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled !== 0) {
      document.querySelector('.top-menu').classList.add('top-menu--fixed');
    } else {
      document.querySelector('.top-menu').classList.remove('top-menu--fixed');
    }
  };

});