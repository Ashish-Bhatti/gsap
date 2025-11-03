// let wrapper = document.querySelector('.wrapper');
let slidesWrap = document.querySelectorAll('.slider-wrap');
let slides = document.querySelectorAll('.slider');

slides.forEach((slide, i) => {
    if (i === slides.length - 1) return;

    let next = slides[i + 1];

    const triggerEl = slidesWrap[i];

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerEl,
            markers: true,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // snap: 1 / (slides.length ), // snap to each slide
            ease: 'none',
        },
    });

    tl.to(slide, {
        yPercent: -100,
        scale: 0.7,
        ease: 'none',
    });
    tl.fromTo(next,
        { scale: 0.7 },
        { scale: 1, ease: 'none' },
        '<' // sync with previous animation
    );
});

let current = 0;
// const

// window.addEventListener('wheel',(e)=>{
//     // console.log(e)

//     e.preventDefault()
//     console.log(e.deltaY)
// },{passive:false})