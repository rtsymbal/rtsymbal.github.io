$(function() {

// ---------Put first word in span

$('.rt-text-field H2').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
});

// ---------Put last word in span

$('.rt-section-title__title').each(function() {
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
});





$('.rt-button')
  .on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
    		relX = e.pageX - parentOffset.left,
    		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
    		relX = e.pageX - parentOffset.left,
    		relY = e.pageY - parentOffset.top;
  	$(this).find('span').css({top:relY, left:relX})
  });



});
