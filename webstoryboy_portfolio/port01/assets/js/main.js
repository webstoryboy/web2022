window.addEventListener('DOMContentLoaded', function () {



    /* sec2 */
    // scroll + animation
    window.addEventListener("scroll", function () {
        let scroll =
            document.documentElement.scrollTop ||
            window.scrollY ||
            window.pageYOffset;
        let scroll2 =
            document.documentElement.scrollLeft ||
            window.scrollX ||
            window.pageXOffset;
        document.querySelector(".scroll").innerText = parseInt(scroll);
        document.querySelector(".scroll-left").innerText = parseInt(scroll2);

        if (scroll >= document.querySelector(".sec2").offsetTop) {
            document.querySelector(".sec2 h2").classList.add("active");
        }
    });



    /* sec3 */
    // cursor
    const cursor = document.querySelector(".cursor");
    const circle = cursor.getBoundingClientRect();

    function follow(e) {
        gsap.to(cursor, 0.3, {
            left: e.screenX - circle.width / 2,
            top: e.screenY - circle.height / 2,
        });
    }
    window.addEventListener("mousemove", follow);

    // text
    document
        .querySelectorAll(".sec3 .aboutText .aboutTextp")
        .forEach((elem) => {
            let splitText = elem.innerText;
            let splitWrap = splitText
                .split("")
                .join("</span><span aria-hidden='true'>");
            splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
            elem.innerHTML = splitWrap;
            elem.setAttribute("aria-label", splitText);
        });

    window.addEventListener("scroll", () => {
        let scroll =
            document.documentElement.scrollTop ||
            window.scrollY ||
            window.pageYOffset;
        const aboutTop =
            window.pageYOffset +
            document.querySelector("#section3").getBoundingClientRect().top;

        document.querySelectorAll(".sec3 .aboutText").forEach((elem) => {
            if (scroll >= aboutTop) {
                elem
                    .querySelectorAll(".sec3 .aboutText span")
                    .forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add("active");
                        }, 25 * (index + 1));
                    });
            }
        });
    });

    // background
    const aboutBG = function (e) {
        let scroll =
            document.documentElement.scrollTop ||
            window.scrollY ||
            window.pageYOffset;
        let aboutTop = document.querySelector(".sec3").clientHeight;
        let offset = (e.pageY - aboutTop) * 0.2;
        let line01 = document.querySelector(".aboutBGline01");
        let line02 = document.querySelector(".aboutBGline02");
        let line03 = document.querySelector(".aboutBGline03");
        let line04 = document.querySelector(".aboutBGline04");
        let line05 = document.querySelector(".aboutBGline05");
        gsap.to(line01, {
            duration: 0.3,
            y: offset
        });
        gsap.to(line02, {
            duration: 0.3,
            y: -offset
        });
        gsap.to(line03, {
            duration: 0.3,
            y: offset
        });
        gsap.to(line04, {
            duration: 0.3,
            y: -offset
        });
        gsap.to(line05, {
            duration: 0.3,
            y: offset
        });
    };
    window.addEventListener("mousemove", aboutBG);



    /* sec5 */
    // horizontal


    //button
    const actbtn = document.querySelectorAll(".sec5 .text-box .activebtn a");
    const actimg = document.querySelectorAll(".sec5 .img-box img");

    actbtn.forEach((el, index) => {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            actimg.forEach(el => {
                el.classList.remove("active");
            });
            actimg[index].classList.add("active");
            button01();
        })
    })
    var button01 = function () {
        if ([...document.querySelectorAll(".sec5 .img-box img")].some(({
                classList
            }) => classList.contains("active"))) {
            document.querySelector(".reveal").classList.add("show")
            removeshow();
        } else {
            console.log("불가능")
        }
    }

    function removeshow() {
        setTimeout(() => {
            document.querySelector(".reveal").classList.remove("show")
        }, 1000);

    }
    //sidemove

    //angel
    var bowl = document.querySelector(".bowl");

    function bowlplay() {
        bowl.play();
    }

    function bowlstop() {
        let angelY = document.querySelector(".angel").offsetLeft;
        let angelX = document.querySelector(".angel").offsetTop;
        if (angelY != 0) {
            bowl.pause();
            bowl.currentTime = 0;
            document.querySelector(".sec5 .angel").classList.remove("active");
        } else {
            console.log("bowlfalse")
        }
    }
    window.addEventListener("scroll", bowlstop)

    document.querySelector(".angel .handle").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".sec5 .angel").classList.toggle("active"),
            bowlplay();
    })

    function angelText() {

        let txt3 = document.querySelector(".angel")

        if (document.querySelector(".sec5 .angel").classList.contains("skrollable-after")) {
            document.querySelector(".angel .txt3").classList.add("active")
        } else {
            console.log("불가능")
        }

        console.log(txt3.offsetLeft)
    }
    window.addEventListener("scroll", angelText);

    



});