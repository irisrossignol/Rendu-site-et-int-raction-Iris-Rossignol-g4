function fetchHP() {
    return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response)=> response.json())
}


//les cartes
async function displayHP(elementId, characters) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // recharger a chaque fois 

    characters.forEach(element => {
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



// //fonction ouvrir un booster
async function booster() {
    const data = await fetchHP();
    const characters = []; // tt les characters sont dans un tableau pr random


    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        characters.push(data[randomIndex]);
    }

    displayHP("characters", characters);
}



//envoyer cartes dans back pr enregistrer dans db
const data = fetchHP();
const characters = []; // tt les characters sont dans un tableau pr random

     for (let i = 0; i < 5; i++) {
         const randomIndex = Math.floor(Math.random() * data.length);
         characters.push(data[randomIndex]);
    }

    document.addEventListener("DOMContentLoaded", function () {
        const ouvrirBooster = document.querySelector(".button_form3");
        ouvrirBooster.addEventListener("click", booster);
    });