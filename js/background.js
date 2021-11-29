$("document").ready(function () {
    particlesJS('particle', 
    {
        "particles": {
            "number": {
                "value": 30, // 점 개수
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // 점 색깔
            },
            "shape": {
                "type": "circle", // circle, edge, triangle, polygon, star
                "stroke": {
                    "width": 0, // 도형의 선 색깔
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5 // polygon 설정 시 만들어지는 도형 모서리 수
                },
                "image": {
                    "src": "images/img.png", // 이미지 파일 경로
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.2, // 도형 투명도 설정
                "random": false,
                "anim": { // 애니메이션
                    "enable": false,
                    "speed": 10,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 100, // 도형 크기
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": { // 연결 선 설정
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": { // 도형 이동 관련 설정
                "enable": true, // 활성/비활성
                "speed": 6, // 속도
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out", // out, bounce
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                // 동작설정
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": { // 클릭한 위치를 기준으로 주변의 도형을 흰색으로
                    "distance": 100, // 반경
                    "size": 40,
                    "duration": 0.3,
                    "opacity": 0.8,
                    "speed": 30
                },
                "repulse": { // 마우스 위치 기준으로 도형들이 퍼져나감
                    "distance": 100
                },
                "push": { // 도형 추가
                    "particles_nb": 4
                },
                "remove": { // 도형 삭제
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    })
})