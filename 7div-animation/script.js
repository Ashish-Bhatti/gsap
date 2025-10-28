// gsap.registerPlugin(ScrollTrigger);

console.log('hehehe');

document.querySelectorAll('div').forEach((div) => {
    gsap.to(div, {
        scale: 0.8,
        opacity: 0,
        // rotateX: 270,
        // duration:2,
        scrollTrigger: {
            trigger: div,
            markers: true,
            start: 'top 100',
            end: 'bottom 100',
            // pin: true,
            // pinSpacing: false,
            scrub: 1,
        },
    });
});
