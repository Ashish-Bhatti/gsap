gsap.to('.box', {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    duration: 1,
    // repeat: 1,
    // yoyo: true,
    ease: 'power.inOut',
    stagger: {
        yoyo: true,
        repeat: -1,
        grid: [9, 15],
        from: 'center',
        // axis:'y',
        // amount: 1.5,
        each: .2,
    }
})