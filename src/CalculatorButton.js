import React from 'react';
import './CalculatorButton.css';

const CalculatorButton = ({ value, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

export default CalculatorButton;
