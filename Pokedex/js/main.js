const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151;
let limit = 10;
let offset = 0;
let poke = '';
let numberPoke =''



 function convertPokemonToLi(pokemon){
      

    return`
    
        <li class="pokemon ${pokemon.type}" data-poke="${pokemon.name}">
            <span data-poke="${pokemon.name}" class="number">#0${pokemon.number}</span>
            <span data-poke="${pokemon.name}" class="name">${pokemon.name}</span>

            <div data-poke="${pokemon.name}" class="detail" >
                <ol class="types">
                    ${pokemon.types.map((type) => `<li data-poke="${pokemon.name}" " class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}" data-poke="${pokemon.name}">
            </div>
        </li>

    `
    
    
}



function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


// Evento de Clique para ir pagina de Detalhes do Pokemon

document.querySelector('.pokemons').addEventListener('click', (e) => {
    poke = e.target.getAttribute('data-poke')

    e.target.getAttribute('number')

    buscarPokemonDetailss()
  
})

