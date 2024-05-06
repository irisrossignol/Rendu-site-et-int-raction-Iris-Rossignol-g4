
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

    cardDiv.innerHTML += `
    <img src="${element.image}" alt="${element.name}"/>
        <h2>${element.name}</h2>
    `
    container.appendChild(cardDiv); // cardDiv c dans container
    });

// let date = data.birthday.slice(0,-14)
//     document.getElementById(elementId).innerHTML = `
//         <img src="${data.image}" alt="${data.name}"/>
//         <h1>${data.name}</h1>
//         <h1>${data.house}</h1> 
// ` ;
}

displayHP("characters")