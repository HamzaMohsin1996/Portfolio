$(document).ready(function(){
  $(".toggle-button").click(function(){
    $(this).toggleClass("active");
    $("#header-wrapper").toggleClass("active");
  });
  $('.works-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    margin:5,
    centerMode:true,
  });
  $('.testimonials-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode:true,
    dots:true,
    responsive: [
      {
          breakpoint: 1600,
          settings: {
              slidesToShow: 2,
              slidesToScroll:1,
          }
      },
    
    ]
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