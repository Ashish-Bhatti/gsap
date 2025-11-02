const wheel = document.querySelector('.wheel');
const cards = document.querySelectorAll('.wheel-card');

const radius = wheel.offsetWidth / 2;
console.log(radius);

const cardCount = cards.length;

cards.forEach((card, i) => {
    const angle = (i / cardCount) * Math.PI * 2; // full circle (0 to 2π)

    // calculate x and y positions relative to circle center
    const x = Math.cos(angle) * (radius - 50); // minus 30 = keep inside border
    const y = Math.sin(angle) * (radius - 50);

    // move card
    card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}rad)`;

    //gsap
    // when mouse enters
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.2, // how much to enlarge
            duration: 0.3, // speed
            ease: 'power2.out',
        });
    });

    // when mouse leaves
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1, // back to normal
            duration: 0.3,
            ease: 'power2.inOut',
        });
    });
});

gsap.to(wheel, {
    rotate: -360,
    ease: 'none',
    scrollTrigger: {
        trigger: wheel,
        markers: true,
        start: 'top bottom',
        end: '5000 bottom',
        scrub: 1,
    },
});
