$(document).ready(function(main) {
  $('.hero').hide();
  $('.hero').fadeIn(500);
  $('.frosty').hide();
  $('.frosty').fadeIn(1000);
  $('.lmbtn').click(function() {
    $('.frosty').fadeOut(1000);
  });
  $('.lmbtn').hover(
    function(){
      $(this).addClass('active');
    },
    function(){
      $(this).removeClass('active');
    }
  );
  //$('.social a').hover(function() {
    //$(this).effect('bounce', {times:3}, 500);
  //});
  //$('.social').sortable();
});