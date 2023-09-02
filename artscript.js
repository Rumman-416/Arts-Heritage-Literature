// Shery.mouseFollower();
Shery.hoverWithMediaCircle(".hvr",{videos:["images/a1.mp4","images/a2.mp4","images/a3.mp4"] });
Shery.makeMagnet(".magnet");

gsap.to(".fleftlm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });


let sections = document.querySelectorAll(".fleftlm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});