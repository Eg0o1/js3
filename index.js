let share = document.getElementById('box');
let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.btn-close');
let avatar = document.querySelector('.avatar');
let miniNav = document.querySelector('.mini-nav');
let container = document.querySelector('.container');
// let mobile = document.matchMedia('max-width("500px")')

// if(matchMedia('(max-width="500px")'))
// {
//     openBtn.onclick = function(){
//     share.classList.remove('hide');
//     avatar.classList.add('hide');
//     this.classList.add('hide');
//     closeBtn.classList.remove('hide')
// }
// closeBtn.onclick = function(){
//     share.classList.add('hide');
//     avatar.classList.remove('hide');
//     this.classList.add('hide');
//     openBtn.classList.remove('hide');

// }
// }
// else{
    openBtn.onclick = function(){
        share.classList.toggle('hide')
        closeBtn.classList.toggle('hide')
    }
    closeBtn.onclick = function(){
        share.classList.toggle('hide')
        closeBtn.classList.toggle('hide')
    }




