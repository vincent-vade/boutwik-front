//NAV SCROLL
$(window).scroll(function() {
  if ($(".brand-nav").offset().top > 100) {
    $(".navbar-fixed-middle").addClass("middle-nav-collapse");
  } else {
    $(".navbar-fixed-middle").removeClass("middle-nav-collapse");
  }
});
