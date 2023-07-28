// training with promises

// basic strcture
let promise = new Promise(function (resolve, reject) {
  // the async call here will either resolve or reject
})

// you can do it with arrow functions as well
let promise1 = new Promise((resolve, reject) => {})

// the function passed to the promise is called the executor function
// the promise executor can only call resolve or reject

// to use a promise you need a consumer

let new_promise = new Promise((resolve, reject) => {
  resolve('new_promise resolved')
})

const consumer = () => {
  new_promise.then(
    (result) => {},
    (error) => {},
  )
}

// it's best to use the catch method to get the errors

// this is a utility function to fetch the pokemon api (or any other api)
const getData = (URL) => {
  let promise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open('GET', URL)
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        resolve(req.response)
      } else {
        reject('there has been an error:' + req.status, req.statusText)
      }
    }
    req.onerror(function () {
      reject('Network error')
    })
    req.send()
  })
  return promise
}

const ALL_POKEMON = 'https://pokeapis.co/api/v2/pokemon?limit=50'

let pokemon_promise = getData(ALL_POKEMON)

const pokemon_consumer = () => {
  pokemon_promise.then(
    (result) => {
      console.log({ result })
    },
    (error) => {
      console.log('Error fetching pokemon API')
    },
  )
}
pokemon_consumer()

// more modern syntax using promises
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}

makeRequest('https://pokeapi.co/api/v2/pokemon?limit=50')
  .then((data) => console.log('request with promise', data))
  .catch((error) => console.log(typeof error))

// the same can be done with async await
const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('this is the data with async', data)
  } catch (error) {
    console.error(error)
  }
}

getPokemonData('https://pokeapi.co/api/v2/pokemon?limit=100')
