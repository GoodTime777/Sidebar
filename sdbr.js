/*все решение мое, только подсмотрела как делают сам бургер, 
заодно разрешилась проблема с кликом по свободному месту
(что меню закрывалось) */

const burgerWrapper = document.querySelector(".burger-wrapper");
const button = document.querySelector('.burger-button');
const menu = document.querySelector(".menu");
const links = document.querySelectorAll('.item');
const newNote= document.querySelector('.article__note');
const settings= document.querySelector('.head__settings');
const overlay = document.querySelector('.overlay');


function toggleMenu() {
  burgerWrapper.classList.toggle("active");
  menu.style.left = menu.style.left == "-265px" ? "0px" : "-265px";
  menu.style.transition = "left 1s linear";
}
button.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
newNote.addEventListener("click", toggleMenu);
settings.addEventListener("click", toggleMenu);

for(let i=0;i<links.length;i++){
links[i].addEventListener('click', toggleMenu);
}

