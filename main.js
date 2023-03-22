
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

function toggleVisibilityLaGourmandise() {
  const paragraphe = document.getElementById("descriptionLaGourmandise");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilityLaLoupiote() {
  const paragraphe = document.getElementById("descriptionLaLoupiote");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilityRitalCafé() {
  const paragraphe = document.getElementById("descriptionRitalCafé");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilityMcdo() {
  const paragraphe = document.getElementById("descriptionMcdo");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilityrestoRapide() {
  const paragraphe = document.getElementById("descriptionrestoRapide");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilitypizzaDiNapoli() {
  const paragraphe = document.getElementById("descriptionpizzaDiNapoli");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilitysaveursEtTraditions() {
  const paragraphe = document.getElementById("descriptionsaveursEtTraditions");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilityaurelienEtSolene() {
  const paragraphe = document.getElementById("descriptionaurelienEtSolene");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

function toggleVisibilitygrosChene() {
  const paragraphe = document.getElementById("descriptiongrosChene");
  if (paragraphe.style.display === "none") {
    paragraphe.style.display = "block";
  } else {
    paragraphe.style.display = "none";
  }
}

