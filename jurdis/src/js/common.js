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

	// $(".sf-menu").after("<div id = 'my-menu'>");
	$(".sf-menu").clone().removeClass("sf-menu").appendTo("#my-menu");
	// $("#my-menu").find("*").atrr("style", "");
	// $("#my-menu").find("ul").removeClass("sf-menu");


	var $menu = $("#my-menu").mmenu({
	  extensions: ["fx-menu-slide", "fx-panels-slide-up", "fx-listitems-drop", "fullscreen", "listview-huge", "pagedim-black"], 

	  "autoHeight": true,

	  "offCanvas": {
            "position": "right"
     },
	  navbar : {
			title: 'Меню сайта:'
		},

		clone: true,

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
