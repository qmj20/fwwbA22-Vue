/*
Theme Name: Joblia | Job Board HTML5 Template.
Author: Slidesigma
Author URL: https://themeforest.net/user/slidesigma
Version: 1.0.0
*/
(function ($) {
  'use strict';

    // eslint-disable-next-line no-mixed-spaces-and-tabs
  	// preloader
  	$(window).on('load', function(){
      $('.preloader').hide();
      $('.loader').removeClass();
      $('html').addClass('overflow');
    });

    // mobile-menu
  $(document).ready(function () {
    $('.menu-mobile-menu-container li.has-sub>a').on('click', function () {
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
    });
    $('.menu-mobile-menu-container>ul>li.has-sub>a').append('<span class="holder"></span>');
  });

  // Desktop sub-menu
  $(document).ready(function () {
    $('.menu-item-has-children>a').append('<span class="arrow"></span>');
    $('.menu-item-has-megamenu>a').append('<span class="arrow"></span>');
  });
  // menu-style-22
  $("#open-nav-22").click(function () {
    console.log(123);
    $("#mobile-nav-22").css("height", "100%");
  });
  $("#close-nav-22").click(function () {
    console.log(321);
    $("#mobile-nav-22").css("height", "0%");
  });


    // nice select
    $(document).ready(function() {
        $('.custom-select').niceSelect();
        $(".customdropdown").click(function(){
	    	$(".dropdown-menu").toggleClass("show");
	  	});
    });
    $(document).on("click", function (event) {
		var $trigger = $(".customdropdown");
		if ($trigger !== event.target && !$trigger.has(event.target).length) {
			$(".dropdown-menu").removeClass("show");
		}
	});

    //---------------CounterUp number------------//
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
         Counter: $(this).text()
       }, {
        duration: 4000,
        easing: 'swing',
         step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

   //---------------Swiper Testimonial------------//
   /*
   var mySwiper = new Swiper ('.testimonial-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       autoplay: {
            delay: 2000,
           },
      spaceBetween: 30,
    slidesPerView: 1,
    simulateTouch: true,
    loop:true,
    breakpoints: {
        1300: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,

        }
    }
  });*/


//---------------Swiper Company------------//
/* 
   var mySwiper = new Swiper ('.company-slider', {

       autoplay: {
             delay: 2000,
           },
      spaceBetween: 30,
    slidesPerView: 1,
    simulateTouch: true,
    loop:true,
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,

        }
    }
  });
*/

   //---------------CounterUp Job------------//
  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
         Counter: $(this).text()
       }, {
        duration: 4000,
        easing: 'swing',
         step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

})(jQuery);
