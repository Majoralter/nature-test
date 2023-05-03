gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "ease", duration: 8})


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        scrub: true,
        pin: true,
        start: "top top",
        end: "bottom+=1000px bottom"
    }
}), 
      imagesLeft = gsap.utils.toArray(".left"),
      imagesRight = gsap.utils.toArray(".right")

      imagesRight.reverse()

imagesLeft.forEach(image => {
    tl.to(image,{
        x: -1000,
        rotate: -180
    })
})  

imagesRight.forEach(image => {
    tl.to(image,{
        x: 1000,
        rotate: 180
    })
})

tl.to(".center", {
    scale: 1.5,
})

const tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-one",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top"
    }
})

tlTwo.to(".one",{
    yPercent: 100
}).to(".two",{
    xPercent: 100
}).to(".three",{
    xPercent: -100
})