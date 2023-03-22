
const burgerIcon = document.querySelector('.burger-icon');
const menuLinks = document.querySelector('.menu-links');
const menuBurger = document.querySelector('.menu-burger');

burgerIcon.addEventListener('click', () => {
  menuBurger.classList.toggle('open');
});

const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const selectedElement = document.querySelector(selectedOption);
    selectedElement.scrollIntoView({ behavior: 'smooth' });
  });
