let selectMobile = document.getElementById("selectMobile");
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

$(function() {
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
    });

    $('.burger').on('click', function() {
        $('.menu__list-link').toggleClass('menu__list-link--active')
    });

    $('.open__popup').click(function(e) {
        e.preventDefault();
        $('.popup__bg').fadeIn(600);
    })

    $('.close__popup').click(function() {
        $('.popup__bg').fadeOut(600);
    })
});

$('.tab').on('click', function(e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
});



$(function() {
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