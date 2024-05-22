function fetchHP() {

  //fetch recupere les ressources de l'api
  return fetch("https://hp-api.lainocs.fr/characters/").then((response) =>
    response.json(),
  );
}

//les cartes
async function displayHP(elementId, characters) {
  const container = document.getElementById(elementId);
  container.innerHTML = ""; // recharger a chaque fois, 5 nouvelles cartes

  characters.forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("carteshp");
    cardDiv.setAttribute("data-house", element.house);

    cardDiv.innerHTML += `
            <img src="${element.image}" alt="${element.name}"/>
            <h2>${element.name}</h2>
        `;

    container.appendChild(cardDiv);
  });
}

//fonction ouvrir un booster
async function booster() {
  const data = await fetchHP();
  const characters = []; // tt les characters sont dans un tableau pr random

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    characters.push(data[randomIndex]);
  }

  // envoie les cartes dans le backend pour les enregistrer dans la table userCard
  fetch("http://localhost:3000/user/draw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"), // un compte
    },

    body: JSON.stringify({ //converti js en json 
      characters: characters,
    }),
  });

  displayHP("characters", characters); // afficher les 5 cartes du booster
}

document.addEventListener("DOMContentLoaded", function () {
  const ouvrirBooster = document.querySelector(".button_form3");
  // quand on clique sur le bouton appeler la fonction booster
  ouvrirBooster.addEventListener("click", booster);
});
