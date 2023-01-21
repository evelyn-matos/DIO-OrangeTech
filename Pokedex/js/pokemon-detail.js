// Função para Pagina Pokemons Detalhes

 async function buscarPokemonDetailss(){

    let urlDetail = `https://pokeapi.co/api/v2/pokemon/${poke}`

    let results = await fetch(urlDetail);
    let json = await results.json();

    
    
    showInfoPokemon(
         

        {name: json.name,
        number: json.id,
        image: json.sprites.other.dream_world.front_default,
        types: json.types,
        

        species: json.species.name,
        url: json.species.url,
        height: json.height,
        weight: json.weight,
        abilidades: [
            {
                "one" : json.abilities[0].ability.name,
                "two" : json.abilities[1].ability.name
            }
        ],

        stats: [
            {
                "hp" : parseInt(json.stats[0].base_stat),
                "attack" : parseInt(json.stats[1].base_stat),
                "defense" :parseInt(json.stats[2].base_stat),
                "specialAttack" : parseInt(json.stats[3].base_stat),
                "specialDefense" : parseInt(json.stats[4].base_stat),
                "speed" : parseInt(json.stats[5].base_stat)
               
            }
        ]
        
    
        }
    )

    
    
}

function showInfoPokemon(json) {

    numberPoke = json.number

    buscarMaisInfo()

    document.querySelector('.area-pokemon', '.area-superior-poke').classList.add(`${json.types[0].type.name}`)

    document.querySelector('.content').style.display = 'none';
    document.querySelector('.pokemon-Details').style.display = 'flex'

    document.querySelector('.info-name h1').innerHTML = `${json.name}`;
    document.querySelector('.imagem-area img').src = `${json.image}`

    if(json.id > 9){
        document.querySelector('.info-number').innerHTML = `#0${json.number}`;
    }else{
        document.querySelector('.info-number').innerHTML = `#00${json.number}`;
    }

    // Preencher o Type
 
    

    if(json.types.length == 2){
        
        document.querySelector('.type1').innerHTML = `${json.types[0].type.name}`
        document.querySelector('.type1').classList.add(`${json.types[0].type.name}`)

        document.querySelector('.type2').innerHTML = `${json.types[1].type.name}`
        document.querySelector('.type2').classList.add(`${json.types[1].type.name}`)

    } else if(json.types.length == 1) {

        
        document.querySelector('.type1').innerHTML = `${json.types[0].type.name}`
        document.querySelector('.type1').classList.add(`${json.types[0].type.name}`)

        let element = document.querySelector('.type2');
        element.remove();
    }

    //Preencher o About

    document.querySelector('.species').innerHTML = `${json.species}`;
    document.querySelector('.heigth').innerHTML = `${json.height /10} m`;
    document.querySelector('.weight').innerHTML = `${json.weight /10} kg`;
    document.querySelector('.abilities').innerHTML = `${json.abilidades[0].one}, ${json.abilidades[0].two}`

    // Preencher BaseState

    //HP

    document.querySelector('.hp').innerHTML = `${json.stats[0].hp}`
    document.querySelector('.hp-bar').style.width = `${json.stats[0].hp}%`
    if (json.stats[0].hp < 50){
        document.querySelector('.hp-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.hp-bar').style.backgroundColor = "#63bf87"
    }


    // Attack

    document.querySelector('.attack').innerHTML = `${json.stats[0].attack}`
    document.querySelector('.attack-bar').style.width = `${json.stats[0].attack}%`
    if (json.stats[0].attack < 50){
        document.querySelector('.attack-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.attack-bar').style.backgroundColor = "#63bf87"
    }

    // Defense

    document.querySelector('.defense').innerHTML = `${json.stats[0].defense}`
    document.querySelector('.defense-bar').style.width = `${json.stats[0].defense}%`
    if (json.stats[0].defense < 50){
        document.querySelector('.defense-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.defense-bar').style.backgroundColor = "#63bf87"
    }

    // Special Attack

    document.querySelector('.special-attack').innerHTML = `${json.stats[0].specialAttack}`
    document.querySelector('.spAttack-bar').style.width = `${json.stats[0].specialAttack}%`
    if (json.stats[0].specialAttack < 50){
        document.querySelector('.spAttack-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.spAttack-bar').style.backgroundColor = "#63bf87"
    }

    // special Defense

    document.querySelector('.special-defense').innerHTML = `${json.stats[0].specialDefense}`
    document.querySelector('.spDefense-bar').style.width = `${json.stats[0].specialDefense}%`
    if (json.stats[0].specialDefense < 50){
        document.querySelector('.spDefense-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.spDefense-bar').style.backgroundColor = "#63bf87"
    }

    // Speed

    document.querySelector('.speed').innerHTML = `${json.stats[0].speed}`
    document.querySelector('.speed-bar').style.width = `${json.stats[0].speed}%`
    if (json.stats[0].attack < 50){
        document.querySelector('.speed-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.speed-bar').style.backgroundColor = "#63bf87"
    }

    
     // Total

     let one = `${json.stats[0].hp}`; 
     let two =  `${json.stats[0].attack}` 
     let three = `${json.stats[0].defense}` 
     let four = `${json.stats[0].specialAttack}`
     let five = `${json.stats[0].specialDefense}`
     let six = `${json.stats[0].speed}` 

    let total = parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five) + parseInt(six)
    let totalPorcento = total / 6

    document.querySelector('.total').innerHTML = total
    document.querySelector('.total-bar').style.width = `${totalPorcento}%`
    if (totalPorcento < 50){
        document.querySelector('.total-bar').style.backgroundColor = "#f96c6c"
    } else {
        document.querySelector('.total-bar').style.backgroundColor = "#63bf87"
    }

  


}



// Função Para Voltar ao Inicio

document.querySelector('.voltar').addEventListener('click', () =>{
    voltar();
})



function voltar(){
    document.querySelector('.pokemon-Details').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    poke = '';
    location.reload()
    
 
}

//Função para Adcionar favorito

document.querySelector('.favoritar').addEventListener('click', () => {
    favoritar()
})

function favoritar(){

   
    document.querySelector('.favoritar').src = './images/heart-favorite.png';

}


//Função Para trocar informações Navagação de infos

document.querySelector('.lista-navegar').addEventListener('click', (e) => {

    document.querySelector('.about').classList.remove('active')
    document.querySelector('.baseState').classList.remove('active')
    document.querySelector('.evolution').classList.remove('active')
    document.querySelector('.moves').classList.remove('active')

    e.target.classList.add('active') 
    MostrarInfos();

})


function MostrarInfos() {
    let about = document.querySelector('.about');
    let baseState = document.querySelector('.baseState');

    if(baseState.classList[1] == 'active'){
        document.querySelector('.info-poke-about').style.display = 'none';
        document.querySelector('.info-poke-baseState').style.display = 'block'
    } else if(about.classList[1] == 'active'){
        document.querySelector('.info-poke-about').style.display = 'block';
        document.querySelector('.info-poke-baseState').style.display = 'none'
    } else {
        document.querySelector('.info-poke-about').style.display = 'none';
        document.querySelector('.info-poke-baseState').style.display = 'none'
    }

}


// Number Pokemon

async function buscarMaisInfo(){

    let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${numberPoke}/`

    let results = await fetch(urlSpecies);
    let json2 = await results.json();

    showMaisInfos({
        eggGroups : json2.egg_groups,
        habitat : json2.habitat.name
    })

}

function showMaisInfos(json2){
    document.querySelector('.eggGroups').innerHTML = `${json2.eggGroups[0].name}, ${json2.eggGroups[1].name} `

    document.querySelector('.habitat').innerHTML = `${json2.habitat}`

}


