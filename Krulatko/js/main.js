$(document).ready(function () {
  
  const modal = $('.modal'),
        modalClose = $('.modal__close'),
        headerOrder = $('.header__order');
  
  headerOrder.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  modalClose.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (___) __-__-___" });

});