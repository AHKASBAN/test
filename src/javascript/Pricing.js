
$(function(){
  'use strict';


  if (($(window).width()) > 991){
    $('nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).show();
          }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
     });
  }
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




$(".clear").click(function(){
  $(".flage-country ").removeClass('active');
  
  }
);


$(".instant-grid .from .like-select").click(function(){
  $('.instant-grid .from .flage-wraper').show();
  
  }
);

$(".instant-grid  .from .flage-content").click(function(){
  $('.instant-grid  .from  .flage-wraper').hide();
  $('.instant-grid .from  .like-select span').text($(this).children('span').text());
  var this_img_src = $(this).children('img').attr('src');
  $('.instant-grid .from  .like-select img').attr("src" , this_img_src);


  
  }
);


$(".instant-grid .to .like-select").click(function(){
  $('.instant-grid  .to  .flage-wraper').show();
  
  }
);

$(".instant-grid  .to .flage-content").click(function(){
  $('.instant-grid  .to  .flage-wraper').hide();
  $('.instant-grid  .to  .like-select span').text($(this).children('span').text());
  var this_img_src = $(this).children('img').attr('src');
  $('.instant-grid  .to  .like-select img').attr("src" , this_img_src);


  
  }
);


$('.instant-grid .flage-wraper').outerWidth($('.like-select').outerWidth());


$('.instant-grid  .arrow-wraper').outerHeight($('.instant-grid .form-group').outerHeight() +16);

$('.grid-price .like-select').click(function() {
  $('.grid-dropdown').show();
});

$('#auto').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .12');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });


  $('#busi').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .13');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });


  $('#soft').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .13');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });


  $('#legal').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .14');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#mark').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .14');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#medi').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .39');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#pat').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .20');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#scient').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .20');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#tech').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .15');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#gam').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .12');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#ad').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .12');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#mob').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .12');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });

  $('#tour').click(function() {
    $('.instant-grid-part').slideUp().delay( 800 );
    $('#sevice-price').text(' .10');
    $('.instant-grid-part').slideDown();
    $('.grid-dropdown').hide();
  });




});




