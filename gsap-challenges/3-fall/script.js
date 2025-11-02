console.log(123);

let main = document.querySelector('main');
let box = document.querySelector('.box');
let land = document.querySelector('.land');

let tl = gsap.timeline({
    defaults: {
        duration: 1.8
    },
     scrollTrigger: {
        trigger: 'main', // The element that defines the start/end points
        start: "top 100",               // When the top of the trigger hits the center of the viewport
        end: "1000 800",                     // Scroll distance: Animation ends 2000px after it starts
        scrub: 1,                          // Links scrollbar to timeline: 1 second lag for smooth follow
        pin: true,                         // Optional: Pin the trigger element during the animation
        pinSpacing:false,
        markers: true                      // Optional: Shows visual markers for debugging
    }
});

tl.to(box, {
    x: land.offsetWidth - box.offsetWidth/2,
    ease: 'none',
    delay:.5,
})
.to(box, {
    duration:.5,
    xPercent: 70,
    yPercent: 50,
    rotate: 90,
    ease: "power3.in",
},"-=0.2")
.to(box,{
    y : main.offsetHeight - box.offsetHeight*2,
    duration:1.2,
    ease:"bounce.out"
},"-=0.1")
