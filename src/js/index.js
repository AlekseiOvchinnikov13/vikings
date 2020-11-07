$(function () {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.heroes__slider-img').slick({
        asNavFor: '.heroes__slider-text',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    autoplaySpeed: 2000,
                    autoplay: true
                }
            }
        ]
    });
    $('.heroes__slider-text').slick({
        asNavFor: '.heroes__slider-img',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

    $('.menu-btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list-active');
        $('.menu-btn').toggleClass('opened');
    })
});