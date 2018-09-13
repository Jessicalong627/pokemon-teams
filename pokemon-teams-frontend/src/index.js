const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.getElementById('main')
let release = document.getElementsByClassName('release')


fetch(TRAINERS_URL)
.then(res => res.json())
.then(data => data.forEach(pokemon => {
  let pokemonData = pokemon.pokemons.map(nicknames => nicknames.nickname)
  console.log(pokemonData)
  newDiv = document.createElement('div')
  newDiv.className = "card"
  newDiv.innerHTML = `<p>${pokemon.name}</p> <button id= "add" data-trainer-id="${pokemon.id}">Add Pokemon</button>

`
  pokemon.pokemons.map(nicknames => {
    newDiv.innerHTML += `
      <li>${ nicknames.nickname} (${ nicknames.species}) <button class="release" data-pokemon-id="${nicknames.id}">Release</button><li>
        `
  })
  main.append(newDiv)


})
)

const add = document.getElementById('add')
button.addEventListener("click", function(e) {

  fetch(POKEMONS_URL,
     {
       headers: {
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify({trainer_id: `${pokemon.id}`})
   })


})



release.addEventListener("click", function(e) {
  console.log("gotit")
  fetch(POKEMONS_URL/`${pokemon.id}`,
     {
       method: "DELETE",
   })
})
