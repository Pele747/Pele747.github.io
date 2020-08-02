/* Change header on Scroll */

document.addEventListener('scroll', (e) => {
    let banner = document.querySelector('.main-banner').clientHeight;
    let header = document.querySelector('.header');

    if(scrollY == 0) {
        header.classList.remove('background-header');
    } else {
        header.classList.add('background-header');
    }

    // if(banner - header.clientHeight <= scrollY) {
    //    header.classList.add('background-header');
    // } else {
    //     header.classList.remove('background-header');
    // }
});


/* Mobile Nav */

let trigger = document.querySelector('.mobile-trigger');
let mobile = document.querySelector('.mobile-menu');


trigger.addEventListener('click', () =>  {
    mobile.classList.toggle('animate-mobile');
    trigger.classList.toggle('animate');
});