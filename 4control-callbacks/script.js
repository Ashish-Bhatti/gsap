console.log("Animation started");

function onupdate (){
    console.log('ppppp')
}

let div = document.querySelector('.border')
let box = document.querySelector('#box')

let tl = gsap.timeline({ defaults: { duration: 4, } })

tl.to(box, {
    x: () => div.offsetWidth - box.offsetWidth,
    rotate: 1080,
    ease: 'none',
    onComplete: () => { console.log('animation done') },
    onUpdate : onupdate,
})

let play = document.getElementById('play')
play.addEventListener('click', () => {
    tl.play()
})

let pause = document.getElementById('pause')
pause.addEventListener('click', () => {
    tl.pause()
})

let resume = document.getElementById('resume')
resume.addEventListener('click', () => {
    tl.resume()
})

let reverse = document.getElementById('reverse')
reverse.addEventListener('click', () => {
    tl.reverse()
})

let restart = document.getElementById('restart')
restart.addEventListener('click', () => {
    tl.restart()
})