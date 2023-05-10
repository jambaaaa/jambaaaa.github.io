
//-----------------HOME----------------//
let text = document.getElementById('text')
let h6text = document.getElementById('h6text')
let left = document.getElementById('left')
let right = document.getElementById('right')
let Mbean = document.getElementById('Mbean')
let Lbean = document.getElementById('Lbean')
let Rbean = document.getElementById('Rbean')

window.addEventListener('scroll', () =>{
    let value = window.scrollY

    text.style.marginBottom = value * 3 + 'px';
    text.style.marginLeft = value * 3 + 'px';
    h6text.style.marginBottom = value * 3 + 'px';
    h6text.style.marginLeft = value * 3 + 'px';
    left.style.left = value * 1.5 + 'px';
    right.style.left = value * -1.5 + 'px';
   

})

