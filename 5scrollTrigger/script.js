gsap.registerPlugin(ScrollTrigger);

console.log('animation start')

gsap.to('.c', {
    x: 1200,
    rotate : 720,
    // duration: 2,
    scrollTrigger: {
        trigger: '.c',
        start: 'top 800 ',
        end : '20 200',
        markers : true,
        scrub : 2,
        pin : true,
    },
})


