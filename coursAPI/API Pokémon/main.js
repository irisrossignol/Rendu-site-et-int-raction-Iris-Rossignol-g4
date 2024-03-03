/*fetch('https://pokeapi.co/api/v2/pokemon/1002')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
*/

function fetchPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => response.json())
    }

async function displayPokemon(pokemon) {
    const data = await fetchPokemon(pokemon)
    console.log(data)
    document.getElementById("pokemon").innerHTML = `
    <h1>${data.name}</h1>
<img src="${data.sprites.front_default}" alt="${data.name}" />
`
    }

displayPokemon("pikachu")
