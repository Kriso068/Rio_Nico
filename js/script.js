



const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const close = document.querySelector(".close");
const open = document.querySelector(".open");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    close.style.display = "block";
    open.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
