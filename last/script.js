function mybtn() {
    document.getElementById('navs').classList.toggle('active')
}

let line1 = document.querySelector('.announce')


window.onscroll = () => { 
    let fa = window.scrollY + -1500;
   line1.style.left = `${fa}px`

}



const content = document.querySelector('section') 
let currentPosition = window.pageYOffset;

function skewEffect() {
  const newPosition = window.pageYOffset;
  const dif = newPosition - currentPosition;
  
  let skew = dif*.2;
  let rotate = dif*.1;

 content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}


skewEffect();