const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier:  40
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
