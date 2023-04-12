import './style.css'
import { convertToHex } from './create_hex_color.js'



document.querySelector('#app').innerHTML = `
  <div>
   <h1>Guess the color!</h1>
   <div class="box-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="card">
    </div>
    </div>
  </div>
  <label id="counter" type="button"></label>
`
const randomNumber = () => Math.floor(Math.random() * 255);
const colorBoxes = document.querySelectorAll('.box');
const colorLabel = document.getElementById('counter');


const colors = [];

colorBoxes.forEach(box => {
  const randomColor = convertToHex(randomNumber(), randomNumber(), randomNumber());
  box.style.backgroundColor = randomColor;
  colors.push(randomColor);
});

const randomLabelColor = colors[Math.floor(Math.random() * colors.length)];
colorLabel.innerHTML = randomLabelColor;

function rgbToHex(rgbString) {
  const values = rgbString.slice(4, -1).split(',').map(Number);
  return `#${values.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

colorBoxes.forEach(box => {
  box.addEventListener('click', (e) => {
    const clickedColor = e.target.style.backgroundColor;
    const clickedColorHex = rgbToHex(clickedColor);
    if (clickedColorHex === randomLabelColor) {
      colorLabel.innerHTML = 'Correct!';
    } else {
      colorLabel.innerHTML = 'Try again!';
    }
  });
});
