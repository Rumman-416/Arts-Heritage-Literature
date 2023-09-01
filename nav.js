gsap.to("#nav",{
    backgroundColor:"white",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -20%",
        end:"top -11%",
        scrub:2
    }
})