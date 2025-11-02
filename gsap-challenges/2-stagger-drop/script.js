console.log(123)

let main = document.querySelector('main')
let div = document.querySelectorAll('div')

let tl = gsap.timeline({defaults : {duration : 2}})

tl.from(div,{
    duration : 5,
    y: -main.offsetHeight,
    ease : 'elastic.out(1.2,1)',
    stagger : .1,
})
tl.to(div,{
    y: main.offsetHeight,
    ease : 'elastic.in(1,1)',
    stagger : .1,

})