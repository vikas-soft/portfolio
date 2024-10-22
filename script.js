// Responsive Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});

//preloader
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display='none';
})
