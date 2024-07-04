$(document).ready(function () {
    AOS.init();

    // main banner swiper
    var swiper = new Swiper(".main_banner_swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' +
                    className +
                    '">' +
                    "0" +
                    (index + 1) +
                    "</span>"
                );
            },
        },
        autoplay: {
            delay: 5000,
        },
    });

    var sec_01_swiper = new Swiper(".sec_01_swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next_sec_01",
            prevEl: ".swiper-button-prev_sec_01",
        },
    });
});
