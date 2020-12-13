$(function(){

    $('.production__slider-inner').slick({
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-arrow-left slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow-right slick-next"></button>',
      });

      $('.manufacture__slider-inner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 2000,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      });

    $(function($){
        $("#phone_1").mask("+7 (999) 999-99-99");

    });
    
    

      
});