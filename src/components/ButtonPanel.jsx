import React from 'react';
import PropTypes from 'prop-types';
import CalculatorButton from './CalculatorButton';
import './ButtonPanel.css';

function ButtonPanel({ onClick }) {
  const buttonsData = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: 'C' },
    { id: 5, value: '4' },
    { id: 6, value: '5' },
    { id: 7, value: '6' },
    { id: 8, value: '+' },
    { id: 9, value: '7' },
    { id: 10, value: '8' },
    { id: 11, value: '9' },
    { id: 12, value: '-' },
    { id: 13, value: '*' },
    { id: 14, value: '0' },
    { id: 15, value: '/' },
    { id: 16, value: '=' },
  ];

  const handleClick = (buttonValue) => {
    onClick(buttonValue);
  };

  return (
    <div className="button-panel">
      {buttonsData.map((button) => (
        <CalculatorButton
          key={button.id}
          value={button.value}
          onButtonClick={handleClick}
        />
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;