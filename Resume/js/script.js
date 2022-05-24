const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});



$(document).ready(function(){
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
        responsive: [
          {
             breakpoint: 1024,
             settings: "unslick"
          }
        ]
    });
});

$(document).ready(function(){
  $('.testimonials__slider_desktop').slick({
    infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>'
  });
});

$(document).ready(function(){
  $('.testimonials__slider_mobile').slick({
    infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 2,
      cssEase: 'linear',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>'
  });
});
// $('.testimonials__slider-item').slick({
//   mobileFirst: true,
//   prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
//   nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_red.svg" class="arrow_red"><img src="icons/arrow_white.svg" class="arrow_white"></button>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: "unslick"
//     }
//   ]
// });

$(function() {
  $('.pageup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },800);
  })
});