$(document).ready(function(){   

  
  // modal 닫기
	$('.modal').click(function () {
		$(this).fadeOut();
	});

  // 화면 내 모든 a링크 href="#"시 상단으로 이동하는 이벤트 막기
  $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
  });

  let header = $('.header');
  let gnb = $('.gnb');
  let header_class = $('.header_open');

  $('.gnb').mouseenter(function(){
      $('.header').addClass('header_open');
  });

  $('.gnb').mouseleave(function(){      
      $('.header').removeClass('header_open');
  });

   // move to business
  $('.move-cate').click(function(e){

      e.preventDefault();

      let tg_y = $('.cate').offset().top;
      $('html, body').animate({
        scrollTop: tg_y
      });
  });

});
