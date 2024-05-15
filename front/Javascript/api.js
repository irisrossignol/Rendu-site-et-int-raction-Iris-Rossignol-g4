
function fetchHP() {

    return fetch('https://hp-api.lainocs.fr/characters/')
    .then((response)=> response.json())
}

async function displayHP(elementId) {
    const data = await fetchHP()
    const container=document.getElementById(elementId)

    data.forEach(element => {
    const cardDiv = document.createElement("div"); // chaque carte = une div
    cardDiv.classList.add("carteshp"); // chaque carte = "carteshp"
    cardDiv.setAttribute("data-house", element.house);

    const heart = document.createElement("i");
    heart.classList.add("fa-solid", "fa-heart");
    cardDiv.appendChild(heart);

    
    cardDiv.innerHTML += `
    <img src="${element.image}" alt="${element.name}"/>
        <h2>${element.name}</h2>
    `

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
}
    
// let date = data.birthday.slice(0,-14)
//     document.getElementById(elementId).innerHTML = `
//         <img src="${data.image}" alt="${data.name}"/>
//         <h1>${data.name}</h1>
//         <h1>${data.house}</h1> 
// ` ;

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






//MArche pas a régler important jcrois
 function Page() {
    const liien = document.querySelector(".cartehp");
    const characterId = data.id;

    liien.forEach((lien) => {
    lien.addEventListener("click", () => {
    window.location.href = `page.html?id=${characterId}`;

     });
});
}















displayHP("characters")



//searchBar
function searchBar() {
    const bar = document.querySelectorAll(".rech");
    const input = document.getElementById("myInput"); //jcrois ca prend ce qu'il y a ecrit ?? pas trop compris lol
    const cards = document.querySelectorAll(".carteshp");

    cards.forEach(card => {
        const name = card.querySelector(data.name).textContent.toUpperCase(); //chaque nom des perso

        if (name.indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}




document.addEventListener("DOMContentLoaded", function () {
    Filtre();
    searchBar();
    
});



