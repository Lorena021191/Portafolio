document.querySelector(".astro").addEventListener("click", function(){
  document.body.classList.toggle("darktheme")
})

const ham = document.querySelector('.burger');
const enlaces = document.querySelector('.nav__lista');

const barras = document.querySelectorAll('.burger span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});