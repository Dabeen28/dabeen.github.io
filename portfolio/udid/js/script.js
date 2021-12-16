window.onload = function () {
  AOS.init();

let browserPoint = (event)=>{
  console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
}
let clientPoint = (event) =>{
  console.log(`화면 좌표 : (${event.clientX}, ${event.clientY})`);
}
window.addEventListener('click',e=>{
  browserPoint(e);
  clientPoint(e);
});

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

// scY 높이에 따라 header에 background-color를 넣는 코드입니다.
    let header = $('.header');
    
    $(window).scroll(function () {
        let scY = $(window).scrollTop();
        if (scY >= 80) {
            $(header).css("background", "white");
            $(header).css("border-bottom", "1px solid #eee");
        } else {
            $(header).css("background", "transparent");
            $(header).css("border-bottom", "none");
        }
    });

    $('.header').onclick = function(){
      $('.one').addClass('active');
    };
  
    // scY 값에 따라 header li의 효과가 달라지는 코드입니다.
  //   let list = $('.gnb>li');

  //   $(window).scroll(function () {
  //     let scY = $(window).scrollTop();
  //     if (scY <= 710) {
  //       $(list).removeClass('active');
  //         $('.one').addClass('active');
  //     } else if (scY <= 1679) {
  //       $('.one').removeClass('active');
  //       $('.two').addClass('active');
  //     } else if (scY <= 2770) {
  //       $('.two').removeClass('active');
  //       $('.three').addClass('active');
  //     } else if (scY <= 3635) {
  //       $('.three').removeClass('active');
  //       $('.four').addClass('active');
  //     } else if (scY <= 4710) {
  //       $('.four').removeClass('active');
  //       $('.five').addClass('active');
  //     } else if (scY <= 5230) {
  //       $('.five').removeClass('active');
  //       $('.six').addClass('active');
  //     }
  // });


// visual 
let slide_swiper = new Swiper('.sw-slide', {
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
let service_swiper = new Swiper('.sw-service-p', {
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
let history_swiper = new Swiper('.sw-history', {
  loop: false,
  effect: 'slide',
  direction: 'horizontal',
  slidesPerView: 3.5,
  slidesPerGroup: 1,
  spaceBetween: 30,

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