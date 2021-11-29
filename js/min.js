$(function () {

    $('.roll').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('roll--active');
        $($(this).closest('.price__all').siblings().find('li', 'p')).removeClass('tabs-content--active');

        $(this).addClass('roll--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });


});

$(function () {

    // $('.partner__slider').slick({
    //     slidesToShow: 10,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     arrows: true,
    //     dots: true
    // });

    $('.partner__slider').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="right"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="left"></button>'
    });

});