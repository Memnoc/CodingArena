import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { runner } from './runner.js'
import { myMap } from './map-polyfill.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Testing cool JavaScript snippets</h1>
    <p class="read-the-docs">
      You should check the console!
    </p>
  </div>
`

runner();

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.myMap((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
