$(function() {

	$('.top-line .sf-menu').superfish({
		delay: 200
	});


	var owl = $(".carousel-services");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		smartspeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

	});

});
