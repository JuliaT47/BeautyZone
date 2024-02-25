const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-button-open");
const menuBtnClose = document.querySelector(".menu-button-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
