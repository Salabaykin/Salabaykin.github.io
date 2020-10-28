$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10'],
        menu: '#menu',
        animateAnchor: false,
        autoScrolling: true,
        scrollHorizontally: false,
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: false,
        responsiveWidth: 1300
    });
});

$('.retail-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="retail-slider__prev"></div>',
  nextArrow: '<div class="retail-slider__next"></div>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

(function() {
  
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  document.addEventListener('click', e => {
    if (e.target != hamburger.navToggle && e.target != hamburger.nav && e.target != document.querySelector('.nav-toggle-bar')) {
      hamburger.nav.classList.remove('expanded');
      hamburger.navToggle.classList.remove('expanded');
    } else {
      hamburger.doToggle();
    }
  });
  
}());