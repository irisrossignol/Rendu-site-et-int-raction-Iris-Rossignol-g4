

// Tabs
// function tabNav() {
//   const tabBouton = document.querySelectorAll(".account_tab_button");
//   const tabContent = document.querySelectorAll(".tab_content");

//   tabBouton.forEach((button) => {
//     button.addEventListener("click", () => {
//       tabBouton.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       button.classList.add("active");
//       tabContent.forEach((content) => {
//         content.classList.remove("active");
//       });

//       const tabName = button.getAttribute("data-maison");
//       const tabSelect = document.getElementById(tabName);
//       tabSelect.classList.add("active");
//     });
//   });
// }

//Filtre
function filtre() {
  const boutonsFiltre = document.querySelectorAll(".btnfiltre");

  boutonsFiltre.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      boutonsFiltre.forEach((allBouton) => {
        allBouton.classList.remove("select");
      });
      bouton.classList.add("select");

      const Selectionnee = bouton.dataset.house;
      const cartes = document.querySelectorAll(".carteshp");

      cartes.forEach((carte) => {
        const Carte = carte.getAttribute("data-house");

        carte.style.display =
          Selectionnee === "Tous" || Selectionnee === Carte ? "block" : "none"; // Afficher si la maison sélectionnée est "tous" ou si elle correspond à la maison de la carte actuelle ; sinon, masquer la carte
      });
    });
  });
}


// Darkmode   ☾☾☼☀︎
function darkMode() {
  const darkModeButton = document.querySelector(".darkmode-btn");
  const body = document.querySelector("body");

  if (!darkModeButton) {
    return;
  }

  function darkModeActif() {
    body.classList.add("darkmode");
    localStorage.setItem("darkMode", "actif");
    darkModeButton.textContent = "Dark Mode";
    darkModeButton.classList.add("moon");
  }

  function darkModeDes() {
    body.classList.remove("darkmode");
    localStorage.setItem("darkMode", ""); //darkmode (light) pas actif
    darkModeButton.textContent = "Light Mode";
    darkModeButton.classList.add("sun");
  }

  if (localStorage.getItem("darkMode") === "actif") {
    darkModeActif();
  }

  darkModeButton.addEventListener("click", () => {
    // a l'écoute du clic le darkmode "toggle"
    if (body.classList.toggle("darkmode")) {
      darkModeActif();
    } else {
      darkModeDes();
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  filtre();
  darkMode();
  // like();
});

//PopUp
document.getElementById("popupForm").style.display = "none";

document.getElementById("echange").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

document
  .getElementById("popupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // dans le popup si on sbmit ca f rien
  });

document.getElementById("fermer").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("popupForm").style.display = "none";
});

//Like
// function like() {
//   const like = document.querySelectorAll(".like");

//   like.forEach((liked) =>{
//     liked.addEventListener("click", (e) => {
//       e.preventDefault();
//       liked.clasList.toggle("select");
//     });
//   });
// }

//Swipper
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
// const choice = document.getElementById("choice");
// const password1 = document.getElementById("password");
// const password2 = document.getElementById("password2");
// const errorMessage = document.getElementById("error-message");
// const username = document.getElementById("username");
// const oblgPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])(?=.*\d)/;

// function validPassword() {
//   if (password1.value !== password2.value) {
//     errorMessage.textContent = "Les mots de passe ne correspondent pas";
//     return false;
//   } else {
//     errorMessage.textContent = "";
//     return true;
//   }
// }

// function validChoice() {
//   if (choice.value == "nochoice") {
//     errorMessage.textContent = "Veuillez choisir une maison";
//     return false;
//   } else {
//     errorMessage.textContent = "";
//     return true;
//   }
// }

// function validUsername() {
//   if (username.value.length < 6) {
//     errorMessage.textContent =
//       "Le nom d'utilisateur doit faire plus de 6 caractères";
//     return false;
//   } else {
//     errorMessage.textContent = "";
//     return true;
//   }
// }

// function validPassword2() {
//   if (!oblgPassword.test(password1.value)) {
//     errorMessage.textContent =
//       "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
//     return false;
//   } else {
//     errorMessage.textContent = "";
//     return true;
//   }
// }

/*username.addEventListener("input", validUsername);
choice.addEventListener("change", validChoice);
password1.addEventListener("input", validPassword);
password1.addEventListener("input", validPassword2);
password2.addEventListener("input", validPassword);
*/
