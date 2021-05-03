(function($) {
    "use strict"
    jQuery(document).ready(function() {
    // start point
    // mobile menu
    $('#main-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991.99",
        onePage: true
    });

    // Scroll To Top 
    $('.scrollup').on('click', function() {
        $("html").animate({
            "scrollTop": '0'
        }, 500);
    });
    $(window).on('scroll', function() {
        var toTopVisible = $('html').scrollTop();
        if (toTopVisible > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    //Language Switcher 
      $(".lang-switcher").on("click", function(e){
        e.preventDefault();
        $(".lang-list").toggleClass("lang-list-open");
    });

    $(".lang-list li").each(function(){
        $(this).on("click", function(){
            var logoSrc = $(this).children(".flag").children("img").attr("src");
            var flagText = $(this).children("a").text() + '<span> <i class="fas fa-angle-down"></i></span>'; 
            $(".lang-switcher > .flag img").attr("src", logoSrc);
            $(".lang-switcher > a").html(flagText);
        });
    });

    // hero slider
    $('.hero-slider-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        responsive : [
            {
              breakpoint : 575.99,
              settings : {
                  dots : false
              }
            }
            ]
      });

    // hero2 slider
    $('.hero2-slider-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        responsive : [
            {
              breakpoint : 575.99,
              settings : {
                  dots : false
              }
            }
            ]
      });

    // testimonial slider
    $('.testimonial-slider-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive : [
            {
              breakpoint : 992,
              settings : {
                  dots : true,
                  slidesToShow : 1
              }
            },
            {
              breakpoint : 575.99,
              settings : {
                  dots : false,
                  slidesToShow : 1
              }
            }
            ]
      });

    // blog-area
    $('.blog-slider-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

// ht-blog-area
$('.ht-blog-slider-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

    // ht-testi-active
    $('.ht-testi-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: 1
        }
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

// end point
    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
