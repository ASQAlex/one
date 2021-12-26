$(function () {

const burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
burger.classList.toggle('burger--active');
});

 $('.burger').on('click', function () {
    $('.menu__list-link').toggleClass('menu__list-link--active')
});

$('.open__popup').click(function(e){
    e.preventDefault();
    $('.popup__bg').fadeIn(600);
  })
  
  $('.close__popup').click(function(){
    $('.popup__bg').fadeOut(600);
  })
});

$(function () {

  $('.roll').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('roll--active');
    $($(this).closest('.price').siblings().find('li')).addClass('tabs-content--active');

    $(this).addClass('roll--active');
    $($(this).attr('href')).addleClass('tabs-content--active');
    
  });

  $('.slider__wrapper').slick({
    dots: false,
    arrow: true,
    autoplay: 500,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    centerMode: true,
    variableWidth: true,
  });
});





