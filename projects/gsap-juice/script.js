// Set initial body background color (first section color)
document.body.style.backgroundImage  = 'radial-gradient(circle, rgba(118, 209, 157, 1) 0%, rgba(37, 155, 87, 1) 100%)';

// Disable browser scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force scroll to top on any reload or new load
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0); // ensures it happens *after* browser restoration
});

let slidesWrap = document.querySelectorAll('.slider-wrap');
let slides = document.querySelectorAll('.slider');
let meanuItem = document.querySelectorAll('.menu');

let a = 'radial-gradient(circle, rgba(118, 209, 157, 1) 0%, rgba(37, 155, 87, 1) 100%)';
let b = 'radial-gradient(circle,rgba(240, 122, 149, 1) 0%, rgba(217, 42, 84, 1) 100%)';
let c = 'radial-gradient(circle,rgba(255, 184, 129, 1) 0%, rgba(255, 126, 61, 1) 100%)';
let d = 'radial-gradient(circle,rgba(171, 114, 219, 1) 0%, rgba(106, 13, 173, 1) 100%)';
let colors = [a, b, c, d];

let currentSlide = 0;
let isAnimating = false;

// positioning animation
function goTo(index) {
    if (index < 0 || index >= slides.length) return;

    isAnimating = true;

    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: '#slide' + (index + 1),
        },
        ease: 'none',
        onComplete: () => {
            currentSlide = index;
            isAnimating = false;
        },
    });

    gsap.to('body', {
        backgroundImage : colors[index],
        duration: 1,
        ease: 'power2.inOut',
    });
}

// wheel control
window.addEventListener('wheel', (e) => {
    if (isAnimating) return;

    if (e.deltaY > 0) {
        goTo(currentSlide + 1);
    } else if (e.deltaY < 0) {
        goTo(currentSlide - 1);
    }
});

// slide animation
slides.forEach((slide, i) => {
    if (i === slides.length - 1) return;

    let next = slides[i + 1];

    const triggerEl = slidesWrap[i];

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerEl,
            // markers: true,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            ease: 'power2.inOut',
        },
    });

    tl.to(slide, {
        yPercent: -100,
        scale: 0.7,
        ease: 'none',
    });
    tl.fromTo(
        next,
        { scale: 0.7 },
        { scale: 1, ease: 'none' },
        '<' // sync with previous animation
    );
});
