$(document).ready(function() {
  $('#slideshow').carousel({
    interval: 10000
  })

  $('#slideshow').on('slid.bs.carousel', function() {
    //alert("slid");
  });
});
