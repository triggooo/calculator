import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './app.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        setResult(eval(input)); // Используйте eval с осторожностью, лучше использовать библиотеку для вычислений
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