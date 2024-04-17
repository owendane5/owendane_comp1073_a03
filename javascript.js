//Owen Dane
//Setting variables
const apiUrlOne = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
const apiUrlTwo = `https://pokeapi.co/api/v2/pokemon/`;
const apiUrlThree =`fetch('https://official-joke-api.appspot.com/jokes/10')`;
const outputOne = document.getElementById('outputOne');
const outputTwo = document.getElementById('outTwo');
const outputThree = document.getElementById('outThree');




//my first output this is to display the poke only
//fetch method with error response (easier this way)


function displayPokemonDefault() {
    fetch(apiUrlOne)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network not available');
            }
            return response.json();
        })
        .then(data => {
            //console.log('Pokemon Data:', data);  // Logging the data for Bulbasaur for testing

            // Here I am just displaying the img for the pokemon
            const spriteUrl = data.sprites.front_default;
            // Displaying the Pokémon's name and sprite in outputOne
            outputOne.innerHTML = `
            <h3>Pokemon Name: ${data.name}</h3>
            <img src="${spriteUrl}" alt="${data.name} Sprite"> `;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
            outputOne.textContent = 'Error fetching data';
        });


}
//second function for displaying pokemon, this one will change the displayed pokemon by click of a button
//most of the code is the same
function displayPokemon(pokemonName) {
    const apiUrl = `${apiUrlTwo}${pokemonName}/`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network not available');
            }
            return response.json();
        })
        .then(data => {
            console.log('Pokemon Data:', data);
            const spriteUrl = data.sprites.front_default;
            outputTwo.innerHTML = `
                    <h3>Pokemon Name: ${data.name}</h3>
                    <img src="${spriteUrl}" alt="${data.name} Sprite">
                `;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
            outputTwo.textContent = 'Error fetching data';
        });
}


//calling default pokemon function
displayPokemonDefault();

// Adding event listeners for my second output showing a pokemon based on what button is clicked

document.getElementById('btnOne').addEventListener('click', () => {
    displayPokemon('squirtle');
});

document.getElementById('btnTwo').addEventListener('click', () => {
    displayPokemon('charmeleon');
});

document.getElementById('btnThree').addEventListener('click', () => {
    displayPokemon('pikachu');
});

