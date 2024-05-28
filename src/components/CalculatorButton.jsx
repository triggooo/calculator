import React from 'react';
import './CalculatorButton.css';

function CalculatorButton({ value, onButtonClick }) {
  const handleButtonClick = () => {
    onButtonClick(value);
  };

  return (
    <button onClick={handleButtonClick} className="calculator-button">
      {value}
    </button>
  );
}

export default CalculatorButton;