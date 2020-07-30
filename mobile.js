let hamburger = document.querySelector('.mobile-hamburger');
let mobileMenu = document.querySelector('.mobile');


hamburger.addEventListener('click', function(e) {
    mobileMenu.classList.toggle('show'); 
});