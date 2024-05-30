import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Big from 'big.js';
import './Calculator.css';
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastInput, setLastInput] = useState('');
  const [lastResult, setLastResult] = useState('');
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      if (input === lastInput && result === lastResult) {
        setInput('');
        setResult('');
      } else {
        try {
          const evaluatedResult = evaluateExpression(input);
          setResult(evaluatedResult);
          setLastInput(input);
          setLastResult(evaluatedResult);
        } catch (error) {
          setResult('Error');
        }
      }
    } else if (buttonValue === 'C') {
      setInput('');
      setResult('');
      setLastInput('');
      setLastResult('');
    } else {
      setInput(input + buttonValue);
    }
  };
  const evaluateExpression = (expression) => {
    const operators = expression.split(/[\d.]+/).filter(Boolean);
    const operands = expression.split(/[\+\-\*\/]/).map(num => new Big(num));
    let result = operands[0];
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result = result.plus(operands[i + 1]);
          break;
        case '-':
          result = result.minus(operands[i + 1]);
          break;
        case '*':
          result = result.times(operands[i + 1]);
          break;
        case '/':
          result = result.div(operands[i + 1]);
          break;
        default:
          throw new Error('Invalid operator');
      }
    }
    return result.toString();
  };
  return (
    <div className="calculator">
      <Display input={input} result={result} />
            <ButtonPanel onClick={handleButtonClick} />
    </div>
  );
}
export default Calculator;