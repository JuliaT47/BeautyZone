const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-button-open");
const menuBtnClose = document.querySelector(".menu-button-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

if (mobileMenu.classList.contains("is-open")) {
  setTimeout(() => {
    mobileMenu.classList.remove("is-open");
  }, 300);
}

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

const mobileMenuLinks = document.querySelectorAll(".mobile-menu__menu a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetHref = link.getAttribute("href");

    setTimeout(() => {
      mobileMenu.classList.remove("is-open");
      window.location.href = targetHref;
    }, 300);
  });
});
