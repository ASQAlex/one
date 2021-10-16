
$(function () {

    $('.roll').on('click', function () {
        $('.price__list-item').addClass('active');
        $(this).next().toggleClass('active');
    });

});