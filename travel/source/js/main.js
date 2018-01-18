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
