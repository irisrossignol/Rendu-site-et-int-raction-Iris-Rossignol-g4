




function fetchHP(id) {

    return fetch('https://hp-api.lainocs.fr/characters/' + id)
    .then((response)=> response.json())
}

async function displayHP(id, elementId) {
    const data = await fetchHP(id)
    let date = data.birthday.slice(0,-14)
    document.getElementById(elementId).innerHTML = `
        <img src="${data.image}" alt="${data.name}"/>
        <h1>Name : ${data.name}</h1>
        <h1>Birthday : ${date}</h1>
        <h1>Blood : ${data.blood}</h1>
        <h1>Patronus : ${data.patronus}</h1>
        <h1>House : ${data.house}</h1>

` ;
}

displayHP('harry-potter', 'harry')
displayHP('ron-weasley', 'ron')
displayHP('draco-malfoy', 'draco')
displayHP('hermione-granger', 'hermione')
displayHP('albus-dumbledore', 'albus')
displayHP('sirius-black', 'sirius')
displayHP('cedric-diggory', 'cedric')
displayHP('cho-chang', 'cho')
displayHP('rubeus-hagrid', 'rubeus')
displayHP('luna-lovegood', 'luna')
