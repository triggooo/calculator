import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonValue === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + buttonValue);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonPanel onClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;