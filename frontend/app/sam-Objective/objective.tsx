import React, { useState } from 'react';
import './objective.css'; // Assuming your CSS is saved as App.css

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [textInput, setTextInput] = useState<string>('');

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="image-container">
        <img src="https://via.placeholder.com/500" alt="Game" className="game-image" />
      </div>
      <div className="textbox-container">
        <input
          type="text"
          className="text-box"
          placeholder="Words about location here"
          value={textInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="slider-container">
        <input
          type="range"
          className="slider"
          min="0"
          max="1"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p>
          Visited: <span id="slider-value">{sliderValue === 1 ? 'True' : 'False'}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
