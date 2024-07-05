$(document).ready(function () {
    AOS.init();

<<<<<<< HEAD
  // main banner swiper
  var swiper = new Swiper(".main_banner_swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
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

  var sec_03_swiper = new Swiper(".sec_03_swiper", {
    direction: "vertical",
    slidesPerView: 3,
    loop: true,
    spaceBetween: 33,
    navigation: {
      nextEl: ".swiper-button-next_sec_03",
      prevEl: ".swiper-button-prev_sec_03",
    },
  });

  var sec_04_swiper = new Swiper(".sec_04_swiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
  });

  var sec_05_swiper = new Swiper(".sec_05_swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next_sec_05",
      prevEl: ".swiper-button-prev_sec_05",
    },
  });

  var partners_swiper = new Swiper(".partners_swiper", {
    slidesPerView: 7,
    loop:true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
  });

  // main section 05 tab
  $(".main_sec_05_btn").on("click", function () {
    // 모든 버튼에서 active 클래스 제거
    $(".main_sec_05_btn").removeClass("active");
    // 클릭된 버튼에 active 클래스 추가
    $(this).addClass("active");

    // 모든 항목 숨김
    $(".main_sec_05_item").removeClass("active");

    // 클릭된 버튼의 data-target 값을 가져옴
    var target = $(this).data("target");

    // 해당하는 항목만 표시
    $('.main_sec_05_item[data-id="' + target + '"]').addClass("active");
  });

  // 페이지 로드 시 첫 번째 항목 표시
  $('.main_sec_05_item[data-id="1"]').addClass("active");
  //scroll_to_top
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollButton = document.querySelector(".scroll_top");
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
  }

  document
    .querySelector(".scroll_top button")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
=======
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
>>>>>>> acba9977b5e37e6b404dfee349a56438c5d5f46b
    });

    var sec_01_swiper = new Swiper(".sec_01_swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next_sec_01",
            prevEl: ".swiper-button-prev_sec_01",
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });

    var sec_03_swiper = new Swiper(".sec_03_swiper", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 33,
        navigation: {
            nextEl: ".swiper-button-next_sec_03",
            prevEl: ".swiper-button-prev_sec_03",
        },
    });

    var sec_04_swiper = new Swiper(".sec_04_swiper", {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            1000: {
                spaceBetween: 24,
            },
        },
    });

    var sec_05_swiper = new Swiper(".sec_05_swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next_sec_05",
            prevEl: ".swiper-button-prev_sec_05",
        },
    });

    var partners_swiper = new Swiper(".partners_swiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            575: {
                slidesPerView: 5,
            },
            1000: {
                slidesPerView: 7,
            },
        },
    });

    // main section 05 tab
    $(".main_sec_05_btn").on("click", function () {
        // 모든 버튼에서 active 클래스 제거
        $(".main_sec_05_btn").removeClass("active");
        // 클릭된 버튼에 active 클래스 추가
        $(this).addClass("active");

        // 모든 항목 숨김
        $(".main_sec_05_item").removeClass("active");

        // 클릭된 버튼의 data-target 값을 가져옴
        var target = $(this).data("target");

        // 해당하는 항목만 표시
        $('.main_sec_05_item[data-id="' + target + '"]').addClass("active");
    });

    // 페이지 로드 시 첫 번째 항목 표시
    $('.main_sec_05_item[data-id="1"]').addClass("active");
    //scroll_to_top
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        var scrollButton = document.querySelector(".scroll_top");
        document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100;
    }

    document
        .querySelector(".scroll_top button")
        .addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
});
