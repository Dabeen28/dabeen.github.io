window.onload = function(){

  // modal 닫기
	$('.modal').click(function () {
		$(this).fadeOut();
	});

  // 화면 내 모든 a링크 href="#"시 상단으로 이동하는 이벤트 막기
  $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
  });


  let slide = new Swiper('.slide-sw', {
    effect: 'fade',
    loop: true,
    speed: 500,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".sw-next-button",
        prevEl: ".sw-prev-button"
    }
});

let mainmenu_li_1 = $(".mainmenu > li:nth-child(1)");
let mainmenu_li_2 = $(".mainmenu > li:nth-child(2)");
let mainmenu_li_3 = $(".mainmenu > li:nth-child(3)");

$(function(){
  mainmenu_li_1.on({
    "mouseenter" : function(){
      $(".header-nav-li-1").css({"visibility":"visible"});
    },
    "mouseout" : function(){
      $(".header-nav-li-1").css({"visibility":"hidden"});
    },
  });
});

$(function(){
  mainmenu_li_2.on({
    "mouseenter" : function(){
      $(".header-nav-li-2").css({"visibility":"visible"});
    },
    "mouseout" : function(){
      $(".header-nav-li-2").css({"visibility":"hidden"});
    },
  });
});

$(function(){
  mainmenu_li_3.on({
    "mouseenter" : function(){
      $(".header-nav-li-3").css({"visibility":"visible"});
    },
    "mouseout" : function(){
      $(".header-nav-li-3").css({"visibility":"hidden"});
    },
  });
  
});




};