gsap.to("#nav",{
    backgroundColor:"white",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -20%",
        end:"top -11%",
        scrub:2
    }
})