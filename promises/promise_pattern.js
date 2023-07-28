// promise can be: pending, fulfilled, rejected
// you build a promise initializing its constructor and passing two parameters functions

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

makeRequest("https://pokeapi.co/api/v2/pokemon?limit=50'")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// fat arrow  syntax

const makeFatRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(erro));
  });
};

makeFatRequest("https://pokeapi.co/api/v2/pokemon?limit=50'")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
