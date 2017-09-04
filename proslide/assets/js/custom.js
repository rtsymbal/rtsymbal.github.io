$(function ($) {

    /* ---------------------------------------------------------------------- */
    /*	Portfolio
    /* ---------------------------------------------------------------------- */

    // Needed variables
    var $container = $('#portfolio-list');
    var $filter = $('#portfolio-filter');

    // Run Isotope  
    $container.isotope({
        filter: '*',
        layoutMode: 'fitRows',
        animationEngine: 'jQuery',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    // Isotope Filter 
    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // Portfolio image animation 
    $container.find('img').adipoli({
        'startEffect': 'grayscale',
        'hoverEffect': 'normal',
        'imageOpacity': 0.6,
        'animSpeed': 100
    });

    // Copy categories to item classes
    $filter.find('a').click(function () {
        var currentOption = $(this).attr('data-filter');
        $filter.find('a').removeClass('current');
        $(this).addClass('current');
    });

    /* ---------------------------------------------------------------------- */
    /*	Fancybox 
    /* ---------------------------------------------------------------------- */
    $container.find('.folio').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 200,
        'speedOut': 200,
        'overlayOpacity': 0.6
    });
});