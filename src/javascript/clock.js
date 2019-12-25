$(function() {
  setInterval(function(){
    var dt = new Date();
  
    var min_deg = dt.getMinutes() * (360/60);
    var hr_deg = dt.getHours() * (360/12) + dt.getMinutes() * (360/60/12); 


    $('.watch .min ').css({'-webkit-transform':'rotate(' + min_deg + 'deg)', '-moz-transform':'rotate(' + min_deg + 'deg)', '-o-transform':'rotate(' + min_deg + 'deg)', '-ms-transform':'rotate(' + min_deg + 'deg)', 'transform':'rotate(' + min_deg + 'deg)'});

    $('.watch .hour').css({'-webkit-transform':'rotate(' + hr_deg + 'deg)', '-moz-transform':'rotate(' + hr_deg + 'deg)', '-o-transform':'rotate(' + hr_deg + 'deg)', '-ms-transform':'rotate(' + hr_deg + 'deg)', 'transform':'rotate(' + hr_deg + 'deg)'});
  
  }, 1000);
});