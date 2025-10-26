console.log('123')

// gsap.to('.box',{
//     x: 500,
//     delay:1,
//     rotate: 360,
//     duration : 2,
// })

// gsap.to('.box',{
//     y: 500,
//     delay:3,
//     rotate: 0,
//     duration : 2,
// })

let tl = gsap.timeline({defaults : {duration : 2}})

tl.to("#green", {
    x: 600,
    rotate: 360,

    delay: 1,
});
tl.to("#green", {
    y: 500,
    rotate: 720,
})


// it's for red
tl.to("#red", {
    x: 600,
    rotate: 360,
},"-=150%");
tl.to("#red", {
    y: 500,
    rotate: 720,
})
