window.onload = function () {
    AOS.init();

    // modal 닫기
    $('.modal').click(function () {
        $(this).fadeOut();
    });

    // 화면 내 모든 a링크 href="#"시 상단으로 이동하는 이벤트 막기
    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    // header색상 변경 코드입니다.
    let header = $('.header');
    let logo = $('.logo');
    let list = $('.depth1>li>a')

    $(window).scroll(function () {
        let scY = $(window).scrollTop();
        if (scY >= 400) {
            $(header).css("background", "white");
            $(header).css("border", "1px solid #ddd");
            $(logo).addClass("logo-active");
            $(list).css("color", "#000");
        } else {
            $(header).css("background", "transparent");
            $(header).css("border", "none");
            $(logo).removeClass("logo-active");
            $(list).css("color", "#fff");
        }
    });

    // Header mainmenu 오픈
    $('.depth1').mouseenter(function () {
        $('.header').addClass('header-open');
    });

    $('.depth1').mouseleave(function () {
        $('.header').removeClass('header-open');
    });

    // Slide 부분 Swiper 적용
    let main_slide = new Swiper('.slide-sw', {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        pagination: {
          el : '.slide-pg',
          type: "fraction",
        },
    });

    // Notice 부분 Swiper 적용
    let notice_slide = new Swiper(".notice-sw", {
        effect: 'slide',
        clickable: true,
        slidesPerView: 3.3,
        slidesPerGroup: 1,
        spaceBetween: 30,
    });

};
