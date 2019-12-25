
$(function(){
  'use strict';
  $("#carouselTicker_ltr").carouselTicker({


    speed: 3,
    
    delay: 30,
    

    reverse: true
    
    });
    $("#carouselTicker_ltr2").carouselTicker({


      speed: 3,
      
      delay: 30,
      
  
      reverse: true
      
      });
    $("#carouselTicker_rtl").carouselTicker({


      speed: 3,
      
      delay: 30,
      "direction": "next",
      
  
      reverse: false
      
      });



$(window).on( 'scroll', function(){
  var window_scroll_top = $(window).scrollTop();
  if (window_scroll_top == 0){
    $('header').removeClass('fixed-header ');
    $('.top-view').show();
    $('.scrol-view').hide();
  }
  else {
    $('header').addClass('fixed-header ');
    $('.top-view').hide();
    $('.scrol-view').show();
  }
});
      



$('.flage-content').parent().css('padding', '2px');



$('#toggle-flage-content-menue').click(function() {
  $('#flage-content-menue').slideToggle();
  
});
$('#toggle-flage-content-menue2').click(function() {
  $('#flage-content-menue2').slideToggle();
  
});
$('#toggle-flage-content-menue3').click(function() {
  $('#flage-content-menue3').slideToggle();
  
});
$('#toggle-flage-content-menue4').click(function() {
  $('#flage-content-menue4').slideToggle();
  
});
$('#toggle-flage-content-menue5').click(function() {
  $('#flage-content-menue5').slideToggle();
  
});
  


$('.about-banner .container').outerHeight($('.about-banner .container img').outerHeight() +170 );

var window_width = $(window).width();
if (window_width > 991){
  $('.tech-wraper .sidebar ').parent().css('padding', '0');
  $('.tech-wraper .tech-wraper-content').parent().css('padding', '0');
  $('.iteg-grid-part').parent().css('padding', '0');
  $('.about-banner .container').outerHeight($('.about-banner .container img').outerHeight() +40 );
}


$('.translator-grid img').parent().css('padding', '0');

$('.for-line-1-height .line-1').outerHeight($('.for-line-1-height').outerHeight() - 50);
$('.for-line-2-height .line-2').outerHeight($('.for-line-2-height').outerHeight() );


$('.background-bing').outerHeight($('.height-for-get').outerHeight() );



$('#toggle-form').click(function() {
  $('.review form').slideToggle();
  
});


$(".show-mytolltip").hover(function(){
  $(this ).closest('td').find('.mytolltip  .mytolltip-text').css("visibility", "visible");
  }, function(){
  $(this ).closest('td').find('.mytolltip  .mytolltip-text').css("visibility", "hidden");
});



if ($('.threview-name').length > 0){
  var strong_offset = $('.threview-name').offset();
var strong_offset_left = strong_offset.left ;
$('.threview-part-body ').offset({left:strong_offset_left});
$('.threview-part-footer .share').offset({left:strong_offset_left});
}


$('#show-first').click(function() {
  $('#will-hide').hide();
  $('.second-country').hide();
  $('.third-country').hide();
  $('.first-country').show();
});

$('#show-second').click(function() {
  $('#will-hide').hide();
  $('.first-country').hide();
  $('.third-country').hide();
  $('.second-country').show();
});

$('#show-third').click(function() {
  $('#will-hide').hide();
  $('.second-country').hide();
  $('.first-country').hide();
  $('.third-country').show();
});





});




