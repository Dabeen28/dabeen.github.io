window.onload = function () {
  AOS.init();

//  a::after 동작 구현 연습중입니다.
//   $(window).scroll(function(){  
//     // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악      
//     var scY = $(window).scrollTop();
//     if(scY >= 800) {           
//         // css 를 추가하겠다.
//         $('.gnb li .active').addClass('gnb li .active a:after'); 
//     }else{
//         // css 를 제거하겠다.
//         $('.gnb li .active').removeClass('gnb li .active a:after');
//     }
// });


// modal 닫기
$('.modal').click(function () {
  $(this).fadeOut();
});


// go-top 상단으로 이동하기!
$( window ).scroll( function() {
  if ( $( this ).scrollTop() > 200 ) {
    $( '.go-top' ).fadeIn();
  } else {
    $( '.go-top' ).fadeOut();
  }
} );

$( '.go-top' ).click( function() {
  $( 'html, body' ).animate( { scrollTop : 0 }, 600 );
  return false;
} );

// header scroll시 상단 고정.
  $(window).scroll(function(){  
      // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악      
      var scY = $(window).scrollTop();
      if(scY >= 80) {           
          // css 를 추가하겠다.
          $('.header').addClass('top-fixed'); 
      }else{
          // css 를 제거하겠다.
          $('.header').removeClass('top-fixed');
      }
  });
  
// visual 
var swiper = new Swiper('.sw-slide', {
  loop: true,
  effect: 'fade',
  autoplay : {
      delay: 4000,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
});

// // service portfolio part 
var swiper = new Swiper('.sw-service-p', {
  loop: true,
  direction: 'horizontal',
  effect: 'slide',
  slidesPerView: "auto",
  slidesPerGroup: 3,
  loopAdditionalSlides: 1,
  spaceBetween: 0,
  navigation: {
    prevEl: '.sw-button-prev',
    nextEl: '.sw-button-next',
},

});

// History Part
var swiper = new Swiper('.sw-history', {
  loop: false,
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 100,
  slidesPerGroup: 3,

});

// 숫자 카운터 part

// 숫자 카운터 = 5000만건
var memberCountConTxt= 5000;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-5").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-5").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 카운터 = 45억원
var memberCountConTxt= 45;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-45").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-45").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 카운터 = 3조원
var memberCountConTxt= 3;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-3").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-3").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 카운터 = 300억원
var memberCountConTxt= 300;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-300").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-300").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 카운터 = 20억원
var memberCountConTxt= 20;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-20").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-20").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 카운터 = 100여명
var memberCountConTxt= 100;
  
$({ val : 0 }).animate({ val : memberCountConTxt }, {
 duration: 4000,
step: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-100").text(num);
},
complete: function() {
  var num = numberWithCommas(Math.floor(this.val));
  $(".number-counter-100").text(num);
}
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// contact 부분 


};