const burgerButton = document.querySelector('.burger-button'),
      burgerNav = document.querySelector('.burger-nav');

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('burger-button--active');
  burgerNav.classList.toggle('burger-nav--active');
});