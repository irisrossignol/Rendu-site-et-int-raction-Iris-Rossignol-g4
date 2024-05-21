function fetchHP() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "connexion.html";
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
      if (response.status !== 200) {
        window.location.href = "connexion.html";
        return;
      }
      return response.json();
    })
    .then((characters) => {
      if (!characters) return; // Si la redirection a eu lieu, characters sera undefined

      console.log(characters);
      const container = document.getElementById("characters");
      container.innerHTML = ""; // Clear the container each time

      characters.forEach((character) => {
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

// Call the function to fetch and display cards
fetchHP();
