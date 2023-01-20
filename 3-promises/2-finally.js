let loading = true;
loading && console.log('Loading...');

// Gatting Promise
promise = getPromise(ALL_POKEMONS_URL);

promise.finally(() => {
    loading = false;
    console.log(`Promise Settled and loading is ${loading}`);
}).then((result) => {
    console.log({result});
}).catch((error) => {
    console.log(error)
});