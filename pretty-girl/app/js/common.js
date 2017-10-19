$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo.svg">'
		},
		offCanvas: {
			position: 'right'
         }
	});

	var api = $('#my-menu').data('mmenu');
	
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
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