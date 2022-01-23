(function ($) {
"use strict";

/*---------------------------------------------------------------------------------------
    Data Background Active
-----------------------------------------------------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
/*---------------------------------------------------------------------------------------
    Sticky Header Active
-----------------------------------------------------------------------------------------*/
    // sticky Header layout 1
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 70) {
          $("#header-sticky").removeClass("sticky");
        } else {
          $("#header-sticky").addClass("sticky");
        }
    }); 
   
/*---------------------------------------------------------------------------------------
    Brand Active
-----------------------------------------------------------------------------------------*/  
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center: true,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        600:{
            items:3,
            nav:false,
        },
        991:{
            items:5,
            nav:false,
        },
        1200:{
            items:7
        }
    }
})
/*---------------------------------------------------------------------------------------
    Scroll to top Active
-----------------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span class="ti-angle-up"></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/*---------------------------------------------------------------------------------------
    Preloader Active
-----------------------------------------------------------------------------------------*/
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

})(jQuery); 