
$(function(){
  'use strict';

  var blue_bar_part_width = $('.blue-bar-part').parent().outerWidth(true);
  var dot_position = $('.blue-bar-part .dot').position();
  var dot_height = $('.blue-bar-part .dot').outerHeight(true);
  var dot_Width = $('.blue-bar-part .dot').outerWidth();
  var vt_ln_width = blue_bar_part_width * 4;
  var vt_ln_left = (blue_bar_part_width /2 ) - (dot_Width/2) ;
  $('.blue-bar-part .vertical-line').outerWidth(vt_ln_width);
  $('.blue-bar-part .vertical-line').css( {'left' : vt_ln_left });
  $('.blue-bar-part .vertical-line').css( {'top' : dot_position.top + (dot_height /2) -1});





});




