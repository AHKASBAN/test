
$(function(){
  'use strict';

      

  if (($(window).width()) > 991){
    $('nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).show();
          }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
     });
  }

  $(".show-mytolltip").hover(function(){
$(this ).siblings('.mytolltip').find('  .mytolltip-text').css("visibility", "visible");
}, function(){
$(this ).siblings('.mytolltip').find('  .mytolltip-text').css("visibility", "hidden");
});










$(".flage-country ").click(function(){
  
  $(".flage-country ").removeClass('active');
  $(this ).addClass('active');

  
  }
);

$("#apply-source ").click(function(){
  
  if ($(".source .active")[0]){
    var country_choose = $(".source .flage-country.active  span").text();
  $("#source span").text(country_choose );
  $('#exampleModal').modal('hide');
}
  


  
  }
);

$("#apply-target ").click(function(){
  if ($(".target .active")[0]){
  var country_choose = $(".target .flage-country.active  span").text();
  $("#target span").text(country_choose );
  $('#exampleModal2').modal('hide');
  $("#selected-langauge").css('display', 'inline-block' );
  $("#selected-langauge #lang").text(country_choose ); 
  }}
);




$("#cancel-select ").click(function(){
  
  $(".flage-country ").removeClass('active');
  $("#selected-langauge").css('display', 'none' );
  $("#target span").text('select' );

  }
);


$(".grid-wizard-part").click(function(){
  
  $(".grid-wizard-part").removeClass('active');
  $(this).addClass('active');

  }
);

$("#clear-textarea").click(function(){
  
  $(".fourth-section .modal textarea").val('');


  }
);

$(".custom-file-upload").hover(function(){
  
  $(".custom-file-upload img").toggle();


  }
);







$(".clear").click(function(){
  $(".flage-country ").removeClass('active');
  
  }
);


$('.wizard-wraper .line').outerHeight($('.wizard-wraper .for-line').outerHeight() );
var window_width = $(window).width();
if (window_width > 991){
  $('.grid-wizard-part').parent().css('padding', '0');


}


});




