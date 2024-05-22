
function fetchDetails(slug) {

    //fetch recupere les ressources de l'api
    return fetch(`https://hp-api.lainocs.fr/characters/${slug}`)
    .then((response)=> response.json())
}

async function displayDetails() {
    const params = new URLSearchParams(window.location.search); //change l'url en fonction de 
    const slug = params.get('slug');  //prend le slug de l'api
    console.log(slug)
    const data = await fetchDetails(slug); 
    const container = document.getElementById('character-details');


    let date = data.birthday.slice(0,-14) //cala pas les 14 dernier trucs

    container.innerHTML = `
        <img src="${data.image}" alt="${data.name} class="ccard"/>
        <h1>Name : ${data.name}</h1>
        <h1>Hairs : ${data.hairs}</h1>
        <h1>Eye color : ${data.eyes}</h1>
        <h1>Birthday : ${date}</h1>
        <h1>Blood : ${data.blood}</h1>
        <h1>Wand : ${data.wand}</h1>
        <h1>Patronus : ${data.patronus}</h1>
        <House : ${data.house}</h1>
` ;
}

document.addEventListener('DOMContentLoaded', displayDetails);