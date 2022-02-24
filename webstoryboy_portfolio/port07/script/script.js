  // 로딩 ,header,section1 애니메이션
  function imagesProgress () {
    var $container = $('.progress'),
        $progressText = $container.find('.progress-text'),

    imgLoad = imagesLoaded('body'), 
    imgTotal = imgLoad.images.length,
    imgLoaded = 0, 
    current = 0, 
    progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function () {
        imgLoaded++;
    });

    function updateProgress () {
        var target = (imgLoaded / imgTotal) * 100;
        current += (target - current) * 0.1; 
        $progressText.text(Math.floor(current) + '%');

        if(current >= 100){
            clearInterval(progressTimer);

            let tl = gsap.timeline();
            tl.to(".progress", {duration: 0.6, delay: 0.7, top: "-100%", ease: "power4.out"});
            tl.to(".line1", {duration: 0.6,delay: 1, width: "100%", ease: "power2.out"});
            tl.to(".line2", {duration: 0.6, width: "100%", ease: "power2.out"});
            tl.to(".ppp span", {duration: 0.6, y:0, stagger: 0.03, opacity:1, ease: "power2.out"});
            tl.to(".header h1",{duration: 0.3,opacity:"1"});
            tl.to(".header nav",{duration: 0,opacity:"1"});
            tl.to(".section1",{duration: 0.6,opacity:"1"});
        }
        if (current > 99.9) {
            current = 100;
        }
    }
}
imagesProgress();


// 메뉴 틀릭하여 이동하기
$(".paraNav ul li").click(function(e){
    e.preventDefault();
    let target = $(this); // 사용자가 클릭한 버튼의 타겟이 저장
    let index = target.index(); //인덱스를 부여하여
    let section = $(".section").eq(index); //eg(); : 인덱스 순서대로
    let offset = section.offset().top; // offset() : 요소의 위치 문서가 기준
    $("html, body").animate({scrollTop:offset}, 600); // offeset값을 scrollTop에 대입

});

// scrollTop을 이용 
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    $(".scroll").text(parseInt(scrollTop));

    // header
    $(".header_title").css({
        transform: "translateX(" + -scrollTop + "px)"
    })

    //section2
    if (scrollTop >= $(".section2 .con_wrap").offset().top - $(window).height() / 2) {
    gsap.to(".section2 .con_wrap span", { duration: 0.5, opacity: 1, y: 0, rotation: 0, ease: "power3.ease", stagger: 0.03 })
    }
    if (scrollTop >= $(".section2 h2").offset().top - $(window).height() / 2) {
        gsap.to(".section2 h2 span", { duration: 0.6, opacity: 1, y: 0, rotation: 0, ease: "power3.ease", stagger: 0.06 })
    }
    // secttion3
    if (scrollTop >= $(".section3 h2").offset().top - $(window).height() / 2) {
        gsap.to(".section3 h2 span", { duration: 0.6, opacity: 1, y: 0, rotation: 0, ease: "power3.ease", stagger: 0.06 })
    }
    //section6 이미지 애니메이션
    if (scrollTop >= $(".section6 .js_contents .con1_container .img_wrap").offset().top - $(window).height()/5) {    
        let img = $(".section6 .js_contents .con1_container .img_wrap");
        let offset = scrollTop - img.offset().top;
   
        gsap.to(img, {duration: .3, x: offset,  ease: "power2.out"})
    }
   
    if (scrollTop >= $(".section6 .js_contents .con2_container .img_wrap").offset().top - $(window).height()/5) {    
        let img = $(".section6 .js_contents .con2_container .img_wrap");
        let offset = scrollTop - img.offset().top;

        gsap.to(img, {duration: .3, x: offset,  ease: "power2.out"})
    }
    //section7
    if (scrollTop >= $(".section7 h2").offset().top - $(window).height() / 2) {
        gsap.to(".section7 h2 span", { duration: 0.6, opacity: 1, y: 0, rotation: 0, ease: "power3.ease", stagger: 0.06 })
    }
});

// scrollTop을 이용 section2 나타나기 효과
$(window).scroll(function () {
    let scrollTop2 = $(window).scrollTop() + $(window).height() / 2;
    //section2
    $(".section2 .con_wrap").each(function (index) {
        if (scrollTop2 > $(this).offset().top) {
            $(this).addClass("show");
        }
    }); 
    //section3
    $(".section3 .sec").each(function (index) {
        if (scrollTop2 > $(this).offset().top) {
            $(this).addClass("show");
        }
    });
});
// 글씨 쪼개기 효과
$(".split").each(function () {
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", text);
});

// swiper 사진 슬라이드 section1 box2_1, footer 
var swiper = new Swiper(".box2_slide", {
loop: true,
autoplay: {
    delay: 5000,
    disableOnInteraction: false,
},
navigation: {
    nextEl: ".box2_slide .next",
    prevEl: ".box2_slide .prev",
},
});

// section1 box3_2 
function initparticles() {
    bubbles();
    hearts();
    lines();
    confetti();
    fire();
    sunbeams();
}

function bubbles() {
    $.each($(".particletext.bubbles"), function(){
        var bubblecount = ($(this).width()/50)*2;
        for(var i = 0; i <= bubblecount; i++) {
            var size = ($.rnd(60,120)/10);
            $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
        }
    });
}

function confetti() {
    $.each($(".particletext.confetti"), function(){
        var confetticount = ($(this).width()/50)*5;
        for(var i = 0; i <= confetticount; i++) {
            $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
        }
    });
}

function lines() {
    $.each($(".particletext.lines"), function(){
        var linecount = ($(this).width()/50)*8;
        for(var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
        }
    });
}
function hearts() {
    $.each($(".particletext.hearts"), function(){
        var heartcount = ($(this).width()/50)*5;
        for(var i = 0; i <= heartcount; i++) {
            var size = ($.rnd(40,100)/10);
            $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
        }
    });
}
function fire() {
    $.each($(".particletext.fire"), function(){
        var firecount = ($(this).width()/50)*10;
        for(var i = 0; i <= firecount; i++) {
            var size = $.rnd(8,12);
            $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
        }
    });
}

function sunbeams() {
$.each($(".particletext.sunbeams"), function(){
    var linecount = ($(this).width()/50)*5;
    for(var i = 0; i <= linecount; i++) {
        $(this).append('<span class="particle" style="top:' + $.rnd(-50,0) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(80,160) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
    }
});
}

jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

$(".p1_btn").click(function(e){
    e.preventDefault();
    $(".p1").toggleClass("bubbles");
    initparticles();
})
$(".p2_btn").click(function(e){
    e.preventDefault();
    $(".p2").toggleClass("confetti");
    initparticles();
})
$(".p3_btn").click(function(e){
    e.preventDefault();
    $(".p3").toggleClass("lines");
    initparticles();
})
$(".p4_btn").click(function(e){
    e.preventDefault();
    $(".p4").toggleClass("hearts");
    initparticles();
})
$(".p5_btn").click(function(e){
    e.preventDefault();
    $(".p5").toggleClass("fire");
    initparticles();
})
$(".p6_btn").click(function(e){
    e.preventDefault();
    $(".p6").toggleClass("sunbeams");
    initparticles();
})
initparticles();

// section2 skill
function counter() {
if ($('.skill .count').size()) {
    $c = $('.skill .count');

    $c.each(function () {
        var $this = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });

    $(window).on('scroll', function () {
        var speed = 5000;

        $c.each(function (i) {
            var $t = $(this);
            if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                $t.data('counted', true);

                $t.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function (now) {
                        var $this = $(this);
                        var val = Math.round($this.data('target') * now);
                        $this.html(val);
                    },
                    easing: 'easeInOutQuart'
                });

                // easy pie
                $('.pie').easyPieChart({
                    barColor: '#ffd600',
                    trackColor: '#030303',
                    scaleColor: '#fff',
                    scaleLength: 5,
                    lineWidth: 2,
                    size: 200,
                    lineCap: 'round',
                    animate: {
                        duration: speed,
                        enabled: true
                    }
                });
            }
        });
    }).triggerHandler('scroll');
}
}

counter();




//tab_menu
var $tab_list = $(".code_tab_menu_container");

$tab_list.find(".code_tab_menu").hide();
$tab_list.find(".code_tab_menu.active").show();

// section3
for( let i=1; i<=6; i++ ){
    $(".tab1_"+i).click(function(e){
        e.preventDefault();
        $(".code_con1_"+i).show().addClass("active").siblings(".code_tab_menu").removeClass("active").hide();
    })
    }
for( let i=1; i<=6; i++ ){
    $(".tab2_"+i).click(function(e){
        e.preventDefault();
        $(".code_con2_"+i).show().addClass("active").siblings(".code_tab_menu").removeClass("active").hide();
    })
}
for( let i=1; i<=6; i++ ){
    $(".tab3_"+i).click(function(e){
        e.preventDefault();
        $(".code_con3_"+i).show().addClass("active").siblings(".code_tab_menu").removeClass("active").hide();
    })
}
for( let i=1; i<=4; i++ ){
    $(".tab4_"+i).click(function(e){
        e.preventDefault();
        $(".code_con4_"+i).show().addClass("active").siblings(".code_tab_menu").removeClass("active").hide();
    })
}
// section3 code_tab con
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach((block) => {
    hljs.highlightBlock(block);
    block.classList.add('p-6');
    });
});


// 계산기
function getHistory() {
 return document.querySelector(".history-value").innerText;
}
function printHistory(num) {
 document.querySelector(".history-value").innerText = num;
}
function getOutput() {
 return document.querySelector(".output-value").innerText;
}
function printOutput(num) {
 document.querySelector(".output-value").innerText = getFormattedNumber(num);
 if (num == "") {
   document.querySelector(".output-value").innerText = num;
 } else {
   document.querySelector(".output-value").innerText = getFormattedNumber(num);
 }
}
function getFormattedNumber(num) {
 let n = Number(num);
 let value = n.toLocaleString("en");
 return value;
}
function reverseNumberFormat(num) {
 return Number(num.replace(/,/g, ""));
}

let calc_operator = document.querySelectorAll(".calc_operator");
for (let i = 0; i < calc_operator.length; i++) {
 calc_operator[i].addEventListener("click", function () {
   if (this.id == "clear") {
     printHistory("");
     printOutput("0");
   } else if (this.id == "backspace") {
     let output = reverseNumberFormat(getOutput()).toString();
     if (output) {
       //if output has a value
       output = output.substr(0, output.length - 1);
       printOutput(output);
     }
   } else {
     let output = getOutput();
     let history = getHistory();
     if (output == "" && history != "") {
       if (isNaN(history[history.length - 1])) {
         history = history.substr(0, history.length - 1);
       }
     }
     if (output != "" || history != "") {
       output = output == "" ? output : reverseNumberFormat(output);
       history = history + output;
       if (this.id == "=") {
         let result = eval(history);
         printOutput(result);
         printHistory("");
       } else {
         history = history + this.id;
         printHistory(history);
         printOutput("");
       }
     }
   }
 });
}
let calc_number = document.querySelectorAll(".calc_number");
for (let i = 0; i < calc_number.length; i++) {
 calc_number[i].addEventListener("click", function () {
   let output = reverseNumberFormat(getOutput());
   if (output !== NaN) {
     //if output is number
     output = output + this.id;
     printOutput(output);
   }
 });
}
