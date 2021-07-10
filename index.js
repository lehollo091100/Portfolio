$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 10) {
            $('.start').addClass("sticky");
        } else {
            $('.start').removeClass("sticky");
        }

    });
    $(".menu-btn").click(function () {
        $('.start__list').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });
    var typed = new Typed(".typing", {
        strings: ["student", "frontend-developer", "Freelancer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    })
    var welcome = new Typed(".welcome", {
        strings: ["Welcome to my page", "Nice to meet you", "Let's talk a little bit about myself"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 850,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })

    $("a[href*='#']:not([href='#])").click(function () {
        $('.start__list').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
        // let target = $(this).attr("href");
        // if (target) {
        $('html,body').animate({
            scrollTop: ($($(this).attr("href")).offset().top - 80)
        }, 400);
        // event.preventDefault();
        // }
    });
    // if (window.innerWidth > 1024) {
    //     console.log(1);
    //     $('.about__info-left').addClass('element-left')
    //     $('.about__info-right').addClass('element-right')
    // }
    // else {
    //     $('.about__info-left').removeClass('element-left')
    //     $('.about__info-right').removeClass('element-right')

    // }

})


window.addEventListener('scroll', function () {

    var reveal = document.querySelectorAll('.element');
    for (var i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        var revealPoint = 30;
        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add('show');
        }
        else {
            reveal[i].classList.remove('show');
        }
    }
    var reveal1 = document.querySelectorAll('.element1');
    for (var i = 0; i < reveal1.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal1[i].getBoundingClientRect().top;
        var revealPoint = 30;
        if (revealTop < windowHeight - revealPoint) {
            reveal1[i].classList.add('show1')

        }
        else {
            reveal1[i].classList.remove('show1');
        }
    }
    var reveal2 = document.querySelectorAll('.element-left');
    for (var i = 0; i < reveal2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal2[i].getBoundingClientRect().top;
        var revealPoint = 10;
        if (revealTop < windowHeight - revealPoint) {
            reveal2[i].classList.add('show-left')

        }
        else {
            reveal2[i].classList.remove('show-left');
        }
    }
    var reveal3 = document.querySelectorAll('.element-right');
    for (var i = 0; i < reveal3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal3[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealTop < windowHeight - revealPoint) {
            reveal3[i].classList.add('show-right')

        }
        else {
            reveal3[i].classList.remove('show-right');
        }
    }
})


