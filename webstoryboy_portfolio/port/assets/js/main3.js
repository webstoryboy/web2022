window.addEventListener('DOMContentLoaded', () => {


    

    function scrollCheck() {
        scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;

        return scroll
    }
    window.addEventListener("scroll", scrollCheck)



    // //menu

    // document.querySelector("#header .menu").onclick = function () {
    //     let tl = gsap.timeline();

    //     tl.to("#header .menu", {
    //         width: "100vw",
    //         height: "50vh",
    //         x: -30,
    //         y: -30,
    //     })

    // }

    //span
    document
        .querySelectorAll(".split")
        .forEach((elem) => {
            let splitText = elem.innerText;
            let splitWrap = splitText
                .split("")
                .join("</span><span aria-hidden='true'>");
            splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
            elem.innerHTML = splitWrap;
            elem.setAttribute("aria-label", splitText);
        });



    /* sec1 */
    // setTimeout(function start() {
    //     let tl = gsap.timeline();
    //     tl.to(".sec1 .line01", {
    //         duration: 0.4,
    //         width: "100%",
    //         ease: "power4.out"
    //     })
    //     tl.to(".sec1 .line01", {
    //         duration: 0.4,
    //         height: "3vw",
    //         ease: "bounce.out"
    //     })
    //     tl.to(".sec1 h2 span", {
    //         duration: 0.4,
    //         stagger: 0.05,
    //         opacity: 1,
    //         rotation: 0,
    //         y: 0,
    //         x: 0,
    //         ease: "power4.out"
    //     })
    //     tl.to(".sec1 h2 span", {
    //         duration: 0.5,
    //         stagger: 0.08,
    //         color: "#000",
    //         ease: "power4.out",
    //     })
    //     tl.to(".sec1 .face", {
    //         duration: 0.7,
    //         opacity: 1,
    //         rotation: 0,
    //         scale: 1,
    //         ease: "expo.out"
    //     })
    //     tl.to(".sec1 .line01", {
    //         duration: 1,
    //         width: "40%",
    //         ease: "power4.out"
    //     })
    //     tl.to("#header .menu", {
    //         duration: .5,
    //         top: 30,
    //         ease: "power4.out"
    //     })
    //     tl.to(".sec1 .hit span", {
    //         duration: 0.4,
    //         stagger: 0.03,
    //         opacity: 1,
    //         y: 0,
    //         ease: "power4.out",
    //     })
    // }, 2000);


    /* sec2 */
    let aboutTitleView = 1

    window.addEventListener("scroll", () => {
        const sec2Top =
            window.pageYOffset +
            document.querySelector(".sec2").getBoundingClientRect().top;
        const sec2bot =
            window.pageYOffset +
            document.querySelector(".sec2").getBoundingClientRect().bottom;
        let abouttit = document.querySelector(".sec2 h2")
        const aboutTop =
            window.pageYOffset +
            abouttit.getBoundingClientRect().top;

        let viewpoint = window.innerHeight / 2;
        const aboutTop01 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(1)").getBoundingClientRect().top;
        const aboutTop02 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(2)").getBoundingClientRect().top;
        const aboutTop03 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(3)").getBoundingClientRect().top;
        const aboutTop04 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(4)").getBoundingClientRect().top;
        const aboutTop05 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(5)").getBoundingClientRect().top;
        const aboutTop06 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(6)").getBoundingClientRect().top;
        const aboutTop07 =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap p:nth-child(7)").getBoundingClientRect().top;

        const korTop =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap .kor").getBoundingClientRect().top;


        // console.log(sec2Top)
        // console.log(scroll)
        //LINE, Exposition
        if (scroll >= sec2Top) {
            document.querySelector(".sec2 h2").classList.add("active")
        }

        //aboutTitle
        if (aboutTitleView == 1 && scroll >= aboutTop - viewpoint) {

            aboutTitleView++
            // console.log("at: " + aboutTitleView)
            let tl = gsap.timeline();
            tl.to(".sec2 .line02", {
                duration: 0.4,
                width: "100%",
                ease: "power4.out"
            })
            tl.to(".sec2 .line02", {
                duration: 0.4,
                height: "3vw",
                ease: "bounce.out"
            })
            tl.to(".sec2 h2 span", {
                duration: 0.4,
                stagger: 0.05,
                opacity: 1,
                rotation: 0,
                y: 0,
                x: 0,
                ease: "power4.out"
            })
            tl.to(".sec2 h2 span", {
                duration: 0.5,
                stagger: 0.08,
                color: "#fff",
                ease: "power4.out",
            })
            tl.to(".sec2 .face", {
                duration: 0.7,
                opacity: 1,
                rotation: 0,
                scale: 1,
                ease: "expo.out"
            })
            tl.to(".sec2 .line02", {
                duration: 1,
                width: "55%",
                ease: "power4.out"
            })
            tl.to(".sec2 .hit span", {
                duration: 0.4,
                stagger: 0.03,
                opacity: 1,
                y: 0,
                ease: "power4.out",
            })
        }


        if (scroll >= aboutTop01 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(1) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop02 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(2) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop03 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(3) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop04 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(4) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop05 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(5) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop06 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(6) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }
        if (scroll >= aboutTop07 - viewpoint) {
            gsap.to(".sec2 .txt-wrap p:nth-child(7) span", {
                duration: 0.5,
                stagger: 0.02,
                opacity: 1,
                ease: "bounce.out"
            })
        }

        if (scroll >= korTop - viewpoint) {
            gsap.to(".sec2 .txt-wrap .kor em", {
                duration: 0.3,
                stagger: 0.3,
                opacity: 1,
                ease: "bounce.out"
            })
        }


        /* sign */

        if (scroll >= sec2bot - viewpoint * 2) {
            gsap.to(".sign span", {
                duration: 0.5,
                stagger: 0.1,
                opacity: 1,
                ease: "power4.out"
            })
        }
    });

    /* sec3 */

    /* sec4 */

    window.addEventListener("scroll", () => {

        //angel
        let textRight = document.querySelector(".text-box div:nth-child(3)").getBoundingClientRect().x;
        // console.log(textRight)
        if (textRight == 0) {
            angelDown()
        } else {
            angelUp()
        }

        //red
        let redTop = document.querySelector(".red").clientHeight;
        let redbottom = document.querySelector(".red").getBoundingClientRect().bottom;
        let offset = (window.pageYOffset - redTop) * 0.075;
        let offset2 = (window.pageYOffset - redTop) * 0.5;
        let offset3 = (window.pageYOffset - redTop) * 0.03;
        let cube = document.querySelector(".sec4 .cube__wrap .cube")
        let cube2 = document.querySelector(".sec4-2 .cube__wrap .cube")
        let img1 = document.querySelector(".red .red_img01")
        let img2 = document.querySelector(".red .red_img02")
        let img3 = document.querySelector(".red .red_img03")
        let img4 = document.querySelector(".red .red_img04")
        let img5 = document.querySelector(".red .red_img05")
        let img6 = document.querySelector(".red .red_img06")
        let img7 = document.querySelector(".red .red_img07")
        let img8 = document.querySelector(".red .red_img08")
        let viewpoint = window.innerHeight / 3.5;
        let img_1 = document.querySelector(".red .red_img01 img")
        let img_2 = document.querySelector(".red .red_img02 img")
        let img_3 = document.querySelector(".red .red_img03 img")
        let img_4 = document.querySelector(".red .red_img04 img")
        let img_5 = document.querySelector(".red .red_img05 img")
        let img_6 = document.querySelector(".red .red_img06 img")
        let img_7 = document.querySelector(".red .red_img07 img")
        let img_8 = document.querySelector(".red .red_img08 img")
        let img1top = document.querySelector(".red .red_img01 img").getBoundingClientRect().top + scroll - viewpoint,
            img2top = document.querySelector(".red .red_img02 img").getBoundingClientRect().top + scroll - viewpoint,
            img3top = document.querySelector(".red .red_img03 img").getBoundingClientRect().top + scroll - viewpoint,
            img4top = document.querySelector(".red .red_img04 img").getBoundingClientRect().top + scroll - viewpoint,
            img5top = document.querySelector(".red .red_img05 img").getBoundingClientRect().top + scroll - viewpoint,
            img6top = document.querySelector(".red .red_img06 img").getBoundingClientRect().top + scroll - viewpoint,
            img7top = document.querySelector(".red .red_img07 img").getBoundingClientRect().top + scroll - viewpoint,
            img8top = document.querySelector(".red .red_img08 img").getBoundingClientRect().top + scroll - viewpoint;
        let looktop = document.querySelector(".red h2:nth-child(2)").getBoundingClientRect().top + scroll - viewpoint
        let red_typo1 = document.querySelector(".red h2:nth-child(1)")
        let red_typo2 = document.querySelector(".red h2:nth-child(2)")
        let red_typo3 = document.querySelector(".red h2:nth-child(3)")
        let red_typo4 = document.querySelector(".red h2:nth-child(4)")
        let red_typo5 = document.querySelector(".red h2:nth-child(5)")
        let mobileW = window.innerWidth || document.body.clientWidth;
        let mobileAniTop = document.querySelector(".sec4-2").getBoundingClientRect().top;

        //red
        if (mobileW > 480) {
        gsap.to(img1, {
            duration: .3,
            y: -offset3,
            width: "49.21vw",
            height: "32.81vw"
        });
        gsap.to(img2, {
            duration: .3,
            y: offset,
            width: "29.71vw",
            height: "44.57vw"
        });
        gsap.to(img3, {
            duration: .3,
            y: -offset3,
            width: "31.64vw",
            height: "42.18vw"
        });
        gsap.to(img4, {
            duration: .3,
            y: offset,
            width: "55.78vw",
            height: "31.4vw"
        });
        gsap.to(img5, {
            duration: .3,
            y: offset,
            width: "38.06vw",
            height: "37.21vw"
        });
        gsap.to(img6, {
            duration: .3,
            y: -offset3,
            width: "29.71vw",
            height: "44.53vw"
        });
        gsap.to(img7, {
            duration: .3,
            y: offset,
            width: "30.8vw",
            height: "43.12vw"
        });
        gsap.to(img8, {
            duration: .3,
            y: offset,
            width: "29.71vw",
            height: "44.57vw"
        });
    }

        if (mobileW <= 480) {
            gsap.to(img1, {
                duration: .3,
                y: -offset3,
                width: "59vw",
                height: "39.37vw",
                scale: 1.5
            });
            gsap.to(img2, {
                duration: .3,
                y: offset,
                width: "30.71vw",
                height: "50.6vw",
                scale: 1.5
            });
            gsap.to(img3, {
                duration: .3,
                y: -offset3,
                width: "42.72vw",
                height: "50.6vw",
                scale: 1.5
            });
            gsap.to(img4, {
                duration: .3,
                y: offset,
                width: "66.9vw",
                height: "37.6vw",
                scale: 1.5
            });
            gsap.to(img5, {
                duration: .3,
                y: offset,
                width: "45.6vw",
                height: "44.6vw",
                scale: 1.5
            });
            gsap.to(img6, {
                duration: .3,
                y: -offset3,
                width: "35.6vw",
                height: "53.4vw",
                scale: 1.5
            });
            gsap.to(img7, {
                duration: .3,
                y: offset,
                width: "36.9vw",
                height: "51vw",
                scale: 1.5
            });
            gsap.to(img8, {
                duration: .3,
                y: offset,
                width: "35.6vw",
                height: "53.4vw",
                scale: 1.5
            });
        }
        //console.log(mobileW)

        

        //red img scale
        if (scroll > img1top) {
            gsap.to(img_1, {
                scale: 1.1
            })
        } else {
            gsap.to(img_1, {
                scale: 1
            })
        }

        if (scroll > img2top) {
            gsap.to(img_2, {
                scale: 1.1
            })
        } else {
            gsap.to(img_2, {
                scale: 1
            })
        }

        if (scroll > img3top) {
            gsap.to(img_3, {
                scale: 1.1
            })
        } else {
            gsap.to(img_3, {
                scale: 1
            })
        }

        if (scroll > img4top) {
            gsap.to(img_4, {
                scale: 1.1
            })
        } else {
            gsap.to(img_4, {
                scale: 1
            })
        }

        if (scroll > img5top) {
            gsap.to(img_5, {
                scale: 1.1
            })
        } else {
            gsap.to(img_5, {
                scale: 1
            })
        }

        if (scroll > img6top) {
            gsap.to(img_6, {
                scale: 1.1
            })
        } else {
            gsap.to(img_6, {
                scale: 1
            })
        }

        if (scroll > img7top) {
            gsap.to(img_7, {
                scale: 1.1
            })
        } else {
            gsap.to(img_7, {
                scale: 1
            })
        }

        if (mobileW > 767) {

            if (scroll > img8top) {
                gsap.to(img_8, {
                    scale: 1.1,
                    y: -200
                })
            } else {
                gsap.to(img_8, {
                    scale: 1
                })
            }
        }

        if (mobileW <= 767) {
            if (scroll > img8top) {
                gsap.to(img_8, {
                    scale: 1.1,
                    y: -50
                })
            } else {
                gsap.to(img_8, {
                    scale: 1
                })
            }
        }

        // look
        if (scroll > looktop) {
            gsap.to(red_typo2, {
                duration: 0.3,
                color: "red",
                ease: "Power4.out",
            })
        } else {
            gsap.to(red_typo2, {
                duration: 0.3,
                color: "#ffffff",
                ease: "Power4.out",
            });
        }

        // cube

        if (redbottom <= 0) {
            gsap.to(cube, {
                duration: 0.3,
                rotateX: offset2,
                ease: "Power4.out"
            })
            gsap.to(cube, {
                duration: 0.3,
                rotateY: offset2,
                ease: "Power4.out"
            })
        }
        if (mobileW <= 767) {
            gsap.to(cube2, {
                duration: 0.3,
                rotateX: offset2,
                ease: "Power4.out"
            })
            gsap.to(cube2, {
                duration: 0.3,
                rotateY: offset2,
                ease: "Power4.out"
            })
        }

        //boy heart
        const boy_heart = document.querySelector(".sec4 .angel .angel_heart")
        let anitext = document.querySelector(".sec4 .animation .ani-text em:nth-child(6)").getBoundingClientRect().left;
        let angelTop = document.querySelector(".sec4 .angel .angel_img").getBoundingClientRect();

        if (scroll > 49000) {
            gsap.to(boy_heart, {
                duration: 2,
                width: "250vw",
                height: "250vw",
                opacity: 1,
                ease: "Power4.out"
            })
        } else {
            gsap.to(boy_heart, {
                duration: 2,
                width: "2vw",
                height: "2vw",
                opacity: 0,
                ease: "Power4.out"
            })

            // console.log(scroll)
            // console.log("sec4: " + anitext)
            // console.log(angelTop)
        }

    });

    function angelDown() {
        document.querySelector("#section3").style.animation = "angelDown 1s forwards"
        angelDown2();
    }

    function angelDown2() {
        document.querySelector("#section3 .sec3 .text-box").style.animation = "angelDown2 1s forwards"
    }

    function angelUp() {
        document.querySelector("#section3").style.animation = "angelUp 1s forwards"
        angelUp2();
    }

    function angelUp2() {
        document.querySelector("#section3 .sec3 .text-box").style.animation = "angelUp2 1s forwards"
    }



    function angel_Follow(e) {

        const A_cursor = document.querySelector(".cursor__angel");
        const circle = A_cursor.getBoundingClientRect();

        const cursor_follow = document.querySelector(".sec4 .angel .cursor-follower");
        const follow_rect = cursor_follow.getBoundingClientRect();

        gsap.to(A_cursor, .3, {
            left: e.clientX - circle.width / 2,
            top: e.clientY - circle.height / 2
        })

        gsap.to(cursor_follow, {
            duration: 0.3,
            left: e.clientX - follow_rect.width / 3,
            top: e.clientY - follow_rect.height / 3
        })

    }
    window.addEventListener("mousemove", angel_Follow);


    function anime_show() {
        const cursor_follow = document.querySelector(".sec4 .angel .cursor-follower");
        const cursor_follow_if = document.querySelector(".sec4 .angel .cursor-follower iframe");

        document.querySelectorAll(".sec4 .animation .ani-text em").forEach(elem => {
            elem.addEventListener("mouseenter", (e) => {
                cursor_follow.classList.add("active");
                cursor_follow_if.src = e.currentTarget.dataset.url
            });
            elem.addEventListener("mouseleave", () => {
                cursor_follow.classList.remove("active")
            });

        });
    }
    anime_show();


    /* sec5 */


    let hoverDistortion = new hoverEffect({
        parent: document.querySelector(".sec5 .library"),
        intensity: 0.5,
        image1: "assets/img/lib10.jpg",
        image2: "assets/img/lib11.jpg",
        displacementImage: "assets/img/diss.png"
    })

    const spantext = document.querySelectorAll(".sec5 h2 span");
    const sec5p = document.querySelectorAll(".sec5 p span");

        for (let i = 0; i < spantext.length; i++) {
            spantext[i].addEventListener("mouseover", function () {
                spantext[i].classList.add("active")
                gsap.to(spantext[i], {
                    duration: 2,
                    filter: "blur(20px)",
                    x: 300,
                    y: -300,
                    rotation: "360deg",
                    scale: 4,
                    opacity: 0,
                })
            })
        }

    /* sec06 */
        let webBack = document.querySelector(".sec6 .web__back");
        let webbox01 = document.querySelector(".sec6 .web_site_box01 .site_img");
        let webbox02 = document.querySelector(".sec6 .web_site_box02 .site_img");
        let webbox03 = document.querySelector(".sec6 .web_site_box03 .site_img");
        let webbox04 = document.querySelector(".sec6 .web_site_box04 .site_img");
        let webimg01 = document.querySelector(".sec6 .web_site_box .site_img img");
        let webimg02 = document.querySelector(".sec6 .web_site_box04 .site_img img");
        let webimg03 = document.querySelector(".sec6 .web_site_box04 .site_img img");
        let webimg04 = document.querySelector(".sec6 .web_site_box04 .site_img img");
        let webboxRect01 = webbox01.getBoundingClientRect().left;

        
        
        function cheack() {
            //console.log(scroll)
            if(scroll >= 57500 && scroll <= 60500) {
                gsap.to(webBack, {
                    duration: 0.001,
                    backgroundImage: "url(assets/img/mock-webs.gif)",
                    opacity: 0.3,
                })
            }

            if(scroll >= 61500 && scroll <= 64500) {
                gsap.to(webBack, {
                    duration: 0.001,
                    backgroundImage: "url(assets/img/mock_rs2.png)",
                    opacity: 0.3,
                })
            }
            if(scroll >= 65500 && scroll <= 68500) {
                gsap.to(webBack, {
                    duration: 0.001,
                    backgroundImage: "url(assets/img/Mock-mega.jpg)",
                    opacity: 0.3,
                })
            }
            if(scroll >= 69500 && scroll <= 72500) {
                gsap.to(webBack, {
                    duration: 0.001,
                    backgroundImage: "url(assets/img/mock-PHP01.png)",
                    opacity: 0.3,
                })
            }
        }
        window.addEventListener("scroll", cheack)

        
    /* sec07 */

    



    

    /* sec08,09 */

    let contactView = 1
    let contactView2 = 1

    function contactAni() {
        let viewpoint = window.innerHeight / 1.5;
        let sec8 = document.querySelector("#section8");
        let sec8A = document.querySelectorAll(".sec8 *");
        let sec8Top = document.querySelector(".sec8").getBoundingClientRect().top;
        let sec9Top = document.querySelector(".sec9").getBoundingClientRect().top;
        let cb_p1 = document.querySelector(".sec8 .cb_p1")
        let cb_p2 = document.querySelector(".sec8 .cb_p2")
        let nar = document.querySelector(".sec8 .contact_before h3 span")
        let narspan = document.querySelector(".sec8 h3 span")
        let con_left = document.querySelectorAll(".sec9 .contact .contact_left *")
        let con_right = document.querySelectorAll(".sec9 .contact .contact_right *")
        var tl = gsap.timeline();

        //console.log(sec8Top)

        if(sec8Top <= 0) {
            tl.to(cb_p1, {
                duration: 1,
                opacity: 1,
                ease: "power4.out"
            })
        }




        if (sec9Top - viewpoint <= 0 && contactView2 == 1) {
            tl.to(con_left, {
                duration: 0.5,
                opacity: 1,
                stagger: 0.5,
                ease: "power4.out"
            })
            tl.to(con_right, {
                duration: 0.5,
                opacity: 1,
                stagger: 0.5,
                ease: "power4.out"
            })
        }

        // console.log(sec9Top)
        // console.log(contactView2)
    }
    window.addEventListener("scroll", contactAni)



    /* mobile ani */
    function mobile_ani() {
        let viewpoint = window.innerHeight / 1.5;
        let mobileW = window.innerWidth || document.body.clientWidth;
        let scriptIf01 = document.querySelector(".box1");
        let scriptIf02 = document.querySelector(".box2");
        let scriptIf03 = document.querySelector(".box3");
        let scriptIf04 = document.querySelector(".box4");
        let scriptIf05 = document.querySelector(".box5");
        let scriptIf06 = document.querySelector(".box6");
        let scriptIf01T = document.querySelector(".box1").getBoundingClientRect().top - viewpoint; 
        let scriptIf02T = document.querySelector(".box2").getBoundingClientRect().top - viewpoint;
        let scriptIf03T = document.querySelector(".box3").getBoundingClientRect().top - viewpoint;
        let scriptIf04T = document.querySelector(".box4").getBoundingClientRect().top - viewpoint;
        let scriptIf05T = document.querySelector(".box5").getBoundingClientRect().top - viewpoint;
        let scriptIf06T = document.querySelector(".box6").getBoundingClientRect().top - viewpoint;
        let aniIf01 = document.querySelector(".ani_box_wrap > div:nth-child(1)");
        let aniIf02 = document.querySelector(".ani_box_wrap > div:nth-child(2)");
        let aniIf03 = document.querySelector(".ani_box_wrap > div:nth-child(3)");
        let aniIf04 = document.querySelector(".ani_box_wrap > div:nth-child(4)");
        let aniIf05 = document.querySelector(".ani_box_wrap > div:nth-child(5)");
        let aniIf06 = document.querySelector(".ani_box_wrap > div:nth-child(6)");
        let aniIf07 = document.querySelector(".ani_box_wrap > div:nth-child(7)");
        let aniIf01T = document.querySelector(".ani_box_wrap > div:nth-child(1)").getBoundingClientRect().top - viewpoint;
        let aniIf02T = document.querySelector(".ani_box_wrap > div:nth-child(2)").getBoundingClientRect().top - viewpoint;
        let aniIf03T = document.querySelector(".ani_box_wrap > div:nth-child(3)").getBoundingClientRect().top - viewpoint;
        let aniIf04T = document.querySelector(".ani_box_wrap > div:nth-child(4)").getBoundingClientRect().top - viewpoint;
        let aniIf05T = document.querySelector(".ani_box_wrap > div:nth-child(5)").getBoundingClientRect().top - viewpoint;
        let aniIf06T = document.querySelector(".ani_box_wrap > div:nth-child(6)").getBoundingClientRect().top - viewpoint;
        let aniIf07T = document.querySelector(".ani_box_wrap > div:nth-child(7)").getBoundingClientRect().top - viewpoint;
        let web01 = document.querySelector(".web_mobile .mbox1");
        let web02 = document.querySelector(".web_mobile .mbox2");
        let web03 = document.querySelector(".web_mobile .mbox3");
        let web04 = document.querySelector(".web_mobile .mbox4");
        let web01T = document.querySelector(".web_mobile .mbox1").getBoundingClientRect().top - viewpoint;
        let web02T = document.querySelector(".web_mobile .mbox2").getBoundingClientRect().top - viewpoint;
        let web03T = document.querySelector(".web_mobile .mbox3").getBoundingClientRect().top - viewpoint;
        let web04T = document.querySelector(".web_mobile .mbox4").getBoundingClientRect().top - viewpoint;
        var tl = gsap.timeline();

        console.log("dd" + aniIf01T)
        if (mobileW <= 767) {
            if (0 >= scriptIf01T) {
                gsap.to(scriptIf01, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= scriptIf02T) {
                gsap.to(scriptIf02, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= scriptIf03T) {
                gsap.to(scriptIf03, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= scriptIf04T) {
                gsap.to(scriptIf04, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= scriptIf05T) {
                gsap.to(scriptIf05, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= scriptIf06T) {
                gsap.to(scriptIf06, {
                    opacity: 1,
                    width:"90%"
                })
            }
            if (0 >= aniIf01T) {
                gsap.to(aniIf01, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf02T) {
                gsap.to(aniIf02, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf03T) {
                gsap.to(aniIf03, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf04T) {
                gsap.to(aniIf04, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf05T) {
                gsap.to(aniIf05, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf06T) {
                gsap.to(aniIf06, {
                    opacity: 1,
                })
            }
            if (0 >= aniIf07T) {
                gsap.to(aniIf07, {
                    opacity: 1,
                })
            }
            if (0 >= web01T) {
                gsap.to(web01, {
                    duration: 0.6,
                    opacity: 1,
                    x: 0
                })
            }
            if (0 >= web02T) {
                gsap.to(web02, {
                    duration: 1,
                    opacity: 1,
                    x: 0
                })
            }
            if (0 >= web03T) {
                gsap.to(web03, {
                    duration: 1,
                    opacity: 1,
                    x: 0
                })
            }
            if (0 >= web04T) {
                gsap.to(web04, {
                    duration: 1,
                    opacity: 1,
                    x: 0
                })
            }
        }
    }
    window.addEventListener("scroll", mobile_ani)
});

