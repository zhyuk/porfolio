let currentNum = 0;
let totalNum = imgBox.childElementCount;
console.log(totalNum);
let imgInit = function () {
    if (currentNum != 0) {
        document.getElementById("img" + currentNum).classList.remove("hide");
    }
}
setInterval(function () {
    imgInit();
    if (currentNum == totalNum) {
        currentNum = 1;
    } else {
        currentNum++;
    }
    // console.log(currentNum);
    // img + currentNum ID를 가진 객체에 hide 클래스 추가
    document.getElementById("img" + currentNum).classList.add("hide");


    let clear = setInterval(function () {
        // imgSet ID를 가진 객체에 img + currentNum ID를 가진 객체를 첫번째 자식으로 추가한다. = 제일 앞으로 보낸다.
        document.getElementById("imgBox").prepend(document.getElementById("img" + currentNum));
        // clear 함수 중지
        clearInterval(clear);
    }, 150);
}, 300);

// --- 배경색 변경
var observer = new IntersectionObserver(handleIntersection, { threshold: 0.27 });

// 감시할 대상 요소 선택
var targetElement = document.getElementById('archive');

// 대상 요소를 감시 대상으로 등록
observer.observe(targetElement);

// Intersection Observer의 콜백 함수
function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
        // 영역이 화면에 보일 때
        if (entry.isIntersecting) {
            targetElement.style.backgroundColor = '#AAFF01';
            $('#header').css("color", "#FFF");
            $('.logo').css("color", "#FFF");

        } else {
            // 영역이 화면에 보이지 않을 때
            targetElement.style.backgroundColor = '#000';
            $('#header').css("color", "#AAFF01");
            $('.logo').css("color", "#AAFF01");
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

$(".logo").click(() => {
    scrollToTop();
})

$(".about-nav").click(() => {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
})

$(".archive-nav").click(() => {
    $('html, body').animate({
        scrollTop: $("#archive").offset().top
    }, 800);
})

$(".contact-nav").click(() => {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
})


$('#skill-nav').click(function () {
    $('.sub-menu li').removeClass('active');
    $(this).addClass('active');
    $('.content-box').addClass('hide');
    $('.skill-box').removeClass('hide');
})
$('#profile-nav').click(function () {
    $('.sub-menu li').removeClass('active');
    $(this).addClass('active');
    $('.content-box').addClass('hide');
    $('.profile-box').removeClass('hide');
})
$('#about-nav').click(function () {
    $('.sub-menu li').removeClass('active');
    $(this).addClass('active');
    $('.content-box').addClass('hide');
    $('.about-box').removeClass('hide');
})

$('.archive1').click(function () {
    $('#modal').removeClass('hide');
    $('.howru').removeClass('hide');
})
$('.archive2').click(function () {
    $('#modal').removeClass('hide');
    $('.smood').removeClass('hide');
})
$('.archive3').click(function () {
    $('#modal').removeClass('hide');
    $('.rwb').removeClass('hide');
})

$('.close').click(function () {
    $('#modal').addClass('hide');
    $('#modal .inner').addClass('hide');
})


$(function() {
    $('.sub-menu li').removeClass('active');
    $('#skill-nav').addClass('active');
    $('.content-box').addClass('hide');
    $('.skill-box').removeClass('hide');
})