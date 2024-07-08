$(document).ready(function () {
  AOS.init();

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

  let sectionSelect = document.querySelector(".common_select_box");
  sectionSelect.addEventListener("click", () => {
    sectionSelect.classList.toggle("active");
    sectionSelect.classList.toggle("on");
  });
  let sectionSelect1 = document.querySelector(".select_box1");
  sectionSelect1.addEventListener("click", () => {
    sectionSelect1.classList.toggle("active");
    sectionSelect1.classList.toggle("on1");
  });
  let sectionSelect2 = document.querySelector(".select_box2");
  sectionSelect2.addEventListener("click", () => {
    sectionSelect2.classList.toggle("active");
    sectionSelect2.classList.toggle("on2");
  });
  let sectionSelect3 = document.querySelector(".select_box3_cont");
  sectionSelect3.addEventListener("click", () => {
    sectionSelect3.classList.toggle("active");
    sectionSelect3.classList.toggle("on3");
  });
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
});
function hideShow(x) {
  if (x == 1) {
    document.querySelector(".common_filter_item1").style.display = "block";
    document.querySelector(".common_filter_item2").style.display = "none";
    document.querySelector(".common_filter_item3").style.display = "none";
  } else if (x == 2) {
    document.querySelector(".common_filter_item2").style.display = "block";
    document.querySelector(".common_filter_item1").style.display = "none";
    document.querySelector(".common_filter_item3").style.display = "none";
  } else if (x == 3) {
    document.querySelector(".common_filter_item3").style.display = "block";
    document.querySelector(".common_filter_item1").style.display = "none";
    document.querySelector(".common_filter_item2").style.display = "none";
  } else {
    document.querySelector(".common_filter_item1").style.display = "none";
    document.querySelector(".common_filter_item2").style.display = "none";
    document.querySelector(".common_filter_item3").style.display = "none";
  }
  return;
}
