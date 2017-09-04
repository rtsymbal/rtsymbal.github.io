(function($){
	$.fn.jTruncate = function(options) {
	   
		var defaults = {
			length: 315,
			minTrail: 5,
			moreText: "Читать далее",
			lessText: "Свернуть текст",
			ellipsisText: "...",
			
		};
		
		var options = $.extend(defaults, options);
	   
		return this.each(function() {
			obj = $(this);
			var body = obj.html();
			
			if(body.length > options.length + options.minTrail) {
				var splitLocation = body.indexOf(' ', options.length);
				if(splitLocation != -1) {
					// truncate tip
					var splitLocation = body.indexOf(' ', options.length);
					var str1 = body.substring(0, splitLocation);
					var str2 = body.substring(splitLocation);
					obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
						'</span>' + '<span class="truncate_more">' + str2 + '</span>');
					obj.find('.truncate_more').css("display", "none");
					
					// insert more link
					obj.append(
						'<div class="clearboth">' +
							'<a href="#" class="button right">' + options.moreText + '</a>' +
						'</div>'
					);

					// set onclick event for more/less link
					var moreLink = $('.button', obj);
					var moreContent = $('.truncate_more', obj);
					var ellipsis = $('.truncate_ellipsis', obj);
					moreLink.click(function() {
						if(moreLink.text() == options.moreText) {
							moreContent.show(options.moreAni);
							moreLink.text(options.lessText);
							ellipsis.css("display", "none");
						} else {
							moreContent.hide(options.lessAni);
							moreLink.text(options.moreText);
							ellipsis.css("display", "inline");
						}
						return false;
				  	});
				}
			} // end if
			
		});
	};
})(jQuery);