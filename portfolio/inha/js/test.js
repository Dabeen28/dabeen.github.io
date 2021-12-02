// html, css, javaScript가 로딩이 완료되었을 때,
// html 태그 구조 (DOM) 구조가 완료되었을 때 실행
$(document).ready(function () {
    // 쿠키 가져오기
    function getCookie(cookieName) {
        // getCookie('inha_day');
        let search = cookieName + "=";
        // search = 'inha_day=';
        let cookie = document.cookie;
        // cookie = Array(5)
        /* 현재 쿠키가 존재할 경우 */
        if (cookie.length > 0) {
            /* 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴. */
            // getCookie('inha_day') --> inha_day
            let startIndex = cookie.indexOf(cookieName);
            /* 만약 존재한다면 */
            if (startIndex != -1) {
                /* 값을 얻어내기 위해 시작 인덱스 조절 */
                startIndex += cookieName.length;
                /* 값을 얻어내기 위해 종료 인덱스 추출 */
                endIndex = cookie.indexOf(";", startIndex);
                /* 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정 */
                if (endIndex == -1) {
                    endIndex = cookie.length;
                }
                /* 쿠키값을 추출하여 리턴 */
                return unescape(cookie.substring(startIndex + 1, endIndex));
            } else {
                /* 쿠키 내에 해당 쿠키가 존재하지 않을 경우 */
                return false;
            }
        } else {
            /* 쿠키 자체가 없을 경우 */
            return false;
        }
    }
    // 쿠키 셋팅하기
    function setCookie(name, value, expiredays) {
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    // if (!getCookie("inha_day")) {
    //     // 사용자가 하루 열지 않음을 체크 하지 않으면
    //     // 원래대로 상단배너를 보여준다.
    // }
    // 버튼 클릭시 상단 배너 숨기기
    $('.help-event').click(function (e) {
        e.preventDefault();
        // 새로고침 후 모션추가
        $('.wrap').addClass('wrap-ani');
        $('.wrap').toggleClass('wrap-close');
        $(this).toggleClass('help-event-active');
    });
    $('#top-day-check').click(function () {
        // 체크 상태를 실시간으로 파악한다.
        let temp = $(this).is(':checked');
        if (temp == true) {
            $('.wrap').addClass('wrap-ani');
            $('.wrap').removeClass('wrap-close');
            $('.help-event').removeClass('help-event-active');
            //하루동안 열지 않음 셋팅
            setCookie('inha_day', 'close', 1);
        } else {
            //하루동안 열지 않음 해제
            setCookie('inha_day', 'open', 1);
        }
    });
    // 우선 inha_day 쿠키를 가지고 온다.
    let inha_day = getCookie('inha_day');
    // 배너창 보이고 숨기기 여부
    if (inha_day == 'close') {
        $('.help-event').removeClass('help-event-active');
        $('#top-day-check').attr('checked', true);
    } else {
        $('.wrap').addClass('wrap-close');
    }
    // 사이트맵 보기
    $('.sitemap-more').click(function (event) {
        event.preventDefault();
        $('.sitemap-main').stop().slideToggle(250);
    });
    // 언어 관련 기능
    let bt_lang = $('.bt-lang');
    let lang_list = $('.lang-list');
    bt_lang.click(function (e) {
        e.preventDefault();
        lang_list.stop().slideToggle(200);
    });
    bt_lang.parent().mouseleave(function () {
        lang_list.stop().slideUp(200);
    });

    // 검색 폼 기능
    let help_search = $('.help-search');
    let search_form = $('#search-form');
    let search_close = $('.search-close');
    let search_submit = $('.search-submit');
    let search_txt = $('.search-txt');
    let modal_search = $('.modal-search');
    let modal_search_close = $('.modal-search-close');
    let modal_search_bt = $('.modal-search-bt');
    // 내용자리
    let modal_search_cont = $('.modal-search-cont');

    help_search.click(function (e) {
        e.preventDefault();
        search_txt.val('');
        search_form.stop().slideDown(200);
    });

    search_close.click(function () {
        search_form.stop().slideUp(200);
    });
    // search_submit 클릭시 search_txt 값이 있고 없고 처리
    search_submit.click(function () {
        // 값을 읽는다.
        let temp = search_txt.val();
        if (temp == '') {
            modal_search.show();
            return false;
        }
    });

    // 클릭시 modal_search 닫기
    modal_search_close.click(function () {
        modal_search.hide();
    });
    modal_search_bt.click(function () {
        modal_search.hide();
    });
    modal_search.click(function () {
        modal_search.hide();
    });
    modal_search_cont.click(function (e) {
        e.stopPropagation();
    })

    // 위로가기
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 600);
    });

    // 고정 메뉴 기능
    // 클릭이 가능한 a 태그 목록
    let fix_menu_list_a = $('.fix-menu-list a');
    // 상단 메뉴 고정에 의한 오차값
    let fix_menu_offset = -40;
    // 이동해야 하는 위치의 숫자 파악하기
    let fix_menu_pos = [
        0,
        $('.notice').offset().top + fix_menu_offset,
        $('.coop').offset().top + fix_menu_offset,
        $('.service').offset().top + fix_menu_offset,
        $('.sns').offset().top + fix_menu_offset
    ];
    // 스크롤 소수점까지 발생가능
    // 소수점을 없앤다.
    for (let i = 0; i < fix_menu_pos.length; i++) {
        // 숫자값을 하나씩 알아낸다.
        let temp = fix_menu_pos[i];
        // 소수점을 반올림한다.
        temp = Math.round(temp);
        // 값을 바꾸어준다.
        fix_menu_pos[i] = temp;
    }
    // 현재 클릭으로 이동인지 아닌지 구분하자.
    let fix_menu_active = 'scroll';
    $.each(fix_menu_list_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            fix_menu_pos = [
                0,
                $('.notice').offset().top + fix_menu_offset,
                $('.coop').offset().top + fix_menu_offset,
                $('.service').offset().top + fix_menu_offset,
                $('.sns').offset().top + fix_menu_offset
            ];
            // 스크롤 소수점까지 발생가능
            // 소수점을 없앤다.
            for (let i = 0; i < fix_menu_pos.length; i++) {
                // 숫자값을 하나씩 알아낸다.
                let temp = fix_menu_pos[i];
                // 소수점을 반올림한다.
                temp = Math.round(temp);
                // 값을 바꾸어준다.
                fix_menu_pos[i] = temp;
            }

            console.log(fix_menu_pos);
            // 클릭으로 이동했다.
            fix_menu_active = 'click';
            // 일단, 모든 포커스 해제
            fix_menu_list_a.removeClass('fix-menu-list-focus');
            // 이동할 위치를 파악한다.
            let temp = fix_menu_pos[index];
            $('html, body').stop().animate({
                scrollTop: temp
            }, 400, function () {
                // 포커스 이동 코드               
                // 한개만 포커스 준다.
                fix_menu_list_a.eq(index).addClass('fix-menu-list-focus');
                // 조금만 있다가 scroll로 상태를 바꾸자.
                setTimeout(delayTimer, 200);
            });
        });
    });

    function delayTimer() {
        // 다시 스크롤 상태로 변경
        fix_menu_active = 'scroll';
    }

    // 스크롤시에 메뉴 고정하기
    let scroll_posy = $(window).scrollTop();
    let header = $('.header');
    let wrap = $('.wrap');
    let header_top_h = $('.header-top').outerHeight();
    header_top_h = Math.round(header_top_h);


    // 만약, top-banner가 open이면 125
    // close면 0
    let wrap_margin_top = $('.wrap').css('margin-top');
    wrap_margin_top = parseInt(wrap_margin_top);

    $(window).scroll(function () {
        scroll_posy = $(window).scrollTop();
        // 0,125
        // 스크롤 시에도 항상 체크를 해서 높이를 변경한다.
        wrap_margin_top = $('.wrap').css('margin-top');
        wrap_margin_top = parseInt(wrap_margin_top);

        if (scroll_posy >= wrap_margin_top + header_top_h) {
            header.addClass('header-fixed');
            wrap.addClass('wrap-padding');
        } else {
            header.removeClass('header-fixed');
            wrap.removeClass('wrap-padding');
        }
    });
    // 스크롤시에 포커스 이동하기
    let start = fix_menu_pos.length - 1;
    $(window).scroll(function () {
        // click 으로 이동하고 있으면
        // 아무런 처리를 하지 마라~
        if (fix_menu_active == 'click') {
            return;
        }
        // 스크롤 바의 위치를 알고
        fix_menu_pos = [
            0,
            $('.notice').offset().top + fix_menu_offset,
            $('.coop').offset().top + fix_menu_offset,
            $('.service').offset().top + fix_menu_offset,
            $('.sns').offset().top + fix_menu_offset
        ];
        // 스크롤 소수점까지 발생가능
        // 소수점을 없앤다.
        for (let i = 0; i < fix_menu_pos.length; i++) {
            // 숫자값을 하나씩 알아낸다.
            let temp = fix_menu_pos[i];
            // 소수점을 반올림한다.
            temp = Math.round(temp);
            // 값을 바꾸어준다.
            fix_menu_pos[i] = temp;
        };

        let scy = $(window).scrollTop();
        fix_menu_list_a.removeClass('fix-menu-list-focus');
        // 코드를 개선하자.
        for (let i = start; i >= 0; i--) {
            if (scy >= fix_menu_pos[i]) {
                fix_menu_list_a.eq(i).addClass('fix-menu-list-focus');
                break;
            }
        }
    });

    new Swiper('.sw-top-banner', {
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-top-banner-prev',
            nextEl: '.sw-top-banner-next',
        },
        pagination: {
            el: '.sw-top-pg',
            clickable: true,
        }
    });

    // 메인 슬라이드

    let sw_main = new Swiper('.sw-main', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        // touchRatio:0,
        allowTouchMove: false,
        pagination: {
            el: '.sw-main-pg',
            clickable: true,
        },
    });

    $('.sw-main-bt').click(function () {

        $(this).toggleClass('sw-main-bt-play');

        // sw-main-bt-play 클래스가 있나
        let temp = $(this).hasClass('sw-main-bt-play');
        if (temp == true) {
            sw_main.autoplay.stop();
        } else {
            sw_main.autoplay.start();
        }
    });

    // 배너 슬라이드
    let sw_banner = new Swiper('.sw-banner', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        speed: 600,
        navigation: {
            prevEl: '.sw-banner-prev',
            nextEl: '.sw-banner-next',
        },
    });

    // info 슬라이드

    let sw_info = new Swiper('.sw-info', {
        loop: true,
        navigation: {
            prevEl: '.sw-info-prev',
            nextEl: '.sw-info-next',
        },
        allowTouchMove: false,
    });

    // 산학협력단 뉴스 슬라이드
    $('.coop-news-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: false,
        prevArrow: '.coop-news-slide-prev',
        nextArrow: '.coop-news-slide-next',
    });

    // sns 슬라이드
    new Swiper('.sw-sns', {
        slidesPerView: 4,
        spaceBetween: 22,
        allowTouchMove: false,
    });

    // 공지사항 영역에 데이터 갱신 관련
    // 데이터를 보여줄 html의 요소(엘리먼트)를 참조해둔다.

    // 공지사항 데이터를 보여줄 요소들
    let notice_data_div = $('.notice-data .notice-box');

    // 입찰공고 데이터를 보여줄 요소들
    let bid_data_div = $('.bid-data .notice-box');

    // 데이터의 카테고리를 선택할 수 있는 html의 요소(element)를 참조해둔다.
    let notice_menu = $('.notice-menu a');

    // 보여줄 데이터 목록을 저장해 둔다.
    let notice_data_1 = [{
            title: '2021년 8월 온라인 학위수여식 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
            date: '2021.08.10.',
            page: '#'
        },
        {
            title: '상담센터 학생상담실 시간제 상담원 모집 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협',
            date: '2021.08.09.',
            page: '#'
        }
    ];
    let notice_data_2 = [{
            title: '[학생지원팀] 코로나19 수도권(인천) 거리두기 4단계 격상에 따른 교내시설이용 지침 안내',
            date: '2021.07.09.',
            page: '#'
        },
        {
            title: '[학생지원팀] 코로나19 거리두기 개편안에 따른 실외체육시설이용 안내',
            date: '2021.06.30.',
            page: '#'
        },
        {
            title: '[국제지원팀]코로나 19 관련 외국인 유학생 개인 방역 수칙 안내',
            date: '2021.06.30.',
            page: '#'
        },
        {
            title: '2021학년도 1학기 기말고사 운영 방식 안내',
            date: '2021.05.21.',
            page: '#'
        },
        {
            title: '2021학년도 1학기 기말고사 응시 가이드라인 안내',
            date: '2021.05.21.',
            page: '#'
        },
        {
            title: '[교무처] 2021-1학기 중간고사 부정행위 관련 당부',
            date: '2021.04.14.',
            page: '#'
        }
    ];
    let notice_data_3 = [{
            title: '2021년 8월 온라인 학위수여식 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021-2학기 재학생 등록 및 부분(학점)등록 안내',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[졸준학] 2021년 8월 온라인 학위수여식 학사복 대여 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021년 8월 수료예정자의 부분수강등록 신청 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[미래자동차 사업단] 미래자동차공학 융합전공 및 마이크로 전공 설명회 개최',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '2021학년도 2학기 수강신청 안내 ',
            date: '2021.08.03.',
            page: '#'
        }
    ];
    let notice_data_4 = [{
            title: '2021학년도 2학기 가송재단 장학생 선발 공고',
            date: '2021.08.03.',
            page: '#'
        },
        {
            title: '[창업지원단] 창업 꿈나무 장학금 신청안내 (대학원)',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '[창업지원단] 창업 꿈나무 장학금 신청안내 (학부)',
            date: '2021.07.30.',
            page: '#'
        },
        {
            title: '2021년 2학기 한국장학재단 푸른등대 기부장학사업 신규장학생 선발 안내 ',
            date: '2021.07.12.',
            page: '#'
        },
        {
            title: 'eeee',
            date: '2021.08.06',
            page: '#'
        },
        {
            title: '2021-1학기 인천시 학자금 대출이자 지원안내 ',
            date: '2021.07.09.',
            page: '#'
        }
    ];
    let notice_data_5 = [{
            title: '[창업지원단] 2021 제2회 아랩 오픈데이 참가자 모집',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[INSTAR] (BK21대학원혁신) 정보·보안 교육 - 박찬암 대표 초청 특강(8/20)  안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[교수학습개발센터] 2021학년도 2학기 교수법 워크숍 신청 안내',
            date: '2021.08.04.',
            page: '#'
        },
        {
            title: ' [인하대 다문화융합연구소] 2021년 ICME (다문화교육 국제학술대회) 개최 안내',
            date: '2021.08.03.',
            page: '#'
        },
        {
            title: '[인공지능융합연구센터] 클라우드 기반 인공지능/빅데이터 교육 플랫폼 활용 세미나 안내 (8/18)',
            date: '2021.07.28.',
            page: '#'
        },
        {
            title: '[학생상담실] 대학혁신지원사업 - 인하인 마음보기 프로그램(온라인 심리검사) 안내',
            date: '2021.07.15.',
            page: '#'
        }
    ];
    let notice_data_6 = [{
            title: '조교/사무보조원 채용 공고',
            date: '2020.11.11.',
            page: '#'
        },
        {
            title: '[의류디자인학과] 2021-2학기 조교(LA1) 모집 공고',
            date: '2021.08.10.',
            page: '#'
        },
        {
            title: '상담센터 학생상담실 시간제 상담원 모집 안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[청년기술전문인력육성사업단] 기업연계 청년기술인력 육성사업 참여인력(산학협력단 연구원) 모집 안내 (3차모집/학사)-(청년TLO사업 후속)',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[영어교육과] 대학원 조교장학생(TA1) 모집',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '정석학술정보관 조교(사서) 모집(~8/18, 15시까지)',
            date: '2021.08.09.',
            page: '#'
        }
    ];
    let notice_data_7 = [{
            title: '2남관/6호관 옥상 LG유플러스 2G장비 철거 안내(8.10(화))',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '학생의료공제회 2021학년도 1학기(2021.03.01~2021.08.31) 접수 마감안내',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '교내 전체 정전 안내(8월 15일) 재공고',
            date: '2021.08.04.',
            page: '#'
        },
        {
            title: '2021 공과대학 학과홍보 동영상 공모전 수상작 안내',
            date: '2021.07.28.',
            page: '#'
        },
        {
            title: '소방시설물 작동기능점검 실시 안내',
            date: '2021.07.26.',
            page: '#'
        },
        {
            title: '교내 전체 정전 안내',
            date: '2021.07.23.',
            page: '#'
        }
    ];

    // 입찰공고를 위한 데이터

    let bid_data = [{
            title: '[입찰 재공고] 행운의 열쇠 구매',
            date: '2021.08.09.',
            page: '#'
        },
        {
            title: '[입찰] 배터리 테스터기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 형광분광기 구매',
            date: '2021.08.05',
            page: '#'
        },
        {
            title: '[입찰] 형광발광분석기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 열변형시험기 구매',
            date: '2021.08.05.',
            page: '#'
        },
        {
            title: '[입찰] 인하대학교 경쟁력 강화를 위한 조사 용역',
            date: '2021.08.03.',
            page: '#'
        }
    ];
    // 데이터의 카테고리를 클릭하면 클릭하면 데이터를 갱신하여 화면에 보여준다.
    let notice_data_all = [
        notice_data_1,
        notice_data_2,
        notice_data_3,
        notice_data_4,
        notice_data_5,
        notice_data_6,
        notice_data_7

    ];
    $.each(notice_menu, function (index, item) {
        $(this).click(function (event) {

            // item은 a 태그입니다.
            // 그래서 웹 브라우저가 갱신된다.
            // 그래서 클릭시 데이터 갱신이 안된다.
            // a 태그의 href 기본 기능을 막는다.
            event.preventDefault();

            sort_data(notice_data_all[index], notice_data_div);
            // css 꾸미기
            notice_menu.removeClass('notice-menu-focus');
            $(this).addClass('notice-menu-focus');

        });
    });

    // 초기에 보여줄 데이터
    // 공지 사항 처음 내용
    sort_data(notice_data_1, notice_data_div);
    // 입찰 정보 처음 내용
    sort_data(bid_data, bid_data_div);
    // 이렇게 넣으면 notice에 갱신한다
    // 입찰 정보하고싶으면 장소를 지정해준다.

    function sort_data(_obj, _where) {


        $.each(_where, function (index, item) {
            // _where = notice_data_div였다.
            // 실제 배치할 데이터
            let temp_data = _obj[index];
            // _obj = notice_data_1

            // 제목자리
            let temp_tit = $(this).find('.notice-box-tit');
            temp_tit.text(temp_data.title);

            // 날짜자리
            let temp_date = $(this).find('.notice-box-date');
            temp_date.text(temp_data.date);

            // href="" ancohr 자리
            let temp_link = $(this).find('.notice-box-link');
            temp_link.attr('href', temp_data.page);


        });
    }

    // 공지사항, 입찰정보 보이고, 숨기기
    // .notice-tit를 저장해서 참조한다.
    let notice_tits = $('.notice-tit');
    // .notice-cont를 저장해서 참조한다.
    let notice_conts = $('.notice-cont');

    // notice-tit를 클릭하면 notice-cont를 보여주라.
    $.each(notice_tits, function (index, item) {
        $(this).click(function (event) {
            // href 기본 기능을 막자
            event.preventDefault();
            // 일단 모든 목록을 숨기자.
            notice_conts.hide();
            notice_conts.eq(index).show();

            // 포커스 이동하기
            notice_tits.removeClass('notice-tit-focus');
            // notice_tit.eq(index).addClass('notice-tit-focus');
            $(this).addClass('notice-tit-focus');
        });
    });

});






// html 준비가 된다면.
// $(document).ready(function(){});
// 순서 html > 그림
// 그림, 영상 소리 등..
// html 태그에서 사용하는 멀티미디어 요소를
// 모두 로딩 완료 했다면 그때 처리한다.
window.onload = function () {

}