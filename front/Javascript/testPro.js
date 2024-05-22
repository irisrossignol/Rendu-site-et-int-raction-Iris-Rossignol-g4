//Afficher les cartes dans profil

function fetchHP() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "connexion.html"; //si pas connecter alors redirection connex
    return;
  }

  fetch("http://localhost:3000/user/getcards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  })
    .then((response) => {
      if (response.status !== 200) { //si erreur alors redirection connex
        window.location.href = "connexion.html";
        return;
      }
      return response.json();
    })
    .then((characters) => {
      if (!characters) return;

      console.log(characters);
      const container = document.getElementById("characters");
      container.innerHTML = ""; 

      characters.forEach((character) => { //pr chaque cartes on affiche tt la cartes quoi
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("carteshp");
        cardDiv.setAttribute("data-house", character.house);

        cardDiv.innerHTML += `
          <img src=${character.image} alt="${character.namecard}"/>
          <h2>${character.namecard}</h2>
        `;

        container.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchHP();
