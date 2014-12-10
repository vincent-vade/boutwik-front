
//CHECKBOX
(function($) {
  $.fn.spinner = function() {
    this.each(function() {
      var el = $(this);

      // add elements
      el.wrap('<span class="spinner"></span>');
      el.before('<span class="sub">-</span>');
      el.after('<span class="add">+</span>');

      // substract
      el.parent().on('click', '.sub', function() {
        if (el.val() > parseInt(el.attr('min')))
          el.val(function(i, oldval) {
            return --oldval;
          });
      });

      // increment
      el.parent().on('click', '.add', function() {
        if (el.val() < parseInt(el.attr('max')))
          el.val(function(i, oldval) {
            return ++oldval;
          });
      });
    });
  };
})(jQuery);

$('input[type=number]').spinner();

//TAGS
$('#tags').tagsInput({
  'height':'40px',
  'width':'100%',
  'defaultText':'Ajouter des mots-clés'
});

//SEARCH TABLE
/*(function($) {

  $('#filter').keyup(function() {

    var rex = new RegExp($(this).val(), 'i');
    $('.searchable tr').hide();
    $('.searchable tr').filter(function() {
      return rex.test($(this).text());
    }).show();

  })

}(jQuery));*/
