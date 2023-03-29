//Skapa ref till HTML-element
let iconRef = document.querySelector('#js-menu-toggle');
let menuRef = document.querySelector('#js-menu');

iconRef.addEventListener('click', function(){
    menuRef.classList.toggle('active');
    iconRef.classList.toggle('exit');
});