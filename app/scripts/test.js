$(document).ready(function() {
  $('#brand-shop').pinbox({subcontainer:'.actioninside'}).hide(0).fadeIn(1000);

  $('#ajaxtrigger').bind('click', function () {

    $('#ajax').children().each(function () {
      //add an ajax class so we can see where are the new boxes placed
      $(this).addClass('ajax');
    })

    var ajaxResult = $('#ajax').html();
    //set the result into the container:
    $('#brand-shop').append(ajaxResult);
    //update the pinbox view
    $('#brand-shop').pinbox({subcontainer:'.actioninside'}).hide(0).fadeIn(1500);
  });
});
