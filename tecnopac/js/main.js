const burgerNav = document.querySelector('.header__burger-nav'),
      burgerButton = document.querySelector('.header__burger-button'),
      burgerLink = burgerNav.querySelectorAll('.header__burger-link'),
      header = document.querySelector('.header'),
      headerWrapper = header.querySelector('.header__wrapper'),
      logo = headerWrapper.querySelector('.logo');

const func = {
      toggleMenu: () => {
        burgerNav.classList.toggle('header__burger-nav--active');
        burgerButton.classList.toggle('header__burger-button--active');
      },
      burgerButton: (event) => {
        event.preventDefault();
        func.toggleMenu();
      },
      win: (event) => {
        const target = event.target,
              itsMenu = target == burgerNav || burgerNav.contains(target),
              itsBtnMenu = target == burgerButton,
              menuActive = burgerNav.classList.contains('header__burger-nav--active');
        if (!itsMenu && !itsBtnMenu && menuActive) {
          func.toggleMenu();
        }
      },
      burgerLink: (el) => {
        el.addEventListener('click', function() {
          func.toggleMenu();
        });
      },
      scrollNav: (event) => {
        if (window.scrollY > 100) {
          header.style.backgroundColor = '#05797a';
          headerWrapper.style = 'height: 80px;';
          logo.style = 'width: 160px; display: flex; align-items: center; transition: 0.3s ease';
        } else if (window.scrollY < 100) {
          header.style.backgroundColor = '';
          headerWrapper.style = '';
          logo.style = '';
        }  
      }
};

burgerButton.addEventListener('click', func.burgerButton);
window.addEventListener('click', func.win);
burgerLink.forEach(func.burgerLink);
document.addEventListener('scroll', func.scrollNav);