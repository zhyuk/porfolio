$(function () {
    $('.sub-menu li').removeClass('active');
    $('#skill-nav').addClass('active');
    $('.content-box').addClass('hide');
    $('.skill-box').removeClass('hide');

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
        document.getElementById("img" + currentNum).classList.add("hide");


        let clear = setInterval(function () {
            document.getElementById("imgBox").prepend(document.getElementById("img" + currentNum));
            clearInterval(clear);
        }, 150);
    }, 300);


    // archive 영역 도착 시 배경색 변경
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.27 });

    var targetElement = document.getElementById('archive');
    observer.observe(targetElement);
    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                targetElement.style.backgroundColor = '#AAFF01';
                $('#header').css("color", "#FFF");
                $('.logo').css("color", "#FFF");

            } else {
                targetElement.style.backgroundColor = '#000';
                $('#header').css("color", "#AAFF01");
                $('.logo').css("color", "#AAFF01");
            }
        });
    }

    // 탑스크롤
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    $(".logo").click(() => {
        scrollToTop();
    })

    // 네비게이션 클릭 시 해당 영역 이동
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


    // 서브 메뉴 클릭 시 해당 콘텐츠 등장
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


    // 모달창
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
})