// Promise Chain with multiple then and catch
let promise = getPromise(ALL_POKEMONS_URL);

promise.then(result => {
    let onePokemon = JSON.parse(result).results[0].url;
    return onePokemon;
}).then(onePokemonURL => {
    console.log(onePokemonURL);
    return getPromise(onePokemonURL);
}).then(pokemon => {
    console.log(JSON.parse(pokemon));
}).catch(error => {
    console.log('In the catch', error);
});