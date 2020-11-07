$(function () {
    /*new WOW({
        animateClass: 'animate__animated'
    }).init();*/

    $('.heroes__slider-img').slick({
        asNavFor: '.heroes__slider-text',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>'
    });
    $('.heroes__slider-text').slick({
        asNavFor: '.heroes__slider-img',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    })
});