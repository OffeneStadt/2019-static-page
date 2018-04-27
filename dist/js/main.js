; (function ($) {
    "use strict";
    lightGallery(document.getElementById('lightgallery'));
    
    /*----------------------------------------------------*/
    /*  Main slider js
    /*----------------------------------------------------*/
    function home_main_slider(){
        if ( $('.slider').length ){
            jQuery('.slider').camera({
                height: '1080px',
                loader: true,
                navigation: true,
                autoPlay:false,
                time: 4000,
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true
            });
        }
    }
    home_main_slider();
    //    progress-bar....//
    
    $(".progress-element").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view',
        });
    });
    
    /*about-us area Carousel*/
    function ClientsCarousel(){
        if( $('.clients-logos').length ){
            $('.clients-logos').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: false,
                items: 3,
                autoplayTimeout: 3000,
                autoplaySpeed:2000,
                smartSpeed: 2000,
                responsive:{
                    0:{
                        items:2
                    },
                    490:{
                        items:3
                    },
                }
            })
        }
    }    
    ClientsCarousel();
    
    /*Team area Carousel*/
    function TeamCarousel(){
        if( $('.team').length ){
            $('.team').owlCarousel({
                loop:true,
                margin:30,
                autoplay: true,
                nav: false,
                items: 3,
                autoplayTimeout: 3000,
                autoplaySpeed:3000,
                smartSpeed: 3000,
                responsive:{
                    0:{
                        items:1
                    },
                    430:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                }
            })
        }
    }    
    TeamCarousel();
    
    function workProject(){
        if ( $('.work-area').length ){
            $('#work-gallery').imagesLoaded( function(){
              // images have loaded
                      // Activate isotope in container
                $("#work-gallery").isotope({
                    itemSelector: ".work-item",
                    layoutMode: 'masonry',
                });

                // Add isotope click function
                $("#work_filter li").on('click',function(){
                    $("#work_filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#work-gallery").isotope({
                        filter: selector
                    })
                })
            })
        }
    }
    workProject();
    
    /*Team area Carousel*/
    function TestimonialCarousel(){
        if( $('.testimonial-slider').length ){
            $('.testimonial-slider').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: false,
                items: 1,
                dots:true,
                autoplayTimeout: 4000,
                autoplaySpeed:4000,
                smartSpeed: 4000
            })
        }
    }    
    TestimonialCarousel();
    
    /*----------------------------
        counter js
    ------------------------------ */
    function counterActivator(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 70,
                time: 1000
            })
        }
    }
    counterActivator();
    
    /*---- parallax js -----*/
    function parallaxActivitor(){
        if ( $('.parallax-img').length){
            $(function(){
                $.stellar({
                    horizontalScrolling: false,
                    verticalOffset: 40
                });
            });
        }
    }
    parallaxActivitor();
    
    /*----------------------------------------------------*/
    /*  Navigation Scroll
    /*----------------------------------------------------*/
    $(window).on('scroll', function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 1055) {
            $("#home").addClass("scrolled");
        } else {
            $('#home').removeClass("scrolled");
        }
    });

    /*---------------scroll-top-js--------*/
     $(".scroll-t").click(function(){
        $("body,html").animate({"scrollTop" : "0"}, 700);
    });
    
    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1050,
        scrollThreshold: 0.5,
    }); 
    
    //wow js
    new WOW().init();
    
    // preloader js
    $(window).on('load', function() { // makes sure the whole site is loaded
		$('.loading').fadeOut(); // will first fade out the loading animation
		$('.sampleContainer').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })

})(jQuery)