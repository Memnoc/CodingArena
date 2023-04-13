
import React, { useState } from 'react';
import './App.css';
import { convertToHex } from './create_hex_colors';

const App: React.FC = () => {
  const randomNum = (): number => Math.floor(Math.random() * 255);

  const generateRandomColors = (): string[] => {
    return [
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum()),
      convertToHex(randomNum(), randomNum(), randomNum())
    ];
  };

  const [colors, setColors] = useState<string[]>(generateRandomColors());
  const [labelColor, setLabelColor] = useState<string>(colors[Math.floor(Math.random() * colors.length)]);
  const [resultMessage, setResultMessage] = useState<string>('');

  const handleClick = (clickedColor: string): void => {
    if (clickedColor === labelColor) {
      setResultMessage('Correct!');
    } else {
      setResultMessage('Try again');
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
        <label>{labelColor}</label><br />
        <label>{resultMessage ? resultMessage : 'guess the color!'}</label>
      </div>
    </div>
  );
}

export default App;

