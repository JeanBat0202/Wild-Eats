
const burgerIcon = document.querySelector('.burger-icon');
const menuLinks = document.querySelector('.menu-links');
const menuBurger = document.querySelector('.menu-burger');

burgerIcon.addEventListener('click', () => {
  menuBurger.classList.toggle('open');
});

