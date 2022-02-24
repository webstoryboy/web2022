$(function(){
    /* slick slider - welcome */
    $(".slideshow").slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    });

    /* Slick slider - Review */
    $('.review-slider, .mockup-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    /* Typeit - welcome */
    $('#typing').typeIt({
        strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
        speed: 100,
        autoStart: true,
        breakLines: false,
    });

    /* wow scroll reveal animation */
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: true
    })
    wow.init()
})


/* faq-accordion */
$(function(){
    /* header transition */
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $("header").addClass("active")
            $(".btn-top").addClass("active")
        } else {
            $("header").removeClass("active")
            $(".btn-top").removeClass("active")
        }
    })
    $(".faq-desc").eq(0).show()
    $(".faq-title").click(function(){
        $(this).next().stop().slideDown()
        $(this).parent().siblings().children(".faq-desc").stop().slideUp()
        $(this).parent().addClass("active")
        $(this).parent().siblings().removeClass("active")
    })
    // $(".mockup-slider").click(function(){
    //     $(this).next().stop().slideDown()
    //     $(this).parent().siblings().children(".faq-desc").stop().slideUp()
    //     $(this).parent().addClass("active")
    //     $(this).parent().siblings().removeClass("active")
    // })

    /* video modal */
    $(".open-modal").click(function(){
        $(".video-modal").fadeIn()
        $("body").addClass("active")
    })
    $(".close-modal").click(function(){
        $(".video-modal").fadeOut()
        $(".video-modal iframe").attr("src", $(".video-modal iframe").attr("src"));
        $("body").removeClass("active")
    })

    /* header trigger */
    $(".trigger").click(function(){
        $(".trigger_bar").toggleClass("active")
        $(".gnb").toggleClass("active")

    })
    $(".gnb a, section").click(function(){
        $(".gnb, .trigger_bar").removeClass("active")
    })
})
