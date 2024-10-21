import React, { useState } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const percentage = () => {
    try {
      setInput((prev) => (eval(prev) / 100).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="buttons">
        <CalculatorButton value="C" onClick={clear} className="clear-button" />
        <CalculatorButton value="⌫" onClick={backspace} className="op-button" />
        <CalculatorButton value="%" onClick={percentage} className="op-button" />
        <CalculatorButton value="/" onClick={handleClick} className="op-button" />

        <CalculatorButton value="7" onClick={handleClick} />
        <CalculatorButton value="8" onClick={handleClick} />
        <CalculatorButton value="9" onClick={handleClick} />
        <CalculatorButton value="*" onClick={handleClick} className="op-button" />

        <CalculatorButton value="4" onClick={handleClick} />
        <CalculatorButton value="5" onClick={handleClick} />
        <CalculatorButton value="6" onClick={handleClick} />
        <CalculatorButton value="-" onClick={handleClick} className="op-button" />

        <CalculatorButton value="1" onClick={handleClick} />
        <CalculatorButton value="2" onClick={handleClick} />
        <CalculatorButton value="3" onClick={handleClick} />
        <CalculatorButton value="+" onClick={handleClick} className="op-button" />

        <CalculatorButton value="0" onClick={handleClick} />
        <CalculatorButton value="00" onClick={handleClick} />
        <CalculatorButton value="." onClick={handleClick} />
        <CalculatorButton value="=" onClick={calculate} className="op-button" />
      </div>
    </div>
  );
};

export default Calculator;
