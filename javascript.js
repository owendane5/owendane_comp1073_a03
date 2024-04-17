//Owen Dane
//Setting variables
const apiUrlOne = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
const apiUrlTwo = `https://pokeapi.co/api/v2/pokemon/`;
const outputOne = document.getElementById('outputOne');
const outputTwo = document.getElementById('outTwo');
const outputThree = document.getElementById('outThree');

//fetch method with error response (easier this way)

fetch(apiUrlOne)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network not available');
        }
        return response.json();
    })
    .then(data => {
        console.log('Pokemon Data:', data);  // Logging the data for Bulbasaur for testing

        // Here I am just displaying a simple pokemon from the api
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


    // Adding event listeners for my second output showing a pokemon based on what button is clicked