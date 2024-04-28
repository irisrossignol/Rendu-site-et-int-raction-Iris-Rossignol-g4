// Tabs
function tabNav() {
  const tabBouton = document.querySelectorAll(".account_tab_button");
  const tabContent = document.querySelectorAll(".tab_content");

  tabBouton.forEach((button) => {
    button.addEventListener("click", () => {
      tabBouton.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });

      const tabName = button.getAttribute("data-maison");
      const tabSelect = document.getElementById(tabName);
      tabSelect.classList.add("active");
    });
  });
}

// Darkmode
function darkMode() {
  const darkModeButton = document.querySelector(".darkmode-btn");
  const body = document.querySelector("body");

  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("darkmode");
  });
}

//Filtre 
function Filtre() {
  const boutonsFiltre = document.querySelectorAll(".btnfiltre");

  boutonsFiltre.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      boutonsFiltre.forEach((allBouton) => {
        allBouton.classList.remove("select");
      });
      bouton.classList.add("select");

      const Selectionnee = bouton.dataset.house;
      const cartes = document.querySelectorAll(".card_container");

      cartes.forEach((carte) => {
        const Carte = carte.dataset.house;

        carte.style.display =
          Selectionnee === "Tous" || Selectionnee === Carte ? "block" : "none"; // Afficher si la maison sélectionnée est "tous" ou si elle correspond à la maison de la carte actuelle ; sinon, masquer la carte
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  tabNav();
  darkMode();
  Filtre();
});

//swipper à supprimer pour projet d'axe
/* document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
});
// fin
*/

//Formulaire
const choice = document.getElementById("choice");
const password1 = document.getElementById("password");
const password2 = document.getElementById("password2");
const errorMessage = document.getElementById("error-message");
const username = document.getElementById("username");
const oblgPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])(?=.*\d)/;

function validPassword() {
  if (password1.value !== password2.value) {
    errorMessage.textContent = "Les mots de passe ne correspondent pas";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}

function validChoice() {
  if (choice.value == "nochoice") {
    errorMessage.textContent = "Veuillez choisir une maison";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}

function validUsername() {
  if (username.value.length < 6) {
    errorMessage.textContent =
      "Le nom d'utilisateur doit faire plus de 6 caractères";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}

function validPassword2() {
  if (!oblgPassword.test(password1.value)) {
    errorMessage.textContent =
      "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}


/*username.addEventListener("input", validUsername);
choice.addEventListener("change", validChoice);
password1.addEventListener("input", validPassword);
password1.addEventListener("input", validPassword2);
password2.addEventListener("input", validPassword);
*/