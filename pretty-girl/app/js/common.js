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
});

// var $menu = $("#my-menu").mmenu({
//    //   options
// });
// var $icon = $("#my-icon");
// var API = $menu.data( "mmenu" );

// $icon.on( "click", function() {
//    API.open();
// });

// API.bind( "open:finish", function() {
//    setTimeout(function() {
//       $icon.addClass( "is-active" );
//    }, 100);
// });
// API.bind( "close:finish", function() {
//    setTimeout(function() {
//       $icon.removeClass( "is-active" );
//    }, 100);
// });