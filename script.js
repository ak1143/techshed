gsap.to("#second", {
    position: "fixed",
    top:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top 15%",
        scrub:4
    }
});

gsap.to("#third", {
    position: "fixed",
    top:53,
    duration: 1,
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top 15%",
        scrub:4
    }
});
gsap.to("#nav", {
    backgroundColor:"#fefcff",
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top 15%",
        scrub:4
    }
});
gsap.to("#box",{
    x:-200,
    opacity:10,
    duration:5,
    scrollTrigger:{
        trigger:"#box",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
    }
})

