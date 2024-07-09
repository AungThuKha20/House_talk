$(document).ready(function () {
  AOS.init();
  $(".all_search_input").hide();

  $(".header").mouseenter(function () {
    if ($(window).width() > 1000) {
      $(".lnb_bg").stop().animate({ height: "300px" }, 300);
      $(".depth2")
        .stop()
        .animate(
          { opacity: 1 },
          {
            duration: 500,
            step: function (now, fx) {
              if (fx.prop === "opacity" && now === 1) {
                $(this).css("pointer-events", "auto");
              }
            },
          }
        );
      $(".all_search_input").hide();
    }
  });

  $(".header").mouseleave(function () {
    $(".lnb_bg").stop().animate({ height: "0px" }, 300);
    $(".depth2")
      .stop()
      .animate(
        { opacity: 0 },
        {
          duration: 100,
          complete: function () {
            $(this).css("pointer-events", "none");
          },
        }
      );
    $(".all_search_input").hide();
  });

  $("#all_search").click(function (event) {
    event.preventDefault();
    $(".lnb_bg").stop().animate({ height: "300px" }, 300);
    $(".depth2")
      .stop()
      .animate(
        { opacity: 0 },
        {
          duration: 100,
          complete: function () {
            $(this).css("pointer-events", "none");
          },
        }
      );
    $(".all_search_input").fadeIn(300);
  });
  // mobile menu
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    if ($(window).width() < 1000) {
      $(".mo_menu").toggleClass("active");
    } else {
      $(".mo_menu").removeClass("active");
    }
  });

  $(".mo_list.depth1").click(function () {
    var $siblings = $(this).siblings();
    // 다른 depth1 요소에 있는 open 클래스를 제거합니다.
    $siblings.removeClass("open").find(".mo_snb").hide();
    // 클릭한 depth1 요소의 하위 요소인 mo_snb를 토글합니다.
    $(this).toggleClass("open").find(".mo_snb").toggle();
  });

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
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            390: {
                slidesPerView: 3,
            },
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

    var swiper = new Swiper(".mySwiper_list", {
        effect: "coverflow",
        // grabCursor: true,
        centeredSlides: true,
        spaceBetween:1,
        initialSlide:3,
        slidesPerView:3,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 1,
            modifier: 1,
            slideShadows: false,
        },
    });

   
    //scroll_to_top
    window.onscroll = function () {
        scrollFunction();
    };


        // 
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

  // main range
  $(".vertical").each(function () {
    var rangeInput = $(this);
    var rangeValue = $("<div class='range-value'>0%</div>").insertAfter(
      rangeInput
    );

    function updateRangeValue() {
      var value = rangeInput.val();
      rangeValue.text(value + "%");
      rangeValue.css("top", 100 - value + "%");
    }

    rangeInput.on("input", updateRangeValue);
    updateRangeValue();
  });

  let sectionSelect = document.querySelector(".common_select_box");
  console.log("hello");
  if (sectionSelect) {
    sectionSelect.addEventListener("click", () => {
      sectionSelect.classList.toggle("active");
      sectionSelect.classList.toggle("on");
    });
  }

  let sectionSelect1 = document.querySelector(".select_box1");
  if (sectionSelect1) {
    sectionSelect1.addEventListener("click", () => {
      sectionSelect1.classList.toggle("active");
      sectionSelect1.classList.toggle("on1");
      console.log("hello");
    });
  }

  let sectionSelect2 = document.querySelector(".select_box2");
  sectionSelect2.addEventListener("click", () => {
    sectionSelect2.classList.toggle("active");
    sectionSelect2.classList.toggle("on2");
    console.log("hello");
  });
  let sectionSelect3 = document.querySelector(".select_box3_cont");
  if (sectionSelect3) {
    sectionSelect3.addEventListener("click", () => {
      sectionSelect3.classList.toggle("active");
      sectionSelect3.classList.toggle("on3");
    });
  }
  let sectionSelect4 = document.querySelector(".select_box3_cont1");
  sectionSelect4.addEventListener("click", () => {
    sectionSelect4.classList.toggle("active");
    sectionSelect4.classList.toggle("on4");
  });
  let sectionSelect5 = document.querySelector(".select_box3_cont2");
  sectionSelect5.addEventListener("click", () => {
    sectionSelect5.classList.toggle("active");
    sectionSelect5.classList.toggle("on5");
  });

  //scroll_to_top
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollButton = document.querySelector(".scroll_top");
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
    document
      .querySelector(".scroll_top button")
      .addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }
  const swiperEl = document.querySelector(".mySwiper_Result");
  Object.assign(swiperEl, {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
  });
  swiperEl.initialize();

});
