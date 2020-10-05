$(document).ready(function () {
    $('.client-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed:1000,
        dots:true,
        arrows:false,
        infinite:true,
      });
      
      $( function() {
        $( "#faq-accordion" ).accordion();
      } );

      new WOW().init();
});