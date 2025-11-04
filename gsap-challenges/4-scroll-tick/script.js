console.log('hee');

let meanuItem = document.querySelectorAll('.menu-item');
let sections = document.querySelectorAll('section');

let currentSection = 0;
let direction = null;
let isAnimating = false;

function goTo(index) {
    if (index < 0 || index >= sections.length) return;
    isAnimating = true;

    gsap.to(window, {
        onStart : ()=>{
            console.log('start')
        },
        duration: 1,
        scrollTo: {
            y: "#section"+(index+1),
            autoKill: true,
        },
        ease: 'power2.inOut',
        onComplete: () => {
            currentSection = index;
            isAnimating = false;
            console.log('done')
        },
    });

    // currentSection = index;
    // console.log(currentSection);
}

// meanuItem.forEach((item, idx) => {
//     item.addEventListener('click', () => {
//         gsap.to(window, {
//             duration: 1,
//             scrollTo: {
//                 y: '#section' + (idx + 1),
//                 autoKill: true,
//             },
//             onComplete : () => goTo(idx)
//         });
//     });
// });

window.addEventListener('wheel', (e) => {
    if (isAnimating) return;

    if (e.deltaY > 0) {
        goTo(currentSection + 1);
    } else if (e.deltaY < 0) {
        goTo(currentSection - 1);
    }

    let direction = e.deltaY > 0 ? 'down' : 'up';
    console.log(e.deltaY, direction);
});





// let a = meanuItem[0];
// let b = meanuItem[1];
// let c = meanuItem[2];
// let d = meanuItem[3];

// a.addEventListener('click', () => {
//     gsap.to(window, {
//         duration: 10,
//         scrollTo: '#section1',
//     });
// });

// b.addEventListener('click', () => {
//     gsap.to(window, {
//         duration: 10,
//         scrollTo: '#section2',
//     });
// });

// c.addEventListener('click', () => {
//     gsap.to(window, {
//         duration: 10,
//         scrollTo: '#section3',
//     });
// });

// d.addEventListener('click', () => {
//     gsap.to(window, {
//         duration: 10,
//         scrollTo: '#section4',
//     });
// });
