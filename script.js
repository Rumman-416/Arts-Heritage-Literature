//git push --set-upstream origin master

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

gsap.to("#main",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:"true",
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#quote1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        //markers:true,
        start:"top 35%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from("#quote2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#quote2",
        scroller:"body",
        //markers:true,
        start:"top 105%",
        end:"top 85%",
        scrub:3
    }
})

const clip=document.querySelectorAll('.clip');
for(let i=0; i<clip.length;i++){
    clip[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    clip[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

const slides = document.querySelectorAll(".slide")
var counter =0
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}