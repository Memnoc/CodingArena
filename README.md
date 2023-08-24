# Repo for practicing my stack: vanilla JavaScript, React and Typescript.

The idea is to have the same app functionality and aesthetics reproduced in all three stacks.

The prompts for the apps are coming from various websites, including random google and Linkedin searches and clientside.dev.

## Patterns - at a glance

### Callbacks

- main function
- another function passed as argument
- url passed as argument
- use the url and the callback while invoking
- check for errors

```JavaScript
function makeRequest(url, callback) {
// make network request
 callback(null, response);
}

// usage
makeRequest('http://example.com/1', (error, data) => {
 if(error) {
   console.log(error);
   return;
}
```

### Promise Pattern

- main function
- return a new promise with resolve and reject
- do fetch url
- then -> get the response
- then -> get the data and **resolve** the promise
- catch -> get errors and **reject**
- invoke the main function
  - then -> get the data
  - catch errors again

```JavaScript
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
// usage
makeRequest('http://example.com')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Promise chaining

- promise pattern
- chain a function at the end(process the data)

```JavaScript
function makeRequest(url) {
  return new Promise((resolve, reject) => {
   fetch(url)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

function processData(data) {
// do something with the data
  return processedData;
}
```

### Promise Parallelism

Use `Promise.all` to run multiple promises at the same time

```JavaScript
Promise.all([
  makeRequest('http://example.com/1'),
  makeRequest('http://example.com/2')
]).then(([data1, data2]) => {
  console.log(data1, data2);
});

```

### Promise Sequential Execution

Run promises in sequence using Promise.resolve

```JavaScript
Promise.resolve()
  .then(() => makeRequest1())
  .then(() => makeRequest2())
  .then(() => makeRequest3())
  .then(() => {
  // all request completed
})
```

### Promise Memoization

Use a cache to store the result of promise function calls so you can make duplicate requests

```JavaScript
const cache = new Map();

function memoizedMakeRequest(url) {
  if(cache.has(url)) {
    return cache.get(url);
}

return new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cache.set(url, data);
      resolve(data);
    })
    .catch(error => reject(error));
  });
}

//usage

const button = document.querySelector('button');
button.addEvenetListener('click', () => {
  memoizedMakeRequest('http://example.com/')
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

// when the button is clicked, the memoizedMakeRequest function is invoked. If the request URL is already cached, the cached data is returned, otherwise a new request is made and cached for future request

```
