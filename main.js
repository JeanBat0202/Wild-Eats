const burgerIcon = document.querySelector(".burger-icon");
const menuLinks = document.querySelector(".menu-links");
const menuBurger = document.querySelector(".menu-burger");

burgerIcon.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
});

const selectElement = document.querySelector("select");
selectElement.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  const selectedElement = document.querySelector(selectedOption);
  selectedElement.scrollIntoView({ behavior: "smooth" });
});

function showSelectedElements(selectedValue) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  if (selectedValue === "all") {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  } else {
    let selectedElements = document.getElementsByClassName(selectedValue);
    for (let i = 0; i < selectedElements.length; i++) {
      selectedElements[i].style.display = "block";
    }
  }
}

const select2Element = document.getElementById("select2");
select2Element.addEventListener("change", (event) => {
  showSelectedElements(event.target.value);
});
const elements = document.querySelectorAll(".expensive, .average, .cheap");

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
