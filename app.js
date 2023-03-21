"use strict";
window.addEventListener("load", initApp)

const zacian = {
    image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png",
    description: 
    "Known as a legendary hero, this Pokémon absorbs metal particles, transforming them into a weapon it uses to battle.",
    name: "Zacian",
    category:"Warrior",
    ability: "Intrepid Sword",
    dexIndex: "0888",
    type: "Fairy",
    weakness: "Steel",
    weakness2:"Poison",
    weight: "110.0",
    gender: "Unknown",
    generation: "Generation VIII",
    height: "2.8"
}

function initApp() {
    showPokemon(zacian)
}

function showPokemon(pokemon) {
console.log("Pokemon: Zacian");
const pokemonZacian = /*html*/ `
<image src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png"></image><br>
<p>${pokemon.description}</p>
<li>Pokemon Name: ${pokemon.name}</li>
<li>Pokedex Nr: #‡${pokemon.dexIndex}</li>
<li>Category: ${pokemon.category}</li>
<li>Ability: ${pokemon.ability}</li>
<li>Type: ${pokemon.type}</li>
<li>Weakness: ${pokemon.weakness} & ${pokemon.weakness2}</li>
<li>Weight: ${pokemon.weight} kg</li>
<li>Gender: ${pokemon.gender}</li>
<li>Generation: ${pokemon.generation}</li>
<li>Height: ${pokemon.height} meter</li>
`
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", pokemonZacian);
}