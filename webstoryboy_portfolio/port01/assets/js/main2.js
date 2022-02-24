window.addEventListener('DOMContentLoaded', () => {


    /* sec1 */
    function main(){
        let maintit = document.querySelector(".sec1 .maintit h2")
        let face = document.querySelector(".sec1 .face")
        var tl = gsap.timeline();

        tl.to(maintit, {
            duration: 2,
            y: "-7vw",
            opacity: 1,
        })
        tl.to(face, {
            duration: 1,
            width: "27vw",
            height: "27vw",
            opacity: 1,
        })
    }
    main();

    /* sec2 */
    // sec2 Line, Exposition
    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        const sec2Top =
            window.pageYOffset +
            document.querySelector(".sec2").getBoundingClientRect().top;

        if (scroll >= sec2Top) {
            document.querySelector(".sec2 h2").classList.add("active")
        }
    });


    // sec2 about

    window.addEventListener("scroll", () => {
        let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.scrollY;
        let viewpoint = window.innerHeight / 2;
        let abouttit = document.querySelector(".sec2 h2")
        const aboutTop=
        window.pageYOffset +
        abouttit.getBoundingClientRect().top;
        if(scroll >= aboutTop - viewpoint)
        gsap.to(abouttit, {
            duration: 1,
            opacity: 1,
            y: 0,
        })
    })

    document
        .querySelectorAll(".sec2 .txt-wrap .split")
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
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
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
        // if (scroll >= aboutTop - viewpoint) {
        //     document.querySelectorAll(".sec2 .txt-wrap span").forEach((el, index) => {
        //         setTimeout(() => {
        //             el.classList.add("active");
        //         }, 25 * (index + 1));
        //     })
        // }
    });

    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 1.5;
        const korTop =
            window.pageYOffset +
            document.querySelector("#section2 .sec2 .txt-wrap .kor").getBoundingClientRect().top;

        if (scroll >= korTop - viewpoint) {
            gsap.to(".sec2 .txt-wrap .kor em", {
                duration: 0.3,
                stagger: 0.3,
                opacity: 1,
                ease: "bounce.out"
            })
        }
    })
    // sec2 sign
    // var path = document.querySelector(".sign");
    // var length = path.getTotalLength();
    // console.log(length);

    /* sec4 */


    //angel
    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let textRight = document.querySelector(".text-box div:nth-child(2)").getBoundingClientRect().x;

        if (textRight == 0) {
            angelDown()
        } else {
            angelUp()
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



    //red

    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let redTop = document.querySelector(".red").clientHeight;
        let offset = (window.pageYOffset - redTop) * 0.075;
        let offset3 = (window.pageYOffset - redTop) * 0.03;
        let img1 = document.querySelector(".red .red_img01")
        let img2 = document.querySelector(".red .red_img02")
        let img3 = document.querySelector(".red .red_img03")
        let img4 = document.querySelector(".red .red_img04")
        let img5 = document.querySelector(".red .red_img05")
        let img6 = document.querySelector(".red .red_img06")
        let img7 = document.querySelector(".red .red_img07")
        let img8 = document.querySelector(".red .red_img08")
        // console.log(scroll)
        // console.log(redTop)
        // console.log("of : " + offset)

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
    });

    //red img scale

    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 3.5;
        let img1 = document.querySelector(".red .red_img01 img")
        let img2 = document.querySelector(".red .red_img02 img")
        let img3 = document.querySelector(".red .red_img03 img")
        let img4 = document.querySelector(".red .red_img04 img")
        let img5 = document.querySelector(".red .red_img05 img")
        let img6 = document.querySelector(".red .red_img06 img")
        let img7 = document.querySelector(".red .red_img07 img")
        let img8 = document.querySelector(".red .red_img08 img")
        let img1top = document.querySelector(".red .red_img01 img").getBoundingClientRect().top + scroll - viewpoint,
            img2top = document.querySelector(".red .red_img02 img").getBoundingClientRect().top + scroll - viewpoint,
            img3top = document.querySelector(".red .red_img03 img").getBoundingClientRect().top + scroll - viewpoint,
            img4top = document.querySelector(".red .red_img04 img").getBoundingClientRect().top + scroll - viewpoint,
            img5top = document.querySelector(".red .red_img05 img").getBoundingClientRect().top + scroll - viewpoint,
            img6top = document.querySelector(".red .red_img06 img").getBoundingClientRect().top + scroll - viewpoint,
            img7top = document.querySelector(".red .red_img07 img").getBoundingClientRect().top + scroll - viewpoint,
            img8top = document.querySelector(".red .red_img08 img").getBoundingClientRect().top + scroll - viewpoint;


        // console.log(scroll + img1.getBoundingClientRect().top)
        // console.log("scroll :" + scroll)

        if (scroll > img1top) {
            gsap.to(img1, {
                scale: 1.1
            })
        } else {
            gsap.to(img1, {
                scale: 1
            })
        }

        if (scroll > img2top) {
            gsap.to(img2, {
                scale: 1.1
            })
        } else {
            gsap.to(img2, {
                scale: 1
            })
        }

        if (scroll > img3top) {
            gsap.to(img3, {
                scale: 1.1
            })
        } else {
            gsap.to(img3, {
                scale: 1
            })
        }

        if (scroll > img4top) {
            gsap.to(img4, {
                scale: 1.1
            })
        } else {
            gsap.to(img4, {
                scale: 1
            })
        }

        if (scroll > img5top) {
            gsap.to(img5, {
                scale: 1.1
            })
        } else {
            gsap.to(img5, {
                scale: 1
            })
        }

        if (scroll > img6top) {
            gsap.to(img6, {
                scale: 1.1
            })
        } else {
            gsap.to(img6, {
                scale: 1
            })
        }

        if (scroll > img7top) {
            gsap.to(img7, {
                scale: 1.1
            })
        } else {
            gsap.to(img7, {
                scale: 1
            })
        }

        if (scroll > img8top) {
            gsap.to(img8, {
                scale: 1.1,
                y: -200
            })
        } else {
            gsap.to(img8, {
                scale: 1
            })
        }


    });


    //red typo

    window.addEventListener("scroll", (e) => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 3.5;
        let looktop = document.querySelector(".red h2:nth-child(2)").getBoundingClientRect().top + scroll - viewpoint
        let red_typo1 = document.querySelector(".red h2:nth-child(1)")
        let red_typo2 = document.querySelector(".red h2:nth-child(2)")
        let red_typo3 = document.querySelector(".red h2:nth-child(3)")
        let red_typo4 = document.querySelector(".red h2:nth-child(4)")
        let red_typo5 = document.querySelector(".red h2:nth-child(5)")



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

        // console.log(looktop)
        //typo


    });


    //cube
    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let redTop = document.querySelector(".red").clientHeight;
        let offset2 = (window.pageYOffset - redTop) * 0.5;
        let redbottom = document.querySelector(".red").getBoundingClientRect().bottom;
        let cube = document.querySelector(".sec4 .cube__wrap .cube")

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
        // console.log(redbottom);
    })





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


    function boy_heart() {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        const boy_heart = document.querySelector(".sec4 .angel .angel_heart")
        let anitext = document.querySelector(".sec4 .animation .ani-text em:nth-child(6)").getBoundingClientRect().left;
        let angelTop = document.querySelector(".sec4 .angel .angel_img").getBoundingClientRect();

        if (scroll > 49000) {
            gsap.to(boy_heart, {
                duration: 2,
                width: "200vw",
                height: "200vw",
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
    }
    window.addEventListener("scroll", boy_heart)

    /* sec5 */
    {
        let x = 0;
        let y = 0;

        const library = document.querySelector(".sec5 .lib_cont");

        library.addEventListener("mousemove", function (e) {
            const library_rect = library.getBoundingClientRect();

            library.style.setProperty("--x", e.clientX - ((library_rect.width / 2) + library_rect.left));
            library.style.setProperty("--y", e.clientY - ((library_rect.height / 2) + library_rect.top));

        });
    }

    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 3.5;
        let txtwrap = document.querySelector(".sec5 .library .lib_cont .lib_text")
        let libwrap = document.querySelector(".sec5 .library")
        let txtwrapTop = txtwrap.getBoundingClientRect().top
        let libwrapTop = libwrap.getBoundingClientRect().y;
        let txt1 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(1)")
        let txt2 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(2)")
        let txt3 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(3)")
        let txt4 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(4)")
        let txt5 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(5)")
        let txt6 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(6)")
        let txt7 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(7)")
        let txt8 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(8)")
        let txt9 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(9)")
        let txt10 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(10)")
        let eye = document.querySelector(".sec5 .eye")
        let cotton = document.querySelector(".sec5 .cotton img")
        let wall = document.querySelector(".sec5 .wall img")
        let girl = document.querySelector(".sec5 .girl img")
        let tree = document.querySelector(".sec5 .tree img")
        let eyeTop = document.querySelector(".sec5 .eye").getBoundingClientRect().top - viewpoint
        let cottonTop = document.querySelector(".sec5 .cotton").getBoundingClientRect().top - viewpoint
        let wallTop = document.querySelector(".sec5 .wall").getBoundingClientRect().top - viewpoint
        let girlTop = document.querySelector(".sec5 .girl").getBoundingClientRect().top - viewpoint
        let treeTop = document.querySelector(".sec5 .tree").getBoundingClientRect().top - viewpoint


        let frame = document.querySelector(".sec5 .library .lib_cont .frameout")

        let offset = (window.pageYOffset - txtwrapTop) * 0.08;
        let offset2 = (window.pageYOffset - txtwrapTop) * 0.05;
        let offset3 = (txtwrapTop) * 0.3;
        let offset4 = (txtwrapTop) * 0.1;

        if (scroll >= txtwrapTop) {
            gsap.to(txt1, {
                duration: 0.3,
                x: offset,
            })
            gsap.to(txt2, {
                duration: 0.3,
                x: -offset,
            })
            gsap.to(txt3, {
                duration: 0.3,
                x: offset,
            })
            gsap.to(txt4, {
                duration: 0.3,
                x: -offset,
            })
            gsap.to(txt5, {
                duration: 0.3,
                x: offset,
            })
            gsap.to(txt6, {
                duration: 0.3,
                x: -offset,
            })
            gsap.to(txt7, {
                duration: 0.3,
                x: offset,
            })
            gsap.to(txt8, {
                duration: 0.3,
                x: -offset,
            })
            gsap.to(txt9, {
                duration: 0.3,
                x: offset,
            })
            gsap.to(txt10, {
                duration: 0.3,
                x: -offset,
            })
            gsap.to(frame, {
                duration: 0.3,
                y: -offset3,
            })
            gsap.to(wall, {
                duration: 0.3,
                x: offset4,
            })
            gsap.to(girl, {
                duration: 0.3,
                x: offset4,
            })
            gsap.to(tree, {
                duration: 0.3,
                x: offset4,
            })
        }
    });

    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 2;
        let txtwrap = document.querySelector(".sec5 .library .lib_cont .lib_text")
        let libwrap = document.querySelector(".sec5 .library")
        let eye = document.querySelector(".sec5 .eye")
        let eyeTop = document.querySelector(".sec5 .eye").getBoundingClientRect().top - viewpoint

        console.log(eyeTop)
        if(eyeTop <= 0) {
            gsap.to(eye, {
                duration: 0.1,
                opacity: 1
            })
        } 

    });


    /* webline */
    window.addEventListener("scroll", () => {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight * 2;
        let libwrap = document.querySelector(".sec5 .library")
        let libwrapbot = document.querySelector(".sec5 .library").getBoundingClientRect().bottom - viewpoint
        let libText = document.querySelector(".sec5 .library .lib_cont .lib_text")
        let crisis = document.querySelector(".sec5 .crisis")
        console.log(libwrapbot)
        
        if(libwrapbot <= 0) {
            libText.classList.add("active")
            gsap.to(crisis, {
                delay: 1,
                duration: 2,
                y: "100vw",
                ease: "power4.out"
            })
        }
    })
    
    
    /* sec6 */
    //cursor

    // window.addEventListener("mousemove", function(e){
    //     let viewcursor = document.querySelector(".sec6 .viewcursor")
    //     let viewcursorRectW = viewcursor.getBoundingClientRect().width;
    //     let viewcursorRectH = viewcursor.getBoundingClientRect().height;
    //     let offsetX = window.pageXOffset
    //     let offsetY = window.pageYOffset

    //     document.querySelectorAll(".sec6 .web_cont .web_mock").forEach((elem) => {
    //         elem.addEventListener("mouseenter", () => {
    //             gsap.to(viewcursor, {
    //                 duration: 0.6,
    //                 width: "50px",
    //                 height: "50px",
    //                 opacity: 1,
    //                 fontSize: "12px",
    //                 ease: "bounce.out",
    //             })
    //         });
    //         elem.addEventListener("mouseleave", () => {
    //             gsap.to(viewcursor, {
    //                 duration: 0.6,
    //                 width: "0px",
    //                 height: "0px",
    //                 opacity: 0,
    //                 fontSize: "0px",
    //                 ease: "bounce.out",
    //             })
    //         });
    //     });

    //     // gsap.to(viewcursor, {duration: 0.3, left: e.pageX -50, top: e.clientY});
    // })


    //web site
    new hoverEffect({
        parent: document.querySelector(".sec6 .web_site_box01 .distortion"),
        intensity: 0.2,
        // image1: ".sec6 .web01",
        // image2: ".sec6 .web01",
        image1: "../assets/img/mock-webs.gif",
        image2: "../assets/img/mock-webs.gif",
        displacementImage: "../assets/img/diss.png"
    });
    new hoverEffect({
        parent: document.querySelector(".sec6 .web_site_box02 .distortion"),
        intensity: 0.2,
        // image1: ".sec6 .web01",
        // image2: ".sec6 .web01",
        image1: "../assets/img/mock-RS2-1.png",
        image2: "../assets/img/mock-RS2-1.png",
        displacementImage: "../assets/img/diss.png"
    });
    new hoverEffect({
        parent: document.querySelector(".sec6 .web_site_box03 .distortion"),
        intensity: 0.2,
        // image1: ".sec6 .web01",
        // image2: ".sec6 .web01",
        image1: "../assets/img/mock-mega.png",
        image2: "../assets/img/mock-mega.png",
        displacementImage: "../assets/img/diss.png"
    });
    new hoverEffect({
        parent: document.querySelector(".sec6 .web_site_box04 .distortion"),
        intensity: 0.2,
        // image1: ".sec6 .web01",
        // image2: ".sec6 .web01",
        image1: "../assets/img/mock-PHP01.png",
        image2: "../assets/img/mock-PHP01.png",
        displacementImage: "../assets/img/diss.png"
    });




    /* sec7 */

    let contactView = 1

    function contactAni() {
        let scroll =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;
        let viewpoint = window.innerHeight / 2;
        let sec7 = document.querySelector(".sec7");
        let sec7A = document.querySelectorAll(".sec7 *");
        let sec7Top = document.querySelector(".sec7").getBoundingClientRect().top;
        let cb_p1 = document.querySelector(".sec7 .cb_p1")
        let cb_p2 = document.querySelector(".sec7 .cb_p2")
        let nar = document.querySelector(".sec7 .contact_before h3")
        let con_left = document.querySelectorAll(".sec7 .contact .contact_left *")
        let con_right = document.querySelectorAll(".sec7 .contact .contact_right *")
        var tl = gsap.timeline();

        console.log(contactView)
        if (sec7Top <= 0 && contactView == 1) {
            contactView++
            tl.to(sec7, {
                duration: 2,
                background: "#c4c4c4",
                ease: "power4.out"
            })
            tl.to(cb_p1, {
                delay: 1,
                duration: 1,
                opacity: 1,
                ease: "power4.out"
            })
            tl.to(cb_p2, {
                delay: .5,
                duration: 1,
                opacity: 0.5,
                ease: "power4.out"
            })
            tl.to(cb_p1, {
                delay: 2,
                duration: 2,
                opacity: 0,
                ease: "power4.out"
            })
            tl.to(cb_p2, {
                duration: 2,
                opacity: 0,
                ease: "power4.out"
            })
            tl.to(nar, {
                delay: .5,
                duration: 1,
                opacity: 1,
                ease: "power4.out"
            })
            tl.to(nar, {
                delay: 3.5,
                duration: 1,
                opacity: 0,
                ease: "power4.out"
            })
            tl.to(con_left, {
                delay: 2,
                duration: 3,
                opacity: 1,
                stagger: 0.8,
                ease: "power4.out"
            })
            tl.to(con_right, {
                duration: 3,
                opacity: 1,
                stagger: 0.8,
                ease: "power4.out"
            })
        }
    }
    window.addEventListener("scroll", contactAni)

    // function contact_kill(){
    //     let scroll =
    //         window.pageYOffset ||
    //         document.documentElement.scrollTop ||
    //         window.scrollY;
    //     let viewpoint = window.innerHeight / 2;
    //     let sec7 = document.querySelector(".sec7");
    //     let sec7A = document.querySelectorAll(".sec7 *");
    //     let sec7Top = document.querySelector(".sec7").getBoundingClientRect().top;
    //     let cb_p1 = document.querySelector(".sec7 .cb_p1")
    //     let cb_p2 = document.querySelector(".sec7 .cb_p2")
    //     let nar = document.querySelector(".sec7 .contact_before h3")
    //     let con_left = document.querySelectorAll(".sec7 .contact .contact_left *")
    //     let con_right = document.querySelectorAll(".sec7 .contact .contact_right *")
    //     var tl = gsap.timeline();

    //     if(sec7Top > 0) {
    //     }
    // }

    /* contact */



    // window.addEventListener("scroll", () => {
    //     let scroll =
    //         window.pageYOffset ||
    //         document.documentElement.scrollTop ||
    //         window.scrollY;
    //     let viewpoint = window.innerHeight / 1;
    //     let libwrap = document.querySelector(".sec5 .library")
    //     let libwrapbot = libwrap.getBoundingClientRect().bottom - viewpoint;
    //     let txt1 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(1)")
    //     let txt2 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(2)")
    //     let txt3 = document.querySelector(".sec5 .library .lib_cont .lib_text div:nth-child(3)")
    //     let frame = document.querySelector(".sec5 .library .lib_cont .frameout")
    //     let eye = document.querySelector(".sec5 .library .lib_cont .eye")
    //     let sec5 = document.querySelector(".sec5")

    //     if(libwrapbot <= 0) {
    //         gsap.to(txt1, {
    //             duration: 1,
    //             opacity: 0,
    //             ease: "power4.out"
    //         })
    //         gsap.to(txt2, {
    //             delay: 1,
    //             duration: 1,
    //             opacity: 0,
    //             ease: "power4.out"
    //         })
    //         gsap.to(txt3, {
    //             delay: 2,
    //             duration: 1,
    //             opacity: 0,
    //             ease: "power4.out"
    //         })
    //         gsap.to(eye, {
    //             delay: 3,
    //             duration: 1,
    //             opacity: 0,
    //             ease: "power4.out"
    //         })
    //         gsap.to(sec5, {
    //             delay: 4,
    //             duration: 2,
    //             background: "#000",
    //             ease: "power4.out"
    //         })
    //     }
    // })


    // function web_tit() {
    //     let scroll =
    //         window.pageYOffset ||
    //         document.documentElement.scrollTop ||
    //         window.scrollY;
    //     let viewpoint = window.innerHeight / 1.5;
    //     let webtit = document.querySelector(".sec5 .web .web_tit")
    //     let webtitTop = webtit.getBoundingClientRect().top + scroll - viewpoint;

    //     if (scroll >= webtitTop) {
    //         gsap.to(webtit, {
    //             duration: 1,
    //             fontSize: "16vw",
    //             color: "#000000",
    //         })
    //     } else {
    //         gsap.to(webtit, {
    //             duration: 1,
    //             fontSize: "0vw",
    //             color: "#ffffff"
    //         })
    //     }

    // }
    // window.addEventListener("scroll", web_tit)

    //word



    /* dom */
});