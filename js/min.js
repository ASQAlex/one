$(function(){

    $('.roll').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('roll--active');
        $($(this).closest('.price__all').siblings().find('li' , 'p')).removeClass('tabs-content--active');

        $(this).addClass('roll--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.slider__wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  centerMode: true,
  variableWidth: true
});

});