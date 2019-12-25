
$(function(){
  'use strict';


  

     $('.slider .slider-content .slider-body .slider-index ul li').click(function() { 
   var element_index = $(this).index() ;
   var element_index_pls = element_index + 1 ;
   var element_index_pls_pls = element_index_pls + 1 ;
   var ul_lenght = $(this).siblings().length + 1 ;
   var animate_width = ( element_index_pls / ul_lenght ) * 100  ;
   if (element_index == 0){
    $('.slider .slider-content .slider-body .slider-index ul li').removeClass('color-font');
    $(this).next().addClass('color-font');
    $('.slider .slider-content .slider-body .slider-index ul li').css('transform', 'translateY(-50px)');
    var element = $('.slider .slider-part .slider-part-img img:nth-child(' + element_index_pls_pls + ')');
    element.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element.css('z-index', '1').addClass('right-left-class').removeClass('left-right-class');
    var element_h1 = $('.slider .slider-part .slider-part-h1  h1:nth-child(' + element_index_pls_pls + ')');
    element_h1.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element_h1.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
    var element_h3 = $('.slider .slider-part .slider-part-h3  h3:nth-child(' + element_index_pls_pls + ')');
    element_h3.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element_h3.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
    $('.progres .number-progres span').html('02');
    $('.progres .bar-progres .complate').css('width', animate_width + '%');
    
  }

  else {
    $('.slider .slider-content .slider-body .slider-index ul li').removeClass('color-font');
    $(this).addClass('color-font');
    var transalte_value = - (element_index * 50 ) + 'px';
    $('.slider .slider-content .slider-body .slider-index ul li').css('transform', 'translateY(' + transalte_value + ' )');
    var element = $('.slider .slider-part .slider-part-img img:nth-child(' + element_index_pls + ')');
    element.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
    var element_h1 = $('.slider .slider-part .slider-part-h1  h1:nth-child(' + element_index_pls + ')');
    element_h1.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element_h1.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
    var element_h3 = $('.slider .slider-part .slider-part-h3  h3:nth-child(' + element_index_pls + ')');
    element_h3.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
    element_h3.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
    $('.progres .number-progres span').html('0' + element_index_pls);
    $('.progres .bar-progres .complate').css('width', animate_width + '%');
    

  }
});




$('.slider .slider-content .slider-body .progres .arrow-progres .fa-chevron-right').click(function() { 

var element =  $('.slider .slider-content .slider-body .slider-index ul li.color-font');
var element_index =  element.index();
var element_index_pls = element_index + 1 ;
var element_index_pls_pls = element_index_pls + 1 ;
var ul_lenght = element.siblings().length  ;
var animate_width = ( element_index_pls / ul_lenght ) * 100  ;
if (element_index == 0){

 
  $('.slider .slider-content .slider-body .slider-index ul li').removeClass('color-font');
 element.next().addClass('color-font');

 $('.slider .slider-content .slider-body .slider-index ul li').css('transform', 'translateY(-50px)');


 var element_img = $('.slider .slider-part .slider-part-img img:nth-child(' + element_index_pls_pls + ')');
 element_img.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_img.css('z-index', '1').addClass('right-left-class').removeClass('left-right-class');


 var element_h1 = $('.slider .slider-part .slider-part-h1  h1:nth-child(' + element_index_pls_pls + ')');
 element_h1.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_h1.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');


 var element_h3 = $('.slider .slider-part .slider-part-h3  h3:nth-child(' + element_index_pls_pls + ')');
 element_h3.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_h3.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');


 $('.progres .number-progres span').html('02');
 $('.progres .bar-progres .complate').css('width', animate_width + '%');
 
}

else if (element_index < 7){
  $('.slider .slider-content .slider-body .slider-index ul li').removeClass('color-font');
  element.next().addClass('color-font');

 
 var transalte_value = - (element_index_pls * 50 ) + 'px';
 $('.slider .slider-content .slider-body .slider-index ul li').css('transform', 'translateY(' + transalte_value + ' )');

 
 var element_img = $('.slider .slider-part .slider-part-img img:nth-child(' + element_index_pls_pls + ')');
 element_img.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_img.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');


 var element_h1 = $('.slider .slider-part .slider-part-h1  h1:nth-child(' + element_index_pls_pls + ')');
 element_h1.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_h1.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');


 var element_h3 = $('.slider .slider-part .slider-part-h3  h3:nth-child(' + element_index_pls_pls + ')');
 element_h3.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
 element_h3.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');


 $('.progres .number-progres span').html('0' + element_index_pls_pls);
 $('.progres .bar-progres .complate').css('width', animate_width + '%');
 

}
});






$('.slider .slider-content .slider-body .progres .arrow-progres .fa-chevron-left').click(function() { 

  var element =  $('.slider .slider-content .slider-body .slider-index ul li.color-font');
  var element_index =  element.index();
  var element_index_sub = element_index -1 ;
  var ul_lenght = element.siblings().length ;
  var animate_width = ( element_index_sub / ul_lenght ) * 100  ;

  
   if ( element_index !== 0){
    $('.slider .slider-content .slider-body .slider-index ul li').removeClass('color-font');
    element.prev().addClass('color-font');
 
   var transalte_value = - (element_index_sub  * 50 ) + 'px';
   $('.slider .slider-content .slider-body .slider-index ul li').css('transform', 'translateY(' + transalte_value + ' )');
  
   
   var element_img = $('.slider .slider-part .slider-part-img img:nth-child(' + element_index + ')');
   element_img.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
   element_img.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
  
  
   var element_h1 = $('.slider .slider-part .slider-part-h1  h1:nth-child(' + element_index + ')');
   element_h1.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
   element_h1.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
  
  
   var element_h3 = $('.slider .slider-part .slider-part-h3  h3:nth-child(' + element_index + ')');
   element_h3.siblings().css('z-index', '-55').addClass('left-right-class').removeClass('right-left-class');
   element_h3.css('z-index', '5').addClass('right-left-class').removeClass('left-right-class');
  
  
   $('.progres .number-progres span').html('0' + element_index);
   $('.progres .bar-progres .complate').css('width', animate_width + '%');
   
  
  }
  });
  

});
