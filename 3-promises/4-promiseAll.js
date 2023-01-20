// Promise.all([promises]) accepts a collection
//  (for example, an array) of promises as an
// argument and executes them in parallel.

// If any of the promises reject or execute to fail
// due to an error, all other promise results will be ignored.

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

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log("An Error Occured");
  });

/* result: Array(3)
    0: "{"abilities": [{"abilities: {"name": "overgrow", "url"}..]}"
    1: "{"abilities": [{"abilities: {"name": "run-away", "url"}..]}"
    2: "{"abilities": [{"abilities: {"name": "shed-skin", "url"}..]}"
    length: 3
*/













// Promise.any([promises]) - Similar to the all() method,
//  .any() also accepts an array of promises to execute them
// in parallel. This method doesn't wait for all the promises to
//  resolve. It is done when any one of the promises is settled.

Promise.any([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(JSON.parse(result));
  })
  .catch((error) => {
    console.log("An Error Occured");
  });

// The output would be the result of any of the resolved promises











// promise.allSettled([promises]) - This method waits for all promises
//  to settle(resolve/reject) and returns their results as an array of objects.
//  The results will contain a state (fulfilled/rejected) and value, if fulfilled.
//  In case of rejected status, it will return a reason for the error.

Promise.allSettled([promise_1, promise_2, promise_3]).then(result => {
   console.log({result});
}).catch(error => {
   console.log('There is an Error!');
});