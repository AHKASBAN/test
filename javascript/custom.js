$(document).ready(function(){

    $( "#open" ).click(function() {
        $('.search').show();
        
      });
      $( "#close" ).click(function() {
        $('.search').hide();
        
      });

      $( ".navbar-toggler" ).click(function() {
       
        $('.carousel-indicators ').toggle();
      });
      var window_width = $(window).innerWidth();
      if (window_width < 991){
        $( "#open" ).click(function() {
            $('.navbar-collapse').hide();
            
          });
          $( "#close" ).click(function() {
            $('.navbar-collapse').show();
            
          });
      };





     var header_hight = $('header').innerHeight();
     var who_hight = $('.who').innerHeight();
     var top_position = header_hight + (who_hight/4);
     $('.who  .text-content').css('top',top_position);
     $('.who  .text-content').css('left',window_width/5.7);

});