$(document).ready(function () {

    // 벚꽃 효과 입니다.
    $(window).load(function () {
        $('visual').sakura();
    });

    // gotop 클릭 시 상단으로 가는 코드입니다.
    let header = $('.header');
    let gotop = $('.gotop');

    $(gotop).click(function (event) {
        $('html, body')
            .stop()
            .animate({
                scrollTop: 0
            }, 600);
    });

    // gotop 코드 및 header색상 변경 코드입니다.
    $(window).scroll(function () {
        let scY = $(window).scrollTop();
        if (scY >= 400) {
            $(gotop).addClass('gotop-active');
            $(header).css("background-color", "white");
            $(header).css("box-shadow", "0px 5px 10px rgb(255, 218, 218)");
        } else {
            $(gotop).removeClass('gotop-active');
            $(header).css("background-color", "transparent");
            $(header).css("box-shadow", "none");

        }
    });

    // 퍼블리싱 영역 슬라이드 입니다.
    let sw_publ = new Swiper('.publ-container', {
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: "auto",
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 0,
        pauseOnMouseEnter: true,
        // autoplay: true,
        navigation: {
            prevEl: '.publ-button-prev',
            nextEl: '.publ-button-next'
        },
        scrollbar: {
            el: ".publ-scrollbar",
            hide: false,
            draggable: true
        }
    });

    // 디자인 영역 슬라이드 입니다.
    let sw_design_left = new Swiper('.design-container-left', {
        loop: true,
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: "1",
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        // autoplay: true,
        navigation: {
            nextEl: ".design-button-next",
            prevEl: ".design-button-prev"
        }
    });

    let sw_design_right = new Swiper('.design-right', {
        spaceBetween: 0,
        effect: "fade",
        loop: "true",
        allowTouchMove: false,
        navigation: {
            nextEl: ".design-button-next",
            prevEl: ".design-button-prev"
        }
    });

    // gotop 코드 및 header색상 변경 코드입니다.
    $(window).scroll(function () {
        let scY = $(window).scrollTop();
        if (scY >= 400) {
            $(gotop).addClass('gotop-active');
            $(header).css("background-color", "white");
            $(header).css("box-shadow", "0px 5px 10px rgb(255, 218, 218)");
        } else {
            $(gotop).removeClass('gotop-active');
            $(header).css("background-color", "transparent");
            $(header).css("box-shadow", "none");

        }
    });


    // Design Process Modal 코드입니다.
    $(".buchen-modal").click(function (event) { 
      event.preventDefault();
        $(".modal-1").fadeIn(); 
    });
    $(".tour-modal").click(function (event) { 
      event.preventDefault();
      $(".modal-2").fadeIn(); 
    });
    $(".jeju-modal").click(function (event) { 
      event.preventDefault();
      $(".modal-3").fadeIn(); 
    });


    // Design Process modal close
    $(".modal-1>.modal-cont button").click(function () { 
        $(".modal-1").fadeOut(); 
    });
    $(".modal-2>.modal-cont button").click(function () { 
      $(".modal-2").fadeOut(); 
    });
    $(".modal-3>.modal-cont button").click(function () { 
      $(".modal-3").fadeOut(); 
    });


    let fix_wrap = $('.fix-wrap');
    let fix_menu = $('.fix-menu');
    let fix_menu_active = false;

    fix_menu.click(function () {
        fix_wrap.toggleClass('fix-wrap-active');
        fix_menu_active = !fix_menu_active;
    });

    AOS.init();

});

// window.onload = function () {}