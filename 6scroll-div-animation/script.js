gsap.registerPlugin(ScrollTrigger);

console.log('animation start')

let tl = gsap.timeline({
    defaults: {
        // duration: 2,
    },
//     scrollTrigger: {
//     trigger: ".hero",     // section that triggers the animation
//     start: "top top",  // when top of hero hits center of viewport
//     end: "+=2000",    // end point of scroll trigger
//     scrub: true,          // smooth scrubbing (connects scroll position to animation)
//     pin: true,           // optional: pin the section during animation
//     markers: true         // show start/end markers (for debugging)
//   },
})

tl.from('.b', {
        xPercent: 100,
        // delay: 2,
    },'>')
    .from('.c', {
        xPercent: -100,
    },'>')
    .from('.d', {
        yPercent: -100,
    },'>')


ScrollTrigger.create({
    animation: tl,
    trigger: '.hero',
    markers: true,
    start: 'top top',
    // end: '+=4000',
    scrub: 2,
    pin: true,
})