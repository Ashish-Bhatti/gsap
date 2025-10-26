console.log('ehhh')

// gsap.from('#box', {
//     y: -400,
//     duration: 5,
// })

// gsap.to('#box1', {
//     x: 900,
//     duration: 2,
//     rotation: 360,
//     repeat: 1,
//     // repeatDelay:2,
//     delay: 2,
//     // yoyo: true,
//     ease: 'bounce',
// })

// gsap.to('#box2', {
//     x: 900,
//     duration: 2,
//     rotation: 360,
//     repeat: 1,
//     // repeatDelay:2,
//     delay: 2,
//     // yoyo: true,
//     ease: 'none',
// })

gsap.to('.box', {

    rotate: 360,
    duration: 1,
    stagger: .1,
    opacity: 1,
    ease: 'sine.out',
    delay: 2,
})

let boxes = document.querySelectorAll('.box');
console.log(boxes)

boxes.forEach((element, index) => {
    element.addEventListener('click', () => {
        gsap.to('.box', {
            y: -100,
            opacity: 0,
            duration: 0.5,
            stagger: {
                from: index,
                amount: 1,
            }
        })
    })
});