
const tl = gsap.timeline()

let img = document.querySelector('#a')

tl.to('img',{
    y: -(img.offsetHeight * 9),
    duration:5,
    scrollTrigger : {
        trigger : '.slide',
        markers : true,
        start : "top 150",
        end : "bottom 800",
        scrub: 1,
        // pin : true,
    }
})