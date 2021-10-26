const navToggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav-ul');

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle('nav-menu_visible');
});

const hrefToggle = document.querySelector('.hlink');

hrefToggle.addEventListener("click", () => {
  navMenu.classList.toggle('nav-menu_visible');
})