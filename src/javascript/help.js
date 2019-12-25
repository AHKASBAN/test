
$(function(){
  'use strict';

  $('#show-dropdown').click(function() {
    $('.dropdown-menu-contact').toggle();
    
  });


  $('#busines').click(function() {
  $('.dropdown-menu-contact').toggle();
    $('.contact-form').slideUp().delay( 800 );
    $('#show-dropdown span').text($(this).text());
    $('.busines').slideDown();
    
    
  });


  $('#customer').click(function(){
  $('.dropdown-menu-contact').toggle(); 
    $('.contact-form').slideUp().delay( 800 );
    $('#show-dropdown span').text($(this).text());
    $('.customer').slideDown();
    
  });

  $('#human').click(function() {
    $('.dropdown-menu-contact').toggle();
    $('.contact-form').slideUp().delay( 800 );
    $('.human').slideDown();
    $('#show-dropdown span').text($(this).text());
    
  });

  $('#marketing').click(function( ) {
    $('.dropdown-menu-contact').toggle();
    $('.contact-form').slideUp().delay( 800 );
    $('#show-dropdown span').text($(this).text());
    $('.marketing').slideDown();
    
  });

  $('#sales').click(function() {
    $('.dropdown-menu-contact').toggle();
    $('.contact-form').slideUp().delay( 800 );
    $('#show-dropdown span').text($(this).text());
    $('.sales').slideDown();
    
  });

  $('#translators').click(function() {
    $('.dropdown-menu-contact').toggle();
    $('.contact-form').slideUp().delay( 800 );
    $('#show-dropdown span').text($(this).text());
    $('.translators').slideDown();
    
  });




});




