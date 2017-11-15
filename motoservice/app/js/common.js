$(function() {

	$(".mc_item_wrap ul").each(function() {
		$(this).after("<div class='mc_item_wrap_af'></div>");
	});
	$(".mc_toggle").click(function() {
		$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
		$(".mc_item_wrap").removeClass("active");
		$(this).parent().parent().addClass("active");
		$(this).parent().parent().children("ul").show();
		$(this).parent().parant().children(".mc_item_wrap_af").show(0);
	});

});
