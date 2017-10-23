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

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartspeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
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

});

