(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Back-top

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').addClass('active');
            } else {
                $('.scroll-to-top').removeClass('active');
            }
        });
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -70
    });


    // Slider
    
    $('.review-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: true,
        controlNav: false,
        pauseOnAction: false,
        animationSpeed: 500
    });




  //Popup elements

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // Append images as css background

    $('.background-img').each(function() {
        var path = $(this).children('img').attr('src');
        $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
    });


   // Show embed video 

    var playVideo = $('.video-cover .play-but')
    $('.video-cover').each(function() {
        if ($(this).find('iframe').length) {
            $(this).find('iframe').attr('data-src', $(this).find('iframe').attr('src'), $(this).find('iframe').attr('src', ''));

        }

    });

    playVideo.on("click", function() {
        var blockVideo = $(this).closest('.video-cover');
        var iframeInstance = blockVideo.find('iframe');
        blockVideo.addClass('show-video');
        iframeInstance.attr('src', iframeInstance.attr('data-src'));
        return false;

    });


    


})(jQuery);