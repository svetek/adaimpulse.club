(function ($) {
  'use strict';

  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    dots: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
  });

  // navigation: true,
  // slideSpeed: 1000,
  // stopOnHover: true,
  // autoPlay: true,
  // autoplayTimeout: 1000,
  // autoplayHoverPause: true,
  // items: 1,
  // animateIn: 'fadeIn',
  // animateOut: 'fadeOut',
  // addClassActive: true,
  // loop: true,

  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  /* 
   One Page Navigation
   ========================================================================== */

  $(window).on('load', function () {
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195,
    });
  });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
    if ($(window).width() <= 768) {
      $('.navbar-collapse a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
      });
    } else {
      $('.navbar .navbar-inverse a').off('click');
    }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });
})(jQuery);
