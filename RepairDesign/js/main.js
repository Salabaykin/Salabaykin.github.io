$(document).ready(

  function () {
    var now = new Date();
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container-projects', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  $('[type=tel]').mask('+7(000)00-00-000', { placeholder: "+7 (___) __-__-___" });

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Заявка отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          ym('64769170', 'reachGoal', 'button'); return true;
        }
      });
      return false; 
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required",
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв"
      },
      userPhone: "Заполните поле",
      userQuestion: "Не забудьте задать нам вопрос",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Ваш вопрос отправлен, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв"
      },
      userPhone: "Заполните поле",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Заявка отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

});

$(document).ready(

  function () {

    $(window).on('scroll',
    function () {
        if ($(window).scrollTop() > 100) {
        $('.hero__scroll-down-up').fadeIn();
        }
        else {
        $('.hero__scroll-down-up').fadeOut();
        }
    });
    $('.hero__scroll-down-up').on('click',
    function (event) {
        event.preventDefault();
        $('html, body').animate({ 'scrollTop': 0 }, 700);
    }

  );

  function yaMap () {

      var elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=0cb28567-70ae-4ae0-98b1-6b34f9ca8548&lang=ru_RU&onload=getYaMap';
      document.getElementsByTagName('body')[0].appendChild(elem);
  }
  setTimeout(yaMap, 5000);


  var g=$("#control-policy-checkbox"),j=$("#control__submit");
  g.on("change",function(){
    j.toggleClass("button__disabled")
  });

  var f=$("#footer-policy-checkbox"),v=$("#footer__submit");
  f.on("change",function(){
    v.toggleClass("button__disabled")
  });

  var z=$("#modal-policy-checkbox"),x=$("#modal__submit");
  z.on("change",function(){
    x.toggleClass("button__disabled")
  });
  
});
