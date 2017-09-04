// !Initialize

var duration = 1000;
var easing = 'easeInOutCubic';
var highest_page = 0;

$(document).ready(function () {

    $('.active').find('.page-number').show();

    function resetClasses() {
        //Reset classes
        $('.page, .menu-item').removeClass('next').removeClass('previous');
    }

    resetClasses();
    //setup next prev class
    $('.page.active, .menu-item.active').prev().addClass('previous');
    $('.page.active, .menu-item.active').next().addClass('next');

    //hide all elements but prev, active and next
    $('.menu-item,.page').hide();
    $('.menu-item').css({ width: 0, opacity: 0 });
    $('.page.previous, .menu-item.previous').show();
    $('.page.active, .menu-item.active').show();
    $('.page.next, .menu-item.next').show();

    $('.menu-item.previous, .menu-item.active, .menu-item.next').css({ width: '33.3%', opacity: 1 });

    //setup initial slides
    $('.page').width('0');
    $('.page.previous').css({ width: '78%', left: '-73%' });
    $('.page.next').css({ width: '78%', right: '173%' });
    $('.page.active').css({ width: '78%' });

    //set first and last item
    $('.menu-item').first().addClass('first');
    $('.menu-item').last().addClass('last');

    $('.menu-item').click(function () {

        //if ($(this).hasClass('first') || $(this).hasClass('last'))
        //  return false;
        //if next item clicked
        if ($(this).hasClass('next')) {
            /*animate navigation*/
            $('#navigation').css('text-align', 'left');
            $('#navigation .previous').animate({ 'width': '0', 'opacity': '0' }, duration, easing, function () {
                $(this).removeClass('previous').css({ 'width': '0', 'opacity': '0' }).fadeTo(duration, 1);
                //make it circular
                if ($('.menu-item').length <= 3) {
                    $(this).removeClass('previous').appendTo('#navigation').css({ 'width': '33.3%' }).fadeTo(duration, 1);
                }
                else if ($('.menu-item').length > 3) {
                    $(this).removeClass('previous').css({ width: '33.3%', opacity: 0 }).appendTo('#navigation');
                }
            });
            //bring back next invisible item 
            $(this).next().animate({ 'width': '33.3%', 'opacity': '1' }, duration, easing, function () {
                $(this).addClass('next').removeClass('previous').css({ 'width': '33.3%' }).fadeTo(duration, 1);

            });

            $('#navigation .active').addClass('previous').removeClass('active');
            $('#navigation .next').addClass('active').removeClass('next');
            /*animate navigation ends here*/

            /*animate slide*/

            //animate next to active
            $('.page.next').animate({ 'left': '5%', 'margin-right': '6%', 'margin-left': '6%', 'backgroundColor': '#FFFFFF' }, duration, easing, function () {

                $(this).addClass('active').removeClass('next');
                $(this).next().addClass('next').removeClass('previous').css({ width: '78%', 'left': '95%', 'display': 'block' }); //.animate({ 'left': '95%' }, duration);

            }).find('.page-number').fadeIn().find('.back-to-top').fadeIn();

            //animate active to previous
            $('.page.active').animate({ 'left': '-73%', 'margin-right': '0%', 'margin-left': '0%', 'backgroundColor': '##EFF0F1' }, duration, easing, function () { $(this).addClass('previous').removeClass('active'); }).find('.page-number').fadeOut().find('.back-to-top').fadeOut();

            //animate previous to next
            //            $('.page.previous').css({ 'left': '-73%' }).animate({ 'left': '-151%' }, duration, easing, function () {

            //                $(this).removeClass('previous').css({ 'left': '173%' }).animate({ 'left': '95%' }, duration);


            //            });
            if ($('.page').length <= 3) {

                $('.page.previous').css({ 'left': '-73%' }).animate({ 'left': '-151%' }, duration, easing, function () { $(this).remove(); })
		        .clone().addClass('next').removeClass('previous').appendTo('#content').css({ 'left': '173%' }).animate({ 'left': '95%' }, duration);
            }
            else if ($('.page').length > 3) {
                $('.page.previous').css({ 'left': '-73%' }).animate({ 'left': '-151%' }, duration, easing, function () { $(this).remove(); })
		        .clone().removeClass('previous').appendTo('#content').css({ 'left': '173%' });
            }


            /*animate slide ends here*/

        }
        else if ($(this).hasClass('previous')) {

            /*animate navigation starts here */
            $('#navigation').css('text-align', 'right');
            //prepend last item before animating
            if ($('.menu-item').length > 3)
                $('#navigation .menu-item').last().prependTo('#navigation');
            $('#navigation .next').animate({ 'width': '0', 'opacity': '0' }, duration, easing, function () {
                $(this).removeClass('next').css({ 'width': '0', 'opacity': '0' });
                //make it circular
                if ($('.menu-item').length <= 3) {
                    $(this).removeClass('next').css({ 'width': '33.3%' }).fadeTo(duration, 1);
                }
            });
            //bring back next invisible item 
            $(this).prev().animate({ 'width': '33.3%', 'opacity': '1' }, duration, easing, function () {
                $(this).addClass('previous').css({ 'width': '33.3%' }).fadeTo(duration, 1);
            });

            $('#navigation .active').addClass('next').removeClass('active');
            $('#navigation .previous').addClass('active').removeClass('previous');
            /*animate navigation ends here */

            /*animate slide starts here*/

            //animate next to active

            if ($('#content .page').length > 3)
                $('#content .page').last().prependTo('#content');
            $('.page.previous').css({ 'left': '-73%' }).animate({ 'left': '5%', 'margin-right': '6%', 'margin-left': '6%', 'backgroundColor': '#FFFFFF' }, duration, easing, function () {
                $('.page.previous').prev().addClass('previous').css({ 'width': '78%', 'left': '-73%','display':'block' });
                $(this).addClass('active').removeClass('previous');

            }).find('.page-number').fadeIn(duration, 'easeInOutCubic').find('.back-to-top').fadeIn();

            //$('.page.previous').addClass('previous').css({ 'left': '-151%' }).animate({ 'left': '-73%' }, duration);

            //animate active to previous
            $('.page.active').animate({ 'left': '95%', 'margin-right': '0%', 'margin-left': '0%', 'backgroundColor': '##EFF0F1' }, duration, easing, function () {
                $(this).addClass('next').removeClass('active');
            }).find('.page-number').fadeOut().find('.back-to-top').fadeOut();

            //animate previous to active
            $('.page.next').animate({ 'left': '173%' }, duration, easing, function () {

                $(this).removeClass('next').css({ 'left': '-151%' }).animate({ 'left': '-73%' }, duration);
            });


            /*animate slide ends here*/
        }
        event.stopPropagation();
        return false;
    });

});