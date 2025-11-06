let smoother = ScrollSmoother.create({
    // wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    smoothTouch: 0.1, // smaller value for phone otherwise it will effect user experience
    effects: true,
});

// scrollTo with smoother
/* let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: '#c',
    });

    // smoother.scrollTo('#c', true, 'center center')
}); */

// effects
/* smoother.effects('.box', {
    speed: 0.5,
    lag: (i) => i * 1,
}); */

// scrollTrigger
/* ScrollTrigger.create({
    pin:'.a',
    start:'top center',
    end:"+=300",
    markers:true,
})
 */

let a = document.querySelector('.a');
a.style.opacity = 0;



gsap.to('.a', {
    rotate: 360,
    // opacity: 1,
    scrollTrigger: {
        trigger: '.a',
        markers: true,
        start: 'top center',
        end: '+=400',
        pin: true,
        scrub: true,
        onEnter: () => gsap.set('.a', { opacity: 1}),
        onEnterBack: () => gsap.set('.a', { opacity: 1 }),
        onLeaveBack: () => gsap.set('.a', { opacity: 0 }),
        onLeave: () => gsap.set('.a', { opacity: 0 }),
    },
});
