$(document).ready(function(){
   // Show or hide the scroll top button based on scroll position
   $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scrolltop').fadeIn();
    } else {
      $('#scrolltop').fadeOut();
    }
  });

  // Scroll to top and hide button when clicked
  $('#scrolltop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800, function() {
      $('#scrolltop').fadeOut();
    });
  });


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