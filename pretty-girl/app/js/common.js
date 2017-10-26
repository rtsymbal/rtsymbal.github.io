$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-white.svg">'
		},
		offCanvas: {
			position: 'right'
         }
	});

	var api = $('#my-menu').data('mmenu');
	
	api.bind('open:finish', function() {
		setTimeout(function() {
			$('.hamburger').addClass('is-active');
		}, 100);
	})
	api.bind('close:finish', function() {
		setTimeout(function() {
			$('.hamburger').removeClass('is-active');
			}, 100);
	});


	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		},100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartspeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items:1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	//Resize window
	function onResize() {
			$('.carousel-services-contont').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});

