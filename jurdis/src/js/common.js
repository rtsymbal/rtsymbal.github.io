$(function() {

	$('.top-line .sf-menu').superfish({
		delay: 200
	});


	var owl = $(".carousel-services");
	owl.owlCarousel({
		loop: true,
		center: true,
		navContainer: ".slide-content",
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});


	var $menu = $("#my-menu").mmenu({
	   extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black' ],
	});
	var $icon = $(".hamburger");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
	   API.open();
	});
	$icon.on( "click", function() {
	   API.close();
	});

	API.bind( "open:finish", function() {
	   setTimeout(function() {
	      $icon.addClass( "is-active" );
	   }, 100);
	});
	API.bind( "close:finish", function() {
	   setTimeout(function() {
	      $icon.removeClass( "is-active" );
	   }, 100);
	});


});
