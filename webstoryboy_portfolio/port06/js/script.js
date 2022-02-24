//=======================로딩화면======================
//locomotive scroll에서는 로딩화면 구현이 되지않음

// const loader = document.querySelector('.loader');
//const html = document.querySelector('html');

//html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

// window.addEventListener('load', () => {
//     setTimeout(() => { //로딩속도 구현
//         loader.style.opacity = '0';
//         //html.style.overflow = 'auto'; 스크롤 방지 해제

//         setTimeout(() => {
//             loader.style.display = 'none';
//         }, 400);
//     }, 5000);
// })

// // 로딩 카운트
// let counter = 0;
// let c = 0;
// let i = setInterval(function(){
//     $(".loader .counter h1").html(c + "%");
//     $(".loader .counter hr").css("width", c + "%");

//     // $(".loading-page .counter h1.color").css("width", c + "%");
    
//     counter++;
//     c++;
    
//     if(counter == 101) {
//         clearInterval(i);
//     }
// }, 30);


//=======================타이틀 버블 효과======================
const svg = SVG(".canvas");
const circles = [];

generate();

function generate() {
    svg.clear();

    for (let i = 0; i < 20; i++) {
        const circle = svg.circle(32).cx(100).cy(100).fill("hsl(0, 100%, 100%").node;

        gsap.to(circle, {
            x: "random(-80, 80, true)",
            y: "random(-80, 80, true)",
            scale: "random(0.25, 1, true)",
            ease: "elastic.out(1, 0.5)",
            duration: 1.5,
            delay: "random(0, 0.2, true)",
            attr: {
                fill: () => `hsl(${gsap.utils.random(0, 360)}, 75%, 75%)`
            },
            repeat: -1,
            repeatDelay: 3.5,
            repeatRefresh: true
        });
    }
}



//=========================스크롤 효과=======================
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("[data-scroll-container]")

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    reloadOnContextChange:true,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    
});

setTimeout(() => {  
    scroller.destroy();
}, 0);
setTimeout(() => {  
    scroller.init();
}, 50);
setTimeout(() => {  
    scroller.update();
}, 1000);


// $(window).on("load", function() {
//     scroller.update();
//  });


// ========================== 스와이퍼 ===========================
const swiper2 = new Swiper("#imgs1", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
    },
    
});
  
const swiper3 = new Swiper("#imgs2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    
});

// 애니메이션 스와이퍼
const swiper = new Swiper("#swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
        },
    }
});



// ====================== 스크립트 탭, 헤더메뉴 =======================
const inputBtn1 = $(".site1 .circle input");
const inputBtn2 = $(".site2 .circle input");
const inputBtn3 = $(".site3 .circle input");
const inputBtn4 = $(".site4 .circle input");
const menu = $(".headerIcon");
const portfolioBtn = $(".headerRight > a");
const portTab = $(".portTab");
const nav = $("nav");
const navList = nav.find("a");
const navBG = $(".navBG");



const about = document.querySelector('#about');
const webSite = document.querySelector('#webSite');
const animation = document.querySelector('#animation');
const script = document.querySelector('#script');
const board = document.querySelector('#board');
const contact = document.querySelector('#contact');


inputBtn1.on('click',{site:"siteCode1", tab:"tab1"}, codeView);
inputBtn2.on('click',{site:"siteCode2", tab:"tab2"}, codeView);
inputBtn3.on('click',{site:"siteCode3", tab:"tab3"}, codeView);
inputBtn4.on('click',{site:"siteCode4", tab:"tab4"}, codeView);

function codeView(e) {
    let site = e.data.site;
    let tab = e.data.tab;

    // console.log(site)
    // console.log(tab)
    $(`input:radio[name='${site}']`).change(function(){
        let tabBox = $(`.${tab}`);
        let siteCode = $(this).prop("checked",true).attr("id");
        tabBox.removeClass("on");
        $('.'+siteCode).addClass("on");
    });
}

menu.on("click", function () {
    $(this).toggleClass("active");
    nav.toggleClass("active");
});

navBG.on("click", function () {
    nav.removeClass("active");
    menu.removeClass("active");
})

portfolioBtn.on("click", function () {
    portTab.slideToggle(300);
    $(this).toggleClass("on");
})

//메뉴에 리스트 클릭시 로코모티브 스크롤 동작
navList.on("click", function(e){
    e.preventDefault();

    //로코모티브 스크롤에서는 아래 코드에 오류발생
    // $('html, body').animate({
    //     scrollTop: $(this.hash).offset().top
    // }, 500);

    //따라서 아래와 같은 방식으로 해야 오류가 발생하지 않는다.
    scroller.scrollTo($(this).attr("href"))

    //모바일에서 메뉴 클릭 후 사라지게 하기
    if (window.matchMedia('(max-width: 575px)').matches) {
        nav.removeClass("active");
        menu.removeClass("active");
    }
})




// canvas
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
const panelView = document.querySelector(".panelView");
const btn = document.querySelector("#canvasBtn");

canvas.width = panelView.offsetWidth;
canvas.height = panelView.offsetHeight;
console.log(canvas.width)
console.log(canvas.height)

ctx.strokeStyle = "#bada55"
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; // 마우스로 클릭하기 전에는 작동하지 않게 하기
    //console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();

    ctx.moveTo(lastX, lastY);

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX;
    // lastY = e.offsetY;

    hue++;
    if(hue >= 360) hue = 0;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;

    // if(direction) {
    //   ctx.lineWidth++;
    // } else {
    //   ctx.lineWidth--;
    // }
}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemout", () => isDrawing = false);

btn.addEventListener("click", function(){
     ctx.clearRect(0, 0, canvas.width, canvas.height);
})



// 타이머
let minute = 0
let second = 0
let milliSecond = 0 

let domMinute = document.querySelector(".minute");
let domSecond = document.querySelector(".second");
let domMilliSecond = document.querySelector(".milliSecond");
let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let resetBtn = document.querySelector(".resetBtn");

let intId;

startBtn.addEventListener("click", fnStart);
stopBtn.addEventListener("click", fnStop);
resetBtn.addEventListener("click", fnReset);

function fnStart(){
    clearInterval(intId);
    intId = setInterval(timer, 10);
}

function timer(){
    milliSecond++;
    milliSecond = milliSecond > 9 ? milliSecond : "0" + milliSecond;
    domMilliSecond.innerText = milliSecond;

    if(milliSecond > 99) {
        second++;
        second = second > 9 ? second : "0" + second;
        domSecond.innerText = second;
        milliSecond = 0;
        domMilliSecond.innerText = "00"
    }
    if(second > 59) {
        minute++;
        minute = minute > 9 ? minute : "0" + minute;
        domMinute.innerText = minute;
        second = 0;
        domSecond.innerText = "00"
    }
}

function fnStop(){
    clearInterval(intId);
}

function fnReset(){
    clearInterval(intId);

    minute = 0;
    second = 0;
    milliSecond = 0;

    domMinute.innerText = "00";
    domSecond.innerText = "00";
    domMilliSecond.innerText = "00";

}



