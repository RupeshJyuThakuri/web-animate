gsap.to("header .navigation", {
    // delay: 2,
    duration: 4,
    opacity: 1,
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "header .navigation",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -30%",
        scrub:2
    }
})

let tl1 = gsap.timeline()
tl1.from("nav a svg", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5,
})
tl1.from("nav ul li a", {
    opacity: 0,
    stagger:0.1,
    y: -20,
    duration: 1,
})
tl1.from("nav i", {
    opacity: 0
})

gsap.from(".slider-text-main",{
    opacity: 0,
    scale: 0.7,
    duration: 1,
    delay: 1
})
gsap.from(".slider-text-para",{
    opacity: 0,
    delay: 0.5,
    duration: 1,
})
gsap.from("#learn-more-btn",{
    opacity: 0,
    delay: 0.5,
    duration: 1,
})

gsap.from(".left-image-div .img-wrapper1", {
    x: 300,
    y: -25,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-image-div .img-wrapper1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 10%"
    }
})
gsap.from(".left-image-div .img-wrapper2", {
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-image-div .img-wrapper2",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 10%"
    }
})
gsap.from(".left-image-div .img-wrapper3", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-image-div .img-wrapper3",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 10%"
    }
})
gsap.from(".left-image-div .img-wrapper4", {
    x: 300,
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-image-div .img-wrapper4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 10%"
    }
})
gsap.from(".left-image-div .img-wrapper5", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".left-image-div .img-wrapper5",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 0%"
    }
})
gsap.from(".second-page-right-text-div h6", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".second-page-right-text-div h6",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 0%"
    }
})
gsap.from(".second-page-right-text-div h2", {
    opacity: 0,
    y:100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".second-page-right-text-div h2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".second-page-right-text-div p", {
    opacity: 0,
    y:40,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".second-page-right-text-div p",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".second-page-right-text-div #aboutUs-btn", {
    scale: 1.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".second-page-right-text-div #aboutUs-btn",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})

// our services
gsap.from(".our-services .text-section h6", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".our-services .text-section h6",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 0%"
    }
})
gsap.from(".our-services .text-section h2", {
    opacity: 0,
    y:100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".our-services .text-section h2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".our-services .text-section p", {
    opacity: 0,
    y:50,
    duration: 1,
    scrollTrigger: {
        trigger: ".our-services .text-section p",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".cart-section-div", {
    y:15,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".cart-section-div",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from(".cart-section-div .circle img", {
    scale:1.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".cart-section-div .circle img",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 0%"
    }
})

// our team
gsap.from(".our-team .our-team-text-div h6", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".our-team .our-team-text-div h6",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 0%"
    }
})
gsap.from(".our-team .our-team-text-div h2", {
    opacity: 0,
    y:100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".our-team .our-team-text-div h2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".our-team .our-team-text-div p", {
    opacity: 0,
    y:50,
    duration: 1,
    scrollTrigger: {
        trigger: ".our-team .our-team-text-div p",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".our-team .our-team-cart-div", {
    scale: 1.25,
    duration: 1,
    scrollTrigger: {
        trigger: ".our-team .our-team-cart-div",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 0%"
    }
})

// comment section
gsap.from(".cmt-section .second", {
    scale: 0,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".cmt-section .second",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".cmt-section .forth", {
    x: 500,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".cmt-section .forth",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})

// price section

gsap.from(".price-section .price-section-card .price-section-card-box-2", {
    scale:1.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".price-section .price-section-card .price-section-card-box-2",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 0%"
    }
})
// still have question

gsap.from(".still-have-question-div h3", {
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".still-have-question-div h3",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})
gsap.from(".still-have-question-div button", {
    scale: 1.4,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".still-have-question-div button",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})

// our blog section
gsap.from(".our-blog .our-blog-text-div h6", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".our-blog .our-blog-text-div h6",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 0%"
    }
})
gsap.from(".our-blog .our-blog-text-div h2", {
    opacity: 0,
    y:100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".our-blog .our-blog-text-div h2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 0%"
    }
})

gsap.to(".our-blog .our-blog-slide-div", {
    transform:"translateX(-500%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".our-blog",
        scroller: "body",
        // markers: true,
        start: "top 14%",
        end: "top -150%",
        pin: true,
        // pinSpacing: false,
        scrub: 2
    }
})
gsap.from(".for-btn #see-more-article-btn", {
    scale: 1.2,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".for-btn #see-more-article-btn",
        scroller: "body",
        // markers: true,
        start: "top -60%",
        end: "top 0%"
    }
})

// footer
gsap.from(".upperdiv", {
    y: 100,
    opacity:0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".upperdiv",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".lower-div #lower-div-left", {
    x: -300,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".lower-div #lower-div-left",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 0%"
    }
})
gsap.from(".lower-div #lower-div-right", {
    x: 300,
    opacity:0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".lower-div #lower-div-right",
        scroller: "body",
        // markers: true,
        start: "top 98%",
        end: "top 0%"
    }
})