let div = document.querySelector('div');
let main = document.querySelector('main');

let tl = gsap.timeline({ defaults: { duration: 1, ease: 'none' } });

console.log(main.offsetWidth);

tl.to(div, {
    x: main.offsetWidth - div.offsetWidth,
})
    .to(div, {
        y: main.offsetHeight - div.offsetHeight,
    })
    .to(div, {
        x: 0,
    })
    .to(div, {
        y: 0,
    })
    .to(div,{
        duration:0.25,
        opacity:0
    },'-=0.25')