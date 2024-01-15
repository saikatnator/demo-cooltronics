//Sticky Menu
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if
(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	document.getElementById("sticky-header").classList.add('sticky_menu');
	} else {
	 document.getElementById("sticky-header").classList.remove('sticky_menu'); 
	}
}

// Hamburger
$(document).ready(function(){
	$(".hamburger").click(function(){
	  $(this).toggleClass("is-active");
	});
});
  

//Gallery
$(document).ready(() => {
  $("#lightgallery").lightGallery({
    pager: true
  });
});

// Banner Slider JS Start
$('.slider_area').slick({
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 5000,
	arrows: true,
	dots: false,
	pauseOnHover:false,
	prevArrow:'<button type="button" data-role="none" class="slick-button slick-prev" aria-label="previous"><i class="fa-solid fa-angle-left"></i></button>',
	nextArrow:'<button type="button" data-role="none" class="slick-button slick-next" aria-label="next"><i class="fa-solid fa-angle-right"></i></button>',
  })
  .slickAnimation();

//Testimonial Slider
$('.test_slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<button class="slick-arrow prev-arrow for-mob"><i class="fa fa-chevron-left"></i></button>',
	nextArrow: '<button class="slick-arrow next-arrow for-mob"><i class="fa fa-chevron-right"></i></button>',
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 3000,	
	speed: 1000,
	draggable: true,
	pauseOnHover: false,
	responsive: [{
		breakpoint: 1366,
		settings: {
			slidesToShow: 3
		}
	}, {
		breakpoint: 980,
		settings: {
			slidesToShow: 2
		}
	}, {
		breakpoint: 520,
		settings: {
			slidesToShow: 1
		}
	}]
});

//Counter
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});



//Client Slider
$(document).ready(function(){
	$(".client_slider").slick({
	  autoplay:true,
	  autoplaySpeed:5000,
	  speed:600,
	  slidesToShow:6,
	  slidesToScroll:1,
	  pauseOnHover:false,
	  arrows: false,
	  dots:false,
	  prevArrow: '<button class="slick-arrow prev-arrow for-mob"><i class="fa fa-chevron-left"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow for-mob"><i class="fa fa-chevron-right"></i></button>',
	  pauseOnDotsHover:false,
	  cssEase:'linear',
	  draggable:true,
	  responsive: [
		{
		  breakpoint: 1366,
		  settings: {
			slidesToShow: 6,
		  },
		},
		{
		  breakpoint: 980,
		  settings: {
			slidesToShow: 4,
		  },
		},
		{
		  breakpoint: 700,
		  settings: {
			slidesToShow: 2,
		  },
		},
	  ],
	});
});


//Service Tab
tabControl();

var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}


//ONLOAD POPUP JS
$(window).on('load',function(){
	setTimeout(function() {
		$("#onload-popup").modal('show', {}, 500);
	}, 3000);
});	

$(document).ready(function(){
    $("#onload-popup").modal({
        show:false,
        backdrop:'static'
    });
});

