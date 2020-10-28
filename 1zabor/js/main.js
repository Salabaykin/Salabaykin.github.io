$(document).ready(function() { 

  // accordion

  var accordion = (function (element) {
    var _getItem = function (elements, className) { 
      var element = undefined;
      elements.forEach(function (item) {
        if (item.classList.contains(className)) {
          element = item;
        }
      });
      return element;
    };
    return function () {
      var _mainElement = {}, 
        _items = {}, 
        _contents = {}; 
      var _actionClick = function (e) {
        if (!e.target.classList.contains('accordion__title')) { 
          return;
        }
        e.preventDefault(); 
        var header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, 'active__item');
        if (itemActive === undefined) {
          item.classList.add('active__item');
        } else {
          itemActive.classList.remove('active__item');
          if (itemActive !== item) {
            item.classList.add('active__item');
          }
        }
      },
      _setupListeners = function () {
        _mainElement.addEventListener('click', _actionClick);
      };
  
      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion__item');
          _setupListeners();
        }
      }
    }
  })();

  var accordion1 = accordion();
  accordion1.init('#accordion');

  // modal

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

    var header = e.target,
        item = header.parentElement;

      if (this.dataset.modalid.classList.contains('open') !== item) {
        item.classList.add('open');
      }
    
    if (this.dataset.modalid) {
      document.querySelector(`#${this.dataset.modalid}`).classList.remove('open');
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

  //mask

  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (___) ___-__-__" });

  // slick-slider

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

  // Tabs

  (function($) {
    $(function() {
      $('ul.section-tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.section-tabs').find('div.section-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  })(jQuery);

  // Hamburger

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

  // Up

  var up = document.querySelector('.up');

  var func = {
    trackScroll: function() {
      var scrolled = window.pageYOffset;
      var coords = (document.documentElement.clientHeight - 50);
    
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
    if (scrolled >= 69) {
      document.querySelector('.top-menu').classList.add('top-menu--fixed');
    } else {
      document.querySelector('.top-menu').classList.remove('top-menu--fixed');
    }
  };

});