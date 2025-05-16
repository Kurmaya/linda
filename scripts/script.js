const center = document.querySelector('.hero-image-holder'), left = document.querySelector('.flower-left'), right = document.querySelector('.flower-right');
document.querySelector('footer span').textContent= new Date().getFullYear();



let tl = gsap.timeline();
function welcome(){
tl.from(center,{
    top:'-200%',
    ease:'power2.out',
    duration:.8,
})
tl.from(left,{
    opacity:0,
    left:'-150%',
    duration:.5,
    // scale:0,
    ease:'power1.out'
})
tl.from('.logo',{
    opacity:0,
    scale:0,
    duration:.5,
    rotation: 100,
    ease:'power1.out'
},'<')
tl.from(right,{
    opacity:0,
    top:'-100%',
    duration:.5,
    // scale:0,
    ease:'power1.out'
},'<')
tl.from('#hero h1',{
    opacity:0,
    scale:0,
    duration:.5,
    ease:'power1.out',
    onComplete() {
        rotate();
    }
},'-=0.1')
}

function rotate(){
    let tl1= gsap.timeline({repeat:-1,yoyo:true});
    tl1.to(left,{
        rotation:-5,
        duration:5,
        scale:0.95,
        ease:'none'
    })
    tl1.to(right,{
        rotation:5,
        scale:0.95,
        duration:5,
        ease:'none'
    },'<')
}

window.addEventListener('load',()=>{
    welcome();

})