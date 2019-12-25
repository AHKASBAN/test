
$(function(){
    'use strict';

$('.slider-part:first-of-type  ').click(function() {
  $('.slider-part ').removeClass('active');
  $(this).addClass('active');
  $('.video-text-content iframe').attr({
    'src' :'https://www.youtube.com/embed/G6ol23QgqJA?autoplay=1',
    "autoplay":" "
  });
  $('.video-text-content .text').html("OHT can meet our requirements for a quick turnaround.Since we publish our apps every week, that leaves 1 to 2 days time to do the localizationand OHT's processes really help us meet the very quick deadline, yes. Thank you for that.");
  
});

$('.slider-part:nth-of-type(2)  ').click(function() {
    $('.slider-part ').removeClass('active');
    $(this).addClass('active');
  $('.video-text-content iframe').attr({'src' :'https://www.youtube.com/embed/ndHxpXXcJo4?autoplay=1', 'autoplay': 'autoplay'});
  
  $('.video-text-content .text').html("<p>In recent years, Xiaomi has established itself as one of the tech giants of the world. It is the largest smartphone manufacturer in India and fourth largest in the world according to IDC 2018 report. In 2015 they have partnered with OHT, first to review the previously localized content, then to localize for new languages after expansion. OHT increased their quality of localized content, translated into a total of 48 languages, and established a workflow for an external platform.</p><button class='orange-button' data-target='#exampleModal' data-toggle='modal'>view case study</button>" );
  
});

$('.slider-part:nth-of-type(3)   ').click(function() {
    $('.slider-part ').removeClass('active');
  $(this).addClass('active');
    $('.video-text-content iframe').attr('src' ,'https://www.youtube.com/embed/0gkT7jlA-t8?autoplay=1');
    $('.video-text-content .text').html("Rail Europe, Inc. is a North American distributor of European rail products, representing over 50 railroads throughout Europe. With the help of One Hour Translation, Rail Europe had translated their website into 7 languages, and since 2011, they have been using our services on an almost weekly basis. ");
    
  });

  $('.slider-part:nth-of-type(4)   ').click(function() {
    $('.slider-part ').removeClass('active');
  $(this).addClass('active');
    $('.video-text-content iframe').attr('src' ,'https://www.youtube.com/embed/qU6WzgUzx2o?autoplay=1');
    $('.video-text-content .text').html("BlueSnap is a global e-Commerce solutions provider that builds and manages online businesses for thousands of software publishers, web hosting companies, and online retailers. BlueSnap used One Hour Translation to localize their platform. BlueSnap offers an easy-to-implement, configurable e-Business platform that allows companies to grow their e-Commerce business worldwide by marketing, selling and distributing digital goods and services online.");
    
  });

  $('.slider-part:nth-of-type(5)   ').click(function() {
    $('.slider-part ').removeClass('active');
  $(this).addClass('active');
    $('.video-text-content iframe').attr('src' ,'https://www.youtube.com/embed/JTRztqpBAs4?autoplay=1');
    $('.video-text-content .text').html("Payoneer is a global payments company that integrates the professional translation services of One Hour Translation to support their own growing need for multilingual translation services.Payoneer allows organizations to pay large numbers of people around the world efficiently and securely. The payment is done directly to their co-branded prepaid MasterCard cards, avoiding the delays and heavy surcharges of more traditional methods such as bank transfers and international checks. Payoneer is a privately-held company and a registered MSP with MasterCard.");
    
  });

  $('.slider-part:nth-of-type(6)   ').click(function() {
    $('.slider-part ').removeClass('active');
  $(this).addClass('active');
    $('.video-text-content  iframe').attr('src' ,'https://www.youtube.com/embed/oGbEggCebgE?autoplay=1');
    $('.video-text-content .text').html("The Zap Group develops mobile applications and specializes in mobile eCommerce solutions. Among its products are QR Droid (Android), Zapper Scanner (iOS) and ZapZap.mobi (Android and iOS). Jonathan Abratt uses One Hour Translation to localize Zap Group’s mobile apps in order to fit their customers needs.");
    
  });


  $('.slider-part:nth-of-type(7)   ').click(function() {
    $('.slider-part ').removeClass('active');
  $(this).addClass('active');
    $('.video-text-content iframe').attr('src' ,'https://www.youtube.com/embed/aLfe5OiABmk?autoplay=1');
    $('.video-text-content .text').html("Under.me is an eCommerce site for undergarments inspired and designed by Bar Refaeli. Under.me uses the One Hour Translation website translation solutions to translate its eCommerce website to 10 languages.");
  });



});