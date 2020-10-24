
$(function () {

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });


  	/*======================================
  	// Page loading animation
	======================================*/
   $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
		
		
  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  // SMOOTHSCROLL NAVBAR
  $(function () {
    $('.navbar a, .hero-text a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


  /************** Mixitup (Filter Projects) *********************/
  $('.projects-holder').mixitup({
    effects: ['fade', 'grayscale'],
    easing: 'snap',
    transitionSpeed: 400
  });


  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 8000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });

  });

  
  
  	/*======================================
	// Testimonial Carousel
	======================================*/ 
	$(".testimonial-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 700,
		autoplayTimeout:5000,
		center:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			300: {
                items: 1,
				center:false,
            },
            480: {
                items: 1,
				center:false,
            },
            768: {
                items: 2,
				center:false,
            },
            1170: {
                items: 3,
            },
		}
	});

});




