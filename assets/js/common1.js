
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
