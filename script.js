//git push --set-upstream origin master

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
    y:-40,
    x:-40,
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
    y:40,
    x:40,
    scrollTrigger:{
        trigger:"#quote2",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 85%",
        scrub:3
    }
})

const clip=document.querySelectorAll('.clip');
for(let i=0; i<clip.length;i++){
    clip[i].addEventListener('mouseenter',function(e){
        console.log("Enter")
        clip[i].play()
    })
    clip[i].addEventListener('mouseout',function(e){
        clip[i].pause()
        console.log("Ecit")
    })
}

const slides = document.querySelectorAll(".slide")
var counter =0
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}