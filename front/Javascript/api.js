
function fetchHP() {

    //fetch recupere les ressources de l'api
    return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response)=> response.json())
}

//async ne se passe pas en meme temps genre le await va se faire que si ce qu'il y a avant est exécuté ?? jcrois ??
async function displayHP(elementId) {
    const data = await fetchHP()
    const container=document.getElementById(elementId)

    data.forEach(element => {
    const cardDiv = document.createElement("div"); // chaque carte = une div
    cardDiv.classList.add("carteshp"); // chaque carte class = "carteshp"
    cardDiv.setAttribute("data-house", element.house); //chaque div donc carte = "data.house" et la data attribué dans l'api

    const heart = document.createElement("i"); //image coeur
    heart.classList.add("fa-solid", "fa-heart");
    cardDiv.appendChild(heart);


    //Chaque Cartes a ces element à afficher
    cardDiv.innerHTML += `
    <a href="details.html?slug=${element.slug}">
        <img src="${element.image}" alt="${element.name}"/>
        <h2>${element.name}</h2>
    </a>
`;

//c'etait pour faire les bordure de carte de differentes couleur, ca a marché mais c'etait trop moche
    // if (element.house === "Gryffindor") {
    //     cardDiv.classList.add("gryffindor-border");
    // }
    // if (element.house === "Ravenclaw") {
    //     cardDiv.classList.add("ravenclaw-border");
    // }
    // if (element.house === "Slytherin") {
    //     cardDiv.classList.add("slytherin-border");
    // }
    // if (element.house === "Hufflepuff") {
    //     cardDiv.classList.add("hufflepuff-border");
    // }

    container.appendChild(cardDiv); // cardDiv c dans container
    });

const like = document.querySelectorAll(".fa-heart");

like.forEach(heartIcon => {
    heartIcon.addEventListener("click", function() {
        if (heartIcon.classList.contains("red")) {
            heartIcon.style.color = "#ffffff";
            heartIcon.classList.remove("red"); //si c deja rouge ca devient blanc
            localStorage.setItem(""); 
            if (localStorage.getItem("")) {
                heartIcon.style.color = "#ff0000";
            }

        } else {
            localStorage.setItem("actif", "true")
            heartIcon.style.color = "#ff0000";
            heartIcon.classList.add("red"); // contraire
            if (localStorage.getItem("actif")) {
                heartIcon.style.color = "red";
            }
        }

    });

    
});

}
displayHP("characters")




//searchBar rien compris euh
// function searchBar() {
//     const bar = document.querySelectorAll(".rech");
//     const input = document.getElementById("myInput"); //jcrois ca prend ce qu'il y a ecrit ?? pas trop compris lol
//     const cards = document.querySelectorAll(".carteshp");

//     cards.forEach(card => {
//         const name = card.querySelector(data.name).textContent.toUpperCase(); //chaque nom des perso

//         if (name.indexOf(filter) > -1) {
//             card.style.display = "";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }




document.addEventListener("DOMContentLoaded", function () {
    Filtre();
    // searchBar();
    
});



