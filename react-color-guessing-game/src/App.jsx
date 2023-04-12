import { useState } from 'react'
import './App.css'
import { convertToHex } from './create_hex_color'

function App() {

  const randomNum = () => Math.floor(Math.random() * 255)

  const generateRandomColors = () => {
    return [
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum())
    ];
  };

  const [colors, setColors] = useState(generateRandomColors());

  const setRandomLabelColor = (colors) => {
    const randomLabelColor = colors[Math.floor(Math.random() * colors.length)];
    return randomLabelColor;
  }


  return (
    <div className="App">
      <h1>Guess the color!</h1>
      <div className="box-container">
        {colors.map((color) => {
          return <div style={{ backgroundColor: color }} className="box" onClick={() => console.log(color)}></div>
        }
        )}
      </div>

      <div>
        <label>
          {setRandomLabelColor(colors)}
        </label>
      </div>
    </div>
  )
}

export default App
