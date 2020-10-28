const burger = document.querySelector('.burger'),
      popupClose = document.querySelector('.popup-close'),
      menu = document.querySelector('.header__menu'),
      navigationLink = document.querySelectorAll('.navigation__link'),
      up = document.querySelector('.up');

const func = {
  toggleMenu: function() {
    menu.classList.toggle('menu-active');
    popupClose.classList.toggle('menu-active');
    document.body.style.overflow = 'hidden';
  },
  navLink: function(el) {
    el.addEventListener('click', function() {
      func.toggleMenu();
      document.body.style.overflow = '';
    });
  },
  close: function(e) {
    func.toggleMenu();
    document.body.style.overflow = '';
  },
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

burger.addEventListener('click', func.toggleMenu);
navigationLink.forEach(func.navLink);
popupClose.addEventListener('click', func.close);
window.addEventListener('scroll', func.trackScroll);
up.addEventListener('click', func.backToTop);

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}