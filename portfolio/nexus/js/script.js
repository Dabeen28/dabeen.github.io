
window.onload = function(){

  // modal close
	$('.modal').click(function () {
		$(this).fadeOut();
	});

  // 목록(blullet) 저장
  let bullets = $('.sw-visual-pg .swiper-pagination-bullet');

  // scroll
  $(window).scroll(function(){  
      // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악      
      let scY = $(window).scrollTop();
      if(scY >= 80) {           
          $('.header').addClass('header-focus'); 
      }else{
          $('.header').removeClass('header-focus');
      }
  });

  // visual   
  let bulletsIndex = 0;
  let visual_box_img = $('.visual-box img');  
  let sw_visual = new Swiper('.sw-visual', {
      loop: true,
      effect: 'fade',
      crossEffect: { 
          crossFade: true 
      },
      autoplay : {
          delay: 2000,
          disableOnInteraction: false,
      },
      speed: 1500,
      pagination: {
          el: '.sw-visual-pg',
          clickable : true,
      },
      on: {
          slideChange: function() {

              visual_box_img.eq(this.previousIndex).stop().animate({
                  opacity: 0
              }, 500);
              
              visual_box_img.eq(this.activeIndex).css({
                  opacity: 0,
                  left: '10.0208vw'
              });

              visual_box_img.eq(this.activeIndex).stop().animate({
                  opacity : 1, 
                  left: '13.0208vw'
              }, 600);

              changePg(this.realIndex);
          },
          init : function(){

              visual_box_img = $('.visual-box img');
              visual_box_img.eq(this.activeIndex).css({
                  opacity: 0,
                  left: '10.0208vw'
              });

              visual_box_img.eq(this.activeIndex).stop().animate({
                  opacity : 1, 
                  left: '13.0208vw'
              }, 600);
          },
      },
  });

  // sw-visual-pg
  $.each(bullets, function(index, item){
      $(this).click(function() {
          changePg(index);
      });
  });

  function changePg(_num) {
      if(_num == bulletsIndex) {
          return;
      }

      $('.sw-visual-pg .swiper-pagination-bullet').removeClass('sw-visual-pg-active');
      $('.sw-visual-pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual-pg-active');
      
      bulletsIndex = _num;
  }

  // mb-gnb 메뉴 코드
  let mb_menu = $('.mb-menu');
  let mb_gnb = $('.mb-gnb');
  mb_menu.click(function(){
      mb_gnb.toggleClass('mb-gnb-open');
  });

  let mb_gnb_close = $('.mb-gnb-close');
  mb_gnb_close.click(function(e){
      e.preventDefault();
      mb_gnb.removeClass('mb-gnb-open');
  });

  // 화면 리사이징 관련
  $(window).resize(function(){
      var winW = $(window).width();
      if(winW > 1024) {
          mb_gnb.removeClass('mb-gnb-open');
      }
  });

  // 스크롤 모션
  $('.story-box-top').waypoint(function(dir) {
      if(dir=="down") {
          $(this).addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '100%' 
  });

  $('.story-1').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-1').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  
  $('.story-2').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-2').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-3').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-3').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });
  
  $('.story-4').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-4').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-5').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-5').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-6').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-6').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-7').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-7').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-8').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-8').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

  $('.story-9').waypoint(function(dir) {
      if(dir=="down") {
          $('.story-9').addClass('story-box-ani');
      }else{           
      }
  }, 
  { 
      offset: '70%' 
  });

};