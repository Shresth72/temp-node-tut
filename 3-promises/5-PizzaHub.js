// HARD CODED DATABASE (Kindof)
function query(endpoint) {
  if (endpoint === `/api/pizzahub/`) {
    return new Promise((resolve, reject) => {
      resolve({ shopId: "123" });
    });
  } else if (endpoint.indexOf("/api/pizzahub/pizza/") >= 0) {
    return new Promise((resolve, reject) => {
      resolve({ pizzas: [{ type: "veg", name: "margherita", id: "123" }] });
    });
  } else if (endpoint.indexOf("/api/pizzahub/beverages") >= 0) {
    return new Promise((resolve, reject) => {
      resolve({ id: "10", type: "veg", name: "margherita", beverage: "coke" });
    });
  } else if (endpoint === `/api/order`) {
    return new Promise((resolve, reject) => {
      resolve({ type: "veg", name: "margherita", beverage: "coke" });
    });
  }
}

/* LOGICAL FUNCTIONS */
let getShopId = (result) => result.shopId;

// Returns a promise with pizza list for a shop
let getPizzaList = (shopId) => {
  const url = `/api/pizzahub/pizza/${shopId}`;
  return query(url);
};

// Returns a promise with pizza that matches the customer request
let getMyPizza = (result, type, name) => {
  let pizzas = result.pizzas;
  let myPizza = pizzas.find((pizza) => {
    return pizza.type === type && pizza.name === name;
  });
  const url = `/api/pizzahub/beverages/${myPizza.id}`;
  return query(url);
};

// Returns a promise after Placing the order
let performOrder = (result) => {
  let beverage = result.id;
  return query(`/api/order`, {
    type: result.type,
    name: result.name,
    beverage: result.beverage,
  });
};

// Confirm the order
let confirmOrder = (result) => {
  console.log(
    `Your order of ${result.type} ${result.name} with ${result.beverage} has been placed!`
  );
};

/* Solving the callback hell */
function orderPizza(type, name) {
  query(`/api/pizzahub/`)
    .then((result) => getShopId(result))
    .then((shopId) => getPizzaList(shopId))
    .then((result) => getMyPizza(result, type, name))
    .then((result) => performOrder(result))
    .then((result) => confirmOrder(result))
    .catch(function (error) {
      console.log(`Bad luck, No Pizza for you today!`);
    });
}

orderPizza("veg", "margherita");
