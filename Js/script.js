$(document).ready(function(){
  $(".toggle-button").click(function(){
    $(this).toggleClass("active");
    $("#header-wrapper").toggleClass("active");
  });
});
window.addEventListener("scroll", function() {
  var header = document.getElementById("header-wrapper");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});