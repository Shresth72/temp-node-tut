function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

let promise = getPromise(ALL_POKEMONS_URL);

const consumer = () => {
  promise
    .then((result) => {
      console.log({ result }); // Log the result of 50 Pokemons
    })
    .catch((error) => console.log(error));
};

consumer();
