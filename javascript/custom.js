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


    
     $('.logo').css('left',window_width/4.2);




     
     
     
    

     $( "#goto-who" ).click(function() {
      var who_offset = $('.who img').offset();
      $(window ).scrollTop( who_offset.top );
    });


    $( "#goto-why" ).click(function() {
      var why_offset = $('.why').offset();
      $(window  ).scrollTop( why_offset.top );
     
    });


    $( "#goto-services" ).click(function() {
      var services_offset = $('.services').offset();
      $(window  ).scrollTop( services_offset.top );
    });


    $( "#goto-contact" ).click(function() {
      var contact_offset = $('.contact').offset();
      $(window  ).scrollTop( contact_offset.top );
    
    });



});