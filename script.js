var $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    dots: ".js-carousel--simple-dots",
    arrows: {
        prev: ".button-glider-prev",
        next: ".button-glider-next",
    },
});