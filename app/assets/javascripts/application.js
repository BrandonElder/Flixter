// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs

//= require_tree .

//= require jquery-ui

$(document).ready(function(main) {
  $('.hero').hide();
  $('.hero').fadeIn(2000);
  $('.frosty').hide();
  $('.frosty').fadeIn(4000);
  $('.lmbtn').click(function() {
    $('.frosty').fadeOut(3000);
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

