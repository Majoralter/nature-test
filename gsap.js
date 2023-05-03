// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "ease", duration: 8})


// define a new timeline and use the container for the images as the trigger (check HTML for reference to this element)
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
// I converted the images on the left and right of the viewport (excluding the central image) to elements in an array [this is explaining what is above this comment]
// I reversed the array of the images on the right so the last image rotates off the viewport first
      imagesRight.reverse()

// basic animation with timeline defined earlier and array forEach() method
imagesLeft.forEach(image => {
    tl.to(image,{
        x: -1000,
        rotate: -180
    })
})  

//same code as above
imagesRight.forEach(image => {
    tl.to(image,{
        x: 1000,
        rotate: 180
    })
})

// when the images on the left and right are done animating scale the central image up and the animation ends
tl.to(".center", {
    scale: 1.5,
})

// define a new timeline (I tried to access both trigger containers in one timeline but for some reason it didn't work lol)
const tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-one",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top"
    }
})


// animate each div in the second section into the screen with the defined timeline above
tlTwo.to(".one",{
    yPercent: 100
}).to(".two",{
    xPercent: 100
}).to(".three",{
    xPercent: -100
})

// Hope this helps!