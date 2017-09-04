(function ($) {
    $.fn.extend({

        jQSlid: function (options) {
            var settings = $.extend({ navSpeed: 1000, slideSpeed: 1000, easing: 'easeInOutCubic', navWrapper: '', slideWrapper: '' }, options);

            return this.each(function () {
                if (settings.slideWrapper == '' && settings.navWrapper == '') {
                    alert('navWrapper and slideWrapper can not be be empty');
                    return;
                }
                var container = $(this);
                setupjQSlid();

                //Utility Methods
                function resetClasses() {

                    $('.slide, .menu-item', container).removeClass('next').removeClass('previous');
                }
                function setupjQSlid() {
                    //Reset classes
                    resetClasses();
                    //setup next prev class
                    $('.slide.active, .menu-item.active', container).prev().addClass('previous');
                    $('.slide.active, .menu-item.active', container).next().addClass('next');

                    //hide all elements but prev, active and next
                    $('.menu-item,.slide', container).hide();
                    $('.menu-item', container).css({ width: 0, opacity: 0 });
                    $('.slide.previous, .menu-item.previous', container).show();
                    $('.slide.active, .menu-item.active', container).show();
                    $('.slide.next, .menu-item.next', container).show();

                    $('.menu-item.previous, .menu-item.active, .menu-item.next', container).css({ width: '33.3%', opacity: 1 });

                    //setup initial slides
                    $('.slide', container).width('0');
                    $('.slide.previous', container).css({ width: '100%', left: '-100%' });
                    $('.slide.next', container).css({ width: '100%', left: ' 100%' });
                    $('.slide.active', container).css({ width: '100%' });

                    //set first and last item
                    $('.menu-item', container).first().addClass('first');
                    $('.menu-item', container).last().addClass('last');
                }

                //$('.menu-item',container).click(function () {

                //if next item clicked
                $('.next', container).live('click', function (e) {
                    if ($(this).is(':animated')) return false;
                    /*animate navigation*/
                    $(settings.navWrapper).css('text-align', 'left');
                    $(settings.navWrapper + ' .previous').animate({ 'width': '0', 'opacity': '0' }, settings.navSpeed, settings.easing, function () {
                        $(this).removeClass('previous').css({ 'width': '0', 'opacity': '0' }).fadeTo(settings.navSpeed, 1);
                        //make it circular
                        if ($('.menu-item', container).length <= 3) {
                            $(this).removeClass('previous').appendTo(settings.navWrapper).css({ 'width': '33.3%' }).fadeTo(settings.navSpeed, 1);
                        }
                        else if ($('.menu-item', container).length > 3) {
                            $(this).removeClass('previous').css({ width: '33.3%', opacity: 0 }).appendTo(settings.navWrapper);
                        }
                    });
                    //bring back next invisible item 
                    $(settings.navWrapper + ' .next').next().animate({ 'width': '33.3%', 'opacity': '1' }, settings.navSpeed, settings.easing, function () {
                        $(this).addClass('next').removeClass('previous').css({ 'width': '33.3%' }).fadeTo(settings.navSpeed, 1);

                    });

                    $(settings.navWrapper + ' .active').addClass('previous').removeClass('active');
                    $(settings.navWrapper + ' .next').addClass('active').removeClass('next');

                    /*animate navigation ends here*/

                    /*animate slide*/

                    //animate next to active
                    $('.slide.next', container).animate({ 'left': '0%' }, settings.slideSpeed, settings.easing, function () {

                        $(this).addClass('active').removeClass('next');
                        $(this).next().addClass('next').removeClass('previous').css({ width: '100%', 'left': '100%', 'display': 'block' }); //.animate({ 'left': '95%' }, duration);

                    });

                    //animate active to previous

                    $('.slide.active', container).animate({ 'left': '-100%' }, settings.slideSpeed, settings.easing, function () { $(this).addClass('previous').removeClass('active'); });


                    if ($('.slide', container).length <= 3) {

                        $('.slide.previous', container).css({ 'left': '-100%' }).animate({ 'left': '-200%' }, settings.slideSpeed, settings.easing, function () { $(this).remove(); })
		                    .clone().addClass('next').removeClass('previous').appendTo(settings.slideWrapper).css({ 'left': '200%' }).animate({ 'left': '100%' }, settings.slideSpeed);
                    }
                    else if ($('.slide', container).length > 3) {
                        $('.slide.previous', container).css({ 'left': '-100%' }).animate({ 'left': '-200%' }, settings.slideSpeed, settings.easing, function () { $(this).remove(); })
		                    .clone().removeClass('previous').appendTo(settings.slideWrapper).css({ 'left': '200%' });
                    }

                    e.stopPropagation();
                    return false;
                    /*animate slide ends here*/

                });
                $('.previous', container).live('click', function (e) {

                    if ($(this).is(':animated')) return false;

                    /*animate navigation starts here */
                    $(settings.navWrapper).css('text-align', 'right');
                    //prepend last item before animating
                    if ($('.menu-item', container).length > 3)
                        $(settings.navWrapper + ' .menu-item', container).last().css({ 'width': '0', 'opacity': '0' }).prependTo(settings.navWrapper);

                    $(settings.navWrapper + ' .next').animate({ 'width': '0', 'opacity': '0' }, settings.navSpeed, settings.easing, function () {
                        $(this).removeClass('next').css({ 'width': '0', 'opacity': '0' });
                        //make it circular
                        if ($('.menu-item', container).length <= 3) {
                            $(this).removeClass('next').css({ 'width': '33.3%' }).fadeTo(settings.navSpeed, 1);
                        }
                    });

                    //bring back next invisible item 
                    $(settings.navWrapper + ' .previous').prev().animate({ 'width': '33.3%', 'opacity': '1' }, settings.navSpeed, settings.easing, function () {
                        $(this).addClass('previous').css({ 'width': '33.3%' }).fadeTo(settings.navSpeed, 1);
                    });

                    $(settings.navWrapper + ' .active').addClass('next').removeClass('active');
                    $(settings.navWrapper + ' .previous').addClass('active').removeClass('previous');
                    /*animate navigation ends here */

                    /*animate slide starts here*/

                    //animate next to active

                    if ($(settings.slideWrapper + ' .slide').length > 3) {
                        $(settings.slideWrapper + ' .slide').last().prependTo(settings.slideWrapper);
                        $('.slide.previous', container).css({ 'left': '-100%' }).animate({ 'left': '0%' }, settings.slideSpeed, settings.easing, function () {
                            $('.slide.previous', container).prev().addClass('previous').css({ 'width': '100%', 'left': '-100%', 'display': 'block' });
                            $(this).addClass('active').removeClass('previous');

                        });
                    }
                    //animate active to previous
                    $('.slide.active', container).animate({ 'left': '100%' }, settings.slideSpeed, settings.easing, function () {
                        $(this).addClass('next').removeClass('active');
                    });

                    //animate previous to active
                    $('.slide.next', container).animate({ 'left': '200%' }, settings.slideSpeed, settings.easing, function () {

                        $(this).removeClass('next').css({ 'left': '-200%' }).animate({ 'left': '-100%' }, settings.slideSpeed);
                    });
                    e.stopPropagation();
                    return false;
                    /*animate slide ends here*/
                });

                //});

            });
        }
    });
})(jQuery);