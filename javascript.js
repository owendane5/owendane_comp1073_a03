//Owen Dane
//Setting variables
const apiUrlOne = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
const apiUrlTwo = `https://pokeapi.co/api/v2/pokemon/`;
const apiUrlThree = `https://official-joke-api.appspot.com/jokes/`;
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
            //console.log('Pokemon Data:', data);

            // Here I am just displaying the img for the pokemon
            const spriteUrl = data.sprites.front_default;
            // Displaying the info
            outputOne.innerHTML = `
            <h3>Pokemon Name: ${data.name}</h3>
            <img src="${spriteUrl}" alt="${data.name} Sprite"> `;
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
            outputOne.textContent = 'Error fetching data';
        });

}

//calling default pokemon function
displayPokemonDefault();

//second function for displaying pokemon, this one will change the displayed pokemon by click of a button
//most of the code is the same
function displayPokemon(pokemonName) {
    //using pokemonName as the deciding endpoint for the url based on the button pressed.
    const apiUrl = `${apiUrlTwo}${pokemonName}/`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network not available');
            }
            return response.json();
        })
        .then(data => {
           // console.log('Pokemon Data:', data);
           
           //getting img and displaying info
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
//third output to show two apis being used, finds joke by using the id property in the json
//Most of code is same

function fetchJokeById(jokeId) {
    //Using jokeId as the endpoint of url which is decided by text field.s
    const apiUrl = `${apiUrlThree}${jokeId}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network not available');
            }
            return response.json();
        })
        .then(data => {
            console.log('Joke Data:', data);
            outputThree.innerHTML = `
                <h3>Joke:</h3>
                <p>${data.setup}</p>
                <p>${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem fetching the joke:', error);
            outputThree.textContent = 'Error fetching joke';
        });
}

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

// Event listener for third output using id to find a joke
getJoke.addEventListener('click', () => {
    const jokeId = randomJoke.value;
    fetchJokeById(jokeId);
});


