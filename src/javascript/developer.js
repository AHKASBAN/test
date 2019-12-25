
$(function(){
  'use strict';

$('.left-side').parent().css('padding','0');
$('.right-side').parent().css('padding','0');

$('.show-slider-collapse').click (function(){
$(this).siblings('.slider-collapse').slideToggle();
$(this).toggleClass('now')
});

});




