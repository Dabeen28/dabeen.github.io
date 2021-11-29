// var resizeTimer;

    // $(window).bind('resize', function( ) {
    //     window.clearTimeout( resizeTimer );
    //     resizeTimer = window.setTimeout( resizeFunction, 500 );
    // });
    // function resizeFunction(){

    //   if(window.innerWidth > 768) {
          
            
    //   }else{
    //     let fix_wrap = $('.fix-wrap');
    //     let fix_menu = $('.fix-menu');
    //     let header = $('.header');

    //     // 마우스 휠을 막아주기 위한 처리
    //     let fix_menu_active = false;
    //     fix_menu.click(function () {
    //         fix_wrap.toggleClass('fix-wrap-active');
    //         fix_menu_active = !fix_menu_active;
    //     })

    //     // 스크롤바의 위치

    //     let sc_y = $(window).scrollTop();
    //     $(window).scroll(function () {
    //         sc_y = $(window).scrollTop();
    //         if (sc_y > 0) {
    //             fix_menu.addClass('fix-menu-active');
    //             header.hide();
    //         } else {
    //             fix_menu.removeClass('fix-menu-active');
    //             header.show();
    //         }
    //     })

    //     // fix 메뉴 클릭 관련
    //     let fix_gnb_a = $('.fix-gnb .move');
    //     $.each(fix_gnb_a, function (index, item) {
    //         $(this).click(function (event) {
    //             event.preventDefault();
    //             screen_index = index + 1;
    //             moveScreen();
    //             fix_wrap.removeClass('fix-wrap-active');

    //             // 마우스 휠을 살려준다.
    //             fix_menu_active = false;
    //         });
    //     })
    //   }
    // }

    // function resizeDome(){
    //   $(window).resize(function(){
      
        
    // }).resize();

    // $(window).on('resize', function(){ 
    //   // resize 후 한번만 실행 
    //   clearTimeout( timer ); 
    //   timer = setTimeout( resizeDone, delta ); 
    // });
    // }