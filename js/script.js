$(document).ready(function() {


  // modal 닫기
	$('.modal').click(function () {
		$(this).fadeOut();
	});

  // 화면 내 모든 a링크 href="#"시 상단으로 이동하는 이벤트 막기
  $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
  });

  // go-top 메뉴
  let gotop = $('.go-top-fixed');
  
    $(gotop).click(function (event) {
        $('html, body')
            .stop()
            .animate({
                scrollTop: 0
            }, 600);
    });

    $(window).scroll(function () {
      let scY = $(window).scrollTop();
      if (scY >= 400) {
          $(gotop).fadeIn();
      } else {
          $(gotop).fadeOut();
      }
    });

    // 상단 slide swiper
    let swiper_slidebox = new Swiper('.slide-box', {
        effect: 'fade',
        loop: true,
        autoplay: true,
        pagination: {
          el : '.slide-box-pg',
          type: "fraction",
        },
    });

    // 고객님 안녕하세요! slide-bow swiper
    let swiper_hi = new Swiper('.hi-sw', {
      effect: 'slide',
      clickable: true,
      slidesPerView: 4,
      slidesPerGroup: 2,
      autoplay: true,
      pagination: {
          el: '.hi-sw-pg',
          clickable : true,
      },
  });

    // 하단 banner swiper
    let swiper_f_slidebox = new Swiper('.f-banner-box', {
        effect: 'fade',
        loop: true,
        autoplay: true,
    });
    

});