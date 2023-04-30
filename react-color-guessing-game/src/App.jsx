import { useState } from "react";
import "./App.css";
import { convertToHex } from "./create_hex_color";

function App() {
  const randomNum = () => Math.floor(Math.random() * 255);

  const generateRandomColors = () => {
    return [
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum()),
    ];
  };

  const [colors, setColors] = useState(generateRandomColors());
  const [labelColor, setLabelColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [resultMessage, setResultMessage] = useState("");

  const handleClick = (clickedColor) => {
    if (clickedColor === labelColor) {
      setResultMessage("Correct!");
    } else {
      setResultMessage("Try again");
    }
  };

  return (
    <div className="App">
      <h1>Guess the color!</h1>
      <div className="box-container">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="box"
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>

      <div>
        <label>{labelColor}</label>
        <br />
        <label>{resultMessage ? resultMessage : "guess the color!"}</label>
      </div>
    </div>
  );
}

export default App;
