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
	
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	});
});
