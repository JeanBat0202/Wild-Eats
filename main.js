
const burgerIcon = document.querySelector('.burger-icon');
const menuLinks = document.querySelector('.menu-links');
const menuBurger = document.querySelector('.menu-burger');

burgerIcon.addEventListener('click', () => {
  menuBurger.classList.toggle('open');
});



function toggleVisibility() {
  const paragraphe = document.getElementById("descriptionLaGourmandise");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

// function toggleVisibility() {
//   const paragraphe = document.getElementById("descriptionLaLoupiote");
//   if (paragraphe.style.display === "none") {
//     paragraphe.style.display = "block";
//   } else {
//     paragraphe.style.display = "none";
//   }
// }